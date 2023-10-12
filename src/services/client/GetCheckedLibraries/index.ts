import * as ApiCheck from '@/api/get/libraries/route'

import { handleResolve, host } from '..'

export const path = host('/check')

export type WhichLibrary = 'css_library' | 'ui_library'
export const getCheckedLibraries = async (
  which: WhichLibrary,
  board_detail_id: string,
  isTeamBoard: boolean,
): Promise<ApiCheck.GetType> => {
  return fetch(
    `${path}?which=${which}&board_detail_id=${board_detail_id}&isTeamBoard=${isTeamBoard}`,
  ).then(handleResolve)
}
