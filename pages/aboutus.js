import Navbar from "../Components/Navbar";
import PodCast from "../Components/Pod";
import styles from "../styles/Aboutus.module.scss";

export default function Aboutus() {
  return (
    <div className={styles.back}>
      <Navbar />
      <div id="Top">
        <h1>This is About Page</h1>
        <PodCast />
        <h2>this is other one</h2>
        <PodCast />
      </div>
    </div>
  );
}
