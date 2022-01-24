import Image from 'next/image';
import wall from '../assets/Wall.jpg'
import styles from '../styles/Home.module.scss'
import { Details } from './TitleandDetails';
export default function MainTopnews() {
    return (
        <div className={styles.TopNews} >
            <div style={{ display: 'flex' }}>
                <div className={styles.Main}>
                    <div className={styles.ImageContainer}>
                        <Image className={styles.Image} alt="Image" width={'1000'} height={'500'} layout='intrinsic' src='https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80' />
                        <Details />
                    </div>
                    <h2 className={styles.titles}>The Titles</h2>
                    <h6 className={styles.decs}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptates animi. Obcaecati minus nemo id ad? Tempora similique iusto sunt ipsum id molestiae officiis quam, fugit ad eum nam animi!</h6>
                </div>
                <div className={styles.BigCard} >
                    <div className={styles.News}>
                        <div className={styles.ImageContainer}>
                            <Image className={styles.Image} alt="Image" width={'1000px'} height={'150px'} layout='fixed' src='https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80' />
                        </div>
                        <div className={styles.heading}>
                            <Details />
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </div>
                    </div>
                    <div className={styles.News}>
                        <div className={styles.ImageContainer}>
                            <Image className={styles.Image} alt="Image" width={'1000px'} height={'150px'} layout='fixed' src="https://firebasestorage.googleapis.com/v0/b/mywalls-5ea7b.appspot.com/o/GamingWalls%2FBlack%20Panther.jpg?alt=media&token=9f54ad40-ad36-4358-97c0-464201338f67" />
                        </div>
                        <div className={styles.heading}>
                            <Details />
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </div>
                    </div>
                </div >
            </div>
        </div>
    )
}
