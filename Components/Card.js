import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Cards.module.scss'
export default function Card({ Data }) {
    return (
        <div className={styles.Card}>
            <Image src={Data.imageUrl} alt="" className={styles.CardImage} layout='responsive' height={70} width={100} />
            <p className={styles.Title}>{Data.title}</p>
            <div className={styles.Area}>

                <div className={styles.TextSection}>
                    <p className={styles.Name}> {Data.name}</p>
                </div>

                <div className={styles.ActionArea}>

                    <Link href={`/docs/${Data.id}`}>
                        <buttons

                            className={styles.openBtn}>
                            Open
                        </buttons>
                    </Link>
                </div>
            </div>
        </div>

    );
}
