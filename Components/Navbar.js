import Link from "next/link";
import { useState } from "react";
import styles from "../styles/NavBar.module.scss";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <nav className={styles.navbar}>
      {/* logo here */}
      <div className={styles.logo}>
        <Link href="/">
          <a className={styles.logo}>Logo</a>
        </Link>
      </div>

      {/* navbar elements */}
      <div className={styles.navBtn}>
        <div
          className={
            isOpen === false
              ? styles.navmenu
              : styles.navmenu + " " + styles.active
          }
        >
          <a
            href="/"
            className={styles.navitem}
            className={
              isOpen === false
                ? styles.navlink
                : styles.navlink + " " + styles.active
            }
            onClick={openMenu}
          >
            Home
          </a>

          <a
            href="/topnews"
            className={styles.navitem}
            className={
              isOpen === false
                ? styles.navlink
                : styles.navlink + " " + styles.active
            }
            onClick={openMenu}
          >
            Top News
          </a>

          <a
            href="/magazine"
            className={styles.navitem}
            className={
              isOpen === false
                ? styles.navlink
                : styles.navlink + " " + styles.active
            }
            onClick={openMenu}
          >
            Magazine
          </a>

          <a
            href="/magazine"
            className={styles.navitem}
            className={
              isOpen === false
                ? styles.navlink
                : styles.navlink + " " + styles.active
            }
            onClick={openMenu}
          >
            Podcast
          </a>

          <a
            href="/magazine"
            className={styles.navitem}
            className={
              isOpen === false
                ? styles.navlink
                : styles.navlink + " " + styles.active
            }
            onClick={openMenu}
          >
            About Us
          </a>
        </div>
      </div>

      {/* search box */}
      <div className={styles.search}>
        <h2>Search</h2>
      </div>

      {/* responsive bar  */}
      <div>
        <button
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          }
          onClick={openMenu}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>
      </div>
    </nav>
  );
}
