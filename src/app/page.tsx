'use client'
// ========== Chat Room
// import all packages
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// import style
import style from './style/style.module.sass'

// import assets
import msgIcon from '@/images/msg-icon.svg'

// import all components
import { Container, Card, Input, Button, Bubble } from '@/components'
import { useChatRoom } from './chat-room-hooks/useChatRoom'

const ChatRoomPage: React.FC = () => {
  const { chats } = useChatRoom()

  return (
    <div className={`${style['chat-room']}`}>
     <Container>
      <Card>
        <header className={`${style['chat-room--header']}`}>
          <h1 className={`${style['chat-room--header--title']}`}>Simple Chat</h1>
          <Link href={'/'} className={`${style['chat-room--header--logout']}`}>
            Logout
          </Link>
        </header>
        <main className={`${style['chat-room--main']}`}>
          {
            chats.map(chat => (
              <Bubble
                key={chat.id}
                name={chat.senderName}
                position={(Number(chat.id) % 2) === 0 ? 'left' : 'right'}
                date={chat.date}
              >
                {chat.message}
              </Bubble>
            ))
          }
        </main>
        <footer className={`${style['chat-room--footer']}`}>
          <Input type="text" placeholder="Type your message here..." />
          <Button type="button" rounded>
            <Image
              src={msgIcon}
              alt="Message Icon"
              width={50}
              height={50}
              className={`${style['chat-room--footer--icon']}`}
            />
          </Button>
        </footer>
      </Card>
     </Container>
    </div>
  )
}

export default ChatRoomPage
