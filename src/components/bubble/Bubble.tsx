// ========== Bubble
// import all packages
import React from 'react'

// import all types
import { type IBubble } from './bubble.types'

// import style
import style from './style/style.module.sass'

export const Bubble: React.FC<IBubble> = ({ children, name, date, position = 'left' }) => {
  const bubbleBgColor = (position === 'left') ? 'secondary' : 'primary'

  return (
    <div className={`${style.bubble} ${style[`bubble--${position}`]}`}>
      <div className={`${style['bubble--wrapper']}`}>
        <p className={`${style['bubble--wrapper--title']}`}>{name}</p>
        <div className={`${style['bubble--wrapper--content']} ${style[`bubble--wrapper--content--${bubbleBgColor}`]}`}>
          <p className={`${style['bubble--wrapper--content--text']}`}>
            {children}
          </p>
          <span className={`${style['bubble--wrapper--content--date']}`}>
            {date}
          </span>
        </div>
      </div>
    </div>
  )
}
