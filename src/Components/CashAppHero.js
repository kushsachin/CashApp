import React, { useEffect, useState } from 'react'
import { ReactComponent as CashAppLogo } from '../assets/svgs/cashAppLogo.svg';
import { ReactComponent as EyeButton } from '../assets/svgs/eyeButton.svg';
import { ReactComponent as IntroPhone } from '../assets/svgs/introPhone.svg';
import Footer from './Footer';


export default function CashAppHero() {
  // State For hamburger menu OPEN/CLOSE
  const [checked, setChecked] = useState(false);

  // Restrict scroll when hamburger menu open
  useEffect(() => {
    if (checked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [checked]);
  return (
    <div className="Hero">
      {/* Hanburger */}
      <div className="Hero_menuToggle" onClick={() => setChecked(!checked)}>
        {/* hamburger Icon */}
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span></span>
        <span></span>
        <span></span>
        {/* hamburger Menu */}
        <div id="menu">
          <ul className="menu_list text-font-family-Agrandir ul-style text--font-sz-12">
            <li>
              <a href="/Signin" className="text--c-white">
                Sign In
              </a>
            </li>
            <li>
              <a href="/Legal" className="text--c-white">
                Legal
              </a>
            </li>
            <li>
              <a href="/Security" className="text--c-white">
                Security
              </a>
            </li>
            <li>
              <a href="/Careers" className="text--c-white">
                Careers
              </a>
            </li>
            <li>
              <a href="/Press" className="text--c-white">
                Press
              </a>
            </li>
            <li>
              <a href="/Support" className="text--c-white">
                Support
              </a>
            </li>
            <li>
              <a href="/Status" className="text--c-white">
                Status
              </a>
            </li>
            <li>
              <a href="/Support" className="text--c-white">
                Codeblog
              </a>
            </li>
            <li>
              <a href="#Eye" className="text--c-white">
                Eye button
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Hero_container">
        <header className="Hero_header">
          <h1 className="header__logo-h1 text-m-x-y-0">
            <a href="/">
              <CashAppLogo />
            </a>
          </h1>
          <nav className="Hero_nav">
            <ul className="Hero_nav-list text-font-family-Agrandir ul-style text--c-white text--font-sz-12">
              <li>
                <a href="/Signin" className="text--c-white">
                  Sign In
                </a>
              </li>
              <li>
                <a href="/Legal" className="text--c-white">
                  Legal
                </a>
              </li>
              <li>
                <a href="/Security" className="text--c-white">
                  Security
                </a>
              </li>
              <li>
                <a href="/Careers" className="text--c-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="/Press" className="text--c-white">
                  Press
                </a>
              </li>
              <li>
                <a href="/Support" className="text--c-white">
                  Support
                </a>
              </li>
              <li>
                <a href="/Status" className="text--c-white">
                  Status
                </a>
              </li>
              <li>
                <a href="/Support" className="text--c-white">
                  Codeblog
                </a>
              </li>
            </ul>
            <h1 className="text-m-x-y-0">
              <a href="/">
                <EyeButton />
              </a>
            </h1>
          </nav>
        </header>
        <section className="Hero_content text-font-family-Agrandir text--c-white">
          <h2 className="head1 text-m-x-y-0">Cash</h2>
          <h2 className="head2 text-m-x-y-0">App</h2>
          <IntroPhone />
        </section>
        <Footer bg={"Light"} />
      </div>
    </div>
  );
}
