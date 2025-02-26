import Link from 'next/link';
import React from 'react'
import { LinkProps } from './types'
import styles from './Link.module.scss';
import { LINK_ARROW, EXTERNAL_LINK } from '../Icons';

export default function CustomLink({
  text,
  url,
  external = false,
}: LinkProps) {
  if (!url || !text) { return };

  return (
    <Link className={styles.link}
      href={url}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {text}
      {!!external && EXTERNAL_LINK}
      {!external && LINK_ARROW}
    </Link>
  )
}
