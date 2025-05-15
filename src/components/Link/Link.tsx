import React from 'react'
import type { LinkProps } from './types'
import Link from 'next/link';
import { LINK_ARROW, EXTERNAL_LINK } from '../Icons';
import styles from './Link.module.scss';

export default function CustomLink({
  text,
  url,
  external = false,
  tabable = true,
}: LinkProps) {
  if (!url || !text) { return };

  return (
    <Link className={styles.link}
      href={url}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
      tabIndex={!!tabable ? 0 : -1}
    >
      {text}
      {!!external && <span className='srX'>(opens in a new tab)</span>}
      {!!external ? EXTERNAL_LINK : LINK_ARROW}
    </Link>
  )
}
