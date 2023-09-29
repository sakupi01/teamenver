'use client'
import { gql, useSubscription } from '@apollo/client'
import { createClient } from 'graphql-ws'
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react'

import { insertMessage } from '@/services/client/InsertMessage'
import { css } from 'styled-system/css'

type ChatProps = {
  id: string
  name: string
  email: string
}
const wsClient = createClient({
  url: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_API_ENDPOINT
    ? process.env.NEXT_PUBLIC_HASURA_GRAPHQL_API_ENDPOINT.replace('https', 'wss')
    : '',
})

export default function Chat({ id, name, email }: ChatProps) {
  // const [messages, setMessages] = useState<Array<string>>([])

  // useEffect(() => {
  //   const unsubscribe = wsClient.subscribe(
  //     {
  //       query: `subscription SubscribeMessage {
  //         comments(limit: 1, order_by: { updated_at: desc }) {
  //           id
  //           content
  //           user {
  //             id
  //             email
  //           }
  //           board_id
  //           updated_at
  //         }
  //       }
  //       `,
  //     },
  //     {
  //       next: ({ data }) => {
  //         console.log(data)
  //         setMessages((prev) => prev.concat(data?.comments[0].content))
  //       },
  //       error: (error) => {
  //         console.log(error)
  //       },
  //       complete: () => {
  //         console.log('completed')
  //       },
  //     },
  //   )
  //   return () => {
  //     unsubscribe()
  //   }
  // }, [])
  let messages: ReactNode[] = []
  const { loading, error, data } = useSubscription(gql`
    subscription SubscribeMessage {
      comments(limit: 1, order_by: { updated_at: desc }) {
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
  `)
  if (loading) {
    return <span>Loading...</span>
  }
  if (error) {
    console.error(error)
    return <span>Error!</span>
  }
  if (data) {
    messages = data.comments.map(
      (
        comment:
          | string
          | number
          | boolean
          | ReactElement<any, string | JSXElementConstructor<any>>
          | Iterable<ReactNode>
          | ReactPortal
          | PromiseLikeOfReactNode
          | null
          | undefined,
        key: Key | null | undefined,
      ) => <p key={key}>{comment}</p>,
    )
  }

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const content = e.currentTarget.content.value

    const res = await insertMessage(content)
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
        <a href='/api/auth/logout'>Logout</a>
      </div>
      <div className={css({ display: 'flex', justifyContent: 'space-around' })}>
        <div>
          <p>Conversation</p>
          {/* {messages.map((message, key) => (
            <p key={key}>{message}</p>
          ))} */}
          {messages}
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
