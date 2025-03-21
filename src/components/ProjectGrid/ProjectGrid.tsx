'use client'
import React, { useState } from 'react'
import type { Filters, ProjectGridProps } from './types';
import styles from './ProjectGrid.module.scss';
import { DEV_ICON, DESIGN_ICON } from '../Icons';
import CustomLink from '../Link/Link';

export default function ProjectGrid({ projects }: ProjectGridProps) {
    const [filteredCards, setFilteredCards] = useState(projects);
    const [activeFilter, setFilter] = useState<Filters>()

    const filterCards = (filter: Filters) => {

        if (filter === 'Dev') {
            setFilter('Dev');
            const filtered = projects.filter((item) => item.dev);
            setFilteredCards(filtered);
        } else if (filter === 'Design') {
            setFilter('Design');
            const filtered = projects.filter((item) => item.design);
            setFilteredCards(filtered);
        } else {
            setFilter(null);
            setFilteredCards(projects);
        }
    }

    return (
        <div className={styles.base}>
            <div className={styles.filterWrapper}>
                <p>Filter:</p>
                <div className={styles.buttons}>
                    <button onClick={() => filterCards('Dev')} className={activeFilter === 'Dev' ? styles.active : ''}>
                        {DEV_ICON}
                        <span>Dev</span>
                    </button>
                    <button onClick={() => filterCards('Design')} className={activeFilter === 'Design' ? styles.active : ''}>
                        {DESIGN_ICON}
                        <span>Design</span>
                    </button>
                    <button onClick={() => filterCards(null)}>
                        <div>
                            {DEV_ICON}
                            {DESIGN_ICON}
                        </div>
                        <span>See it All!</span>
                    </button>
                </div>
            </div>
            <div className={styles.grid}>
                {filteredCards.map((project, index) => (
                    <article key={`Project-Card-${index}`} className={styles.card}>
                        <img src={project.previewImg} alt={`${project.company} preview`} />
                        <div className={styles.icons}>
                            <h3>{project.company}</h3>
                            <div>
                                {project.dev && DEV_ICON}
                                {project.design && DESIGN_ICON}
                            </div>
                        </div>
                        <ul className={styles.toolList}>
                            {project.tools.map((tool, i) => (
                                <li key={`Project-tool-${i}`}>{tool}</li>
                            ))}
                        </ul>
                        <p>{project.companySummary}</p>
                        <p>{project.projectSummary}</p>
                        {project.slug ? (
                            <CustomLink
                                text='Read More'
                                url={`portfolio${project.slug}`}
                            />
                        ) : <small>Detailed project page coming soon!</small>}
                    </article>
                ))}
            </div>
        </div>
    )
}
