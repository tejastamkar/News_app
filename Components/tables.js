// import { Data } from "../Data/Data";
import styles from "../styles/tables.module.scss";
import { useState, useEffect } from "react";
import { getDataBase } from "../Helper/getData";



export default function Tables({ TableIndex }) {
  switch (TableIndex) {
    case 1:
      return AllArticleTable("News");
    case 2:
      return AllArticleTable("Weather");
    case 3:
      return AllArticleTable("testing");
    case 4:
      return AllArticleTable("News");
    default:
      return <div>No table found</div>;
  }
}
function AllArticleTable(DBName) {
  var [MyLoader, setMyLoader] = useState(false);
  var [Data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      setData((Data = []));
      var data = await getDataBase({ Data, setMyLoader, DBName });
      setData(data.Data);
      setMyLoader(data.setMyLoader);
      setMyLoader(true);
    }
    getData();
  }, [DBName]);
  return MyLoader ? (
    <div className={styles.my}>
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

