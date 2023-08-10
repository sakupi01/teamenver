import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: './src/gql/github.schema.graphql',
  documents: ['./src/gql/*.gql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/codegen/': {
      preset: 'client'
    }
  }
}
 
export default config