import { signup1, signup2 } from "@assets";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function Signup() {
  return (
    <section className="signup__section" id="compare">
      <Fade left>
        <div className="signup__section__entry">
          <img
            src={signup1}
            alt="signup1"
            className="signup__section__entry__img"
          />
          <div className="signup__section__entry__overlay">
            <div className="signup__section__entry__overlay__heading">
              Sign Up as a Seller
            </div>
            <div className="signup__section__entry__overlay__info">
              Send a provider you like? Subscribe and receive meals ever week...
            </div>
            <Link to="/" className="signup__section__entry__overlay__link">
              Sign Up
            </Link>
          </div>
        </div>
      </Fade>

      <Fade right>
        <div className="signup__section__entry">
          <img
            src={signup2}
            alt="signup2"
            className="signup__section__entry__img"
          />
          <div className="signup__section__entry__overlay">
            <div className="signup__section__entry__overlay__heading">
              Sign Up as a Seller
            </div>
            <div className="signup__section__entry__overlay__info">
              Send a provider you like? Subscribe and receive meals ever week...
            </div>
            <Link to="/" className="signup__section__entry__overlay__link">
              Sign Up
            </Link>
          </div>
        </div>
      </Fade>
    </section>
  );
}
