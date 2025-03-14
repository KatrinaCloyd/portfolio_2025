'use client'
import React, { useEffect, useRef, useState } from 'react';
import { VideoProps } from './types';
import { PAUSE, PLAY } from '../Icons';
import styles from './Video.module.scss';

export default function Video({ video, poster }: VideoProps) {
    const [paused, setPaused] = useState<boolean>(false);
    const [reduceMotion, setReduceMotion] = useState<boolean>(false);

    const $video = useRef<HTMLVideoElement>(null);

    const togglePlay = (e: MouseEvent | KeyboardEvent): void => {
        e.stopPropagation();
        if ($video.current) {
            if ($video.current.paused) {
                $video.current.play();
                setPaused(false);
            }
            else {
                $video.current.pause();
                setPaused(true);
            }
        }
    };

    useEffect(() => {
        const noMotionPref = window.matchMedia(`(prefers-reduced-motion: reduce)`);
        setReduceMotion(noMotionPref.matches);
        setPaused(noMotionPref.matches)
    }, [reduceMotion])

    //TODO maybe add button to open full screen mode?


    return (
        <div className={styles.base}
            onClick={(e) => togglePlay(e as unknown as MouseEvent)}
            onKeyDown={(e) => togglePlay(e as unknown as KeyboardEvent)}
            tabIndex={0}
        >
            <video
                ref={$video}
                src={video}
                poster={poster}
                autoPlay={!reduceMotion}
                muted
                loop
                playsInline
            />
            <div className={styles.status}>
                {!!paused ? (
                    <>
                        <p className='sr'>Video paused. Click to play.</p>
                        {PLAY}
                    </>
                ) : (
                    <>
                        <p className='sr'>Video playing. Click to pause.</p>
                        {PAUSE}
                    </>
                )}
            </div>
        </div>
    )
}
