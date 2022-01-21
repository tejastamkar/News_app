
import styles from '../styles/Pages.module.scss'
export default function Details({ num }) {
    return (
        <div>
            <div className={styles.Details}>
                <p className={styles.date}>Feb 23</p>
                <p className={styles.line} style={{ marginLeft: `${num}%` }}>---------</p>
                <p className={styles.src}>CDN</p>
            </div>
        </div >
    );
}
