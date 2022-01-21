import Image from 'next/image';
import wall from '../assets/Wall.jpg'
import styles from '../styles/Pages.module.scss'
import Details from './Details';

export default function MainTopnews() {
    return (
        <div className={styles.TopNews} >
            <div className={styles.Main}>
                <div className={styles.ImageContainer}>
                    <div className={styles.Image}>
                        <Image alt="Image" src={wall} />
                    </div>
                    <div className={styles.Line}></div>
                </div>
                <Details num={50} />
                <h2 className={styles.title}>The Titles</h2>
                <h6 className={styles.decs}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptates animi. Obcaecati minus nemo id ad? Tempora similique iusto sunt ipsum id molestiae officiis quam, fugit ad eum nam animi!</h6>
            </div>
        </div>
    )
}
