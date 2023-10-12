// this api is to check is a certain library has peer dependencies that are not compatible with the current node environment

import supabaseClient from '@/libs/supabase/supabaseClient'

import { WhichLibrary } from '@/services/client/GetCheckedLibraries'

import {
  getPeerDependency,
  getPeerDepsOfSelectedFw,
  getPeerDepsOfSelectedCss,
  checkDeps,
} from './helpers'

export type GetCheckedLibrariesType = { data: { name: string }[] }

export const getCheckedLibraries = async (
  which: WhichLibrary,
  board_detail_id: string,
  isTeamBoard: boolean,
): Promise<GetCheckedLibrariesType> => {
  if (which == 'css_library') {
    let compatibleCssLibs: Array<{ name: string }> = []

    // get peerDependency of all css
    // get css from database
    try {
      const { data: css_libraries, error } = await supabaseClient
        .from('css_libraries')
        .select('name')

      if (css_libraries === null) {
        return { data: compatibleCssLibs }
      } else {
        // frameworkのpeerDependenciesを取得する
        const { framework, peerDependenciesOfFw } = await getPeerDepsOfSelectedFw(
          isTeamBoard,
          board_detail_id,
        )
        console.log('**********************')
        console.log(peerDependenciesOfFw)
        console.log('**********************')
        const checkArray = [peerDependenciesOfFw]

        const cssLibrariesArr = css_libraries.map((library) => library.name)
        const peerDeps1 = getPeerDependency(cssLibrariesArr) // css libs with peerDeps

        for (const peerDep of peerDeps1) {
          // ライブラリ名を取得
          const library = Object.keys(peerDep || {})[0]
          // @ts-ignore
          const peerDeps = peerDep[library]

          compatibleCssLibs = checkDeps(
            library,
            peerDeps,
            checkArray,
            0,
            compatibleCssLibs,
            framework,
          )
        }

        return { data: compatibleCssLibs }
      }
    } catch (error) {
      throw error
    }
  } else if (which == 'ui_library') {
    let compatibleUiLibs: Array<{ name: string }> = []

    // get peerDependency of all css
    // get css from database
    try {
      const { data: ui_libraries, error } = await supabaseClient
        .from('ui_libraries')
        .select('name')

      if (ui_libraries === null) {
        return { data: compatibleUiLibs }
      } else {
        const { framework, peerDependenciesOfFw } = await getPeerDepsOfSelectedFw(
          isTeamBoard,
          board_detail_id,
        )
        console.log('**********************')
        console.log('peerDependenciesOfFw: ', peerDependenciesOfFw)
        console.log('**********************')

        const { css_library, peerDependenciesOfCss } = await getPeerDepsOfSelectedCss(
          isTeamBoard,
          board_detail_id,
        )
        console.log('**********************')
        console.log('peerDependenciesOfCss: ', peerDependenciesOfCss)
        console.log('**********************')
        const checkArray = [peerDependenciesOfFw, peerDependenciesOfCss]

        const uiLibrariesArr = ui_libraries.map((library) => library.name)
        const peerDeps1 = getPeerDependency(uiLibrariesArr) // ui libs with peerDeps

        for (const peerDep of peerDeps1) {
          // ライブラリ名を取得
          const library = Object.keys(peerDep || {})[0]
          // @ts-ignore
          const peerDeps = peerDep[library]

          compatibleUiLibs = checkDeps(
            library,
            peerDeps,
            checkArray,
            0,
            compatibleUiLibs,
            framework,
            css_library,
          )
        }

        return { data: compatibleUiLibs }
      }
    } catch (error) {
      throw error
    }
  } else {
    return { data: [] }
  }
}

export type ReturnGetCheckedLibrariesType = Awaited<
  ReturnType<typeof getCheckedLibraries>
>
