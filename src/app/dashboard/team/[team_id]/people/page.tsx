import Image from 'next/image'
import Link from 'next/link'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Icons } from '@/components/ui/icons'

import { getTeamMember } from '@/services/server/GetTeamMember'
type PeopleListProps = {
  params: {
    team_id: string
  }
}
const PeopleList = async ({ params }: PeopleListProps) => {
  // get team member
  const member = (await getTeamMember(params.team_id)).team_member

  return (
    <div className='flex flex-col items-center justify-center flex-1 px-14'>
      <Card className='px-5 py-3 my-3'>
        <CardHeader className='mb-5'>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Invite your team members to collaborate.</CardDescription>
        </CardHeader>
        {member.map((person) => (
          <CardContent className='grid gap-6 mb-5' key={person.users.id}>
            <div className='flex items-center justify-between space-x-4'>
              <div className='flex items-center space-x-4'>
                <Avatar>
                  <Image
                    src={
                      person.users.image_url?.startsWith(
                        'https://avatars.githubusercontent.com',
                      ) ||
                      person.users.image_url?.startsWith(
                        'https://lh3.googleusercontent.com',
                      )
                        ? person.users.image_url
                        : `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BASE_URL}${person.users.image_url}`
                    }
                    alt={person.users.name}
                    width={40}
                    height={40}
                    className='rounded-full object-cover'
                  />
                </Avatar>
                <div>
                  <p className='text-sm font-medium leading-none'>{person.users.name}</p>
                  <p className='text-sm text-muted-foreground'>{person.users.email}</p>
                </div>
              </div>
              <CardFooter className='flex justify-between p-0 space-x-1'>
                <Button variant='outline' size='icon'>
                  <Link
                    href={new URL(person.users.twitter_url || 'https://x.com/404.html')}
                  >
                    <Icons.twitter className='h-4 w-4' />
                  </Link>
                </Button>
                <Button variant='outline' size='icon'>
                  <Link
                    href={
                      new URL(person.users.github_url || 'https://github.com/404.html')
                    }
                  >
                    <Icons.gitHub className=' h-4 w-4' />
                  </Link>
                </Button>
              </CardFooter>
            </div>
          </CardContent>
        ))}
      </Card>
    </div>
  )
}

export default PeopleList
