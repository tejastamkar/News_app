import { Title } from "../../Components/TitleandDetails";
import { useRouter } from "next/router";
import Cards from "../../Components/Cards";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";
import PageContain from "../../Components/PageContain";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

async function getDataBase({ Data, setMyLoader, temp }) {
  await getDocs(collection(db, temp)).then(async (snapshort) => {
    snapshort.docs.forEach((doc) => {
      Data.push({ ...doc.data(), id: doc.id });
      setMyLoader(false);
    });
  });

  return { Data, setMyLoader };
}

function getDB(props) {
  let Name;
  let Dbname;
  switch (props) {
    case "books":
    case "Books":
    case "Book":
    case "book":
      Name = "Books";
      Dbname = "book testing";
      break;
    case "news":
    case "News":
    case "new":
      Name = "News";
      Dbname = "testing";
      break;
    case "magazine":
    case "magzine":
    case "Magazine":
    case "Magzine":
      Name = "Magazine";
      Dbname = "Magzines";
      break;
    case "Articles":
    case "article":
    case "Articles":
      Name = "Articles";
      Dbname = "Articles";
      break;
    default:
      Dbname = "Temp";
      break;
  }

  return [Name, Dbname];
}

export default function FullView() {
  const router = useRouter();
  const [myloader, setMyLoader] = useState(false);
  var [Data, setData] = useState([]);
  var [CardData, setCardData] = useState([]);
  const { params = [] } = router.query;
  let [Name, temp] = getDB(params[0]);
  useEffect(() => {
    async function getData() {
      if (params !== undefined) {
        setData((Data = []));
        const data = await getDataBase({ Data, setMyLoader, temp });
        setData(data.Data);
        setMyLoader(data.setMyLoader);
        setMyLoader(true);

        if (params[1] != undefined) {
          setCardData(
            Data.filter((data) => {
              return data.id === params[1];
            })
          );
        }
      }
    }
    getData();
  }, [params]);
  if (params.length == 1 && Name !== "None") {
    return myloader ? (
      <>
        <Navbar main={true} />
        <div id="Top">
          <Title Name={Name} />
          <Cards Items={params} data={Data} />
          <Footer />
        </div>
      </>
    ) : (
      <>loading..</>
    );
  }
  if (params.length == 2 && CardData.length !== 0) {
    return <PageContain Data={CardData} name={Name} />;
  }
  return <>loading..</>;
}
