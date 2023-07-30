// =========== Chat Slice Types

export interface IChat {
  id: string
  message: string
  date: string
  senderName: string
}

export interface IChatSliceStates {
  chats: IChat[]
}

export interface IChatPayload {
  data: IChat[]
}
