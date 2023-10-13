export const errors = {
  500: { message: 'Dependencies are not valid.' },
}
export type CustomErrors = typeof errors
export type CustomErrorStatus = keyof CustomErrors
export type CustomErrorMessage = {
  [K in CustomErrorStatus]: CustomErrors[K]['message']
}[CustomErrorStatus]
export type CustomErrorType = {
  message: CustomErrorMessage
  status: CustomErrorStatus
}

export class CustomError extends Error {
  message: string
  status: CustomErrorStatus = 500

  constructor(status: CustomErrorStatus) {
    super(errors[status].message)
    this.message = errors[status].message
    this.status = status
  }
  jsonifyError() {
    return { message: this.message, status: this.status }
  }
}

export class DependenciesInvalidError extends CustomError {
  constructor() {
    super(500)
  }
}