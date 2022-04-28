import Footer from "../Components/Footer";
import Navbar from "../Components/navBar";
import { getDataBase } from '../Helper/getData'
import { useState, useEffect } from "react";
import Card from '../Components/Card'
import styles from '../styles/request.module.scss'
export default function Request() {
  var [MyLoader, setMyLoader] = useState(false);
  var [Data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      var DBName = 'Request';
      setData((Data = []));
      var data = await getDataBase({ Data, setMyLoader, DBName });
      setData(data.Data);
      setMyLoader(data.setMyLoader);
      setMyLoader(true);
    }
    getData();
  }, []);
  console.log(Data)
  return MyLoader ? (
    <div>
      <Navbar />
      <div className={styles.CardSection}>
        {Data.map((data, index) => (
          <Card Data={data} key={index} />
        ))}
      </div>
      <Footer />
    </div>
  ) : (<div>
    <Navbar />
    <h1>Loading Data... </h1>
    <Footer />
  </div>)
}
