import styles from "../styles/Pages.module.scss";
import { useState } from "react";
export default function Temp() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <div className={styles.Main}>
      <div className={styles.NavBtn}>
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
      </div>
      <div className={styles.NavBtn}>News</div>
      <div className={styles.NavBtn}>Books</div>
      <div className={styles.NavBtn}>Books</div>
      <div className={styles.NavBtn}>Books</div>
    </div>
  );
}
