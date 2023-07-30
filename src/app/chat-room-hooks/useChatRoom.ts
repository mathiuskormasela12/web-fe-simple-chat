'use client'
// ========== Chat Room Hooks
// import all packages
import { useEffect } from 'react'
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

  useEffect(() => {
    handleLoadChat()
  }, [])

  const handleLoadChat = (): void => {
    const fakeChats: IChat[] = [
      {
        id: '1',
        message: 'Hi Doe',
        date: '2023-05-12',
        senderName: 'Jhon'
      },
      {
        id: '2',
        message: 'Yes, what are you talking about?',
        date: '2023-06-17',
        senderName: 'Doe'
      },
      {
        id: '3',
        message: 'I just wanted to know your news',
        date: '2023-05-12',
        senderName: 'Jhon'
      },
      {
        id: '4',
        message: 'Ok, I am good',
        date: '2023-06-17',
        senderName: 'Doe'
      },
      {
        id: '5',
        message: 'Have you tried to build GraphQL API?',
        date: '2023-05-12',
        senderName: 'Jhon'
      },
      {
        id: '6',
        message: 'Not yet, I have not had a task required GraphQL',
        date: '2023-06-17',
        senderName: 'Doe'
      },
      {
        id: '7',
        message: 'I see, but I think, you should try it, It\' so interested',
        date: '2023-05-12',
        senderName: 'Jhon'
      },
      {
        id: '8',
        message: 'are you serious?',
        date: '2023-06-17',
        senderName: 'Doe'
      },
      {
        id: '9',
        message: 'yes',
        date: '2023-05-12',
        senderName: 'Jhon'
      },
      {
        id: '10',
        message: 'oh, ok thank you, I\'l try it later on',
        date: '2023-06-17',
        senderName: 'Doe'
      }
    ]

    dispatch(setChats({
      data: fakeChats.reverse()
    }))
  }

  return {
    accessToken,
    handleAccessToken,
    handleLoadChat,
    chats
  }
}
