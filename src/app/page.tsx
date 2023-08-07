import { css } from 'styled-system/css'

import { FetchFramework } from '../components/molecules/FetchFramework/FetchFramework'
import { Flow } from '../components/molecules/Flow/Flow'
export default async function Home() {
  return (
    <main className={css({ padding: '5%' })}>
      <Flow />
      <FetchFramework />
    </main>
  )
}
