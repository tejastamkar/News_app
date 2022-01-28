import Head from "next/head";
import Cards from "../Components/Cards";
import MainTopnews from "../Components/MainTopnews";
import { Title } from "../Components/TitleandDetails";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Home({ News, Books }) {
  const MainTopdata = News.slice(0, 3);
  const NewsItems = News.slice(1, 5);
  Books = Books.slice(0, 4);
  return (
    <div>
      <Head>
        <title>News App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Title Name={"Top News"} />
      <MainTopnews data={MainTopdata} />
      <Title Name={"News"} />
      <Cards data={NewsItems} Items={"News"} />
      <Title Name={"Magazine"} />
      <Cards data={Books} Items={"Magazine"} />
      <Title Name={"Books"} />
      <Cards data={Books} Items={"books"} />
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const News = [];
  const Books = [];

  await getDocs(collection(db, "testing")).then(async (snapshort) => {
    snapshort.docs.forEach((doc) => {
      News.push({ ...doc.data(), id: doc.id });
    });
  });
  await getDocs(collection(db, "book testing")).then(async (snapshort) => {
    snapshort.docs.forEach((doc) => {
      Books.push({ ...doc.data(), id: doc.id });
    });
  });

  return {
    props: {
      News,
      Books,
    },
  };
};
