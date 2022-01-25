import Image from "next/image";
import wall from "../assets/Wall.jpg";
import styles from "../styles/Home.module.scss";
import { Details } from "./TitleandDetails";
export default function MainTopnews({ data }) {
  return (
    <div className={styles.TopNews}>
      <div className={styles.Main}>
        <div className={styles.ImageContainer}>
          <Image
            className={styles.Image}
            alt="Image"
            width={"1000"}
            height={"500"}
            layout="intrinsic"
            src={data[0].url}
          />
          <Details />
        </div>
        <h2 className={styles.titles}>{data[0].name}</h2>
        <h6 className={styles.decs}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          voluptates animi. Obcaecati minus nemo id ad? Tempora similique iusto
          sunt ipsum id molestiae officiis quam, fugit ad eum nam animi!
        </h6>
      </div>
      <div className={styles.BigCard}>
        <div className={styles.News}>
          <div className={styles.ImageContainer}>
            <Image
              className={styles.Image}
              alt="Image"
              width={"1000px"}
              height={"150px"}
              layout="fixed"
              src={data[1].url}
            />
          </div>
          <div className={styles.heading}>
            <Details />
            {data[1].name}
          </div>
        </div>
        <div className={styles.News}>
          <div className={styles.ImageContainer}>
            <Image
              className={styles.Image}
              alt="Image"
              width={"1000px"}
              height={"150px"}
              layout="fixed"
              src={data[2].url}
            />
          </div>
          <div className={styles.heading}>
            <Details />
            {data[2].name}
          </div>
        </div>
      </div>
    </div>
  );
}
