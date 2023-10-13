import { execSync } from 'child_process'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import semver from 'semver'

import { BadRequestError, InternalServerError } from '@/libs/error/http'
import supabaseClient from '@/libs/supabase/supabaseClient'

import { Json } from '@/types/supabase'

import { getBoardDetail } from '../../GetBoardDetail'
import { getTeamBoardDetail } from '../../GetTeamBoardDetail'

export const getPeerDependenciesInfo = (library: string) => {
  if (library !== 'CSS Modules') {
    const command = `npm info ${library} peerDependencies --json`

    try {
      const stdout = execSync(command, { encoding: 'utf8', stdio: 'pipe' })

      // if there're peer dependencies, return error
      if (stdout) {
        const peerDeps = JSON.parse(stdout)
        return { [library]: peerDeps }
      }
      return { [library]: {} }
    } catch (error: unknown) {
      console.error(`Error: ${error}`)
      return {}
    }
  } else {
    return { [library]: {} }
  }
}
export const getPeerDependency = (libraries: string | Array<string>): Array<Json> => {
  // array in string form

  let arrLibraries: Array<string>

  if (typeof libraries === 'string') {
    arrLibraries = libraries.replace(/[\[\]']+/g, '').split(', ')
  } else {
    arrLibraries = libraries
  }

  if (arrLibraries.length === 0) {
    return [] as Array<Json>
  }

  const peerDepsOfLibraries: Array<Json> = []
  arrLibraries.forEach((library) => {
    const peerDeps = getPeerDependenciesInfo(library)
    peerDepsOfLibraries.push(peerDeps)
  })
  // peerDepsOfLibraries.shift()
  console.log('**************************')
  console.log('peerDepsOfLibraries: ', peerDepsOfLibraries)
  console.log('**************************')
  return peerDepsOfLibraries
}

export const getPeerDepsOfSelectedFw = async (
  isTeamBoard: boolean,
  board_id: string,
): Promise<{
  framework: string
  peerDependenciesOfFw: {
    peerDependencies: Json
  }
}> => {
  try {
    const team_id = cookies().get('current_team_id')?.value
    if (!team_id) {
      redirect('/api/auth/login')
    }
    const { framework } = isTeamBoard
      ? (await getTeamBoardDetail(team_id)).teamBoardDetailWithoutTypename
      : (await getBoardDetail(board_id)).boardDetailWithoutTypename
    console.log('**************************')
    console.log('Your framework: ', framework)
    console.log('**************************')
    if (framework === null || framework === undefined) {
      throw new BadRequestError()
    }

    const { data: peerDependenciesOfFw, error } = await supabaseClient
      .from('frameworks')
      .select('peerDependencies')
      .eq('name', framework)
      .limit(1)
      .single()
    if (peerDependenciesOfFw === null) {
      throw new InternalServerError()
    }
    return { framework, peerDependenciesOfFw }
  } catch (error) {
    throw error
  }
}

export const getPeerDepsOfSelectedCss = async (
  isTeamBoard: boolean,
  board_id: string,
): Promise<{
  css_library: string
  peerDependenciesOfCss: {
    peerDependencies: Json
  }
}> => {
  const team_id = cookies().get('current_team_id')?.value
  if (!team_id) {
    redirect('/api/auth/login')
  }
  const { css_library } = isTeamBoard
    ? (await getTeamBoardDetail(team_id)).teamBoardDetailWithoutTypename
    : (await getBoardDetail(board_id)).boardDetailWithoutTypename

  if (css_library === null || css_library === undefined) {
    throw new BadRequestError()
  }
  const peerDependenciesOfCss = { peerDependencies: getPeerDependency([css_library]) } // css libs with peerDeps

  return { css_library, peerDependenciesOfCss }
}

export const checkDeps = (
  library: string,
  pkgs: JSON,
  checkArr: Array<{ peerDependencies: Json }>,
  index: number,
  compatibleLibs: Array<{ name: string }>,
  framework: string,
  css_library?: string,
): Array<{ name: string }> => {
  if (index >= checkArr.length) return compatibleLibs // break if the index is out of checkArr range
  if (Object.keys(pkgs).length <= 0) {
    // no peerDeps in the library
    compatibleLibs.push({ name: library })
    return compatibleLibs
  } else {
    // ui libraryのpeerDepsがある場合
    let isSatisfied = false
    const checkArrPeerDeps = checkArr[index].peerDependencies
    Object.keys(pkgs).some((pkg) => {
      // それぞれのui libraryのpeerDepsが上位のpeerDepsにあるかどうかを確認する

      if (checkArrPeerDeps !== null) {
        // @ts-ignore
        if (pkg in checkArrPeerDeps) {
          // @ts-ignore
          if (checkArrPeerDeps[pkg] && pkgs[pkg]) {
            isSatisfied = semver.satisfies(
              // @ts-ignore
              checkArrPeerDeps[pkg].replace(/^\^/, ''),
              // @ts-ignore
              pkgs[pkg],
            )
          }
          if (!isSatisfied) {
            return true // break if the version is not satisfied
          }
        }
      }
      // 上位のpeerDepsの名前自身と互換性があるかどうかを確認する
      if (framework in pkgs) {
        console.log(
          // @ts-ignore
          `You need to adjust the version of ${framework} to ${pkgs[framework]} in order to use this css library`,
        )
        isSatisfied = true // バージョンの喚起のみしてtrue
      } else if (css_library && css_library in pkgs) {
        console.log(
          // @ts-ignore
          `You need to adjust the version of ${css_library} to ${pkgs[framework]} in order to use this css library`,
        )
        isSatisfied = true // バージョンの喚起のみしてtrue
      } else {
        checkDeps(
          library,
          pkgs,
          checkArr,
          index + 1,
          compatibleLibs,
          framework,
          css_library,
        ) // go to the next checkArr layer
      }
    })
    isSatisfied && compatibleLibs.push({ name: library })
    return compatibleLibs
  }
}
