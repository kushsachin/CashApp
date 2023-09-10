import React from 'react'
import { ReactComponent as Apple } from "../assets/svgs/apple.svg";
import { ReactComponent as Google } from "../assets/svgs/google.svg";
import { ReactComponent as MessageLight } from "../assets/svgs/messages.svg";
import { ReactComponent as TwitterLight } from "../assets/svgs/twitter.svg";
import { ReactComponent as InstaLight } from "../assets/svgs/instagram.svg";
import { ReactComponent as ArrowDown } from "../assets/svgs/arrowDown.svg";

import { ReactComponent as MessageDark } from "../assets/svgs/dark/messageDark.svg";
import { ReactComponent as TwitterDark } from "../assets/svgs/dark/twitterDark.svg";
import { ReactComponent as InstaDark } from "../assets/svgs/dark/instaDark.svg";

export default function Footer({bg}) {
  return (
    <div className="footer">
      <div className="footer-buttons text-font-family-Agrandir">
        <button
          className={`text-font-family-Agrandir text--font-sz-12 
		  		${
            bg === "Light"
              ? "bg-dark button-border-white text--c-white"
              : "bg-light button-border-black text--c-black"
          } 
			`}
        >
          <Apple /> App Store
        </button>
        <button
			className={`text-font-family-Agrandir text--font-sz-12 
				${
					bg === "Light"
					? "bg-dark button-border-white text--c-white"
					: "bg-light button-border-black text--c-black"
				} 
			`}
        >
          <Google /> Google Play
        </button>
      </div>
      <div className="footer-content">
        <p
          className={`text-font-family-Mulish text--font-sz-10 ${
            bg === "Light" ? "text--c-white" : "text--c-black"
          }`}
        >
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </p>
        <ul className="ul-style">
          <li>
            <a href="/">
              {bg === "Light" ? <MessageLight /> : <MessageDark />}
            </a>
          </li>
          <li>
            <a href="/">
              {bg === "Light" ? <TwitterLight /> : <TwitterDark />}
            </a>
          </li>
          <li>
            <a href="/">{bg === "Light" ? <InstaLight /> : <InstaDark />}</a>
          </li>
        </ul>
      </div>
      {bg === "Light" && (
        <a href="#Payments" className="NavigateToPayment">
          <ArrowDown />
        </a>
      )}
    </div>
  );
}
