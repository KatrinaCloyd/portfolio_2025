import Link from 'next/link';
import React from 'react'
import { LinkProps } from './types'
import styles from './Link.module.scss';

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
        STYLE ME! 
        {!!external && 
            <svg viewBox="0 0 14 14">
                <path d="M1 7l12 0" />
                <path d="M6 1l7 6" />
                <path d="M6 13l7 -6" />
            </svg>
        }
        {!external &&
            <svg viewBox="0 0 14 14">
                <path d="M1 7l12 0" />
                <path d="M6 1l7 6" />
                <path d="M6 13l7 -6" />
            </svg>
        }
    </Link>
  )
}
