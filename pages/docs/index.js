import { useRouter } from "next/router";
import { useEffect } from "react";
import { Title } from "../../Components/TitleandDetails";

export default function index() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);
  return <></>;
}
