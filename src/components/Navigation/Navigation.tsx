'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Navigation.module.scss';
import { BURGER, CLOSE } from '../Icons';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const $menu = useRef<HTMLDivElement | null>(null);
    const [navOpen, setNavOpen] = useState(false);
    const [path, setPath] = useState<string | null>(null);
    const pathname = usePathname();

    const listenClickOutside: EventListener = e => {
		if ($menu.current && !$menu.current.contains(e.target as Node)) {
			setNavOpen(false);
		}
	};

    const listenKeystroke = (e: KeyboardEvent)=> {
		if (e.key === 'Escape') {
			setNavOpen(false);
		}
	};

    const setHash = (hash: string) => {
        setNavOpen(false);
        setPath(hash);
    }
    
    useEffect(() => {
        if (typeof window !== "undefined" ) {
            const fullPath = pathname + window.location.hash;
            setPath(fullPath);
        }
    }, [pathname]);


    // TODO trap keyboard tabbing to stay within nav when its open
	useEffect(() => {
        if(navOpen){
            document.addEventListener('click', listenClickOutside);
            document.addEventListener('keyup', listenKeystroke);
            
            //TODO: fix body scroll lock when nav is open
            document.body.style.overflow = 'hidden'; // not working
            
            return () => {
                document.removeEventListener('click', listenClickOutside);
                document.removeEventListener('keyup', listenKeystroke);
            };
        } else {
            document.body.style.overflow = 'auto';
        }
	}, [navOpen]);

    return (
        <nav className={styles.base}>
            <Link href='/'>
            <picture>
                <source srcSet="/name_mobile.png 236w" media="(max-width: 1000px)"/>
                <source srcSet="/name.png 644w"/>
                <img
                    src="/name.png"
                    alt='Katrina Cloyd logo'
                    className={styles.logo}
                />
            </picture>
                <span className='sr'>Home</span>
            </Link>
            <button
                onClick={()=>setNavOpen((prev) => !prev)}
                className={`${styles.icon} ${styles.burger}`}
            >{BURGER}
                <span className='sr'>Open Menu</span>
            </button>
            {!!navOpen && 
                <div className={styles.navWrapper}>
                    <div className={styles.blur}></div>
                    <div className={styles.nav} ref={$menu}>
                        <button
                            onClick={()=>setNavOpen(false)}
                            className={`${styles.icon} ${styles.close}`}
                        >{CLOSE}
                            <span className='sr'>Close Menu</span>
                        </button>
                        <ul>
                            <li>
                                <Link href='/'
                                    aria-disabled={(path === '/') ? true : undefined}
                                    aria-current={path === '/' ? 'page' : undefined}
                                    onClick={()=>setHash('/')}
                                >Home</Link>
                            </li>
                            <li>
                                <Link href='/#contact'
                                    aria-disabled={(path === '/#contact') ? true : undefined}
                                    aria-current={path === '/#contact' ? 'page' : undefined}
                                    onClick={()=>setHash('/#contact')}
                                >Contact</Link>
                            </li>
                            <li>
                                <Link href='/about'
                                    aria-disabled={(path === '/about') ? true : undefined}
                                    aria-current={path === '/about' ? 'page' : undefined}
                                >About</Link>
                            </li>
                            <li>
                                <Link href='/portfolio'
                                    aria-disabled={(path === '/portfolio') ? true : undefined}
                                    aria-current={path === '/portfolio' ? 'page' : undefined}
                                >Portfolio</Link>
                            </li>
                        </ul>
                    </div>
                </div> 
            }
        </nav>
    )
}
