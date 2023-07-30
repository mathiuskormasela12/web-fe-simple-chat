// ========== Bubble Types
// import all packages
import { type PropsWithChildren } from 'react'

type BubblePosition = 'left' | 'right'

export interface IBubble extends PropsWithChildren {
  name: string
  date: string
  position: BubblePosition
}
