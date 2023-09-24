import { ClientError } from 'graphql-request'

import { CustomError, DependenciesInvalidError } from '@/libs/error/custom'
import { InternalServerError } from '@/libs/error/http'
import { HttpError } from '@/libs/error/http'

export function handleServerError(err: unknown): never {
  if (err instanceof HttpError) {
    throw new InternalServerError()
  }
  if (err instanceof ClientError) {
    throw err
  }
  throw err
}

export function handleDependencyError(err: unknown): never {
  if (err instanceof CustomError) {
    throw new DependenciesInvalidError()
  }
  throw err
}
