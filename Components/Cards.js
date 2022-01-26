import { Details, Title } from "./TitleandDetails";
import { useState, useEffect } from "react";
import styles from "../styles/Cards.module.scss";
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export default function Cards({ Items, data }) {
  if ((Items == "books" || Items == "Books") && data) {
    return (
      <div className={styles.all__Cards}>
        {data.map((data, index) => (
          <Books key={index} data={data} />
        ))}
      </div>
    );
  }
  if (Items == "News" && data) {
    return (
      <div className={styles.all__Cards}>
        {data.map((data, index) => (
          <News key={index} data={data} />
        ))}
      </div>
    );
  }
  return <h2>No Data found</h2>;
}

function News({ data }) {
  return (
    <div className={styles.Card}>
      <div className={styles.ImageContainer}>
        <Image
          className={styles.Image}
          src={data.url}
          width={1000}
          height={700}
          alt="newImage"
        />
        <Details />
      </div>
      <p className={styles.Tiles}>{data.name}</p>
    </div>
  );
}
function Books({ data }) {
  return (
    <div className={styles.Card}>
      <div className={styles.ImageContainer}>
        <Image
          className={styles.Image}
          src={data.url}
          width={700}
          height={1000}
          alt="newImage"
        />
        <Details />
      </div>
      <p className={styles.Tiles}>{data.name}</p>
    </div>
  );
}
