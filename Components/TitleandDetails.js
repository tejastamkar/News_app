import Link from "next/link";
import styles from "../styles/TitleandDetails.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
//Function for Titles
export function Title({ Name }) {
  const router = useRouter();
  const { params = [] } = router.query;
  const [View, setView] = useState(true);
  useEffect(() => {
    if (params !== undefined && params[0] === Name) {
      setView(false);
    }
  }, []);

  if (Name === "Top News") {
    return (
      <div className={styles.Main}>
        <hr />
        <div className={styles.title}>
          <p className={styles.name} style={{ margin: "-10px auto" }}>
            {Name}
          </p>
        </div>
        <hr />
      </div>
    );
  }
  if (!View) {
    return (
      <div className={styles.Main}>
        <hr />
        <div className={styles.title}>
          <p className={styles.name}>{Name}</p>
        </div>
        <hr />
      </div>
    );
  }
  return (
    <div className={styles.Main}>
      <hr />
      <div className={styles.title}>
        <p className={styles.name}>{Name}</p>
        <Link href={`/docs/${Name}`}>
          <a className={styles.btn}>View All</a>
        </Link>
      </div>
      <hr />
    </div>
  );
}

//Function for Details
export function Details() {
  return (
    <div className={styles.details}>
      <p className={styles.date}>Feb 23</p>
      <p className={styles.line}>---------</p>
      <p className={styles.src}>CDN</p>
    </div>
  );
}
