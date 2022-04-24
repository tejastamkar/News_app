import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NavBar.module.scss";
// import "../styles/NavBar.scss";
import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import SearchBar from "./SearchBar";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import Logo from '../public/Picture2.png'
export default function Navbar({ main }) {
  // for mobile view navbar
  const Data = [];
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  // for search bar
  const [OpenSearch, setOpenSearch] = useState(false);

  // for Underline
  const router = useRouter();
  const { params = [] } = router.query;

  const [Underline, setUnderline] = useState("Home");

  useEffect(() => {
    switch (params[0]) {
      case "News":
        setUnderline("News");
        break;
      case "Books":
        setUnderline("Books");
        break;
      case "Magazine":
        setUnderline("Magazine");
        break;
      case "Articles":
        setUnderline("Articles");
        break;
      // case undefined:
      //   if (router.route == "/docs/CreateArticle") {
      //     setUnderline("");
      //   } else {
      //     setUnderline("Home");
      //   }
      //   break;
      default:
        setUnderline("Home");
        break;
    }
  }, [params]);

  useEffect(
    (main) => {
      if (main) {
        if (isOpen) {
          document.getElementById("Top").style.display = "none";
        } else {
          document.getElementById("Top").style.display = "block";
        }
      }
    },
    [isOpen]
  );

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
          <a className={styles.logo}>
            <Image src={Logo} layout={"fixed"} width={70} height={70}></Image>
          </a>
        </Link>
      </div>

      {/* navbar elements */}
      {
        OpenSearch ? (
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
                  (isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active,
                    Underline === "Home" ? styles.underline : styles.noline)
                }
                onClick={openMenu}
              >
                Home
              </a>
            </Link>
            <Link href="/docs/News" className={styles.navitem}>
              <a
                className={
                  (isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active,
                    Underline === "News" ? styles.underline : styles.noline)
                }
                onClick={openMenu}
              >
                News
              </a>
            </Link>

            <Link href="/docs/Magazine" className={styles.navitem}>
              <a
                className={
                  (isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active,
                    Underline === "Magazine" ? styles.underline : styles.noline)
                }
                onClick={openMenu}
              >
                Magazine
              </a>
            </Link>

            <Link href="/docs/Books" className={styles.navitem}>
              <a
                className={
                  (isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active,
                    Underline === "Books" ? styles.underline : styles.noline)
                }
                onClick={openMenu}
              >
                Books
              </a>
            </Link>
            <Link href="/docs/Articles" className={styles.navitem}>
              <a
                className={
                  (isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active,
                    Underline === "Articles" ? styles.underline : styles.noline)
                }
                onClick={openMenu}
              >
                Articles
              </a>
            </Link>
          </div>
        )
      }
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
    </nav >
  );
}
