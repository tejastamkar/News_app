import styles from "../styles/footer.module.scss";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_Items}>
        <div className={styles.footer_logo}>
          <p>This is logo</p>
        </div>
        <div className={styles.footer_text}>
          <p>@2022 Janan</p>
          <Link href="/docs/CreateArticle" >
            <a className={styles.Submit}>Submit My Article</a>
          </Link>
          <p>Privacy</p>
          <p className={styles.Aboutus}>About Us</p>
        </div>
      </div>
    </footer>
  );
}
