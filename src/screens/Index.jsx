import { Explore } from "../components/Explore";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Jumbotron } from "../components/Jumbotron";
import { Provider } from "../components/Provider";
import { Slogan } from "../components/Slogan";
import { Testimonial } from "../components/Testimonial";
import { backgroundJumbotron } from "@assets";
import { useEffect } from "react";

export default function Index() {
  const onScroll = () => {
    const svg = document.querySelector(".container__home__section__svg");
    // increase the size of svg when scroll down
    if (window.scrollY > 100) {
      svg.style.scale = window.scrollY / 100;
      document.querySelector("div").style.color = "white !important";
    } else {
      svg.style.scale = 1;
      document.querySelector("div").style.color = "unset";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className="container">
      <Header />
      <div className="container__home__section">
        <img
          src={backgroundJumbotron}
          alt="backgroundJumbotron"
          className="container__home__section__svg1"
        />
        <Jumbotron />
      </div>
      <Explore />
      <Provider />
      <Slogan />
      <Testimonial />
      <Footer />
    </div>
  );
}
