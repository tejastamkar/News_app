import Image from "next/image";
// import wall from "../assets/Wall.jpg";
import styles from "../styles/Home.module.scss";
import { Details } from "./TitleandDetails";
import Link from "next/link";
import { useEffect, useState } from 'react';
export default function MainTopnews({ data }) {




  return (
    <div className={styles.TopNews}>
      <Link href={`/docs/${data[0].category}/${data[0].id}`}>
        <a className={styles.Main}>
          <div className={styles.ImageContainer}>
            <img
              className={styles.Image}
              alt="Image"
              width={"200"}
              height={"500"}
              layout="intrinsic"
              object-fit="cover"
              src={data[0].imageUrl}
            />
            <Details date={data[0].date} src={data[0].src} />
          </div>
          <h2 className={styles.titles}>{data[0].name}</h2>
          <h6 className={styles.decs}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            voluptates animi. Obcaecati minus nemo id ad? Tempora similique
            iusto sunt ipsum id molestiae officiis quam, fugit ad eum nam animi!
          </h6>
        </a>
      </Link>
      <div className={styles.BigCard}>
        <Link href={`/docs/${data[1].category}/${data[1].id}`}>
          <a className={styles.News}>
            <div className={styles.ImageContainer}>
              <Image
                className={styles.Image}
                alt="Image"
                width={1000}
                height={150}
                layout="fixed"
                src={data[1].imageUrl}
              />
            </div>
            <div className={styles.heading}>
              <Details date={data[1].date} src={data[1].src} />
              {data[1].name}
            </div>
          </a>
        </Link>
        <Link href={`/docs/${data[2].category}/${data[2].id}`}>
          <a className={styles.News}>
            <div className={styles.ImageContainer}>
              <Image
                className={styles.Image}
                alt="Image"
                width={1000}
                height={150}
                layout="fixed"
                src={data[2].imageUrl}
              />
            </div>
            <div className={styles.heading}>
              <Details date={data[2].date} src={data[2].src} />
              {data[2].name}
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
