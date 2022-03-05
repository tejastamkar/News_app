import Link from "next/link";
import styles from "../styles/NavBar.module.scss";
import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import SearchBar from "./SearchBar";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { AiOutlineCloseCircle } from "react-icons/ai";
export default function Navbar() {
  const Data = [];
  const [OpenSearch, setOpenSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  useEffect(() => {
    if (isOpen) {
      document.getElementById("Top").style.display = "none";
    } else {
      document.getElementById("Top").style.display = "block";
    }
  }, [isOpen]);

  useEffect(async () => {
    await getDocs(collection(db, "testing")).then(async (snapshort) => {
      snapshort.docs.forEach((doc) => {
        Data.push({ ...doc.data(), id: doc.id });
      });
    });
    await getDocs(collection(db, "book testing")).then(async (snapshort) => {
      snapshort.docs.forEach((doc) => {
        Data.push({ ...doc.data(), id: doc.id });
      });
    });
  }, [Data]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a className={styles.logo}>Logo</a>
        </Link>
      </div>

      {/* navbar elements */}
      {OpenSearch ? (
        <div
          className={
            (styles.SearchBar,
            isOpen === false
              ? styles.navmenu
              : styles.navmenu + " " + styles.active)
          }
        >
          <SearchBar placeholder="Enter a Book Name..." data={Data} />
        </div>
      ) : (
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
          <Link href="/aboutus" className={styles.navitem}>
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
      )}
      {/* search box */}
      <div style={{ flex: 1 }}>
        {OpenSearch ? (
          <div
            className={styles.search}
            onClick={() => {
              setOpenSearch(!OpenSearch);
            }}
          >
            <AiOutlineCloseCircle className={styles.searchicon} />
          </div>
        ) : (
          <div
            className={styles.search}
            onClick={() => {
              setOpenSearch(!OpenSearch);
            }}
          >
            <BiSearch className={styles.searchicon} />
          </div>
        )}
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
        <span className={styles.bar_short}></span>
        <span className={styles.bar}></span>
      </button>
    </nav>
  );
}
