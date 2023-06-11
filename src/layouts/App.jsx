import "swiper/scss";
import "swiper/scss/pagination";

import Head from "@modules/Head";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Head
        title="Remixer"
        image="/favicon.svg"
        url="https://vitefilerouter.com"
        description="Remixer"
      />
      {loading ? <Loading /> : <Outlet />}
    </>
  );
}
