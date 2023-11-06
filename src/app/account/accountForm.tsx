'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'

import { LoginUserSchema } from '@/libs/schema/loginUser'
import { LoginUser } from '@/libs/schema/loginUser'

import { useUploadImage } from './hooks/useUploadImage'

export type AccountFormProps = {
  email: string
  name: string
  imageUrl: string
}

export default function AccountForm({ email, name, imageUrl }: AccountFormProps) {
  const form = useForm<LoginUser>({
    resolver: zodResolver(LoginUserSchema),
    defaultValues: {
      email: email,
      name: name,
      imageUrl: imageUrl,
    },
  })

  const { onChangeImage, url } = useUploadImage({
    register: form.register,
    setValue: form.setValue,
    name: 'imageUrl',
    defaultImageUrl: imageUrl,
    onRejected: (error) => {
      toast({
        title: 'Error',
        description: (
          <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
            <code className='text-white'>
              {JSON.stringify(form.formState.errors.imageUrl?.message, null, 2)}
            </code>
          </pre>
        ),
      })
    },
    onResolved(data) {
      toast({
        title: '✅Success',
        description: 'アバター画像がアップロードされました',
      })
    },
  })

  function onSubmit(data: LoginUser) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
  function onInvalid(errors: unknown) {
    toast({
      title: 'Error',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(errors, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='imageUrl'
          render={() => (
            <FormItem>
              <FormLabel>Avatar Image</FormLabel>
              <FormControl>
                <Input
                  type='file'
                  accept='image/jpeg, image/png'
                  onChange={onChangeImage}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Image
          src={url || imageUrl}
          alt='avatar'
          width={100}
          height={100}
          className='w-[100px] h-[100px] rounded-full object-cover'
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}
