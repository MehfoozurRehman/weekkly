import Head from "@modules/Head";
import { Outlet } from "react-router-dom";
import "swiper/scss";

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
