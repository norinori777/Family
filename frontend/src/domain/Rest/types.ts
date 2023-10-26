export type RestResponse<T> = {
  result: number
  data: T
  errors: { [key: string]: string }
}
