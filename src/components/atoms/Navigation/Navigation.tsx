'use client'

import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export type NavigationProps = {
  current_team_id: string | undefined
  public_boards_ids: Array<string> | undefined
}
export const Navigation = ({ current_team_id, public_boards_ids }: NavigationProps) => {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 py-10 px-20'>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href={`/dashboard/team/${current_team_id}`} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Team Board
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {public_boards_ids &&
            public_boards_ids.map((board_id) => (
              <NavigationMenuItem key={board_id}>
                <Link
                  href={`/dashboard/team/${current_team_id}/board/${board_id}`}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Team Board
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
