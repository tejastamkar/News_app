import styles from '../Styles/Title.module.scss'
export default function Title({ Name }) {
    return <div className={styles.title}>
        <hr />
        <p className={styles.name}>{Name}</p>
        <a className={styles.btn} href="">View All</a>
        <hr />
    </div>;
}
