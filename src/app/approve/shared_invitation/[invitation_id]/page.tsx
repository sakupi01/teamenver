import { AsyncButton } from '@/components/atoms/AsyncButton/AsyncButton'

import { kvClient } from '@/libs/redis/kvClient'

import { getTeamMember } from '@/services/server/GetTeamMember'

type ApproveInvitationProps = {
  params: {
    invitation_id: string
  }
}
const ApproveInvitation = async ({
  params: { invitation_id },
}: ApproveInvitationProps) => {
  try {
    const team_id = (await kvClient.get(invitation_id)) as string
    const { team_member } = await getTeamMember(team_id)
    return (
      <main className={'p-[5%]'}>
        <p className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          You got an invitation from {team_member[0].teams.name}!
        </p>

        <AsyncButton label={'Join🚀'} invitation_id={invitation_id} team_id={team_id} />
      </main>
    )
  } catch (e) {
    return (
      <main className={'p-[5%]'}>
        <p className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          The invitation link is not valid.
        </p>
      </main>
    )
  }
}
export default ApproveInvitation
