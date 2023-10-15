// this api is to check is a certain library has peer dependencies that are not compatible with the current node environment

import supabaseClient from '@/libs/supabase/supabaseClient'

import { WhichLibrary } from '@/services/client/GetCheckedLibraries'

import { getPeerDepsOfSelectedFw, getPeerDepsOfSelectedCss, checkDeps } from './helpers'

export type GetCheckedLibrariesType = { data: { name: string }[] }

export const getCheckedLibraries = async (
  which: WhichLibrary,
  board_id: string,
  isTeamBoard: boolean,
): Promise<GetCheckedLibrariesType> => {
  if (which == 'css_library') {
    let compatibleCssLibs: Array<{ name: string }> = []

    try {
      const { data: css_libraries, error } = await supabaseClient
        .from('css_libraries')
        .select('name, peerDependencies')

      if (css_libraries === null) {
        return { data: compatibleCssLibs }
      } else {
        // frameworkのpeerDependencyを取得する
        const { framework, peerDependenciesOfFw } = await getPeerDepsOfSelectedFw(
          isTeamBoard,
          board_id,
        )
        console.log('**********************')
        console.log(peerDependenciesOfFw)
        console.log('**********************')
        const checkArray = [peerDependenciesOfFw]

        for (const css_library of css_libraries) {
          console.log('**********************')
          console.log('css_library: ', css_library)
          console.log('**********************')
          compatibleCssLibs = checkDeps(
            css_library.name,
            css_library.peerDependencies || {},
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
        .select('name, peerDependencies')

      if (ui_libraries === null) {
        return { data: compatibleUiLibs }
      } else {
        const { framework, peerDependenciesOfFw } = await getPeerDepsOfSelectedFw(
          isTeamBoard,
          board_id,
        )
        console.log('**********************')
        console.log('peerDependenciesOfFw: ', peerDependenciesOfFw)
        console.log('**********************')

        const { css_library, peerDependenciesOfCss } = await getPeerDepsOfSelectedCss(
          isTeamBoard,
          board_id,
        )
        console.log('**********************')
        console.log('peerDependenciesOfCss: ', peerDependenciesOfCss)
        console.log('**********************')
        const checkArray = [peerDependenciesOfFw, peerDependenciesOfCss]

        for (const ui_library of ui_libraries) {
          console.log('**********************')
          console.log('ui_library: ', ui_library)
          console.log('**********************')

          compatibleUiLibs = checkDeps(
            ui_library.name,
            ui_library.peerDependencies || {},
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
