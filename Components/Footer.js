import styles from "../styles/footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from '../public/Picture2.png'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_Items}>
        <div className={styles.footer_logo}>
          <Image src={Logo} layout={"fixed"} width={50} height={50}></Image>
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
