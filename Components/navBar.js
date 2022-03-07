import Link from "next/link";
import styles from "../styles/NavBar.module.scss";
import { useState, useEffect } from "react";
// import { BiSearch } from "react-icons/bi";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  //   useEffect(() => {
  //     // if (isOpen) {
  //     //   document.getElementById("Top").style.display = "none";
  //     // } else {
  //     //   document.getElementById("Top").style.display = "block";
  //     // }
  //   }, [isOpen]);

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
            Data Upload
          </a>
        </Link>
        <Link href="/Request" className={styles.navitem}>
          <a
            className={
              isOpen === false
                ? styles.navlink
                : styles.navlink + " " + styles.active
            }
            onClick={openMenu}
          >
            Request
          </a>
        </Link>
        <Link href="/Datatable" className={styles.navitem}>
          <a
            className={
              isOpen === false
                ? styles.navlink
                : styles.navlink + " " + styles.active
            }
            onClick={openMenu}
          >
            DataTables
          </a>
        </Link>
      </div>

      {/* search box */}
      {/* <div style={{ flex: 1 }}>
        <div className={styles.search}>
          <BiSearch className={styles.searchicon} />
        </div>
      </div> */}

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
        <span className={styles.bar_short}></span>
        <span className={styles.bar}></span>
      </button>
    </nav>
  );
}
