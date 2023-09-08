import React, { useEffect, useState } from 'react'
import { ReactComponent as CashAppLogo } from '../assets/svgs/cashAppLogo.svg';
import { ReactComponent as EyeButton } from '../assets/svgs/eyeButton.svg';
import { ReactComponent as IntroPhone } from '../assets/svgs/introPhone.svg';
import { ReactComponent as Apple } from '../assets/svgs/apple.svg';
import { ReactComponent as Google } from '../assets/svgs/google.svg';
import { ReactComponent as Message } from '../assets/svgs/messages.svg';
import { ReactComponent as Twitter } from '../assets/svgs/twitter.svg';
import { ReactComponent as Insta } from '../assets/svgs/instagram.svg';
import { ReactComponent as ArrowDown } from '../assets/svgs/arrowDown.svg';

export default function CashAppHero() {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        if(checked){
            document.body.style.overflow = "hidden";
            // return () => (document.body.style.overflow = "scroll");
        }else{
            document.body.style.overflow = "scroll";
            // return () => (document.body.style.overflow = "scroll");
        }
    },[checked]);
  return (
    <div className='Hero'>
        <div className="Hero_menuToggle" onClick={() => setChecked(!checked)}>
            <input type="checkbox" checked={checked} />
            <span></span>
            <span></span>
            <span></span>
            <div id="menu">
                <ul className='menu_list text-font-family-Agrandir ul-style text--font-sz-12'>
                    <li><a href="/Signin" className='text--c-white'>Sign In</a></li>
                    <li><a href="/Legal" className='text--c-white'>Legal</a></li>
                    <li><a href="/Security" className='text--c-white'>Security</a></li>
                    <li><a href="/Careers" className='text--c-white'>Careers</a></li>
                    <li><a href="/Press" className='text--c-white'>Press</a></li>
                    <li><a href="/Support" className='text--c-white'>Support</a></li>
                    <li><a href="/Status" className='text--c-white'>Status</a></li>
                    <li><a href="/Support" className='text--c-white'>Codeblog</a></li>
                    <li><a href="#Eye" className='text--c-white'>Eye button</a></li>
                </ul>
            </div>
        </div>
        <div className='Hero_container'>
            <header className='Hero_header'>
                <h1 className="header__logo-h1 text-m-x-y-0">
                    <a href="/">
                        <CashAppLogo/>
                    </a>
                </h1>
                <nav className='Hero_nav'>
                    <ul className='Hero_nav-list text-font-family-Agrandir ul-style text--c-white text--font-sz-12'>
                        <li><a href="/Signin" className='text--c-white'>Sign In</a></li>
                        <li><a href="/Legal" className='text--c-white'>Legal</a></li>
                        <li><a href="/Security" className='text--c-white'>Security</a></li>
                        <li><a href="/Careers" className='text--c-white'>Careers</a></li>
                        <li><a href="/Press" className='text--c-white'>Press</a></li>
                        <li><a href="/Support" className='text--c-white'>Support</a></li>
                        <li><a href="/Status" className='text--c-white'>Status</a></li>
                        <li><a href="/Support" className='text--c-white'>Codeblog</a></li>
                    </ul>
                    <h1 className="text-m-x-y-0">
                        <a href="/">
                            <EyeButton/>
                        </a>
                    </h1>
                    
                </nav>
            </header>
            <section className='Hero_content text-font-family-Agrandir text--c-white'>
                <h2 className='head1 text-m-x-y-0'>Cash</h2>
                <h2 className='head2 text-m-x-y-0'>App</h2>
                <IntroPhone/>
            </section>
            <section className='Hero_footer'>
                <div className='Hero_footer-buttons text-font-family-Agrandir'>
                    <button className='text-font-family-Agrandir text--font-sz-12 bg-dark text--c-white'><Apple/> App Store</button>
                    <button className='text-font-family-Agrandir text--font-sz-12 bg-dark text--c-white'><Google/> Google Play</button>
                </div>
                <div className='Hero_footer-content'>
                    <p className='text-font-family-Mulish text--font-sz-10 text--c-white'>
                        Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
                    </p>
                    <ul className='ul-style'>
                        <li>
                            <a href="/"><Message/></a>
                        </li>
                        <li>
                            <a href="/"><Twitter/></a>
                        </li>
                        <li>
                            <a href="/"><Insta/></a>
                        </li>
                    </ul>
                </div>
                <a href="#Payments" className='NavigateToPayment'>
                    <ArrowDown/>
                </a>
            </section>
        </div>      
    </div>
  )
}
