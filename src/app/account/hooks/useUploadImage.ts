import { ChangeEvent, useEffect, useState } from 'react'
import {
  FieldValues,
  Path,
  PathValue,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form'

// import { uploadImage, UploadImageData } from '@/services/client/UploadImage'
import {
  UploadImageHandlerType,
  uploadImageHandler,
} from '../../../libs/actions/uploadImageHandler'

export function handleChangeFile(
  onValid: (result: ProgressEvent<FileReader>, file: File) => void,
  onInvalid?: (result: ProgressEvent<FileReader>, file: File) => void,
) {
  return (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return
    const file = event.target.files[0]
    if (!file) return
    const fileReader = new FileReader()
    fileReader.onload = (event) => {
      onValid(event, file)
    }
    fileReader.onerror = (event) => {
      onInvalid?.(event, file)
    }
    fileReader.readAsDataURL(file)
  }
}

export function useUploadImage<T extends FieldValues>({
  name,
  defaultImageUrl,
  register,
  setValue,
  onResolved,
  onRejected,
}: {
  name: Path<T>
  defaultImageUrl?: string | null
  register: UseFormRegister<T>
  setValue: UseFormSetValue<T>
  onResolved?: (data: UploadImageHandlerType) => void
  onRejected?: (err: unknown) => void
}) {
  const [url, setUrl] = useState(defaultImageUrl)
  useEffect(() => {
    register(name)
  }, [register, name])

  const onChangeImage = handleChangeFile((_, file) => {
    const formData = new FormData()
    formData.append('file', file)
    uploadImageHandler({ formData })
      .then((data) => {
        const imgPath =
          `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BASE_URL}${data.path}` as PathValue<
            T,
            Path<T>
          >
        setUrl(imgPath)
        setValue(name, imgPath)
        onResolved?.(data)
      })
      .catch(onRejected)
  })
  return { onChangeImage, url } as const
}
