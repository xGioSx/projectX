import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './cartcomp.css'
import arrowdown from '../../assets/logo/arrowdown.png'
import leftarrow from '../../assets/logo/leftarrow.png'
import lock from '../../assets/logo/lock.png'
import message from '../../assets/logo/chat.png'
import truck from '../../assets/logo/truck.png'
import { myCart } from '../../store/mycart'
import {deleteCart} from '../../store/deletecart'


const Cartcomp = () => {

  const dispatch = useDispatch()

  const {products} = useSelector((state) => state.myCart)
  const {loading} = useSelector((state) => state.deleteCart)


  const deleteFromCart = (id) => { 
    dispatch(deleteCart(id))
  }

   useEffect(() => {
    dispatch(myCart())
   }, [dispatch, loading])



   console.log(products)

  return (
    <div className='cart_container'>
      <h1>my cart ({products.length})</h1>
      <div className='cart_product_container'> 

      {products.map((item) => {
        return <div className='cart_product_box'>
        <div>
            <img src={item.images[1]} alt="" />
        </div>
        <div className='cart_product_box2'>
          <div>
            <span>{item.brand}</span>
          </div>
          <div>
            <span>Size: medium, Color: blue,  Material: Plastic Seller: Artel Market</span>
          </div>
          <div className='cart_button_container'>
            <button onClick={() => {deleteFromCart(item.id)}}>remove</button>
            <button>save for latter</button>
          </div>
        </div>
        <div className='quant_container'>
          <span>${item.price}</span>
          <span className='quantity'>Qty:9 <img src={arrowdown} alt="" /></span>
        </div>
      </div>
      })}

        
      

        
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
