import { z } from 'zod'

export const LoginUserSchema = z.object({
  name: z.string().max(50).min(1, { message: 'Name is required.' }),
  email: z.string().email(),
  github_url: z.string().trim().url().optional(),
  twitter_url: z.string().trim().url().optional(),
  image_url: z.string().optional(),
})

export type LoginUser = z.infer<typeof LoginUserSchema>
