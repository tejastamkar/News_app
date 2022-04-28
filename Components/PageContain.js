import Image from "next/image";
import styles from "../styles/Pages.module.scss";
import { Details } from "./TitleandDetails";
import Footer from "./Footer";
// import BackBtn from "../assets/BackBtn.png";
// import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
export default function PageContain({ Data }) {

  const router = useRouter();
  return (
    <div>
      <button className={styles.backbtn} onClick={() => router.back()}>
        <MdOutlineArrowBackIosNew className={styles.backbtnimg} />
      </button>
      <div className={styles.Main}>
        <div className={styles.ImgContainer}>
          <div className={styles.ImageContainer_Mage}>
            <Image
              src={
                Data.imageUrl
                // "https://firebasestorage.googleapis.com/v0/b/de-weadar.appspot.com/o/img%2FRDayParade.jfif?alt=media&token=61970e57-26e3-4115-b164-5b93b4a3626f"
              }
              width={400}
              height={600}
            />
          </div>
          <div className={styles.InfoContainer}>
            <button className={styles.Btn}>Accept</button>
            <button className={styles.Btn}>Reject</button>
            {/* <p className={styles.line}>---------</p>
            <p className={styles.src}>{Data.src}</p> */}
          </div>
        </div>
        <div className={styles.TextContainer}>
          <Details date={Data.date} src={Data.src} />
          <h2>{Data.name}</h2>
          <p>{Data.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
