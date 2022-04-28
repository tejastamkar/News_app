import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getDataBase({ Data, setMyLoader, DBName }) {
    await getDocs(collection(db, DBName)).then(async (snapshort) => {
        snapshort.docs.forEach((doc) => {
            Data.push({ ...doc.data(), id: doc.id });
            setMyLoader(false);
        });
    });

    return { Data, setMyLoader };
}
