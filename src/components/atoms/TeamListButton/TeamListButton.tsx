import { useRouter } from 'next/navigation'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export const TeamListButton = ({
  current_team_id,
}: {
  current_team_id: string | undefined
}) => {
  const router = useRouter()
  if (!current_team_id) {
    return <p>error</p>
  }
  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => {
        router.push(`/dashboard/team/${current_team_id}/people`)
      }}
    >
      <Avatar>
        <AvatarFallback>👫</AvatarFallback>
      </Avatar>
    </Button>
  )
}
