import React from 'react'
import styles from './Header.module.scss'
import { HeaderProps } from './types'

export default function Header({heading, copy}: HeaderProps) {
  return (
    <div className={styles.base}>
        <h1>{heading}: heading in Header - Bloop!</h1>
        <p>{copy}</p>
    </div>
  )
}
