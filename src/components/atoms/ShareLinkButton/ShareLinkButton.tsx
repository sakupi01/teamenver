import { Copy } from 'lucide-react'
import { nanoid } from 'nanoid'
import { useState, useTransition } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { handleCreateLinkKv } from '@/libs/actions/handleCreateLinkKv'
type ShareLinkButtonProps = {
  current_team_id: string | undefined
}
export function ShareLinkButton({ current_team_id }: ShareLinkButtonProps) {
  const [isPending, startTransition] = useTransition()
  const [linkId, setLinkId] = useState<string | undefined>(undefined)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          onClick={() => {
            const id = nanoid()
            setLinkId(id)
            startTransition(() => handleCreateLinkKv(id, current_team_id))
          }}
        >
          {isPending ? '...' : '🔗'}
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Share Link</DialogTitle>
          <DialogDescription>
            Anyone with the link will be able to join this team.
          </DialogDescription>
        </DialogHeader>
        <div className='flex items-center space-x-2'>
          <div className='grid flex-1 gap-2'>
            <Label htmlFor='link' className='sr-only'>
              Link
            </Label>
            <Input
              id='link'
              defaultValue={
                process.env.NEXT_PUBLIC_BASE_URL +
                `/shared_invitation?invitation_id=${linkId}`
              }
              readOnly
            />
          </div>
          <Button type='submit' size='sm' className='px-3'>
            <span className='sr-only'>Copy</span>
            <Copy className='h-4 w-4' />
          </Button>
        </div>
        <DialogFooter className='sm:justify-start'>
          <DialogClose asChild>
            <Button type='button' variant='secondary'>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
