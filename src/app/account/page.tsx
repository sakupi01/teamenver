import { getSession } from '@auth0/nextjs-auth0'
import { redirect } from 'next/navigation'

import AccountForm from './accountForm'

export default async function Account() {
  const user = (await getSession())?.user

  if (!user) {
    redirect('/api/auth/login')
  }

  return (
    <>
      <AccountForm
        id={user.id}
        email={user.email}
        name={user.nickname}
        imageUrl={user.image_url}
      />
    </>
  )
}
