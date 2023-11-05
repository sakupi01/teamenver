'use client'
import { usePathname, useRouter } from 'next/navigation'
import * as React from 'react'
import useSWR, { mutate } from 'swr'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import * as GetApproversApi from '@/api/get/approvers/route'

import { Approvers } from '../../atoms/Approvers/Approvers'

import { SelectCardContent } from './SelectCardContent'

export const FlowPane = ({ isAdmin }: { isAdmin: boolean }) => {
  const router = useRouter()
  const pathname = usePathname()
  const team_id = pathname.split('/').findLast((pathParam) => pathParam !== '')

  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, isLoading, error } = useSWR<GetApproversApi.GetType>(
    '/api/get/approvers',
    fetcher,
    {
      revalidateIfStale: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    },
  )
  mutate('/api/get/approvers')

  const isAllAgreed = data?.agreements.every((agreement) => agreement.is_agreed)

  return (
    // ここでinputを変更することができてもそんなに費用対効果が高くない
    // dependenciesを測っていないもののinputを変更することは割と簡単そうなのでやる

    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Input</CardTitle>
        <CardDescription>You also can change the value from here.</CardDescription>
      </CardHeader>
      <SelectCardContent isAdmin={isAdmin} />
      <CardFooter className='flex justify-between'>
        {error ? (
          'failed to load'
        ) : data === undefined || isLoading ? (
          'loading...'
        ) : (
          <Approvers agreements={data.agreements} />
        )}

        {error ? (
          'failed to load'
        ) : data === undefined || isLoading ? (
          'loading...'
        ) : isAdmin ? (
          <Button
            disabled={!isAllAgreed}
            onClick={() => router.push(`/result/team/${team_id}`)}
          >
            実行
          </Button>
        ) : (
          ''
        )}
      </CardFooter>
    </Card>
  )
}
