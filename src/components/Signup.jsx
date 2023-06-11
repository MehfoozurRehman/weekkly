import { signupimg, signupimg2 } from "@assets";

export default function Signup() {
  return (
    <div className="signupsection">
      <div className="signupsection__content">
        <div className="signupsection__content__left">
          <div className="signupsection__content__left__img">
            <img src={signupimg} alt="Signupimg" />

            <div className="signupsection__content__left__heading">
              Sign Up as a Seller
            </div>
            <div className="signupsection__content__left__info">
              Send a provider you like? Subscribe and receive meals ever week...
            </div>
            <button className="signupsection__content__left__button">
              Sign Up
            </button>
          </div>
        </div>
        <div className="signupsection__content__left">
          <div className="signupsection__content__left__img">
            <img src={signupimg2} alt="Signupimg" />

            <div className="signupsection__content__left__heading">
              Sign Up as a Seller
            </div>
            <div className="signupsection__content__left__info">
              Send a provider you like? Subscribe and receive meals ever week...
            </div>
            <button className="signupsection__content__left__button">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
