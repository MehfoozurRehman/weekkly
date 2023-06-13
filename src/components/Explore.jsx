import { enjoy, meal, starter } from "../assets";
import Fade from "react-reveal/Fade";
import Img from "@modules/Img";

export default function Explore() {
  return (
    <div className="container__home__explore">
      <Fade bottom>
        <div className="container__home__explore__title">
          <svg
            width="187"
            height="85"
            viewBox="0 0 187 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.21733 73.7216C11.4571 73.2666 13.5992 72.6282 15.8152 72.1234C22.5651 70.586 29.5711 69.6305 36.5423 68.6849C60.7172 65.4058 85.1231 63.1258 109.726 61.6581C127.946 60.5713 145.944 60.8887 164.257 62.0453C168.675 62.3244 173.101 62.5647 177.516 62.8944C179.38 63.0336 180.815 63.1813 182.394 63.8162"
              stroke="#43B347"
              strokeWidth="7.21706"
              strokeLinecap="round"
            />
            <path
              d="M11.4663 26.1954V33.1835H22.7358V39.6794H11.4663V47.258H24.2121V54H3.05112V19.4534H24.2121V26.1954H11.4663ZM45.9153 54L40.6496 46.3722L36.2206 54H27.1164L36.1714 39.9747L26.8703 26.5399H36.319L41.5846 34.1185L46.0137 26.5399H55.1179L45.9153 40.3684L55.3639 54H45.9153ZM67.0217 30.4276C67.8419 29.1481 68.9738 28.1147 70.4173 27.3273C71.8608 26.5399 73.5504 26.1462 75.4861 26.1462C77.7498 26.1462 79.8003 26.7203 81.6376 27.8686C83.4748 29.0169 84.9183 30.6573 85.9682 32.7898C87.0508 34.9223 87.5922 37.3993 87.5922 40.2207C87.5922 43.0422 87.0508 45.5356 85.9682 47.7009C84.9183 49.8334 83.4748 51.4902 81.6376 52.6713C79.8003 53.8196 77.7498 54.3937 75.4861 54.3937C73.5832 54.3937 71.8936 54 70.4173 53.2126C68.9738 52.4252 67.8419 51.4082 67.0217 50.1615V67.0903H58.6065V26.5399H67.0217V30.4276ZM79.0293 40.2207C79.0293 38.121 78.4388 36.4806 77.2577 35.2996C76.1094 34.0857 74.6823 33.4787 72.9763 33.4787C71.3031 33.4787 69.876 34.0857 68.6949 35.2996C67.5466 36.5134 66.9725 38.1702 66.9725 40.2699C66.9725 42.3696 67.5466 44.0264 68.6949 45.2403C69.876 46.4542 71.3031 47.0612 72.9763 47.0612C74.6495 47.0612 76.0766 46.4542 77.2577 45.2403C78.4388 43.9936 79.0293 42.3204 79.0293 40.2207ZM100.422 17.5834V54H92.007V17.5834H100.422ZM119.02 54.3937C116.33 54.3937 113.902 53.8196 111.737 52.6713C109.605 51.523 107.915 49.8826 106.668 47.7501C105.454 45.6176 104.847 43.1242 104.847 40.2699C104.847 37.4485 105.471 34.9715 106.717 32.839C107.964 30.6737 109.67 29.0169 111.835 27.8686C114.001 26.7203 116.429 26.1462 119.119 26.1462C121.809 26.1462 124.237 26.7203 126.402 27.8686C128.567 29.0169 130.273 30.6737 131.52 32.839C132.767 34.9715 133.39 37.4485 133.39 40.2699C133.39 43.0914 132.75 45.5848 131.471 47.7501C130.224 49.8826 128.502 51.523 126.304 52.6713C124.138 53.8196 121.711 54.3937 119.02 54.3937ZM119.02 47.1104C120.628 47.1104 121.989 46.5198 123.105 45.3387C124.253 44.1577 124.827 42.4681 124.827 40.2699C124.827 38.0718 124.27 36.3822 123.154 35.2011C122.071 34.0201 120.726 33.4295 119.119 33.4295C117.478 33.4295 116.117 34.0201 115.034 35.2011C113.952 36.3494 113.41 38.039 113.41 40.2699C113.41 42.4681 113.935 44.1577 114.985 45.3387C116.068 46.5198 117.413 47.1104 119.02 47.1104ZM146.27 31.1166C147.254 29.6074 148.484 28.4263 149.961 27.5733C151.437 26.6875 153.077 26.2446 154.882 26.2446V35.1519H152.569C150.469 35.1519 148.894 35.6112 147.845 36.5299C146.795 37.4157 146.27 38.9904 146.27 41.2542V54H137.855V26.5399H146.27V31.1166ZM184.789 39.827C184.789 40.6144 184.74 41.4346 184.642 42.2876H165.597C165.728 43.9936 166.269 45.3059 167.221 46.2246C168.205 47.1104 169.403 47.5533 170.813 47.5533C172.913 47.5533 174.373 46.6675 175.193 44.8958H184.15C183.69 46.7003 182.854 48.3243 181.64 49.7678C180.459 51.2113 178.966 52.3432 177.162 53.1634C175.357 53.9836 173.34 54.3937 171.109 54.3937C168.418 54.3937 166.023 53.8196 163.924 52.6713C161.824 51.523 160.184 49.8826 159.003 47.7501C157.821 45.6176 157.231 43.1242 157.231 40.2699C157.231 37.4157 157.805 34.9223 158.953 32.7898C160.134 30.6573 161.775 29.0169 163.875 27.8686C165.974 26.7203 168.386 26.1462 171.109 26.1462C173.766 26.1462 176.128 26.7039 178.195 27.8194C180.262 28.9349 181.87 30.526 183.018 32.5929C184.199 34.6598 184.789 37.0712 184.789 39.827ZM176.177 37.6125C176.177 36.169 175.685 35.0207 174.701 34.1677C173.717 33.3147 172.487 32.8882 171.01 32.8882C169.599 32.8882 168.402 33.2983 167.418 34.1185C166.466 34.9387 165.876 36.1034 165.646 37.6125H176.177Z"
              fill="white"
            />
          </svg>
        </div>
      </Fade>
      <Fade bottom>
        <div className="container__home__explore__info">
          Buy <span>meal kits</span>, <span>meal prep</span> or
          <span>food trays</span> weekly or monthly..
        </div>
        <div className="container__home__explore__content">
          <div className="container__home__explore__content__entry">
            <div className="container__home__explore__content__entry__title">
              Meal Kits
            </div>
            <img
              src={meal}
              alt="Meal Kits"
              className="container__home__explore__content__entry__img"
            />
            <div className="container__home__explore__content__entry__overlay">
              <div className="container__home__explore__content__entry__overlay__title">
                Meal Kits
              </div>
              <div className="container__home__explore__content__entry__overlay__info">
                Find the Meal Kit provider that is right for you. Easily compare
                the prices of the some of your fave vendors. Get started now...
              </div>
            </div>
          </div>
          <div className="container__home__explore__content__entry">
            <div className="container__home__explore__content__entry__title">
              Meal Prep
            </div>
            <img
              src={starter}
              alt="Meal Kits"
              className="container__home__explore__content__entry__img"
            />
            <div className="container__home__explore__content__entry__overlay">
              <div className="container__home__explore__content__entry__overlay__title">
                Meal Prep
              </div>
              <div className="container__home__explore__content__entry__overlay__info">
                Find the Meal Prep provider that iss closer to you. Easily
                compare the prices of the some of your fave vendors. Get started
                now...
              </div>
            </div>
          </div>
          <div className="container__home__explore__content__entry">
            <div className="container__home__explore__content__entry__title">
              Food trays
            </div>
            <img
              src={enjoy}
              alt="Meal Kits"
              className="container__home__explore__content__entry__img"
            />
            <div className="container__home__explore__content__entry__overlay">
              <div className="container__home__explore__content__entry__overlay__title">
                Food trays and chauteries
              </div>
              <div className="container__home__explore__content__entry__overlay__info">
                Feel like buying a large tray of jollof rice for your family or
                do you feel like a chauteria breakfast board? Check out our
                vendors who sell food in bulk and large quantities. See more....
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
