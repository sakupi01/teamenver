'use server'
import { getSession } from '@auth0/nextjs-auth0'

import { UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { UpdateUserInfoDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'
export type updateUserInfoInputParams = {
  name: string
  email: string
  github_url: string
  twitter_url: string
  image_url: string
}

export const updateUserInfo = async ({
  name,
  email,
  github_url,
  twitter_url,
  image_url,
}: updateUserInfoInputParams) => {
  const session = await getSession()
  const access_token = session?.accessToken

  try {
    if (access_token === undefined) {
      throw new UnAuthorizedError()
    }

    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)
    console.log('bodybodybodybodybodybodybody')
    console.log(name, email, github_url, twitter_url, image_url)
    console.log('bodybodybodybodybodybodybody')
    const { update_users_by_pk } = await gqlHasuraClient.request(UpdateUserInfoDocument, {
      id: session?.user.sub,
      name: name,
      email: email,
      github_url: github_url,
      twitter_url: twitter_url,
      image_url: image_url,
    })

    return { update_users_by_pk }
  } catch (error) {
    return handleServerError(error)
  }
}

export type ReturnUpdateUserInfoType = Awaited<ReturnType<typeof updateUserInfo>>
