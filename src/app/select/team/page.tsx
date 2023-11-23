'use client'
import { useUser } from '@auth0/nextjs-auth0/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'
import * as z from 'zod'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

import * as GetJoinedTeamsApi from '@/api/get/joined_teams/route'

import { createTeamHandler } from '@/libs/actions/createTeamHandler'
import { handleSetCookies } from '@/libs/actions/handleSetCookies'

const formSchema = z.object({
  teamName: z.string().min(2).max(25),
})

// million-ignore
export default function Join() {
  const { user, isLoading, error } = useUser()
  const router = useRouter()

  const fetcher = (url: string) =>
    fetch(url).then((res) => {
      return res.json()
    })

  const res = useSWR<GetJoinedTeamsApi.GetType>(
    `/api/get/joined_teams?user_id=${user?.sub}`,
    fetcher,
  )

  const handleSelectTeam = (
    team_id: string,
    team_boards: GetJoinedTeamsApi.GetType['teams'][0]['team_boards'],
    boards: GetJoinedTeamsApi.GetType['teams'][0]['boards'][0],
  ) => {
    handleSetCookies(team_id, team_boards, boards)
    router.push(`/dashboard/team/${team_id}`)
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    createTeamHandler(values.teamName)
  }
  return (
    <main className={'min-h-screen px-[10%] py-[5%]'}>
      <div className='flex flex-col justify-center items-center gap-8'>
        <p className='scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-8xl'>
          Hello, {error ? 'failed to load' : isLoading ? 'loading...' : user?.nickname}
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-8 max-w-[500px] grid grid-cols-3 gap-4'
          >
            <FormField
              control={form.control}
              name='teamName'
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>New Team Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Type a new team name here.' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Crate A Team</Button>
          </form>
        </Form>
      </div>
      <Separator className='my-[5%]' />
      <div className='text-lg font-semibold'>
        or, you can join the team that you already joined in.
      </div>
      <ScrollArea>
        <div className='my-5 flex space-x-5'>
          {res.error ? (
            <div>failed to load</div>
          ) : res.data === undefined || res.isLoading ? (
            'loading...'
          ) : (
            res.data.teams.map((team) => (
              <Card
                key={team.id}
                onClick={() =>
                  handleSelectTeam(team.id, team.team_boards, team.boards[0])
                }
                className='w-[350px] shadow hover:text-card hover:bg-card-foreground/90 hover:cursor-pointer transition-colors'
              >
                <CardHeader className='grid grid-cols-6 grid-rows-2 gap-2'>
                  <Avatar className='col-span-1'>
                    <AvatarFallback>{team.name[0]}</AvatarFallback>
                  </Avatar>
                  <CardTitle className='col-span-5'>{team.name}</CardTitle>
                  <CardDescription className='col-span-6'>
                    Owned by {team.admin_user.name} and {team.team_members.length - 1}{' '}
                    others
                  </CardDescription>
                </CardHeader>
              </Card>
            ))
          )}
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </main>
  )
}
