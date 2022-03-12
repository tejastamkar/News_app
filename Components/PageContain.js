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
            <Image src={Data[0].url} width={900} height={500} />
          </div>
          <div className={styles.InfoContainer}>
            <button className={styles.Btn}>Read More</button>
            <p className={styles.line}>---------</p>
            <p className={styles.src}>CDN</p>
          </div>
        </div>
        <div className={styles.TextContainer}>
          <Details />
          <h2>{Data[0].name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam
            velit error quisquam porro, odit blanditiis consequatur omnis amet,
            perferendis officiis similique eius esse rerum veniam quo vero harum
            hic quibusdam iusto. Facere quas dolore eveniet assumenda minima
            repudiandae cupiditate dolores amet aut? Iure tenetur suscipit
            laboriosam sunt cumque placeat unde quae officiis veritatis, eius,
            quos dolores qui quam neque inventore error exercitationem omnis
            doloribus. Necessitatibus doloremque aliquam magnam est, eaque
            repellendus consectetur? Magnam aperiam cumque laborum modi dolorum
            inventore beatae laboriosam atque nobis sed quos quidem voluptates
            ea dignissimos magni doloremque consequuntur odit quis aliquam,
            dolor debitis eos provident! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellendus reiciendis hic veritatis? Distinctio,
            nihil officiis quis et quam nesciunt sapiente aperiam totam pariatur
            iure ipsa, corrupti odio omnis maxime ipsam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Perferendis fugiat unde ad
            inventore natus. Corporis modi, rerum earum sint sequi velit ratione
            necessitatibus optio magnam mollitia sed. Atque eos eum pariatur,
            ex, suscipit illo numquam laboriosam facilis quo, nam cum odio odit
            omnis quia error voluptates laudantium. Voluptatibus vero recusandae
            at laborum aliquam error delectus, blanditiis dignissimos id libero,
            incidunt nisi eveniet fugit minima excepturi repellendus assumenda
            dolor earum optio dicta? Aut dolore debitis quis. Quisquam officiis
            iusto quibusdam expedita veniam molestias saepe, ipsum quae aliquam
            provident fugiat dolore quia adipisci, cumque pariatur quas
            temporibus voluptates quos harum! Recusandae, dolorum.
          </p>
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
              src={
                Data[0].url
                // "https://firebasestorage.googleapis.com/v0/b/de-weadar.appspot.com/o/img%2FRDayParade.jfif?alt=media&token=61970e57-26e3-4115-b164-5b93b4a3626f"
              }
              width={400}
              height={600}
            />
          </div>
          <div className={styles.InfoContainer}>
            <button className={styles.Btn}>Read More</button>
            <p className={styles.line}>---------</p>
            <p className={styles.src}>CDN</p>
          </div>
        </div>
        <div className={styles.TextContainer}>
          <Details />
          <h2>{Data[0].name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam
            velit error quisquam porro, odit blanditiis consequatur omnis amet,
            perferendis officiis similique eius esse rerum veniam quo vero harum
            hic quibusdam iusto. Facere quas dolore eveniet assumenda minima
            repudiandae cupiditate dolores amet aut? Iure tenetur suscipit
            laboriosam sunt cumque placeat unde quae officiis veritatis, eius,
            quos dolores qui quam neque inventore error exercitationem omnis
            doloribus. Necessitatibus doloremque aliquam magnam est, eaque
            repellendus consectetur? Magnam aperiam cumque laborum modi dolorum
            inventore beatae laboriosam atque nobis sed quos quidem voluptates
            ea dignissimos magni doloremque consequuntur odit quis aliquam,
            dolor debitis eos provident! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellendus reiciendis hic veritatis? Distinctio,
            nihil officiis quis et quam nesciunt sapiente aperiam totam pariatur
            iure ipsa, corrupti odio omnis maxime ipsam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Perferendis fugiat unde ad
            inventore natus. Corporis modi, rerum earum sint sequi velit ratione
            necessitatibus optio magnam mollitia sed. Atque eos eum pariatur,
            ex, suscipit illo numquam laboriosam facilis quo, nam cum odio odit
            omnis quia error voluptates laudantium. Voluptatibus vero recusandae
            at laborum aliquam error delectus, blanditiis dignissimos id libero,
            incidunt nisi eveniet fugit minima excepturi repellendus assumenda
            dolor earum optio dicta? Aut dolore debitis quis. Quisquam officiis
            iusto quibusdam expedita veniam molestias saepe, ipsum quae aliquam
            provident fugiat dolore quia adipisci, cumque pariatur quas
            temporibus voluptates quos harum! Recusandae, dolorum.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
