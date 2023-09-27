import { execSync } from 'child_process'

import semver from 'semver'

import supabaseClient from '@/libs/supabase/supabaseClient'

import { Json } from '@/types/supabase'

import { getBoardDetail } from '../../GetBoardDetail'

export const getPeerDependenciesInfo = (library: string) => {
  const command = `npm info ${library} peerDependencies --json`

  try {
    const stdout = execSync(command, { encoding: 'utf8', stdio: 'pipe' })

    // if there're peer dependencies, return error
    if (stdout) {
      const peerDeps = JSON.parse(stdout)
      console.log(`Peer Dependencies for ${library}:`)
      for (const [dep, version] of Object.entries(peerDeps)) {
        console.log(`${dep}: ${version}`)
      }
      return { [library]: peerDeps }
    }
    return { [library]: {} }
  } catch (error: unknown) {
    console.error(`Error: ${error}`)
    return {}
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
  peerDepsOfLibraries.shift()
  console.log('**************************')
  console.log('peerDepsOfLibraries: ', peerDepsOfLibraries)
  console.log('**************************')
  return peerDepsOfLibraries
}

export const getPeerDepsOfSelectedFw = async (): Promise<{
  framework: string
  peerDependenciesOfFw: {
    peerDependencies: Json
  }
}> => {
  const { framework } = (await getBoardDetail()).board_details[0]
  if (framework === null || framework === undefined) {
    throw new Error('framework is null or undefined')
  }
  const { data: peerDependenciesOfFw, error } = await supabaseClient
    .from('frameworks')
    .select('peerDependencies')
    .eq('name', framework)
    .limit(1)
    .single()
  if (peerDependenciesOfFw === null) {
    throw new Error('peerDependenciesOfFw is null') // もしくは適切なエラーハンドリングを行う
  }
  return { framework, peerDependenciesOfFw }
}

export const getPeerDepsOfSelectedCss = async (): Promise<{
  css_library: string
  peerDependenciesOfCss: {
    peerDependencies: Json
  }
}> => {
  const { css_library } = (await getBoardDetail()).board_details[0]
  if (css_library === null || css_library === undefined) {
    throw new Error('framework is null or undefined')
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
    Object.keys(pkgs).some((pkg) => {
      // それぞれのui libraryのpeerDepsが上位のpeerDepsにあるかどうかを確認する
      // @ts-ignore
      const checkArrPeerDeps = checkArr[index].peerDependencies

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
      } else {
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
      }
    })
    isSatisfied && compatibleLibs.push({ name: library })
    return compatibleLibs
  }
}