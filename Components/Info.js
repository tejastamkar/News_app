import { useState } from "react";
import styles from "../styles/Info.module.scss";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default function Info({ ImageName, Extension, Files }) {
  // Inputbox varables
  const [Name, setName] = useState("");
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [Src, setSrc] = useState("");
  const [msg, setmsg] = useState("");
  const [DownloadUrl, setDownloadUrl] = useState("");

  const ClearAll = () => {
    setName("");
    setTitle("");
    setDesc("");
    setSrc("");
    setmsg("");
  };


  async function UploadProcess({ ImageName, Extension, Files, Folder }) {
    const File_Name = ImageName + Extension;
    const metaData = {
      contentType: Files.type,
    };
    const storage = getStorage();

    const stroageRef = ref(storage, `Request/${Folder}/` + File_Name);
    const UploadTask = uploadBytesResumable(stroageRef, Files, metaData);
    UploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // setUploadVal(Math.floor(progress));
      },
      (error) => {
        console.log("error:", error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
          setDownloadUrl(downloadURL);
        });
      }
    );
    return { DownloadUrl, setDownloadUrl };
  }
  const UploadDb = async () => {
    if (Name == "" && Desc == "" && Src == "" && Title == "") {
      setmsg("Enter Proper Data");
    } else {
      const ref = collection(db, "Request");
      await addDoc(ref, {
        name: Name,
        title: Title,
        imageUrl: DownloadUrl,
        description: Desc,
        src: Src,
        // date: date,
      });
      setmsg('Article Submitted')
    }
  }

  async function UploadData() {
    var Folder = Name + Title
    await UploadProcess({ Folder, Extension, Files, Name });
    await UploadDb()
    ClearAll()
    return NextResponse.redirect('/')
  }
  return (
    <div className={styles.Main}>
      <div className={styles.Inputs}>
        <label className={styles.label}>Your Name: </label>
        <br />
        <input
          className={styles.inputbox}
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <label className={styles.label}>Title:</label>
        <br />
        <input
          className={styles.inputbox}
          type="text"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <label className={styles.label}>Description/Blog: </label>
        <br />
        <input
          className={styles.desc}
          type="text"
          value={Desc}
          onChange={(e) => setDesc(e.target.value)}
        />{" "}
        <br />
        <label className={styles.label}>Source / Category: </label>
        <br />
        <input
          className={styles.inputbox}
          type="text"
          value={Src}
          onChange={(e) => setSrc(e.target.value)}
        />{" "}
      </div>
      <div className={styles.btns}>
        <button className={styles.btn} id="upbtn" onClick={() => UploadData()}>
          Submit the Article
        </button>
        <button className={styles.btn} id="upbtn" onClick={() => ClearAll()}>
          Clear All
        </button>
      </div>
      <h3>{msg}</h3>
    </div>
  );
}
