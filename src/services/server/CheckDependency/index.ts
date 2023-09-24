
// this api is to check is a certain library has peer dependencies that are not compatible with the current node environment

import { execSync } from 'child_process';

import semver from 'semver';

type PeerDependency = {
  [packageName: string]: string
}
function getPeerDependenciesInfo(library: string){
  const command = `npm info ${library} peerDependencies --json`;

  try {
    const stdout = execSync(command, { encoding: 'utf8', stdio: 'pipe' });

    // if there're peer dependencies, return error
    if(stdout){
      const peerDeps =JSON.parse(stdout);
      console.log(`Peer Dependencies for ${library}:`);
      for (const [key, value] of Object.entries(peerDeps)) {
        console.log(`${key}: ${value}`);
      }
      return peerDeps
    }
    return {};
  } catch (error: unknown) {
    console.error(`Error: ${error}`);
    return {};
  }
}


export const checkDependency = (libraries: string) => {
  // check if the passed dependencies are all compatible each other in node environment
  // if not, return error
  // if compatible, return true
  const arrLibraries = libraries.replace(/[\[\]']+/g, '').split(', ')
  
  if (arrLibraries.length === 0) {
    return true
  }

  const peerDepsOfLibraries: Array<Object> = [];
  arrLibraries.forEach((library) => {
    const peerDeps = getPeerDependenciesInfo(library)
    peerDepsOfLibraries.push(peerDeps)
  }
  )
  console.log('**************************');
  console.log('peerDepsOfLibraries: ', peerDepsOfLibraries);
  console.log('**************************');

  // Check if package1's peerDependencies are satisfied by package2
  const missingDependencies: Array<string> = [];

  for (let i = 0; i < peerDepsOfLibraries.length; i++) {
    // peerDepsOfLibraries[i] is an object which contains the peer dependencies of the i-th library
    // the expected dynamic type of the object is as { [packageName: string]: string, [packageName: string]: string, ... }
    const peerDepsOfLib1 = peerDepsOfLibraries[i]; 
    for (let j = i + 1; j < peerDepsOfLibraries.length; j++) {
      const peerDepsOfLib2 = peerDepsOfLibraries[j];
      for (const packageName in peerDepsOfLib1) {
        // @ts-ignore
        if (!peerDepsOfLib2[packageName] || !semver.satisfies(peerDepsOfLib2[packageName], peerDepsOfLib1[packageName])) {
          missingDependencies.push(packageName);
        }
      }
    }
  }

  if (missingDependencies.length === 0) {
    console.log('PeerDependencies are satisfied!');
  } else {
    console.error('PeerDependencies are missing or not compatible:');
    missingDependencies.forEach(dep => {
      console.error(`- ${dep}`);
    });
  }


}

export type ReturnCheckDependencyType = Awaited<ReturnType<typeof checkDependency>>
