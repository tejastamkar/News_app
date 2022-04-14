import Navbar from "../../Components/Navbar";
import styles from "../../styles/createArticle.module.scss";
import Footer from "../../Components/Footer";
import { useState } from "react";
import Info from "../../Components/Info";
import { GetFileExt, GetFileName } from "../../Helper/GetFileName";

export default function CreateArticle() {
  // const fileInput = createRef();
  const [ImageName, setImageName] = useState("");
  const [ImageSrc, setImageSrc] = useState("");
  const [Extension, setExtension] = useState("");

  // Image array
  const [Files, setFiles] = useState([]);

  const SeletImage = (e) => {
    if (e.target.files[0]) {
      var file = e.target.files[0];
      var extention = GetFileExt(file);
      var name = GetFileName(file);
      setImageName(name);
      setExtension(extention);
      setFiles(file);
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (event) {
        // The file's text will be printed here
        setImageSrc(reader.result);
      };
    }
  };

  return (
    <>
      <Navbar main={false} />
      <div className={styles.Main}>
        <div className={styles.Image}>
          <div className={styles.card}>
            <img
              id="myimg"
              src={ImageSrc}
              className={styles.img}
              onClick={() => {

                document.getElementById("File").click();
              }}
            />
          </div>
          <div className={styles.btn}>
            <button
              id="upbtn"
              className={styles.upbtn}
              onClick={() => setImageSrc("")}
            >
              Remove Image
            </button>
            <input
              id="File"
              type="file"
              className={styles.imageselector}
              onChange={(e) => SeletImage(e)}
            />
          </div>
        </div>
        <div className={styles.Info}>
          <Info ImageName={ImageName} Extension={Extension} Files={Files} />
        </div>
      </div>
      <Footer />
    </>
  );
}
