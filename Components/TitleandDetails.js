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

  if (Name === "Top Recommand For You") {
    return (
      <div className={styles.Main}>

        <div className={styles.title}>
          <p className={styles.name} style={{ margin: "-10px auto" }}>
            {Name}
          </p>
        </div>

      </div>
    );
  }
  if (!View) {
    return (
      <div className={styles.Main}>

        <div className={styles.title}>
          <p className={styles.name}>{Name}</p>
        </div>

      </div>
    );
  }
  return (
    <div className={styles.Main}>

      <div className={styles.title}>
        <p className={styles.name}>{Name}</p>
        <Link href={`/docs/${Name}`}>
          <a className={styles.btn}>View All</a>
        </Link>
      </div>

    </div>
  );
}

//Function for Details
export function Details({ date, src }) {
  return (
    <div className={styles.details}>
      <p className={styles.date}>{date}</p>
      <p className={styles.line}>---------</p>
      <p className={styles.src}>{src}</p>
    </div>
  );
}
