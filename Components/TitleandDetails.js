import styles from "../Styles/TitleandDetails.module.scss";
//Function for Titles
export function Title({ Name }) {
  return (
    <div className={styles.Main}>
      <hr />
      <div className={styles.title}>
        <p className={styles.name}>{Name}</p>
        <a className={styles.btn} href="">
          View All
        </a>
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
