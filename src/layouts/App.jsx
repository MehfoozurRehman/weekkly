import "swiper/scss";
import "swiper/scss/pagination";

import Head from "@modules/Head";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function App() {
  return (
    <>
      <Head
        title="Remixer"
        image="/favicon.svg"
        url="https://vitefilerouter.com"
        description="Remixer"
      />
      <Outlet />
    </>
  );
}
