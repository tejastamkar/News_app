import PageContain from '../../Components/PageContain'
import { useRouter } from "next/router";
import { getDataBase } from '../../Helper/getData';
import { useState, useEffect } from 'react';
import Navbar from '../../Components/navBar';
export default function Page() {
    const router = useRouter();
    const { params = [] } = router.query;
    var [Data, setData] = useState([])
    const DBName = 'Request';
    var [MyLoader, setMyLoader] = useState(false)
    useEffect(() => {
        async function getData() {
            if (params !== undefined) {
                setData((Data = []));
                const data = await getDataBase({ Data, setMyLoader, DBName });
                setData(data.Data);
                setMyLoader(data.setMyLoader);
                setMyLoader(true);

                if (params[0] != undefined) {
                    setData(
                        Data.filter((data) => {
                            return data.id === params[0];
                        })
                    );
                    // console.log(Data)
                }
            }
            console.log(Data)
        }
        getData();
    }, [params[0]])
    return MyLoader ? (
        <div>
            <Navbar />
            <PageContain Data={Data[0]} />
        </div>
    ) : (
        <div>
            <h2>Loading ...</h2>
        </div>
    )
}
