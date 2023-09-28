import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './blockItemGroup2.css'
import { getLatestProducts } from '../../../store/latestproducts'



const BlockItemGroup2 = () => {
    const dispatch = useDispatch ()

    const {latestProducts} = useSelector ((state) => state.latestProducts)
    useEffect(() => {
      dispatch(getLatestProducts())
    }, [dispatch])



  return (
    <section className='item_conteiner2'>
      
      <div className='left2'>
        <div> <span>consumer electronics and gadgets</span></div>
        <button className='source_now2'> source now </button>
      </div>


      <div className='product_all2'>
          {latestProducts.map((product) => {
            return  (<div className='product_list2'>
                          <div className='img2'><img src={product.images} alt="" /></div>
                          <div className='info2'>
                            <span>{product.name}</span>
                            <span>from <br /> {product.price} </span>
                            </div>
                    </div> )
                
          })}

      </div>

    </section>
  )
}

export default BlockItemGroup2
