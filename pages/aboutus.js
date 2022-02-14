import Navbar from "../Components/Navbar";
import PodCast from "../Components/Pod";
import styles from "../styles/Aboutus.module.scss";

export default function Aboutus() {
  return (
    <div className={styles.back}>
      <Navbar />
      <div id="Top">
        <h1>This is About Page</h1>
      </div>
    </div>
  );
}
