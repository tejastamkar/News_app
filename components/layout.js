import Link from 'next/link'
import { useState } from "react";
import Footer from './Footer';
import styles from "../styles/layout.module.css";
// import styles2 from '../styles/Home.module.css';
export default function Layout({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);
    return <>
    

        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href='/'>
                    <a className={styles.logo}>Logo</a>
                </Link>
            </div>



            {/* navbar elements */}
            <div className={styles.navBtn} className={isOpen === false ?
                    styles.navmenu : styles.navmenu + ' ' + styles.active}>
                    
                        <Link href='/' className={styles.navitem}>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Home</a>
                        </Link>
                        <Link href='/topnews' className={styles.navitem}>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Top News</a>
                        </Link>
                    
                    
                        <Link href='/magazine' className={styles.navitem}>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Magazine</a>
                        </Link>
                    
                    
                        <Link href='/magazine' className={styles.navitem}>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Podcast</a>
                        </Link>
                        <Link href='/magazine' className={styles.navitem}>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>About Us</a>
                        </Link>
                    </div>



            {/* search box */}
            <div className={styles.search}>
                <h2>Search</h2>
            </div>



            {/* responsive navbar */}
            <button className={isOpen === false ?
                styles.hamburger : styles.hamburger + ' ' + styles.active}
                onClick={openMenu}
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
        </nav>
        {/* </header> */}
        {children}
        <Footer />
    </>
}