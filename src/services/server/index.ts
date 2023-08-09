import { InternalServerError } from '@/libs/error/http'

export function handleServerError(err: unknown): never {
  if (err instanceof Error) {
    throw new InternalServerError()
  }
  throw err
}
