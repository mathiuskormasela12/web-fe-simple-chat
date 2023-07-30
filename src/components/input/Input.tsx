// ========== Input
// import all packages
import React from 'react'

// import style
import style from './style/style.module.sass'

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input {...props} className={style.input} />
  )
}
