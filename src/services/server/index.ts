import { ClientError } from 'graphql-request'

import { CustomError, DependenciesInvalidError } from '@/libs/error/custom'
import { InternalServerError, UnAuthorizedError } from '@/libs/error/http'
import { HttpError } from '@/libs/error/http'

export function handleServerError(err: unknown): never {
  if (err instanceof HttpError) {
    throw new InternalServerError()
  }
  if (err instanceof ClientError) {
    const gqlErrorCode = err.response.errors?.map((error) => error.extensions?.code)
    gqlErrorCode?.forEach((code) => {
      if (code === 'invalid-jwt') {
        throw new UnAuthorizedError()
      }
    })
  }
  throw err
}

export function handleDependencyError(err: unknown): never {
  if (err instanceof CustomError) {
    throw new DependenciesInvalidError()
  }
  throw err
}
