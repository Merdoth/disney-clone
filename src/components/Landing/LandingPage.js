import React from 'react';
import CtaLogo1 from "../../assets/images/cta-logo-one.svg";
import CtaLogo2 from "../../assets/images/cta-logo-two.png";
import "./LandingPage.css";

function LandingPage() {
  return (
    <section className="login__container">
      <div className="login__content">
        <div className="login__cta">
          <img src={CtaLogo1}  className="login__ctaLogo1" alt="Sponsors" />
          <a className="login__btn">GET ALL THERE</a>
          <p className="login__desc">Get Premier Access to Raya and the Last Dragon 
            for an additional fee with a Disney+
            subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle increase by $1.
          </p>
          <img src={CtaLogo2} className="login__ctaLogo2" alt="Services" />
        </div>
        <div className="login__img"></div>
      </div>
    </section>
  )
}


export default LandingPage;
