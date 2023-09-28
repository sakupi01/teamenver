import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    './src/gql/codegen/hasura/': {
      schema: [
        {
          [process.env.HASURA_GRAPHQL_API_ENDPOINT || '']: {
            headers: {
              'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_API_ADMIN_SECRET || '',
            },
          },
        },
      ],
      documents: ['./src/gql/hasura/*.gql'],
      preset: 'client',
    },
    './src/gql/codegen/github/': {
      schema: './src/gql/github/github.schema.graphql',
      documents: ['./src/gql/github/*.gql'],
      preset: 'client',
    },
  },
  ignoreNoDocuments: true, // for better experience with the watcher
}

export default config
