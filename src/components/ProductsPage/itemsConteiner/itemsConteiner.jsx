import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../store/products'
import './itemsConteiner.css'
import phone from '../../../assets/pictures/smartphone.png'
import rating from '../../../assets/logo/rating.png'
import circle from '../../../assets/logo/circule.png'
import favorite from '../../../assets/logo/favorite.png'

const ItemsConteiner = () => {
        const dispatch = useDispatch ()

        const {products} = useSelector ((state) => state.products)
        useEffect(() => {
            dispatch(getProducts())
        }, [dispatch])


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
                                            <img src={rating} alt="" />
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
                                        <span className='lorem'>{product.description}</span>
                                        <span className='view_detail'>View details</span>
                                    </div>
                                </div>              
                                <div className='favorite'>
                                    <img src={favorite} alt="" />
                                </div>   
                            </div>)

                
            })}

          {/* <div className='nav_2'>
                    <div className='product_img1'>
                        <img src={phone} alt="" />
                    </div>
                    <div className='prise_description'>
                        <span className='span1'>Canon Camera EOS 2000, Black 10x zoom</span>
                        <div className='span_box'>
                            <span className='new_prise'>$998.00</span>
                            <span className='old_prise'> <del>$1199.00</del></span>
                        </div>
                        <div className='rating_box'>
                            <div className='rating_star'>
                                <img src={rating} alt="" />
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
                            <span className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. doloribus adipisci iste at nesciunt libero aspernatur ea veniam! Aliquid, placeat.</span>
                            <span className='view_detail'>View details</span>
                        </div>
                    </div>              
                    <div className='favorite'>
                         <img src={favorite} alt="" />
                    </div>   
            </div>

                 */}




      
    </div>


  )
}

export default ItemsConteiner
