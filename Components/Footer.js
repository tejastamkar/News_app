import styles from "../styles/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <div className={styles.footer_Items}>
        <div className={styles.footer_logo}>
          <p>This is logo</p>
        </div>
        <div className={styles.footer_text}>
          <p>Copyright Stuff.</p>
        </div>
      </div>
    </footer>
  );
}
