import supabaseClient from '@/libs/supabase/supabaseClient'

import { handleServerError } from '..'

export const getFrameworks = async () => {
  try {
    const { data: frameworks, error } = await supabaseClient
      .from('frameworks')
      .select('name')
      .order('webframe_want_to_work_with_count', { ascending: false })
      .eq('ableToSetWithNode', true)
    return frameworks
  } catch (error) {
    return handleServerError(error)
  }
}
export type GetFrameworksType = Awaited<ReturnType<typeof getFrameworks>>
