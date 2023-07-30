// ========= Button
// import all packages
import React from 'react'

// impor all types
import { type IButton } from './button.types'

// import style
import style from './style/style.module.sass'

export const Button: React.FC<IButton> = ({ children, rounded = false, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${style.btn} ${rounded ? style['btn--rounded'] : ''}`}
    >
      {children}
    </button>
  )
}
