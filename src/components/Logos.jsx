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
import Img from "@modules/Img";

export default function Logos() {
  return (
    <div className="logos__section">
      <div className="logos__section__left">
        <div className="logos__section__left__title">
          <Img suspense={true} src={live} />
        </div>
        <div className="logos__section__left__logos">
          <Img suspense={true} src={logo1} />
          <Img suspense={true} src={logo2} />
          <Img suspense={true} src={logo3} />
          <Img suspense={true} src={logo4} />
          <Img suspense={true} src={logo5} />
          <Img suspense={true} src={logo6} />
          <Img suspense={true} src={logo7} />
          <Img suspense={true} src={logo8} />
          <Img suspense={true} src={logo9} />
        </div>
      </div>
      <div className="logos__section__right">
        <Img suspense={true} src={logosImage} />
      </div>
    </div>
  );
}
