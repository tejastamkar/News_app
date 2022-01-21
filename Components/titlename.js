import styles from '../Styles/Pages.module.scss'
export default function Title({ Name }) {
    return <div className={styles.title}>
        <hr />
        <h3 className={styles.name}>{Name}</h3>
        <a className={styles.btn} href="">View All</a>
        <hr />
    </div>;
}
