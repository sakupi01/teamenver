'use client'
import { createClient } from 'graphql-ws'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

import { deleteCookies } from '@/libs/actions/deleteCookies'
import { HttpError } from '@/libs/error/http'

import { GetLastMessagesQuery } from '@/gql/codegen/hasura/graphql'
import { getMessage } from '@/services/client/GetMessage'
import { insertMessage } from '@/services/client/InsertMessage'

type ChatPageProps = {
  current_board_id: string
  accessToken: string
}

export const ChatPage = ({ current_board_id, accessToken }: ChatPageProps) => {
  const wsClient = createClient({
    url: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_API_ENDPOINT
      ? process.env.NEXT_PUBLIC_HASURA_GRAPHQL_API_ENDPOINT.replace('https', 'wss')
      : '',
    connectionParams: {
      headers: {
        authorization: `Bearer ${accessToken}`,
        'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET,
      },
    },
  })

  const route = useRouter()

  const [messages, setMessages] = useState<GetLastMessagesQuery['comments']>([])
  async function instantFn(board_id: string) {
    try {
      const res = await getMessage({
        board_id: board_id,
        from_ts: '2018-08-21T19:58:46.987552+00:00', // 十分な過去の日付
      })
      setMessages(res.comments)
    } catch (error) {
      if (error instanceof HttpError && error.status == 401) {
        deleteCookies()
        route.push('/api/auth/logout')
      }
    }
  }
  useEffect(() => {
    instantFn(current_board_id)
    const unsubscribe = wsClient.subscribe(
      {
        query: `subscription SubscribeMessage($board_id: uuid) {
          comments(limit: 1, order_by: { updated_at: desc }, where: {board_id: {_eq: $board_id}}) {
            id
            content
            user {
              id
              email
            }
            board_id
            updated_at
          }
        }
        `,
        variables: {
          board_id: current_board_id,
        },
      },
      {
        next: async ({ data }: { data: GetLastMessagesQuery }) => {
          if (messages.length > 0) {
            try {
              const res = await getMessage({
                board_id: current_board_id,
                from_ts: messages[messages.length - 1].updated_at,
              })

              setMessages((prev) => prev.concat(res.comments))
            } catch (error) {
              if (error instanceof HttpError && error.status == 401) {
                deleteCookies()
                route.push('/api/auth/logout')
              }
            }
          }
        },

        error: (error) => {
          console.log(error)
        },
        complete: () => {
          console.log('completed')
        },
      },
    )
    return () => {
      unsubscribe()
    }
  }, [])

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const content = e.currentTarget.content.value

    try {
      await insertMessage(content)
    } catch (error) {
      if (error instanceof HttpError && error.status == 401) {
        deleteCookies()
        route.push('/api/auth/logout')
      }
    }
  }

  const handleLogout = () => {
    deleteCookies()
    route.push('/api/auth/logout')
  }

  return (
    <>
      <div className='flex justify-between items-center p-5 w-full h-5vh bg-white border-b-2 border-black sticky top-0 md:h-7vh'>
        <h1>Chat Room</h1>
        <Button variant='outline' onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className='flex justify-around'>
        <div>
          <p>Conversation</p>
          {messages.map((message) => (
            <p key={message.id}>{message.content}</p>
          ))}
        </div>
        <div>
          <p>Send Message</p>
          <form onSubmit={handleSendMessage} method='POST'>
            <input type='text' name='content' placeholder='Input a message' />
            <Button type='submit'>Send</Button>
          </form>
        </div>
      </div>
    </>
  )
}
