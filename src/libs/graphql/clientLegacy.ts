import { GraphQLClient } from 'graphql-request'

export { gql } from 'graphql-request'

// graphql-requestはhttp post requestのみしかできない
export const gqlGhClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GITHUB_GRAPHQL_API_ENDPOINT as string,
  {
    headers: {
      Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_GRAPHQL_API_ACCESSTOKEN}`,
    },
  },
)

export const gqlHasuraClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_HASURA_GRAPHQL_API_ENDPOINT as string,
  {
    headers: {
      'Content-Type': 'application/json',
    },
  },
)
