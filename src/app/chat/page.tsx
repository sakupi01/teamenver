import { getSession } from '@auth0/nextjs-auth0'

import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { GetLastMessagesDocument } from '@/gql/codegen/hasura/graphql'
import { css } from 'styled-system/css'

export default async function Chat() {
  // get the login user info
  const session = await getSession()
  const userName = session?.user.nickname
  const email = session?.user.email

  const messages = gqlHasuraClient.request(GetLastMessagesDocument, {
    last_received_id: 'lastReceivedId',
    last_received_ts: 'now()',
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
        <p>{userName}&apos;s chat room</p>
        <a href='/api/auth/logout'>Logout</a>
      </div>
      <div>
        <p>Messages</p>
      </div>
    </>
  )
}
