'use client'
// import { createClient } from 'graphql-ws'
import { createClient } from 'graphql-ws'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

import { deleteCookies } from '@/libs/actions/deleteCookies'
import { HttpError } from '@/libs/error/http'

import { GetLastMessagesQuery } from '@/gql/codegen/hasura/graphql'
import { getMessage } from '@/services/client/GetMessage'

import { InputFormCard } from './InputFormCard'
import { MessageCard } from './MessageCard'

type ChatPageProps = {
  current_board_id: string
  accessToken: string
}

export const ChatPage = ({ current_board_id, accessToken }: ChatPageProps) => {
  console.log('**********')
  console.log(current_board_id)
  console.log('**********')

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

  const route = useRouter()
  const [messages, setMessages] = useState<GetLastMessagesQuery['comments']>([])
  useEffect(() => {
    // [messages]: 何度もconnectionが張られ、completedが量産される
    // []: 一回しかコネクションが張られず、リロードしなければならない
    instantFn(current_board_id)
  }, [])
  wsClient.subscribe(
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
        // next valueが届く→その値を元に新しいメッセージを取得する→取得したメッセージをmessagesに追加する→再レンダリング→再びnext valueが届く→...
        // →永遠に同じ値がレンダリングされる
        if (messages.length > 0) {
          try {
            const res = await getMessage({
              board_id: current_board_id,
              from_ts: messages[messages.length - 1].updated_at,
            })
            // コメントが登録されていた場合のみ、messagesを更新してレンダリングを許可
            if (res.comments.length) {
              console.log(res.comments.length)
              const newMessages = [...messages, ...res.comments]
              setMessages(() => {
                return newMessages
              })
            }
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

  return (
    <>
      <div className='mt-6 space-y-1'>
        <h2 className='text-2xl font-semibold tracking-tight'>Conversation</h2>
        <p className='text-sm text-muted-foreground'>Leave the comment on the board.</p>
      </div>
      <Separator className='my-4' />
      <div className='relative'>
        <ScrollArea>
          <div className='flex space-x-4 pb-4'>
            {messages.map((message) => (
              <MessageCard key={message.id} message={message} />
            ))}
            <InputFormCard current_board_id={current_board_id} />
          </div>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
      </div>
    </>
  )
}
