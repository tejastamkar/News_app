import { Details } from "./TitleandDetails";
import styles from "../styles/Cards.module.scss";
import Image from "next/image";
import Link from "next/link";
// import PodCast from "./Pod";
// import MusicData from "../assets/Data.json";
export default function Cards({ Items, data }) {
  const Name = Items.toString().toLowerCase();
  if (Name == "books" && data) {
    return (
      <div className={styles.all__Cards}>
        {data.map((data, index) => (
          <Books key={index} data={data} />
        ))}
      </div>
    );
  }
  if (Name == "magazine" && data) {
    return (
      <div className={styles.all__Cards}>
        {data.map((data, index) => (
          <Books key={index} data={data} />
        ))}
      </div>
    );
  }
  if (Name == "news" && data) {
    return (
      <div className={styles.all__Cards}>
        {data.map((data, index) => (
          <News key={index} data={data} />
        ))}
      </div>
    );
  }
  if (Name == "articles" && data) {
    return (
      <div className={styles.all__Cards}>
        {data.map((data, index) => (
          <Books key={index} data={data} />
        ))}
      </div>
    );
  }
  return <h2>No Data found</h2>;
}

function News({ data }) {
  return (
    <Link href={`/docs/news/${data.id}`}>
      <a className={styles.Card}>
        <div className={styles.ImageContainer}>
          <Image
            className={styles.Image}
            src={data.url}
            width={1000}
            height={700}
            alt="newImage"
          />
          <Details date={data.date} src={data.src}/>
        </div>
        <p className={styles.Tiles}>{data.name}</p>
      </a>
    </Link>
  );
}
function Books({ data }) {
  return (
    <Link href={`/docs/books/${data.id}`}>
      <a className={styles.Card}>
        <div className={styles.ImageContainer}>
          <Image
            className={styles.Image}
            src={data.url}
            width={700}
            height={1000}
            alt="newImage"
          />
          <Details date={data.date} src={data.src}/>
        </div>
        <p className={styles.Tiles}>{data.name}</p>
      </a>
    </Link>
  );
}
