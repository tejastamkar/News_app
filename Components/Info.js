import { useState } from "react";
import styles from "../styles/Info.module.scss";
import {
  getFirestore,
  doc,
  getDocs,
  setDoc,
  collection,
  addDoc,
} from "firebase/firestore";
import { db } from "../Firebase";
import { useEffect } from "react";

// export function GetImageUrl(url) {
//   const [imageurl, setimageurl] = useState("");
//   setimageurl(url);
//   return imageurl;
// }

export default function Info() {
  // Inputbox varables
  const [Collection, setCollection] = useState("");
  const [Name, setName] = useState("");
  const [Title, setTitle] = useState("");
  const [Url, setUrl] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [Desc, setDesc] = useState("");
  const [Category, setCategory] = useState("");
  // useEffect(() => {
  //   setImageUrl(Imageurl);
  // }, [Imageurl]);
  const ClearAll = () => {
    setCollection("");
    setName("");
    setTitle("");
    setUrl("");
    setImageUrl("");
    setDesc("");
    setCategory("");
  };

  async function UploadData() {
    const ref = collection(db, Collection);
    await addDoc(ref, {
      Name: Name,
      Title: Title,
      Url: Url,
      ImageUrl: ImageUrl,
      Description: Desc,
      Category: Category,
    });
  }
  return (
    <div className={styles.Main}>
      <div className={styles.Inputs}>
        <label>Collection Name: </label>
        <input
          type="text"
          value={Collection}
          onInput={(e) => setCollection(e.target.value)}
        />{" "}
        <br />
        <label>Name: </label>
        <input
          type="text"
          value={Name}
          onInput={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <label>Title:</label>
        <input
          type="text"
          value={Title}
          onInput={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <label>url: </label>
        <input
          type="text"
          value={Url}
          onInput={(e) => setUrl(e.target.value)}
        />{" "}
        <br />
        <label>Image Url: </label>
        <input
          type="text"
          value={ImageUrl}
          onInput={(e) => setImageUrl(e.target.value)}
        />{" "}
        <br />
        <label>Description: </label>
        <input
          type="text"
          value={Desc}
          onInput={(e) => setDesc(e.target.value)}
        />{" "}
        <br />
        <label>Category: </label>
        <input
          type="text"
          value={Category}
          onInput={(e) => setCategory(e.target.value)}
        />{" "}
        <br />
      </div>
      <div className={styles.btn}>
        <button id="upbtn">Upload Data</button>
        <button id="upbtn" onClick={() => ClearAll()}>
          Clear All
        </button>
      </div>
    </div>
  );
}
