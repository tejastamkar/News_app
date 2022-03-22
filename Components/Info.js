import { useState } from "react";
import styles from "../styles/Info.module.scss";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiCopy } from "react-icons/bi";
export default function Info({ ImgUrl }) {
  // Inputbox varables
  const [Collection, setCollection] = useState("");
  const [Name, setName] = useState("");
  const [Title, setTitle] = useState("");
  const [Url, setUrl] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [CopiedUrl, setCopiedUrl] = useState("");
  const [Desc, setDesc] = useState("");
  const [Category, setCategory] = useState("");
  const [SourceName, setSourceName] = useState("");
  const [DocDate, setDocDate] = useState("");
  const [UploadStatus, setUploadStatus] = useState("Ready to Upload Data");

  useEffect(() => {
    setImageUrl(ImgUrl);
    setCopiedUrl(ImgUrl);
  }, [ImgUrl]);
  const ClearAll = () => {
    setCollection("");
    setName("");
    setTitle("");
    setUrl("");
    setImageUrl("");
    setDesc("");
    setSourceName("");
    setCategory("");
    setDocDate("");
    setUploadStatus("Ready to Upload Data");
  };

  const getDate = () => {
    var breakDocDate = String(DocDate);
    breakDocDate = breakDocDate.split(" ");
    breakDocDate = breakDocDate[1] + " " + breakDocDate[2];
    return breakDocDate;
  };

  async function UploadData() {
    const docData = getDate();
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
        Date: docData,
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
        />
        <br />
        <label>Name: </label>
        <input
          type="text"
          value={Name}
          onInput={(e) => setName(e.target.value)}
        />
        <br />
        <label>Title:</label>
        <input
          type="text"
          value={Title}
          onInput={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>Url: </label>
        <input
          type="text"
          value={Url}
          onInput={(e) => setUrl(e.target.value)}
        />
        <br />
        <label>Image Url: </label>
        <input
          type="text"
          value={ImageUrl}
          onInput={(e) => setImageUrl(e.target.value)}
        />
        <button
          className={styles.CopyBtn}
          onClick={() => {
            setImageUrl(CopiedUrl);
          }}
        >
          <BiCopy />
        </button>
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
        <label>Source: </label>
        <input
          type="text"
          value={SourceName}
          onInput={(e) => setSourceName(e.target.value)}
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
