'use client'
import React, { useState } from 'react'
import type { CarouselProps } from './types'
import CustomLink from '../Link/Link';
import { LINK_ARROW } from '../Icons';
import styles from './Carousel.module.scss'

export default function Carousel({ projects }: CarouselProps) {
    const topFive = projects.slice(0, 5);
    const [current, setCurrent] = useState(0);

    const clickNext = () => {
        if (current === 4) {
            setCurrent(0);
        } else setCurrent(prev => prev + 1);
    };
    const clickPrevious = () => {
        if (current === 0) {
            setCurrent(4);
        } else setCurrent(prev => prev - 1);
    };

    const clickToSet = (item: number) => {
        setCurrent(item);
    };

    //TODO safari tab order not getting prev next buttons or indicator buttons
    //TODO add html handling to add italics to WWDITS title

    return (
        <div className={styles.base}>
            <div className={styles.slideWrapper}>
                {topFive.map((project, index) => (
                    <div
                        key={`slide${index}`}
                        aria-current={current === index ? 'step' : false}
                        className={styles.slide}
                    >
                        <div className={styles.imgWrapper}>
                            <img src={project.previewImg} alt={`${project.company} preview`} />
                        </div>
                        <div>
                            <h3>{project.company}</h3>
                            <p>{project.companySummary}</p>
                            <p>{project.projectSummary}</p>
                            {project.slug ? (
                                <CustomLink
                                    text='Read More'
                                    url={`portfolio${project.slug}`}
                                    tabable={current === index ? true : false}
                                />
                            ) : <small>Project detail page coming soon.</small>}
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.buttonWrapper}>
                <button onClick={clickPrevious} className={styles.prevBtn}>
                    <span className='sr'>Prev</span>
                    {LINK_ARROW}
                </button>
                <button onClick={clickNext} className={styles.nextBtn}>
                    <span className='sr'>Next</span>
                    {LINK_ARROW}
                </button>
            </div>
            <div className={styles.indicators}>
                {topFive.map((item, index) => (
                    <button
                        key={`slide-indicator#${index}`}
                        className={current === index ? styles.active : ''}
                        onClick={() => clickToSet(index)}
                    >
                        <span className='sr'>
                            {`Slide ${index + 1}: ${item.company}`}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    )
}
