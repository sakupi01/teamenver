import supabaseClient from '@/libs/supabase/supabaseClient'

import { WhichLibrary } from '@/services/client/GetLibraries'

import { handleServerError } from '..'

export const getLibraries = async ({ which }: { which: WhichLibrary }) => {
  if (which == 'css-framework') {
    try {
      const { data: css_libraries, error } = await supabaseClient
        .from('css_libraries')
        .select('name')
      return { data: css_libraries }
    } catch (error) {
      return handleServerError(error)
    }
  } else if (which == 'ui-framework') {
    try {
      const { data: ui_libraries, error } = await supabaseClient
        .from('ui_libraries')
        .select('name')
      return { data: ui_libraries }
    } catch (error) {
      return handleServerError(error)
    }
  }
}

export type GetLibrariesType = Awaited<ReturnType<typeof getLibraries>>
