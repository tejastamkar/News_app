import { Title } from "../../Components/TitleandDetails";
import { useRouter } from "next/router";
import Cards from "../../Components/Cards";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
async function getDataBase({ Data, setMyLoader, temp }) {
  // Data = [];
  await getDocs(collection(db, temp)).then(async (snapshort) => {
    snapshort.docs.forEach((doc) => {
      Data.push({ ...doc.data(), id: doc.id });
      setMyLoader(false);
    });
  });

  return { Data, setMyLoader };
}

function getDB(props) {
  switch (props) {
    case "books":
    case "Books":
    case "Book":
    case "book":
      props = "book testing";
      break;
    case "news":
    case "News":
    case "new":
      props = "testing";
      break;
    case "magazine":
    case "Magazine":
      props = "book testing";
      break;
    default:
      props = "Tmep";
      break;
  }

  return props;
}

function getName(props) {
  switch (props) {
    case "books":
    case "Books":
    case "Book":
    case "book":
      props = "Books";
      break;
    case "news":
    case "News":
    case "new":
      props = "News";
      break;
    case "magazine":
    case "Magazine":
    case "Magazines":
      props = "Magazine";
      break;
    case "Podcast":
    case "podcast":
    case "Podcasts":
      props = "Podcast";
      break;
    default:
      props = "None";
      break;
  }

  return props;
}

export default function FullView() {
  const router = useRouter();
  const [myloader, setMyLoader] = useState(false);
  var [Data, setData] = useState([]);
  var [CardData, setCardData] = useState([]);
  const { params = [] } = router.query;
  const Name = getName(params[0]);
  useEffect(() => {
    async function getData() {
      if (params !== undefined) {
        setData((Data = []));
        const temp = await getDB(params[0]);
        const data = await getDataBase({ Data, setMyLoader, temp });

        setData(data.Data);
        setMyLoader(data.setMyLoader);
        setMyLoader(true);
      }
    }
    getData();
  }, [params]);
  if (params.length == 1 && Name !== "None") {
    return myloader ? (
      <>
        <Navbar />
        <Title Name={Name} />
        <Cards Items={params} data={Data} />
        <Footer />
      </>
    ) : (
      <>loading..</>
    );
  }
  if (params.length == 2) {
    return myloader ? (
      <>
        <h3>Display Card Data</h3>
      </>
    ) : (
      <>loading..</>
    );
  }
  return <>loading..</>;
}
