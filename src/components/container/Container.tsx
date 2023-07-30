// ========== Container
// import all packages
import React from 'react'
import style from './style/style.module.sass'
import { type ICard } from './container.types'

export const Container: React.FC<ICard> = ({ children, inheritHeight = false }) => {
  const inheritHeightStyle: string = (inheritHeight) ? style['container--inherit-height'] : ''

  return (
    <div className={style.container.concat(' ', inheritHeightStyle)}>
      {children}
    </div>
  )
}
