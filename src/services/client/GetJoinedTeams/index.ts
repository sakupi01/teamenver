import * as GetMessageApi from '@/api/get/message/route'

import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { GetJoinedTeamsDocument } from '@/gql/codegen/hasura/graphql'

import { defaultHeaders, handleResolve } from '..'

type GetJoinedTeamProps = {
  user_id: string
}
export const getJoinedTeams = async ({
  user_id,
}: GetJoinedTeamProps): Promise<GetMessageApi.GetType> => {
  // gql使ってるのでswrにそのままぶち込めるfetcherがある
  // のでgqlクライアントとしてそのままここで処理を書く
  // restやgqlがなくて、bffでapi作らないといけない場合だけclient<->bff api <-> serverでいい
  gqlHasuraClient.request(GetJoinedTeamsDocument, {
    id: '',
  })
  return fetch(`${path}?board_id=${board_id}&from_ts=${from_ts_for_param}`, {
    headers: defaultHeaders,
  }).then(handleResolve)
}
