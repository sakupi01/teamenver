import * as ApiGetTopics from '@/api/get/topics/route'

import { defaultHeaders, handleResolve, host } from '..'

export const path = host('/get/topics')
export const getTopics = async(query: string): Promise<ApiGetTopics.GetType> => {
    return fetch(`${path}?query=${query}`, {
        headers: defaultHeaders
    }).then(handleResolve)
}