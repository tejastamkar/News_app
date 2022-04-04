// import { Data } from "../Data/Data";
import styles from "../styles/tables.module.scss";
import { useState, useEffect } from "react";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";

async function getDataBase({ Data, setMyLoader, DBName }) {
  await getDocs(collection(db, DBName)).then(async (snapshort) => {
    snapshort.docs.forEach((doc) => {
      Data.push({ ...doc.data(), id: doc.id });
      setMyLoader(false);
    });
  });

  return { Data, setMyLoader };
}

export default function Tables({ TableIndex }) {
  switch (TableIndex) {
    case 1:
      return AllArticleTable("News");
    case 2:
      return AllArticleTable("Weather");
    case 3:
      return AllArticleTable("test");
    case 4:
      return AllArticleTable("News");
    case 5:
      return Podcast();
    default:
      return <div>No table found</div>;
  }
}
function AllArticleTable(DBName) {
  var [MyLoader, setMyLoader] = useState(false);
  var [Data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      setData(Data = []);
      const data = await getDataBase({ Data, setMyLoader, DBName });
      setData(data.Data);
      setMyLoader(data.setMyLoader);
      setMyLoader(true);
  
    }
    getData();
  }, []);
  return MyLoader ? (
    <div class={styles.my}>
      <table className={styles.Table}>
        <thead className={styles.tableHead}>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Title</th>
            <th>Description</th>
            <th>Url</th>
            <th>UrlToImage</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {Data.map((data, index) => (
            <tr key={index}>
              <td className={styles.tableCategory}>{data.category}</td>
              <td className={styles.tableName}>{data.name}</td>
              <td className={styles.tableTitle}>{data.title}</td>
              <td className={styles.tableDesc}>{data.description}</td>
              <td className={styles.tableUrl}>{data.url}</td>
              <td className={styles.tableUrltoimg}>{data.urlToImage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div>No table found</div>
  );
}

function Podcast() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.class}</td>
              <td>{data.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
