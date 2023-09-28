import React from 'react'
import './cart.css'
import Cartcomp from '../../components/cart/cartcomp'
import Checkout from '../../components/checkout'
import Superdiscount from '../../components/superdiscount'
import Save from '../../components/save/save'


const Cart = () => {
  return (
    <div >
       <div className='cart_page_container' >
        <Cartcomp/>
        <Checkout/>
      </div>
        <Save/> 
        <Superdiscount/>
    </div>
    
  )
}

export default Cart
