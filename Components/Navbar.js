import Link from "next/link";
import styles from "../styles/NavBar.module.scss";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  useEffect(() => {
    if (isOpen) {
      document.getElementById("Top").style.display = "none";
    } else {
      document.getElementById("Top").style.display = "block";
    }
  }, [isOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a className={styles.logo}>Logo</a>
        </Link>
      </div>

      {/* navbar elements */}
      <div
        className={
          (styles.navBtn,
          isOpen === false
            ? styles.navmenu
            : styles.navmenu + " " + styles.active)
        }
      >
        <Link href="/" className={styles.navitem}>
          <a
            className={
              isOpen === false
                ? styles.navlink
                : styles.navlink + " " + styles.active
            }
            onClick={openMenu}
          >
            Home
          </a>
        </Link>
        <Link href="/docs/News" className={styles.navitem}>
          <a
            className={
              isOpen === false
                ? styles.navlink
                : styles.navlink + " " + styles.active
            }
            onClick={openMenu}
          >
            News
          </a>
        </Link>

        <Link href="/docs/Magazine" className={styles.navitem}>
          <a
            className={
              isOpen === false
                ? styles.navlink
                : styles.navlink + " " + styles.active
            }
            onClick={openMenu}
          >
            Magazine
          </a>
        </Link>

        <Link href="/docs/Podcast" className={styles.navitem}>
          <a
            className={
              isOpen === false
                ? styles.navlink
                : styles.navlink + " " + styles.active
            }
            onClick={openMenu}
          >
            Podcast
          </a>
        </Link>
        <Link href="/Aboutus" className={styles.navitem}>
          <a
            className={
              isOpen === false
                ? styles.navlink
                : styles.navlink + " " + styles.active
            }
            onClick={openMenu}
          >
            About Us
          </a>
        </Link>
      </div>

      {/* search box */}
      <div className={styles.search}>
        <h2>Search</h2>
      </div>

      {/* responsive navbar */}
      <button
        className={
          isOpen === false
            ? styles.hamburger
            : styles.hamburger + " " + styles.active
        }
        onClick={openMenu}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </nav>
  );
}
