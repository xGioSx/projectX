import React from 'react'
import './cartcomp.css'
import shirt from '../../assets/pictures/shirt.png'
import arrowdown from '../../assets/logo/arrowdown.png'
import leftarrow from '../../assets/logo/leftarrow.png'
import lock from '../../assets/logo/lock.png'
import message from '../../assets/logo/chat.png'
import truck from '../../assets/logo/truck.png'


const Cartcomp = () => {
  return (
    <div className='cart_container'>
      <h1>my cart (2)</h1>
      <div className='cart_product_container'> 
      
        <div className='cart_product_box'>
          <div>
              <img src={shirt} alt="" />
          </div>
          <div className='cart_product_box2'>
            <div>
              <span>T-shirts with multiple colors, for men and lady</span>
            </div>
            <div>
              <span>Size: medium, Color: blue,  Material: Plastic Seller: Artel Market</span>
            </div>
            <div className='cart_button_container'>
              <button>remove</button>
              <button>save for latter</button>
            </div>
          </div>
          <div className='quant_container'>
            <span>$105.99</span>
            <span className='quantity'>Qty:9 <img src={arrowdown} alt="" /></span>
          </div>
        </div>
      
        <div className='cart_product_box'>
          <div>
              <img src={shirt} alt="" />
          </div>
          <div className='cart_product_box2'>
            <div>
              <span>T-shirts with multiple colors, for men and lady</span>
            </div>
            <div>
              <span>Size: medium, Color: blue,  Material: Plastic Seller: Artel Market</span>
            </div>
            <div className='cart_button_container'>
              <button>remove</button>
              <button>save for latter</button>
            </div>
          </div>
          <div className='quant_container'>
            <span>$105.99</span>
            <span className='quantity'>Qty:9 <img src={arrowdown} alt="" /></span>
          </div>
        </div>
      
        <div className='cart_product_box'>
          <div>
              <img src={shirt} alt="" />
          </div>
          <div className='cart_product_box2'>
            <div>
              <span>T-shirts with multiple colors, for men and lady</span>
            </div>
            <div>
              <span>Size: medium, Color: blue,  Material: Plastic Seller: Artel Market</span>
            </div>
            <div className='cart_button_container'>
              <button>remove</button>
              <button>save for latter</button>
            </div>
          </div>
          <div className='quant_container'>
            <span>$105.99</span>
            <span className='quantity'>Qty:9 <img src={arrowdown} alt="" /></span>
          </div>
        </div>



        
        <div className='cart_prise'>
          <div><button> <img src={leftarrow} alt="" /> Back to shop</button></div>
          <button>Remove all</button>    
        </div>

        <div className='delivery_container'>

          <div className='delivery_1'>
            <div className='lock_container'>
             <img src={message} alt="" />
            </div>
            <div className='delivery_2'>
              <span className='delivery_span1'>Customer support</span>
              <span className='delivery_span2'>Have you ever finally just </span>
            </div>
          </div>

          <div className='delivery_1'>
            <div className='lock_container'>
             <img src={lock} alt="" />
            </div>
            <div className='delivery_2'>
              <span className='delivery_span1'>Customer support</span>
              <span className='delivery_span2'>Have you ever finally just </span>
            </div>
          </div>

          <div className='delivery_1'>
            <div className='lock_container'>
             <img src={truck} alt="" />
            </div>
            <div className='delivery_2'>
              <span className='delivery_span1'>Customer support</span>
              <span className='delivery_span2'>Have you ever finally just </span>
            </div>
          </div>

          
        </div>

      </div>
    </div>
  )
}


export default Cartcomp
