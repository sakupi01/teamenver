'use client'
import { useUser } from '@auth0/nextjs-auth0/client'
import { CommentsProvider } from '@udecode/plate-comments'
import { Plate, Value } from '@udecode/plate-common'
import { useState, useTransition } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import useSWR from 'swr'

import { Button } from '@/components/plate-ui/button'
import { CommentsPopover } from '@/components/plate-ui/comments-popover'
import { Editor } from '@/components/plate-ui/editor'
import { FixedToolbar } from '@/components/plate-ui/fixed-toolbar'
import { FixedToolbarButtons } from '@/components/plate-ui/fixed-toolbar-buttons'
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar'
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons'
import { MentionCombobox } from '@/components/plate-ui/mention-combobox'
import { Skeleton } from '@/components/ui/skeleton'
import { toast } from '@/components/ui/use-toast'

import * as GetProjectOverviewApi from '@/api/get/overview/route'

import { handleProjectOverviewUpdate } from '@/libs/actions/handleProjectOverviewUpdate'
import { cn } from '@/libs/utils'

import { plugins } from './plugins'

export function OverviewPage() {
  const { user, isLoading } = useUser()
  const [content, setContent] = useState<Value>([])
  const [isPending, startTransition] = useTransition()

  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const res = useSWR<GetProjectOverviewApi.GetType>('/api/get/overview', fetcher)

  const initVal: string = res.data?.project_details[0].project_abstract || ''

  const handleSave = async () => {
    await handleProjectOverviewUpdate(content)
    toast({
      title: '✅ Your changes have been successfully saved.',
    })
  }

  if (isLoading || res.isLoading) {
    return (
      <div className='flex flex-col gap-4'>
        <Skeleton className='h-10 w-full' />
        <Skeleton className='h-10 w-full' />
        <Skeleton className='h-10 w-full' />
      </div>
    )
  } else if (res.error) {
    return <div>Something went wrong...</div>
  }
  return (
    <div className='flex flex-col items-end p-3'>
      <DndProvider backend={HTML5Backend}>
        <CommentsProvider users={{}} myUserId={user?.sub}>
          <Plate
            plugins={plugins}
            initialValue={JSON.parse(initVal)}
            onChange={(newValue) => {
              setContent(newValue)
            }}
          >
            <FixedToolbar>
              <FixedToolbarButtons />
            </FixedToolbar>

            <Editor
              placeholder=''
              variant='ghost'
              size='md'
              focusRing={false}
              className={cn('px-8', 'min-h-[920px] pb-[20vh] pt-4 md:px-[96px]')}
            />

            <FloatingToolbar>
              <FloatingToolbarButtons />
            </FloatingToolbar>
            <MentionCombobox items={[]} />
            <CommentsPopover />
          </Plate>
        </CommentsProvider>
      </DndProvider>
      <Button className='m-5' onClick={() => startTransition(() => handleSave())}>
        {isPending ? 'loading...' : 'Save'}
      </Button>
    </div>
  )
}
