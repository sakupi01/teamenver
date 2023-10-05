import { z } from 'zod'

export const LoginUserSchema = z.object({
  email: z.string().email(),
  name: z.string().max(50).min(1, { message: 'Name is required.' }),
  imageUrl: z.string().url().optional(),
})

export type LoginUser = z.infer<typeof LoginUserSchema>
