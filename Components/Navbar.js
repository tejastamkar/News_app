import Link from "next/link";
import { useState } from "react";
import styles from "../styles/NavBar.module.scss";
import SearchBar from "../Components/SearchBar";
import BookData from "../pages/Data.json";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
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
            Top News
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
      {/* <div className={styles.search}> */}
      <div className="App">
      <SearchBar placeholder="Enter a Book Name..." data={BookData} />
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
        <span className={styles.bar1}></span>
        <span className={styles.bar2}></span>
        {/* <span className={styles.bar}></span> */}
        {/* <span className={styles.bar}></span> */}
      </button>
    </nav>
  );
}
