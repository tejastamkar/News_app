import { Title } from "../../Components/TitleandDetails";
import { useRouter } from "next/router";
import Cards from "../../Components/Cards";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
async function getNews({ News, setMyLoader, temp }) {
  // News = [];
  await getDocs(collection(db, temp)).then(async (snapshort) => {
    snapshort.docs.forEach((doc) => {
      News.push({ ...doc.data(), id: doc.id });
      setMyLoader(false);
    });
  });

  return { News, setMyLoader };
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
  }

  return props;
}

export default function FullView() {
  const router = useRouter();
  const [myloader, setMyLoader] = useState(false);
  var [News, setNews] = useState([]);
  const { params = [] } = router.query;
  const Name = getName(params[0]);
  useEffect(() => {
    async function getData() {
      if (params !== undefined) {
        setNews((News = []));
        const temp = await getDB(params[0]);
        const data = await getNews({ News, setMyLoader, temp });
        setNews(data.News);
        setMyLoader(data.setMyLoader);
        setMyLoader(true);
      }
    }
    getData();
  }, [params]);
  if (params.length == 1) {
    return myloader ? (
      <>
        <Navbar />
        <Title Name={Name} />
        <Cards Items={params} data={News} />
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
