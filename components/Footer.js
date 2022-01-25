import styles from '../styles/footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <hr />
            <div className={styles.footer_Items}>
                <div className={styles.footer_logo}>
                    <p>This is logo</p>
                </div>
                <div className={styles.footer_text}>
                    <a>Copyright Stuff.</a>

                </div>
            </div>
        </footer>
    );
}
