import React from 'react'
import styles from './Display.module.css'
export const Display = ({displayVal}) => {
  return (
    <input className={styles.display} type="text" value={displayVal} readOnly></input>

  )
}
