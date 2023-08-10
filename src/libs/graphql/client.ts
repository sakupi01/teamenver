import { GraphQLClient } from 'graphql-request'

export { gql } from 'graphql-request'

export const gqlGhClient = new GraphQLClient(
  process.env.GITHUB_GRAPHQL_API_ENDPOINT as string,
  {
    headers: {
      'Authorization': `bearer ${process.env.GITHUB_GRAPHQL_API_ACCESSTOKEN}`
    }
  }
)

export const gqlHasuraClient = new GraphQLClient(
  process.env.HASURA_GRAPHQL_API_ENDPOINT as string,
  {
    headers: {
      'Authorization': `bearer ${process.env.HASURA_GRAPHQL_API_ADMIN_SECRET}`
    }
  }
)