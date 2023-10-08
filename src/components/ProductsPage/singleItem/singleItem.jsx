import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import circle from '../../../assets/logo/circule.png'
import favorite from '../../../assets/logo/favorite.png'     
import RatingStars from '../../extra/ratingstars/ratingStars' 

const SingleItem = ({product}) => {
    const [show, setShow] = useState(false)
  return (
    <div key={product.id} className='nav_2'>
                <div className='product_img1'>
                  <Link to={`/singlproduct/${product.id}`} >
                    <img src={product.images} alt="" />
                  </Link>
                </div>
                <div className='prise_description'>
                    <Link to={`/singlproduct/${product.id}`} className='span1'>{product.name}</Link>
                    <RatingStars/>
                    <div className='span_box'>
                        <span className='new_prise'>{product.price}</span>
                    </div>
                    <div className='rating_box'>
                        
                        <div className='order_info'>
                            <img src={circle} alt="" />
                            <span className='order_span'>194 orders</span>
                            <img src={circle} alt="" />
                            <span className='free_span'>Free Shipping</span>
                        </div>
                    </div>
                    <div className='spans_cont'>
                        <span className='lorem' style={{ height: show? '200px' : '70px'}}>{product.description}</span>
                        <span className='view_detail' onClick={() => (setShow(prev => !prev))}>
                          View details</span>
                    </div>
                </div>              
                <div className='favorite'>
                    <img src={favorite} alt="" />
                </div>   
            </div>
)
}

export default SingleItem
