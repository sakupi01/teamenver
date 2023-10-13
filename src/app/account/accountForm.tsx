'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'

import { LoginUserSchema } from '@/libs/schema/loginUser'
import { LoginUser } from '@/libs/schema/loginUser'

export type AccountFormProps = {
  id: string
  email: string
  name: string
  imageUrl: string
}

export default function AccountForm({ id, email, name, imageUrl }: AccountFormProps) {
  // register: callback function to register your input into the hook form, it can be React Hook Form input or custom register input.
  // we can take the inputs under control by applying the register function to the inputs.
  // handleSubmit: callback function when validation pass, invoke the callback with the form data.
  // watch: This will watch specified input/inputs and return its value. You can call watch() to be rendered every time so that you can have the latest value.
  // formState: an object contains information about the form state, such as dirty, isSubmitted, touched, submitCount or isSubmitting.
  // errors: an object contains form errors. Will be used to display the errors in the form.
  const form = useForm<LoginUser>({
    resolver: zodResolver(LoginUserSchema),
    defaultValues: {
      email: email,
      name: name,
      imageUrl: imageUrl,
    },
  })

  function onSubmit(data: LoginUser) {
    // ✅ This will be type-safe and validated because onSubmit is called only after the form is validated.
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
    console.log(data)
  }

  // error checking
  // console.log(form.formState.errors)

  // The <Form /> wrapper in react-hook-form provides us with composable components for building forms.
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>ユーザ名を変更できます</FormDescription>
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
              <FormDescription>メールアドレスを変更できます</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={() => (
            <FormItem>
              <FormLabel>Avatar Image</FormLabel>
              <FormControl>
                <Input type='file' />
              </FormControl>
              <FormDescription>アバター画像を変更できます</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}
