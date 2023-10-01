'use client'
import { createClient } from 'graphql-ws'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Button } from '@/components/atoms/Button/Button'

import { deleteCookies } from '@/libs/actions/deleteCookies'
import { HttpError } from '@/libs/error/http'

import { GetLastMessagesQuery } from '@/gql/codegen/hasura/graphql'
import { getMessage } from '@/services/client/GetMessage'
import { insertMessage } from '@/services/client/InsertMessage'
import { css } from 'styled-system/css'

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
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '5%',
          width: '100vw',
          height: '5vh',
          backgroundColor: 'white',
          borderBottom: '1px solid black',
          position: 'sticky',
          top: '0',
          md: {
            height: '7vh',
          },
        })}
      >
        <h1>Chat Room</h1>
        <Button label='Logout' backgroundColor='red' onClick={handleLogout} />
      </div>
      <div className={css({ display: 'flex', justifyContent: 'space-around' })}>
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
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </>
  )
}
