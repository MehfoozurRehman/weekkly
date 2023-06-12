import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import Provider from "../components/Provider";
import Slogan from "../components/Slogan";
import Testimonial from "../components/Testimonial";
import Work from "../components/Work";
import Logos from "../components/Logos";
import { backgroundJumbotron } from "@assets";
import Signup from "../components/Signup";
import Searches from "../components/Searches";
import Fade from "react-reveal/Fade";
import Comingsoon from "../components/Comingsoon";
import Personalized from "../components/Personalized";
import Img from "@modules/Img";

export default function Index() {
  // const onScroll = () => {
  //   const svg = document.querySelector(".container__home__section__svg");
  //   // increase the size of svg when scroll down
  //   if (window.scrollY > 100) {
  //     svg.style.scale = window.scrollY / 100;
  //     document.querySelector("div").style.color = "white !important";
  //   } else {
  //     svg.style.scale = 1;
  //     document.querySelector("div").style.color = "unset";
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll);
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, []);
  return (
    <div className="container">
      <Header />
      <div className="container__home__section">
        <Fade top>
          <img
            src={backgroundJumbotron}
            alt="backgroundJumbotron"
            className="container__home__section__svg1"
          />
        </Fade>
        <Jumbotron />
      </div>
      <Explore />
      <Provider />
      <Fade bottom>
        <Comingsoon />
      </Fade>
      <Slogan />
      <Testimonial />
      <Searches />
      <Fade bottom>
        <Personalized />
      </Fade>
      <Fade bottom>
        <Work />
      </Fade>
      <Signup />
      <Fade bottom>
        <Logos />
      </Fade>
      <Footer />
    </div>
  );
}
