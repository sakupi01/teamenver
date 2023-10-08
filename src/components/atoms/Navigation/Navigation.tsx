'use client'

import Link from 'next/link'
import useSWR from 'node_modules/swr/core/dist/index.mjs'
import React from 'react'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import * as GetMyBoardInTeamApi from '@/api/get/myboard_in_team/route'

import { handleCreateBoardAndDetails } from '@/libs/actions/handleCreateBoardAndDetails'

import { NavBoardProps } from '@/app/dashboard/team/[team_id]/layout'

import { NavRight } from '../../organisms/NavRight/NavRight'
export type NavigationProps = {
  current_team_id: string | undefined
  public_boards_info: Array<NavBoardProps> | undefined
}
export const Navigation = ({ current_team_id, public_boards_info }: NavigationProps) => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR<GetMyBoardInTeamApi.GetType>(
    `/api/get/myboard_in_team?team_id=${current_team_id}`,
    fetcher,
  )

  return (
    <div className='fixed top-0 left-0 right-0 z-50 py-10 px-20'>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href={`/dashboard/team/${current_team_id}`} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                👯Team Board
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {public_boards_info &&
            public_boards_info.map((board) => (
              <NavigationMenuItem key={board.id}>
                <Link
                  href={`/dashboard/team/${current_team_id}/board/${board.id}`}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {board.userName}&apos;s Board
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}

          {isLoading ? (
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Loading...
              </NavigationMenuLink>
            </NavigationMenuItem>
          ) : data?.boards.length ? (
            <NavigationMenuItem>
              <Link
                href={`/dashboard/team/${current_team_id}/board/${data.boards[0].id}`}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Your Board
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                onClick={() => handleCreateBoardAndDetails(current_team_id)}
              >
                + New Board
              </NavigationMenuLink>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>

        <NavRight />
      </NavigationMenu>
    </div>
  )
}
