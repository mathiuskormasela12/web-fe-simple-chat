'use client'
// ========== Chat Room
// import all packages
import React from 'react'
import { useChatRoom } from './chat-room-hooks/useChatRoom'

const ChatRoomPage: React.FC = () => {
  const { accessToken, handleAccessToken, chats, handleLoadChat } = useChatRoom()

  return (
    <div>
      <h1 onClick={handleAccessToken}>Chat Room</h1>
      {accessToken.length > 0 && <p>Ada Token</p>}

      <br />
      <br />

      <button type="button" onClick={handleLoadChat}>
        Load Chats
      </button>
      <br />
      <br />

      <ol>
        {chats.map(chat => (
          <li key={chat.id}>
            {chat.message}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ChatRoomPage
