'use server'
import mime from 'mime-types'
import { v4 as uuid } from 'uuid'

import supabaseClient from '../supabase/supabaseClient'

export const uploadImageHandler = async ({ formData }: { formData: FormData }) => {
  const file = formData.get('file') as File
  const name = uuid()
  const ext = mime.extension(file.type)
  const fileName = `${name}.${ext}`
  const { data, error } = await supabaseClient.storage
    .from('avatar')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false,
    })
  if (error) throw error
  return data
}

export type UploadImageHandlerType = Awaited<ReturnType<typeof uploadImageHandler>>
