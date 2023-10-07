import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../store/products'
import './itemsConteiner.css'
import circle from '../../../assets/logo/circule.png'
import favorite from '../../../assets/logo/favorite.png'

const ItemsConteiner = () => {
        const dispatch = useDispatch ()

        const {products} = useSelector ((state) => state.products)
        useEffect(() => {
            dispatch(getProducts())
        }, [dispatch])

  const [show, setShow]  = useState(''); 

        


  return (
    <div className='full_item_container'>
          <div className='selected_product'>
            <div className='summary_items'>
              <span> 12,911 items in <b>Mobile accessory</b></span>
            </div>
            <div className='verify_input'>
              <input type="checkbox" className="verify_only" id="" />
              <label htmlFor="verified_only">Verified only</label>
            </div>
            <div className='select_value'>
              <select className="selected_items" id="">
                <option value="option1">featured</option>
                <option value="option2">selected</option>
                <option value="option3">second hand</option>
              </select>
            </div>
            <div className='view_list_select'>
              <div className='view_box'>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11 3H3V11H11V3Z" fill="#1C1C1C"/>
                    <path d="M11 13H3V21H11V13Z" fill="#1C1C1C"/>
                    <path d="M21 3H13V11H21V3Z" fill="#1C1C1C"/>
                    <path d="M21 13H13V21H21V13Z" fill="#1C1C1C"/>
                  </svg>
                </button>
              </div>
              <div className='view_box'>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 8H3V4H21V8ZM21 10H3V14H21V10ZM21 16H3V20H21V16Z" fill="#1C1C1C"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>


              


          {products.map((product) => {
                return  (<div key={product.id} className='nav_2'>
                                <div className='product_img1'>
                                    <img src={product.images} alt="" />
                                </div>
                                <div className='prise_description'>
                                    <span className='span1'>{product.name}</span>
                                    <div className='span_box'>
                                        <span className='new_prise'>{product.price}</span>
                                    </div>
                                    <div className='rating_box'>
                                        <div className='rating_star'>
                                            <div class="rating-group">     
                                                    <input className="fst" value="0" type="radio" disabled checked /> 
                                                    <label for="fst-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 
                                                          103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 
                                                          46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.
                                                          7-23.6-45.6-23.9-57.4 0z"/></svg>
                                                    </label>
                                                      <input className="fst" id="fst-1" value="1" type="radio" />
                                                    
                                                    <label for="fst-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7
                                                           54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7
                                                            68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                                                    </label>
                                                      <input className="fst" id="fst-2" value="2" type="radio" />
                                                    
                                                    <label for="fst-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7
                                                           54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 
                                                           68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 
                                                           150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                                                    </label>
                                                     <input className="fst" id="fst-3" value="3" type="radio" />
                                                    
                                                    <label for="fst-4">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7
                                                           54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 
                                                           68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 
                                                           150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                                                    </label>
                                                     <input className="fst" id="fst-4" value="4" type="radio" />
                                                    
                                                    <label for="fst-5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7
                                                           54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 
                                                           68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 
                                                           150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                                                    </label>
                                                      <input className="fst" id="fst-5" value="5" type="radio" />
                                               </div>
                                         <span>7.5</span>
                                        </div>
                                        
                                        <div className='order_info'>
                                            <img src={circle} alt="" />
                                            <span className='order_span'>194 orders</span>
                                            <img src={circle} alt="" />
                                            <span className='free_span'>Free Shipping</span>
                                        </div>
                                    </div>
                                    <div className='spans_cont'>
                                        <span className='lorem' style={{ display: show === product.id ? 'block' : 'fullproductid'}}>{product.description}</span>
                                        <span className='view_detail' onClick={() => (setShow(product.id) )}>
                                        
                                          
                                          View details</span>
                                    </div>
                                </div>              
                                <div className='favorite'>
                                    <img src={favorite} alt="" />
                                </div>   
                            </div>)

                
            })}




      
    </div>


  )
}

export default ItemsConteiner
