import React from 'react'
import './checkout.css'
import amex from '../../assets/logo/amex.png'
import mastercard from '../../assets/logo/mastercard.png'
import visa from '../../assets/logo/visa.png'
import applepay from '../../assets/logo/applepay.png'
import paypall from '../../assets/logo/paypall.png'

const Checkout = () => {
  return (
    <div className='checkout_container'>
        <div className='cupon_container'>
            <span>have a coupon? </span>
            <div className='cuppon_apply'>
                <input type="text" name="" id=""  placeholder='Add coupon'/>
                <button>Apply</button>
            </div>
        </div>


        <div className='total_container'>
            <div className='total'>
                <span className='subtotal_span'>Subtotal:</span>
                <span className='total_span1'>$1403.97</span>
            </div>
            <div className='total'>
                <span className='subtotal_span'>discount:</span>
                <span className='total_span2'>$- 60</span>
            </div>
            <div className='total'>
                <span className='subtotal_span'>tax:</span>
                <span className='total_span3'>+ $14.00</span>
            </div>
            <div className='total_2'>
                <span className='subtotal_span2'>Total:</span>
                <span className='total_span4'>$1357.97</span>
            </div>
            <button>checkout </button>
            <div className='card_container'>
                <img src={amex} alt="" />
                <img src={mastercard} alt="" />
                <img src={visa} alt="" />
                <img src={applepay} alt="" />
                <img src={paypall} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Checkout