import { TeamListButton } from '@/components/atoms/TeamListButton'
import { DropDown } from '@/components/molecules/DropDown/DropDown'

import { ShareLinkButton } from '../../atoms/ShareLinkButton/ShareLinkButton'
export const NavRight = ({
  current_team_id,
}: {
  current_team_id: string | undefined
}) => {
  return (
    <div className='flex space-x-4'>
      <ShareLinkButton current_team_id={current_team_id} />
      <TeamListButton current_team_id={current_team_id} />
      <DropDown />
    </div>
  )
}
