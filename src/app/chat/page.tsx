import { useSuspenseQuery } from '@apollo/client'

import { GetLastMessagesDocument } from '@/gql/codegen/hasura/graphql'
import { css } from 'styled-system/css'

type ChatProps = {
  id: string
  name: string
  email: string
}
export default function Chat({ id, name, email }: ChatProps) {
  // get the login user info
  const { data } = useSuspenseQuery(GetLastMessagesDocument, {
    variables: {
      last_received_id: 0,
      last_received_ts: '',
    },
  })

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
        {data.comments.map((comment, key) => (
          <p key={key}>{comment.content}</p>
        ))}
        <a href='/api/auth/logout'>Logout</a>
      </div>
      <div>
        <p>Messages</p>
      </div>
    </>
  )
}
