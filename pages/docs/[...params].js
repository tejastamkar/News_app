import { Title } from "../../Components/TitleandDetails";
import { useRouter } from "next/router";
import Cards from "../../Components/Cards";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";
import { useEffect, useState } from "react";

async function getNews({ News, setMyLoader, temp }) {
  await getDocs(collection(db, temp)).then(async (snapshort) => {
    snapshort.docs.forEach((doc) => {
      News.push({ ...doc.data(), id: doc.props });
      setMyLoader(false);
    });
  });

  return { News, setMyLoader };
}

function getDB(props) {
  switch (props) {
    case "Books":
      props = "book testing";
      break;
    case "News":
      props = "testing";
      break;
    case "magazine":
      props = "testing";
      break;
    default:
      props = "Tmep";
      break;
  }
  return props;
}

export default function FullView() {
  const router = useRouter();
  const [myloader, setMyLoader] = useState(false);
  const [News, setNews] = useState([]);
  const { params = [] } = router.query;
  useEffect(async () => {
    if (params != undefined) {
      const temp = await getDB(params[0]);
      const data = await getNews({ News, setMyLoader, temp });
      setNews(data.News);
      setMyLoader(data.setMyLoader);
      setMyLoader(true);
    }
  }, [params]);

  return myloader ? (
    <>
      <Title Name={params} />
      <Cards Items={params} data={News} />
    </>
  ) : (
    <>loading..</>
  );
}
