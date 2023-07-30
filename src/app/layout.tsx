// =========== Chat Room Layout
// import all packages
import { type PropsWithChildren } from 'react'
import React from 'react'
import { type Metadata } from 'next'
import { Inter } from 'next/font/google'

// import global style
import '@/style/global.sass'

// import all components
import { ReduxWrapper } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat Room',
  description: 'Simple Chat Room'
}

const ChatRoomLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <ReduxWrapper>
          {children}
        </ReduxWrapper>
      </body>
    </html>
  )
}

export default ChatRoomLayout
