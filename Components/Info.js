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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// export function GetImageUrl(url) {
//   const [imageurl, setimageurl] = useState("");
//   setimageurl(url);
//   return imageurl;
// }

export default function Info({ ImgUrl }) {
  // Inputbox varables
  const [Collection, setCollection] = useState("");
  const [Name, setName] = useState("");
  const [Title, setTitle] = useState("");
  const [Url, setUrl] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [Desc, setDesc] = useState("");
  const [Category, setCategory] = useState("");
  const [DocDate, setDocDate] = useState("");
  const [UploadStatus, setUploadStatus] = useState("Ready to Upload Data");
  // useEffect(() => {
  //   setImageUrl(Imageurl);
  // }, [Imageurl]);

  useEffect(() => {
    setImageUrl(ImgUrl);
  }, [ImgUrl]);
  const ClearAll = () => {
    setCollection("");
    setName("");
    setTitle("");
    setUrl("");
    setImageUrl("");
    setDesc("");
    setCategory("");
    setDocDate("");
    setUploadStatus("Ready to Upload Data");
  };

  // const getDate = () => {
  //   splits = DocDate.split(" ", 3);
  //   console.log(slipts);
  // };
  async function UploadData() {
    // getDate();
    console.log(DocDate);
    if (!Collection) {
      setUploadStatus("Enter Proper Data");
    } else {
      const ref = collection(db, Collection);
      await addDoc(ref, {
        Name: Name,
        Title: Title,
        Url: Url,
        ImageUrl: ImageUrl,
        Description: Desc,
        Category: Category,
      });
      setUploadStatus("The Data is Uploaded");
    }
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
        <label>Date:</label>
        <DatePicker selected={DocDate} onChange={(date) => setDocDate(date)} />
      </div>
      <div className={styles.btn}>
        <button id="upbtn" onClick={() => UploadData()}>
          Upload Data
        </button>
        <button id="upbtn" onClick={() => ClearAll()}>
          Clear All
        </button>
      </div>
      <h3>{UploadStatus}</h3>
    </div>
  );
}
