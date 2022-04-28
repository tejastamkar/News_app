import Image from "next/image";
import styles from "../styles/Pages.module.scss";
import { Details } from "./TitleandDetails";
import Footer from "./Footer";
import { useRouter } from "next/router";
import BackBtn from "../assets/BackBtn.png";
import { useEffect, useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
export default function PageContain({ Data, name }) {
  const router = useRouter();

  return name === "News" ? (
    <div>
      <button className={styles.backbtn} onClick={() => router.back()}>
        <MdOutlineArrowBackIosNew className={styles.backbtnimg} />
      </button>
      <div className={styles.Main}>
        <div className={styles.ImgContainer}>
          <div className={styles.ImageContainer}>
            <Image src={Data[0].imageUrl} width={900} height={500} />
          </div>
          <div className={styles.InfoContainer}>
            <button className={styles.Btn}>Read More</button>
            <p className={styles.line}>---------</p>
            <p className={styles.src}>{Data[0].src}</p>
          </div>
        </div>
        <div className={styles.TextContainer}>
          <Details date={Data[0].date} src={Data[0].src} />
          <h2>{Data[0].name}</h2>
          <p>{Data[0].description}</p>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div>
      <button className={styles.backbtn} onClick={() => router.back()}>
        <MdOutlineArrowBackIosNew className={styles.backbtnimg} />
      </button>
      <div className={styles.Main}>
        <div className={styles.ImgContainer}>
          <div className={styles.ImageContainer_Mage}>
            <Image
              src={Data[0].imageUrl}
              width={400}
              height={600}
            />
          </div>
          <div className={styles.InfoContainer}>
            <button className={styles.Btn} onClick={() => { window.location.href = 'https://ide.geeksforgeeks.org' }}>Read More</button>
            <p className={styles.line}>---------</p>
            <p className={styles.src}>{Data[0].src}</p>
          </div>
        </div>
        <div className={styles.TextContainer}>
          <Details date={Data[0].date} src={Data[0].src} />
          <h2>{Data[0].name}</h2>
          <p>{Data[0].description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
