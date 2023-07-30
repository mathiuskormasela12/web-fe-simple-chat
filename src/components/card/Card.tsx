// ========= Card
// import all packages
import React, { type PropsWithChildren } from 'react'

// import style
import style from './style/style.module.sass'

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={style.card}>
      {children}
    </div>
  )
}
