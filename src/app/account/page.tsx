import { redirect } from 'next/navigation'

import { getUserInfo } from '@/services/server/GetUserInfo'

import AccountForm from './accountForm'

export default async function Account() {
  const { users_by_pk } = await getUserInfo()

  if (!users_by_pk) {
    redirect('/api/auth/login')
  }
  console.log(users_by_pk)

  return (
    <>
      <AccountForm
        name={users_by_pk.name}
        email={users_by_pk.email}
        github_url={users_by_pk.github_url || 'https://github.com/404.html'}
        twitter_url={users_by_pk.twitter_url || 'https://x.com/404.html'}
        imageUrl={users_by_pk.image_url || 'avatar.svg'}
      />
    </>
  )
}
