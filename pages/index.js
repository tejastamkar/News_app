import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Navbar from "../Components/navBar";
import Footer from "../Components/Footer";
import ImgSelector from "../Components/ImgSelector";
import styles from "../styles/Home.module.css";
import Info from "../Components/Info";
export default function Home() {
  const ImageFun = ImgSelector();
  const ImageSelectorJSX = ImageFun.ImageJSX;
  const Downloadurl = ImageFun.DownloadUrl;
  // const ImageJSX = ImageFun[1];
  // const [Downloadurl, ImageJSX] = ImgSelector();
  // console.log(Downloadurl);
  // const Do
  return (
    <div>
      <Head>
        <title>Admin Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.Main}>
        <div className={styles.Image}>
          <ImageSelectorJSX />
        </div>
        <div className={styles.Info}>
          <Info ImgUrl={Downloadurl} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
