import { Details, Title } from "./TitleandDetails";
import { useState, useEffect } from "react";
import styles from "../styles/Cards.module.scss";
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export default function Cards({ Items, data }) {
  if (Items == "books" && data) {
    return (
      <div className={styles.all__Cards}>
        {data.map((data, index) => (
          <Books key={index} data={data} />
        ))}
      </div>
    );
  }
  return data ? (
    <div className={styles.all__Cards}>
      {data.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </div>
  ) : (
    <h1>loading..</h1>
  );
}

function Card({ data }) {
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
