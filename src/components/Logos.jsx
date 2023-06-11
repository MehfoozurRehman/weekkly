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
        <div className="logos__section__left__title">
          <img src={live}></img>
        </div>
        <div className="logos__section__left__logos">
          <img src={logo1}></img>
          <img src={logo2}></img>
          <img src={logo3}></img>
          <img src={logo4}></img>
          <img src={logo5}></img>
          <img src={logo6}></img>
          <img src={logo7}></img>
          <img src={logo8}></img>
          <img src={logo9}></img>
        </div>
      </div>
      <div className="logos__section__right">
        <img src={logosImage}></img>
      </div>
    </div>
  );
}
