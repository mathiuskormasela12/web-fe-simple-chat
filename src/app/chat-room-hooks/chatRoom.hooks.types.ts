// ========= Chat Room Hooks Types
// import all packages
import { type IChat } from '@/redux/features/chat-slice/chat.slice.types'

export type UseChatRoom = () => ({
  accessToken: string
  handleAccessToken: () => void
  handleLoadChat: () => void
  chats: IChat[]
})
