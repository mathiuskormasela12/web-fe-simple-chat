// =========== Chat Slice Types

export interface IAuthSliceStates {
  accessToken: string
  refreshToken: string
}

export interface IAuthPayload {
  data: IAuthSliceStates
}
