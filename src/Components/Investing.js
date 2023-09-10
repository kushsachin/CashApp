import React from 'react'
import InvestingStockPhone  from '../assets/svgs/investing/investingStockPhone.svg';
import InvestingBitcoinPhone  from '../assets/svgs/investing/investingBitcoinPhone.svg';
import Footer from './Footer';

export default function Investing() {
  return (
    <div className="Investing">
      <div className="Investing_container">
        <h2 className="text-font-family-Agrandir text--c-white text-m-x-y-0">
          Investing
        </h2>
        <div className="Investing_container-content">
          <div className="Investing_container-stocks">
            <div className="Investing_container-text">
              <h3 className="text-font-family-Agrandir text--c-black text-m-x-y-0">
                Stocks
              </h3>
              <p className="text-font-family-Mulish text--c-black text-m-x-y-0 text--font-sz-16">
                Whether you’re an expert or just getting started, Cash App is
                the fastest and most accessible way to invest in stocks. Start
                now with as little as $1.
              </p>
            </div>
            <img src={InvestingStockPhone} alt="InvestingStockPhone" />
          </div>
          <div className="Investing_container-bitcoin">
            <img src={InvestingBitcoinPhone} alt="InvestingBitcoinPhone" />
            <div className="Investing_container-text">
              <h3 className="text-font-family-Agrandir text--c-black text-m-x-y-0">
                Bitcoin
              </h3>
              <p className="text-font-family-Mulish text--c-black text-m-x-y-0 text--font-sz-16">
                Cash App is the fastest way to convert dollars to bitcoin. From
                your home screen, six taps are all it takes to stack sats, buy
                an entire bitcoin, or just see what it’s all about.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Investing_footer">
        <Footer bg={"Dark"} />
      </div>
    </div>
  );
}
