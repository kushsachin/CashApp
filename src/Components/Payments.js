import React from 'react'
import PaymentsPhone from '../assets/svgs/payments/paymentPhone.svg';
export default function Payments() {
    return (
        <div id='Payments' className='Payments_bg'>
            <div className='Payments'>
                <div className='Payments_container'>
                    <div className='Payment_main'>
                        <div className='Payment_main-content'>
                            <h2 className='text-font-family-Agrandir text--c-green text-m-x-y-0 text--font-sz-40'>Payments</h2>
                            <p className='text-font-family-Mulish text--c-black text-m-x-y-0 text--font-sz-16'>Send and receive money with anyone, donate to an important cause, or tip professionals. Just enter a $cashtag, phone number, or scan their QR code to pay.</p>
                        </div>
                        <img src={PaymentsPhone} alt='PaymentsPhone'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
