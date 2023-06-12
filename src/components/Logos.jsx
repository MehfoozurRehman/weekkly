import {
  logosImage,
  live,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
} from "@assets";

export default function Logos() {
  return (
    <div className="logos__section">
      <div className="logos__section__left">
        <img src={live}  className="logos__section__left__title__img"/>
        <div className="logos__section__left__title__heading">
          Cook along with our community{" "}
        </div>
        <div className="logos__section__left__title__info">
          Join the online community. Buy your meal kits and cook along with
          others who are cooking the same meals as you with our live stream
          capabilities.
        </div>
        <div className="logos__section__left__logos">
          <img src={logo1} />
          <img src={logo2} />
          <img src={logo3} />
          <img src={logo4} />
          <img src={logo5} />
          <img src={logo6} />
          <img src={logo7} />
          <img src={logo8} />
          <img src={logo9} />
        </div>
      </div>
      <div className="logos__section__right">
        <img src={logosImage} />
      </div>
    </div>
  );
}
