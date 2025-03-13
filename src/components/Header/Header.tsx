import React from 'react';
import type { HeaderProps } from './types';
import { DESIGN_ICON, DEV_ICON } from '../Icons';
import styles from './Header.module.scss';

export default function Header({ company, design, dev, tools }: HeaderProps) {
    return (
        <header className={styles.base}>
            <div>
                <h1>{company}</h1>
                <div className={styles.mobile}>
                    {dev && DEV_ICON}
                    {design && DESIGN_ICON}
                </div>
            </div>
            <div className={styles.wrapper}>
                <ul>
                    {tools.map((tool, i) => <li key={`project-tool${i}`}>{tool}</li>)}
                </ul>
                <div className={styles.desktop}>
                    {dev && DEV_ICON}
                    {design && DESIGN_ICON}
                </div>
            </div>
        </header>
    )
}
