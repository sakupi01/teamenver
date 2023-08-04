import { NodeContainer } from '../components/organisms/NodeContainer/NodeContainer'
export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <NodeContainer />
    </main>
  )
}
