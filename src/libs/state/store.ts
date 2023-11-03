import { create } from 'zustand'
import type {} from '@redux-devtools/extension' // required for devtools typing

import { ReturnGetTeamBoardDetailType } from '@/services/server/GetTeamBoardDetail'
// import zukeeper from 'zukeeper'; // for debugging

interface ChangeItemParamInput {
  [key: string]: string | null
}

interface State {
  settings: ReturnGetTeamBoardDetailType['teamBoardDetailWithoutTypename']
}

interface Action {
  updateSettings: (input: ChangeItemParamInput) => void
}

// wrap (set) => () with zukeeper() when debugging
export const settingsStore = create<State & Action>()((set) => ({
  settings: {},
  updateSettings: (input) => {
    console.log(input)

    return set((state) => ({ settings: { ...state.settings, ...input } }))
  },
}))

window.store = settingsStore
