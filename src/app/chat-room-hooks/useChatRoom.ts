'use client'
// ========== Chat Room Hooks
// import all packages
import { useSelector, useDispatch } from 'react-redux'
import { type RootState, type AppDispatch } from '@/redux/store'
import { resetToken, setToken } from '@/redux/features/auth/auth.slice'

// import all types
import { type UseChatRoom } from './chatRoom.hooks.types'
import { type IChat } from '@/redux/features/chat-slice/chat.slice.types'
import { setChats } from '@/redux/features/chat-slice/chat.slice'

export const useChatRoom: UseChatRoom = () => {
  const dispatch = useDispatch<AppDispatch>()
  const accessToken = useSelector((states: RootState) => states.authReducer.accessToken)
  const chats = useSelector((states: RootState) => states.chatReducer.chats)

  const handleAccessToken = (): void => {
    if (accessToken.length === 0) {
      dispatch(setToken({
        data: {
          accessToken: Date.now().toString(),
          refreshToken: Date.now().toString()
        }
      }))
    } else {
      dispatch(resetToken())
    }
  }

  const handleLoadChat = (): void => {
    const fakeChats: IChat[] = [
      {
        id: '1',
        message: 'Hello Next Js',
        date: '2023-05-12',
        senderName: 'Jhon'
      },
      {
        id: '2',
        message: 'Hello React Js',
        date: '2023-06-17',
        senderName: 'Doe'
      }
    ]

    dispatch(setChats({
      data: fakeChats
    }))
  }

  return {
    accessToken,
    handleAccessToken,
    handleLoadChat,
    chats
  }
}
