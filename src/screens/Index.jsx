import { Swiper, SwiperSlide } from "swiper/react";
import { search1, search2, search3, search4 } from "../assets";
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
import { useEffect, useState } from "react";
import { Pagination } from "swiper";

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
      <Searches />
      <Work />
      <Logos />
      <Footer />
    </div>
  );
}

function Searches({}) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  const list = [
    {
      title: "Search 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: search1,
    },
    {
      title: "Search 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: search2,
    },
    {
      title: "Search 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: search3,
    },
    {
      title: "Search 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: search4,
    },
    {
      title: "Search 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: search1,
    },
    {
      title: "Search 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: search2,
    },
    {
      title: "Search 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: search3,
    },
    {
      title: "Search 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: search4,
    },
    {
      title: "Search 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: search1,
    },
    {
      title: "Search 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: search2,
    },
    {
      title: "Search 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: search3,
    },
    {
      title: "Search 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: search4,
    },
    {
      title: "Search 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: search1,
    },
    {
      title: "Search 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: search2,
    },
    {
      title: "Search 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: search3,
    },
    {
      title: "Search 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: search4,
    },
  ];
  return (
    <div className="container__home__searches">
      <svg
        width="444"
        height="88"
        viewBox="0 0 444 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M289 78.3929C290.925 78.0018 292.767 77.453 294.671 77.0192C300.473 75.6976 306.495 74.8763 312.488 74.0635C333.268 71.2449 354.246 69.2851 375.394 68.0235C391.056 67.0893 406.526 67.3621 422.267 68.3564C426.065 68.5962 429.869 68.8028 433.664 69.0862C435.266 69.2058 436.5 69.3328 437.857 69.8785"
          stroke="#3FC344"
          strokeWidth="6.20354"
          strokeLinecap="round"
        />
        <path
          d="M11.3187 41.7955V54H2.90349V19.2073H16.5351C20.6689 19.2073 23.8185 20.2408 25.9838 22.3077C28.1491 24.3418 29.2317 27.0976 29.2317 30.5752C29.2317 32.7406 28.7396 34.6762 27.7554 36.3822C26.804 38.0554 25.3768 39.3841 23.474 40.3684C21.5711 41.3198 19.2582 41.7955 16.5351 41.7955H11.3187ZM15.6001 35.0535C18.9793 35.0535 20.6689 33.5607 20.6689 30.5752C20.6689 27.5241 18.9793 25.9986 15.6001 25.9986H11.3187V35.0535H15.6001ZM46.2167 26.1954C48.9397 26.1954 51.3675 26.7695 53.5 27.9178C55.6653 29.0333 57.3549 30.6573 58.5688 32.7898C59.8155 34.9223 60.4389 37.4157 60.4389 40.2699C60.4389 43.1242 59.8155 45.6176 58.5688 47.7501C57.3549 49.8826 55.6653 51.523 53.5 52.6713C51.3675 53.7867 48.9397 54.3445 46.2167 54.3445C43.4936 54.3445 41.0495 53.7867 38.8841 52.6713C36.7188 51.523 35.0128 49.8826 33.7661 47.7501C32.5522 45.6176 31.9453 43.1242 31.9453 40.2699C31.9453 37.4157 32.5522 34.9223 33.7661 32.7898C35.0128 30.6573 36.7188 29.0333 38.8841 27.9178C41.0495 26.7695 43.4936 26.1954 46.2167 26.1954ZM46.2167 33.4787C44.6091 33.4787 43.2476 34.0693 42.1321 35.2504C41.0495 36.3986 40.5081 38.0718 40.5081 40.2699C40.5081 42.4681 41.0495 44.1413 42.1321 45.2895C43.2476 46.4378 44.6091 47.0119 46.2167 47.0119C47.8243 47.0119 49.1694 46.4378 50.252 45.2895C51.3347 44.1413 51.876 42.4681 51.876 40.2699C51.876 38.0718 51.3347 36.3986 50.252 35.2504C49.1694 34.0693 47.8243 33.4787 46.2167 33.4787ZM81.9282 26.1954C84.192 26.1954 86.2096 26.7695 87.9813 27.9178C89.7857 29.0333 91.1964 30.6573 92.2135 32.7898C93.2633 34.8895 93.7882 37.3829 93.7882 40.2699C93.7882 43.1242 93.2633 45.6176 92.2135 47.7501C91.1964 49.8826 89.7857 51.523 87.9813 52.6713C86.2096 53.7867 84.192 54.3445 81.9282 54.3445C79.8285 54.3445 78.0241 53.8688 76.5149 52.9173C75.0058 51.9659 73.9067 50.67 73.2177 49.0296V67.0903H64.8026V26.5399H73.2177V31.5103C73.9067 29.8699 75.0058 28.574 76.5149 27.6225C78.0241 26.6711 79.8285 26.1954 81.9282 26.1954ZM79.2216 33.5772C77.45 33.5772 75.99 34.1841 74.8417 35.398C73.7263 36.5791 73.1685 38.2031 73.1685 40.2699C73.1685 42.304 73.7263 43.928 74.8417 45.1419C75.99 46.3558 77.45 46.9627 79.2216 46.9627C81.026 46.9627 82.4695 46.3722 83.5522 45.1911C84.6677 44.01 85.2254 42.3696 85.2254 40.2699C85.2254 38.1702 84.6677 36.5299 83.5522 35.3488C82.4695 34.1677 81.026 33.5772 79.2216 33.5772ZM125.467 26.5399V54H117.003V49.0296C116.216 50.6372 115.035 51.9167 113.46 52.8681C111.918 53.8196 110.113 54.2953 108.047 54.2953C104.897 54.2953 102.387 53.2454 100.517 51.1457C98.6799 49.046 97.7613 46.1589 97.7613 42.4845V26.5399H106.127V41.451C106.127 43.3211 106.603 44.781 107.554 45.8309C108.539 46.8479 109.851 47.3564 111.491 47.3564C113.197 47.3564 114.542 46.8151 115.527 45.7324C116.511 44.6498 117.003 43.1078 117.003 41.1065V26.5399H125.467ZM139.682 17.5834V54H131.267V17.5834H139.682ZM155.925 26.1954C158.025 26.1954 159.829 26.6711 161.339 27.6225C162.848 28.574 163.963 29.8699 164.685 31.5103V26.5399H173.051V54H164.685V49.0296C163.963 50.67 162.848 51.9659 161.339 52.9173C159.829 53.8688 158.025 54.3445 155.925 54.3445C153.662 54.3445 151.627 53.7867 149.823 52.6713C148.051 51.523 146.641 49.8826 145.591 47.7501C144.574 45.6176 144.065 43.1242 144.065 40.2699C144.065 37.3829 144.574 34.8895 145.591 32.7898C146.641 30.6573 148.051 29.0333 149.823 27.9178C151.627 26.7695 153.662 26.1954 155.925 26.1954ZM158.632 33.5772C156.827 33.5772 155.368 34.1677 154.252 35.3488C153.169 36.5299 152.628 38.1702 152.628 40.2699C152.628 42.3696 153.169 44.01 154.252 45.1911C155.368 46.3722 156.827 46.9627 158.632 46.9627C160.404 46.9627 161.847 46.3558 162.963 45.1419C164.111 43.928 164.685 42.304 164.685 40.2699C164.685 38.2031 164.111 36.5791 162.963 35.398C161.847 34.1841 160.404 33.5772 158.632 33.5772ZM187.26 31.7071C188.31 30.0339 189.655 28.7052 191.295 27.721C192.969 26.7367 194.773 26.2446 196.709 26.2446V35.2504H194.297C192.066 35.2504 190.328 35.7261 189.081 36.6775C187.867 37.6289 187.26 39.2365 187.26 41.5002V54H178.845V26.5399H187.26V31.7071ZM235.082 44.2069C235.082 46.0441 234.607 47.7337 233.655 49.2757C232.737 50.8176 231.359 52.0479 229.521 52.9666C227.717 53.8852 225.519 54.3445 222.927 54.3445C219.023 54.3445 215.808 53.3931 213.281 51.4902C210.755 49.5874 209.377 46.9299 209.148 43.5179H218.104C218.235 44.8302 218.695 45.8637 219.482 46.6182C220.302 47.3728 221.336 47.7501 222.583 47.7501C223.665 47.7501 224.518 47.4548 225.142 46.8643C225.765 46.2738 226.077 45.4864 226.077 44.5021C226.077 43.6163 225.781 42.8782 225.191 42.2876C224.633 41.6971 223.928 41.2214 223.075 40.8605C222.222 40.4668 221.041 40.0075 219.531 39.4826C217.333 38.728 215.529 38.0062 214.118 37.3172C212.74 36.5955 211.543 35.5456 210.526 34.1677C209.541 32.757 209.049 30.9361 209.049 28.7052C209.049 26.6383 209.574 24.8503 210.624 23.3411C211.674 21.832 213.117 20.6837 214.955 19.8963C216.825 19.0761 218.957 18.666 221.352 18.666C225.224 18.666 228.291 19.5846 230.555 21.4219C232.851 23.2591 234.147 25.7853 234.443 29.0005H225.338C225.174 27.8522 224.748 26.95 224.059 26.2938C223.403 25.6049 222.5 25.2604 221.352 25.2604C220.368 25.2604 219.564 25.5228 218.941 26.0478C218.35 26.5727 218.055 27.3437 218.055 28.3607C218.055 29.1809 218.317 29.8863 218.842 30.4768C219.4 31.0345 220.089 31.4939 220.909 31.8547C221.729 32.2156 222.911 32.6749 224.453 33.2327C226.683 33.9873 228.504 34.7418 229.915 35.4964C231.326 36.2182 232.54 37.2844 233.557 38.6952C234.574 40.1059 235.082 41.9431 235.082 44.2069ZM265.817 39.5318C265.817 40.2207 265.735 40.9753 265.571 41.7955H246.526C246.624 43.8624 247.149 45.3551 248.101 46.2738C249.052 47.1596 250.266 47.6025 251.742 47.6025C252.989 47.6025 254.022 47.2908 254.843 46.6675C255.663 46.0441 256.204 45.2403 256.467 44.2561H265.374C265.013 46.1917 264.226 47.9306 263.012 49.4725C261.798 50.9817 260.256 52.1792 258.386 53.065C256.516 53.918 254.433 54.3445 252.136 54.3445C249.446 54.3445 247.051 53.7867 244.951 52.6713C242.884 51.523 241.26 49.8826 240.079 47.7501C238.898 45.6176 238.308 43.1242 238.308 40.2699C238.308 37.3829 238.882 34.8895 240.03 32.7898C241.211 30.6573 242.851 29.0333 244.951 27.9178C247.051 26.7695 249.446 26.1954 252.136 26.1954C254.859 26.1954 257.254 26.7531 259.321 27.8686C261.388 28.9841 262.979 30.5588 264.094 32.5929C265.243 34.5942 265.817 36.9071 265.817 39.5318ZM257.303 38.2523C257.336 36.4478 256.844 35.1027 255.827 34.2169C254.843 33.2983 253.612 32.839 252.136 32.839C250.594 32.839 249.315 33.2983 248.298 34.2169C247.28 35.1355 246.706 36.4806 246.575 38.2523H257.303ZM280.637 26.1954C282.736 26.1954 284.541 26.6711 286.05 27.6225C287.559 28.574 288.674 29.8699 289.396 31.5103V26.5399H297.762V54H289.396V49.0296C288.674 50.67 287.559 51.9659 286.05 52.9173C284.541 53.8688 282.736 54.3445 280.637 54.3445C278.373 54.3445 276.339 53.7867 274.534 52.6713C272.763 51.523 271.352 49.8826 270.302 47.7501C269.285 45.6176 268.776 43.1242 268.776 40.2699C268.776 37.3829 269.285 34.8895 270.302 32.7898C271.352 30.6573 272.763 29.0333 274.534 27.9178C276.339 26.7695 278.373 26.1954 280.637 26.1954ZM283.343 33.5772C281.539 33.5772 280.079 34.1677 278.963 35.3488C277.881 36.5299 277.339 38.1702 277.339 40.2699C277.339 42.3696 277.881 44.01 278.963 45.1911C280.079 46.3722 281.539 46.9627 283.343 46.9627C285.115 46.9627 286.558 46.3558 287.674 45.1419C288.822 43.928 289.396 42.304 289.396 40.2699C289.396 38.2031 288.822 36.5791 287.674 35.398C286.558 34.1841 285.115 33.5772 283.343 33.5772ZM311.971 31.7071C313.021 30.0339 314.366 28.7052 316.007 27.721C317.68 26.7367 319.484 26.2446 321.42 26.2446V35.2504H319.009C316.778 35.2504 315.039 35.7261 313.792 36.6775C312.578 37.6289 311.971 39.2365 311.971 41.5002V54H303.556V26.5399H311.971V31.7071ZM337.343 26.1954C340.887 26.1954 343.856 27.1796 346.251 29.1481C348.646 31.0838 350.155 33.7576 350.778 37.1696H341.871C341.608 35.9885 341.067 35.0699 340.247 34.4138C339.427 33.7576 338.393 33.4295 337.146 33.4295C335.67 33.4295 334.456 34.0201 333.505 35.2011C332.553 36.3494 332.078 38.039 332.078 40.2699C332.078 42.5009 332.553 44.2069 333.505 45.388C334.456 46.5362 335.67 47.1104 337.146 47.1104C338.393 47.1104 339.427 46.7823 340.247 46.1261C341.067 45.47 341.608 44.5514 341.871 43.3703H350.778C350.155 46.7823 348.646 49.4725 346.251 51.441C343.856 53.3767 340.887 54.3445 337.343 54.3445C334.653 54.3445 332.258 53.7867 330.158 52.6713C328.092 51.523 326.468 49.8826 325.286 47.7501C324.105 45.6176 323.515 43.1242 323.515 40.2699C323.515 37.3829 324.089 34.8895 325.237 32.7898C326.418 30.6573 328.059 29.0333 330.158 27.9178C332.258 26.7695 334.653 26.1954 337.343 26.1954ZM372.592 26.2446C375.741 26.2446 378.235 27.2945 380.072 29.3942C381.942 31.4939 382.877 34.3809 382.877 38.0554V54H374.462V39.0396C374.462 37.2024 373.97 35.7753 372.985 34.7582C372.034 33.7084 370.754 33.1835 369.147 33.1835C367.441 33.1835 366.079 33.7248 365.062 34.8074C364.078 35.8901 363.586 37.4321 363.586 39.4333V54H355.171V17.5834H363.586V31.5595C364.373 29.9191 365.538 28.6232 367.08 27.6718C368.655 26.7203 370.492 26.2446 372.592 26.2446ZM414.509 39.5318C414.509 40.2207 414.427 40.9753 414.263 41.7955H395.218C395.317 43.8624 395.842 45.3551 396.793 46.2738C397.744 47.1596 398.958 47.6025 400.435 47.6025C401.681 47.6025 402.715 47.2908 403.535 46.6675C404.355 46.0441 404.896 45.2403 405.159 44.2561H414.066C413.705 46.1917 412.918 47.9306 411.704 49.4725C410.49 50.9817 408.948 52.1792 407.078 53.065C405.208 53.918 403.125 54.3445 400.828 54.3445C398.138 54.3445 395.743 53.7867 393.643 52.6713C391.577 51.523 389.953 49.8826 388.771 47.7501C387.59 45.6176 387 43.1242 387 40.2699C387 37.3829 387.574 34.8895 388.722 32.7898C389.903 30.6573 391.544 29.0333 393.643 27.9178C395.743 26.7695 398.138 26.1954 400.828 26.1954C403.551 26.1954 405.946 26.7531 408.013 27.8686C410.08 28.9841 411.671 30.5588 412.787 32.5929C413.935 34.5942 414.509 36.9071 414.509 39.5318ZM405.996 38.2523C406.028 36.4478 405.536 35.1027 404.519 34.2169C403.535 33.2983 402.305 32.839 400.828 32.839C399.286 32.839 398.007 33.2983 396.99 34.2169C395.973 35.1355 395.399 36.4806 395.267 38.2523H405.996ZM428.886 26.1954C432.364 26.1954 435.136 27.0648 437.203 28.8036C439.302 30.5424 440.615 32.839 441.14 35.6933H433.266C433.036 34.5778 432.511 33.7084 431.691 33.085C430.904 32.4289 429.903 32.1008 428.689 32.1008C427.738 32.1008 427.016 32.3141 426.524 32.7406C426.032 33.1342 425.786 33.7084 425.786 34.463C425.786 35.316 426.228 35.9557 427.114 36.3822C428.033 36.8087 429.46 37.2352 431.396 37.6617C433.495 38.1538 435.218 38.6624 436.563 39.1873C437.908 39.6794 439.073 40.4996 440.057 41.6479C441.041 42.7961 441.533 44.3381 441.533 46.2738C441.533 47.8485 441.107 49.2429 440.254 50.4568C439.401 51.6706 438.171 52.6221 436.563 53.311C434.955 54 433.053 54.3445 430.854 54.3445C427.147 54.3445 424.178 53.5243 421.947 51.8839C419.716 50.2435 418.355 47.8978 417.863 44.8466H425.982C426.114 46.0277 426.606 46.9299 427.459 47.5533C428.345 48.1766 429.476 48.4883 430.854 48.4883C431.806 48.4883 432.528 48.275 433.02 47.8485C433.512 47.3892 433.758 46.7987 433.758 46.0769C433.758 45.1255 433.299 44.4529 432.38 44.0592C431.494 43.6327 430.034 43.1898 428 42.7305C425.966 42.304 424.293 41.8447 422.981 41.3526C421.668 40.8605 420.536 40.0731 419.585 38.9904C418.633 37.875 418.158 36.3658 418.158 34.463C418.158 32.0024 419.093 30.0175 420.963 28.5084C422.833 26.9664 425.474 26.1954 428.886 26.1954Z"
          fill="#20253A"
        />
      </svg>
      <div className="container__home__searches__content">
        <Swiper
          spaceBetween={isMobile ? 20 : 50}
          slidesPerView={isMobile ? 1 : 4}
          modules={[
            Pagination
          ]}
          pagination={true}
        >
          {list.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="container__home__searches__content__entry">
                <div className="container__home__searches__content__entry__title">
                  {item.title}
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="container__home__searches__content__entry__img"
                />
                <div className="container__home__searches__content__entry__overlay">
                  <div className="container__home__searches__content__entry__overlay__title">
                    {item.title}
                  </div>
                  <div className="container__home__searches__content__entry__overlay__info">
                    {item.description}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
