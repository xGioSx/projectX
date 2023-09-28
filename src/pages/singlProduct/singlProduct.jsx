import React from 'react'
import './singlProduct.css'
import Product from '../../components/singlproduct/detals/product'
import Aboutus from '../../components/singlproduct/aboutus'
import Relatedproduct from '../../components/singlproduct/relatedproduct'
import Superdiscount from '../../components/superdiscount'


const SinglProduct = () => {
  return (
    <div className='singl_product_page'>
        <Product/>
        <Aboutus/>
        <Relatedproduct/>
        <Superdiscount/>
      
    </div>
  )
}

export default SinglProduct
