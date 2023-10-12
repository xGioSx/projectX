import React, { useEffect, useState } from 'react'
import './product.css'
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../../store/singleproduct';
import aviable from '../../../assets/logo/Aviable.png';
import favorite from '../../../assets/logo/favorite.png';
import basket from '../../../assets/logo/basket.png';
import circle from '../../../assets/logo/circule.png';
import star from '../../../assets/logo/rating.png';
import chat from '../../../assets/logo/message.png';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../../store/addtocart';

const Product = () => {

    const dispatch = useDispatch ()
    
    const [selectedImage, setSelectedImage] = useState('');
    
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };
    const params = useParams()

    const handleAdd = (id) => {
        dispatch(addToCart(id))
    }
    
    
    const {singleproduct, images} = useSelector (state => state.singleProduct) 

    const img = singleproduct.images

  console.log(singleproduct)

 useEffect(() => {
    dispatch(getSingleProduct(params.productid)) 
 },[dispatch])

  return (
    <div className='about_product_container'>
        <div className='about_product_container2'>
            <div className='image_container'>
                <div className='main_image'>
                  <img src={selectedImage? selectedImage : images[1]} alt='' />
                </div>

                <div className='small_images'>
                    {images.map((item, i) => {
                        return <img key={i + 7554356} src={item} alt='' onClick={() => handleImageClick(item)} />   
                    })}
                </div>
            </div>

            <div className='info_container'>
                <div className='info_1'>
                    <img src={aviable} alt="" />
                    <p>{singleproduct.name}</p>
                </div>

                <div className='info_2'>
                    <div className='rating_star'>
                        <img src={star} alt="" />
                        <span className='star_span'>4.5</span>
                    </div>

                    <img src={circle} alt="" />
                    <img src={chat} alt="" />
                    <span>32 reviews</span>
                    <img src={circle} alt="" />
                    <img src={basket} alt="" />
                    <span>154 sold</span>
                </div>

                <div className='info_3'>

                    <div className='pink'>
                        <div className='pink_box'> 
                            <p>${singleproduct.price}</p>
                            <span>50-100 pcs</span>
                        </div>
                        <div className='pink_box'> 
                            <p>${Math.floor(singleproduct.price - (singleproduct.price / 100 * 10))}</p>
                            <span>50-100 pcs</span>
                        </div>
                        <div className='pink_box'> 
                            <p>${Math.floor(singleproduct.price - (singleproduct.price / 100 * 15))}</p>
                            <span>50-100 pcs</span>
                        </div>
                    </div>
                </div>

                <div className='description_box'>

                    <div className='prise_span_1'>
                        <div className='spans_boxx'>
                            <span className='span_text'>Price: </span>
                            <span className='span_text2'>Negotiable </span>
                        </div>
                        <div className='spans_boxx'>
                            <span className='span_text'>Type:: </span>
                            <span className='span_text2'>Classic  shoes </span>
                        </div>
                        <div className='spans_boxx'>
                            <span className='span_text'>Material: </span>
                            <span className='span_text2'>Plastic material  </span>
                        </div>
                        <div className='spans_boxx'>
                            <span className='span_text'>Design: </span>
                            <span className='span_text2'>Modern nice </span>
                        </div>
                        <div className='spans_boxx'>
                            <span className='span_text'>Customization: </span>
                            <span className='span_text2'>Customized logo and design  </span>
                        </div>
                        <div className='spans_boxx'>
                            <span className='span_text'>Protection: </span>
                            <span className='span_text2'>Refund Policy </span>
                        </div>
                        <div className='spans_boxx'>
                            <span className='span_text'>Warranty: </span>
                            <span className='span_text2'>2 years full warranty  </span>
                        </div>
                        
                        <div className='add_cart_butt_cont'>
                            <button onClick={() => (handleAdd(singleproduct.id))}>Add To Cart  </button>
                            <img src={favorite} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product
