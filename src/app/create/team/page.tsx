import { createTeam } from "@/services/server/CreateTeam";
import { css } from "styled-system/css";


export default function Join() {
    const createTeamHandler = async (data: FormData) => {
        'use server'
        const name = data.get('name') as string
        const res = await createTeam({name})
        // const res = await fetch(`${process.env.BASE_URL}/api/create/team?name=${name}`);
        console.log(res)
    }

    return (
        <main className={css({ padding: '5%' })}>
            <form action={createTeamHandler} method="POST">
                <input type="text" name="name" placeholder="Input a team name" />
                <button type="submit">Create</button>
            </form>
        </main>
    )
}