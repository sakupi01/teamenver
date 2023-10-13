'use client'
import dynamic from 'next/dynamic'

export default function Result() {
  const NodeContainer = dynamic(
    () =>
      import('@/components/organisms/NodeContainer/NodeContainer').then(
        (module) => module.NodeContainer,
      ),
    {
      ssr: false,
    },
  )
  return (
    <main className={'p-[5%]'}>
      <NodeContainer />
    </main>
  )
}
