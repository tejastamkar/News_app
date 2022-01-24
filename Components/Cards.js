import { Details, Title } from "./TitleandDetails";
import { useState, useEffect } from "react";
import styles from '../styles/Cards.module.scss'
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export default function Cards() {
    const [data, setData] = useState([])
    const [LimitData, setLimitData] = useState([]);
    const [load, setload] = useState(false)
    useEffect(async () => {
        await getDocs(collection(db, "testing")).then(async (snapshort) => {
            snapshort.docs.forEach((doc) => {
                data.push({ ...doc.data(), id: doc.id });
                // this.setState({ isLoading: true });
                setload(false)
            });
        });
        setload(true)
        // for (var i = 0; i < 3; i++) {
        //     LimitData.push(data[i])
        // }
        // console.log(data)
    }, []);
    return (load ? (
        <div className={styles.all__Cards}>
            {data.map((data, index) => (
                <Card key={index} data={data} />))}
        </div>
    ) : (
        <h1>loading..</h1>
    )

    );
}


function Card({ data }) {
    return (<div className={styles.Card}>
        <div className={styles.ImageContainer}>
            <Image className={styles.Image} src={data.url} width={1000} height={400} alt="newImage" />
            <Details />
        </div>
        <p className={styles.Tiles}>{data.name}</p>
    </div>)
}