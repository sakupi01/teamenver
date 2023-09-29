import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'

// const httpLink = (accessToken: string) => {
//   return new HttpLink({
//     uri: 'https://teamenver.hasura.app/v1/graphql',
//     headers: {
//       authorization: `Bearer ${accessToken}`,
//     },
//   })
// }
const httpLink = new HttpLink({
  uri: 'https://teamenver.hasura.app/v1/graphql',
  headers: {
    authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlQydV9sT0dGOXNnRHVrcVZIbmxfMyJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDY1MTJlMzkzNzNhYWUzMTI0NmQ1M2RiOSJ9LCJpc3MiOiJodHRwczovL2Rldi1tcHJybTY0ZWpmNmkxdWMxLmpwLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2NTEyZTM5MzczYWFlMzEyNDZkNTNkYjkiLCJhdWQiOlsiaHR0cHM6Ly9zYWt1LmNvbS90b2tlbiIsImh0dHBzOi8vZGV2LW1wcnJtNjRlamY2aTF1YzEuanAuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY5NTg2NTY3NiwiZXhwIjoxNjk1OTUyMDc2LCJhenAiOiJIekNsbFhUekdRS251UWxudXNtcTk3bExJbXJ4dWNlRSIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.UGrXWpX_cGhsyAl481eUHCyjfoozGajRdPQ3wuEnLm1LnROpLIEPMXEUC0kCHDt1S_g9OTWX71VNZk0K-CRFqmx5KNODvX5NBWhgGjYX5S1d0lr2jhRe42XAnxXsAz4GAqytndcY6khYj5QIvllmRebc41zLMHamNcpiFTb7NUFo5O2o9b9d27vqIclVMHYbrspb_Xuz_MK6kaN45I4vPiTFepkxjjJX6CjXAt2PZ2pprFm5wCGNjf4ckCqp-5jjxS5x-6M7cw0aoG4bbMX5NEZl3UlvY9Sm6be63-Sp8YMozBnTbwNIHotV_5t_ESdO0IQBQXYDOo2OROnQhShSHw',
  },
})

const wsLink =
  typeof window !== 'undefined'
    ? new GraphQLWsLink(
        createClient({
          url: 'wss://teamenver.hasura.app/v1/graphql',
        }),
      )
    : null

const link =
  typeof window !== 'undefined' && wsLink != null
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query)
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          )
        },
        wsLink,
        httpLink,
      )
    : httpLink

export const createGqlHasuraClient = (authToken: string) => {
  return new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
  })
}

// export const gqlHasuraClient = registerApolloClient(() => {
//   return new ApolloClient({
//     cache: new InMemoryCache(),
//     link: new HttpLink({
//       // this needs to be an absolute url, as relative urls cannot be used in SSR
//       uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_API_ENDPOINT,
//       // you can disable result caching here if you want to
//       // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
//       // fetchOptions: { cache: "no-store" },
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }),
//   })
// }).getClient()

// export const gqlGhClient = registerApolloClient(() => {
//   return new ApolloClient({
//     cache: new InMemoryCache(),
//     link: new HttpLink({
//       // this needs to be an absolute url, as relative urls cannot be used in SSR
//       uri: process.env.NEXT_PUBLIC_GITHUB_GRAPHQL_API_ENDPOINT,
//       // you can disable result caching here if you want to
//       // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
//       // fetchOptions: { cache: "no-store" },
//       headers: {
//         Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_GRAPHQL_API_ACCESSTOKEN}`,
//       },
//     }),
//   })
// }).getClient()
