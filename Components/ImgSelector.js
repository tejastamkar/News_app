/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import styles from "../styles/Import.module.scss";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export default function ImgSelector() {
  // Inputbox varables
  const [Folder, setFolder] = useState("");
  const [ImageName, setImageName] = useState("");
  const [ImageSrc, setImageSrc] = useState("");
  const [Extension, setExtension] = useState("");
  const [UploadVal, setUploadVal] = useState("");
  const [DownloadUrl, setDownloadUrl] = useState("");

  // Image array
  const [Files, setFiles] = useState([]);

  function GetFileExt(file) {
    var temp = file.name;
    temp = temp.split(".");
    var ext = temp.slice(temp.length - 1, temp.length);
    return "." + ext[0];
  }

  function GetFileName(file) {
    var temp = file.name;
    temp = temp.split(".");
    var fname = temp.slice(0, -1).join(".");
    return fname;
  }

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

    // reader.readAsText(file);
    // setImageName(name);
    // namebox.valuse = name;
    // extlab.innerHTML = extention;
  };
  async function UploadProcess() {
    const File_Name = ImageName + Extension;
    const metaData = {
      contentType: Files.type,
    };
    const storage = getStorage();

    const stroageRef = ref(storage, `${Folder}/` + File_Name);
    if (!File_Name) {
      return alert("Please Select the Image and Enter Name");
    }
    const UploadTask = uploadBytesResumable(stroageRef, Files, metaData);
    UploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadVal(Math.floor(progress));
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log("error:", error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setDownloadUrl(downloadURL);
        });
      }
    );
  }

  const ImageJSX = () => (
    <div className={styles.card}>
      <img id="myimg" src={ImageSrc} className={styles.img} />

      <div className={styles.input}>
        <label>Folder Name: </label>
        <input
          type="text"
          id="Folder"
          className={styles.Input}
          value={Folder}
          onInput={(e) => setFolder(e.target.value)}
        />
        <br />
        {/* <label>Collection Name </label>
      <input type="text" id="Coll" />
      <br /> */}
        <label>Image Name: </label>
        <input
          type="text"
          id="namebox"
          value={ImageName}
          className={styles.Input}
          onInput={(e) => setImageName(e.target.value)}
        />
        <label id="extlab">{Extension}</label>
      </div>
      <div>
        <div className={styles.btn}>
          <label id="upprogress" className={styles.upprogress}>
            {UploadVal}%
          </label>
          <button id="upbtn" onClick={() => UploadProcess()}>
            Upload Image
          </button>
          <input
            id="File"
            name="File"
            type="file"
            className={styles.imageselector}
            onChange={(e) => SeletImage(e)}
          />
        </div>
      </div>
      {/*        
      <button id="clearbtn">Clear All</button>
      <button id="downbtn">Download Image</button> */}
    </div>
  );
  return { DownloadUrl, ImageJSX };
}
