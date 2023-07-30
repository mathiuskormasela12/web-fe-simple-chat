// ========= Button Types
// import all packages
import type React from 'react'

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: boolean
}
