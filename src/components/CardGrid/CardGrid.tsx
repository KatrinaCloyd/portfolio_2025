import React from 'react'
import styles from './CardGrid.module.scss'
import { CardGridProps } from './types'

export default function CardGrid({list}: CardGridProps) {
  return (
    <div className={styles.base}>
        {list?.map((toolbox, index) => (
          <article key={`toolbox-${index}`} className={styles.card}>
            <h3>{toolbox.heading}</h3>
            <ul>
              {toolbox.items.map((tool, i) => (
                <li key={`listitem-${i}`}>{tool}</li>
              ))}
            </ul>
          </article>
        ))}
    </div>
  )
}
