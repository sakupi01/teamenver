import { gqlGhClient } from "@/libs/graphql/client"

import { GetCssFrameworksDocument } from "@/gql/codegen/github/graphql"

import { handleServerError } from ".."

export const getTopics = async({query}: {query: string | null}) => {
    try {
        if(query === null){
            throw Error()
        }
        const {topic} = await gqlGhClient.request(GetCssFrameworksDocument, {
            name: query
        })
        return {topic}
    }catch(error){
        return handleServerError(error);
    }
}

export type GetTopicsType = Awaited<ReturnType<typeof getTopics>>