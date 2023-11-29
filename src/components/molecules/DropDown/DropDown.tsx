import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import useSWR from 'node_modules/swr/core/dist/index.mjs'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import * as GetUserInfoApi from '@/api/get/user_info/route'

import { deleteCookies } from '@/libs/actions/deleteCookies'

export function DropDown() {
  const router = useRouter()
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR<GetUserInfoApi.GetType>(
    '/api/get/user_info',
    fetcher,
  )
  const image_url =
    data?.users_by_pk?.image_url?.startsWith('https://avatars.githubusercontent.com') ||
    data?.users_by_pk?.image_url?.startsWith('https://lh3.googleusercontent.com')
      ? data?.users_by_pk?.image_url
      : `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BASE_URL}${data?.users_by_pk?.image_url}`
  if (isLoading) return <div>Loading...</div>
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='rounded-full'>
          <Avatar>
            <Image
              src={image_url}
              alt='avatar'
              width={40}
              height={40}
              className=' rounded-full object-cover'
            />
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={'/account'}>
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem disabled>Email</DropdownMenuItem>
                <DropdownMenuItem disabled>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem disabled>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <Link href={'/select/team'}>
            <DropdownMenuItem>Switch Team</DropdownMenuItem>
          </Link>

          <Link href={'/select/team'}>
            <DropdownMenuItem>New Team</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <Link
          href={new URL(data?.users_by_pk?.github_url || 'https://github.com/404.html')}
        >
          <DropdownMenuItem>GitHub</DropdownMenuItem>
        </Link>
        <DropdownMenuItem disabled>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <Button
          onClick={() => {
            deleteCookies()
            router.push('/api/auth/logout')
          }}
          variant={'ghost'}
        >
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
