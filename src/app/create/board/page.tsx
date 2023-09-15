import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


import { AsyncButton } from '@/components/atoms/AsyncButton/AsyncButton';

import { createBoard } from '@/services/server/CreateBoard';
import { createBoardDetail } from '@/services/server/CreateBoardDetail';
import { css } from "styled-system/css";




export default function Join() {
    const current_team_id = cookies().get('current_team_id');

    const handleCreateBoardAndDetails = async () => {
        'use server'
        console.log('clicked!');

        const { insert_boards } = await createBoard();

        const { insert_board_details } = await createBoardDetail();
        redirect(`${process.env.BASE_URL}/`);
    }
    return (
        <main className={css({ padding: '5%' })}>
            <p>Your current team is: {current_team_id!.value}</p>
            <AsyncButton label='Create Board' clickAction={handleCreateBoardAndDetails} />
        </main>
    )
}