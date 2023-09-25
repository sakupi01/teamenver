// this api is to check is a certain library has peer dependencies that are not compatible with the current node environment

import { execSync } from 'child_process'

import semver from 'semver'

import supabaseClient from '@/libs/supabase/supabaseClient'

import { WhichLibrary } from '@/services/client/GetCheckedLibraries'

type PeerDependency = {
  [packageName: string]: string
}
function getPeerDependenciesInfo(library: string) {
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

const getPeerDependency = (libraries: string | Array<string>): Array<Object> => {
  // array in string form

  let arrLibraries: Array<string>

  if (typeof libraries === 'string') {
    arrLibraries = libraries.replace(/[\[\]']+/g, '').split(', ')
  } else {
    arrLibraries = libraries
  }

  if (arrLibraries.length === 0) {
    return [] as Array<Object>
  }

  const peerDepsOfLibraries: Array<Object> = []
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

export const getCheckedLibraries = async (which: WhichLibrary) => {
  if (which === 'css-framework') {
    const compatibleCssLibs: string[] = []

    // get peerDependency of all css
    // get css from database
    try {
      const { data: css_libraries, error } = await supabaseClient
        .from('css_libraries')
        .select('name')

      if (css_libraries === null) {
        return compatibleCssLibs
      } else {
        const cssLibrariesArr = css_libraries.map((library) => library.name)
        const peerDeps1 = getPeerDependency(cssLibrariesArr) // css libs with peerDeps

        for (const peerDep of peerDeps1) {
          // ライブラリ名を取得
          const library = Object.keys(peerDep)[0]
          // @ts-ignore
          const cssPeerDeps = peerDep[library]

          if (Object.keys(cssPeerDeps).length > 0) {
            // css peerDepsがある場合: frameworkのpeerDependency(フレームワークにpeerDepsがない場合はそのフレームワークのバージョン)
            // にcssのpeerDependencyが該当するなら，インストールされるべきframeworkのセマンティックバージョンとともにcssを返す

            // selectedFwのpeerDependenciesを取得する
            try {
              const { data: peerDependenciesOfFw, error } = await supabaseClient
                .from('frameworks')
                .select('peerDependencies')
                .eq('name', selectedFw)
                .limit(1)
                .single()
              console.log(`**********************`)
              console.log(peerDependenciesOfFw)
              console.log(`**********************`)
              if (peerDependenciesOfFw === null) {
                // frameworkにcssPeerDepsがない場合，そのフレームワークとの互換性，そのフレームワークと互換性がある場合バージョンとの互換性を確認する
                if (selectedFw in cssPeerDeps) {
                  // バージョンのわからないselected fwの名前がcssPeerDepsにある場合，インストールされるべきfwのバージョンを出力し，cssをpushする
                  console.log(
                    `You need to adjust the version of ${selectedFw} to ${cssPeerDeps[selectedFw]} in order to use this css library`,
                  )
                  compatibleCssLibs.push(library)
                } else {
                  // 互換性がない場合はエラーを返し，compatibleCssLibsにpushしない
                  console.log(
                    `You're required to install ${selectedFw} in order to use this css library`,
                  )
                }
              } else {
                const fwPeerDeps = peerDependenciesOfFw.peerDependencies

                if (fwPeerDeps && Object.keys(fwPeerDeps).length > 0) {
                  let isSemverSatisfied = false
                  Object.keys(fwPeerDeps).some((fwPeerDep) => {
                    if (fwPeerDep in cssPeerDeps) {
                      // fwPeerDepがcssPeerDepsにある場合
                      // peerDepVersionがcssPeerDeps[fwPeerDep]と互換性があるかどうかを確認する
                      isSemverSatisfied = semver.satisfies(
                        // @ts-ignore
                        fwPeerDeps[fwPeerDep].replace(/^\^/, ''),
                        cssPeerDeps[fwPeerDep],
                      )
                      if (!isSemverSatisfied) {
                        // 互換性がない場合はエラーを返し，compatibleCssLibsにpushしない
                        console.log(
                          `You need to adjust the version of ${fwPeerDep} to ${cssPeerDeps[fwPeerDep]} in order to use this css library`,
                        )
                        return true // .some()の処理を終了する
                      }
                    }
                  })
                  isSemverSatisfied && compatibleCssLibs.push(library)
                } else {
                  // frameworkにcssPeerDepsがない場合，そのフレームワークとの互換性，そのフレームワークと互換性がある場合バージョンとの互換性を確認する
                  if (selectedFw in cssPeerDeps) {
                    // バージョンのわからないselected fwの名前がcssPeerDepsにある場合，インストールされるべきfwのバージョンを出力し，cssをpushする
                    console.log(
                      `You need to adjust the version of ${selectedFw} to ${cssPeerDeps[selectedFw]} in order to use this css library`,
                    )
                    compatibleCssLibs.push(library)
                  } else {
                    // 互換性がない場合はエラーを返し，compatibleCssLibsにpushしない
                    console.log(
                      `You're required to install ${selectedFw} in order to use this css library`,
                    )
                  }
                }
              }
            } catch (error) {
              console.error(error)
            }
          } else {
            // peerDepsがない場合: cssを返す
            compatibleCssLibs.push(library)
          }
        }
        console.log('##################################')
        console.log('compatibleCssLibs: ', compatibleCssLibs)
        console.log('##################################')
        return compatibleCssLibs
      }
    } catch (error) {
      console.error(error)
    }
    return compatibleCssLibs
  } else if (which === 'ui-framework') {
    return
  }

  // get peerDependency of second person...(recursively)

  // first personにpeerDependencyがない場合とsecond person以降にpeerDependencyがある場合はtrueを返す
}

export type ReturnCheckDependencyType = Awaited<ReturnType<typeof getCheckedLibraries>>
