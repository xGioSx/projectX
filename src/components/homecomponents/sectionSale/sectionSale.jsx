import React, { useEffect } from 'react'
import './sectionSale.css'
import watches from '../../../assets/pictures/watches.png'
import laptops from '../../../assets/pictures/leptop.png'
import { useDispatch, useSelector } from 'react-redux'
import { getOfferedProducts } from '../../../store/offeredproducts'


const SectionSale = () => {

   const dispatch = useDispatch()

   const {offeredProducts, loading, error} = useSelector((state) => state.offeredProducts)

   useEffect(() => {
      dispatch(getOfferedProducts())
   }, [dispatch])

  return (
    <section className='section_Sale'>
      
        <div className='start'>
            <div className='text'> <b> deals and offers</b>  hygiene equipments
            </div>

            <div className='timer'>
               <div className='time'><span>04 days</span></div>
               <div className='time'><span>13 hours</span></div>
               <div className='time'><span>34 min</span></div>
               <div className='time'><span>56 sec</span></div>
            </div>
        </div>


         <div className='products'>
            {offeredProducts.map((product)=> {
               return ( <div key={product.id} className='watches'>
               <img src={product.image} alt="" />  
               <span>{product.name}</span>
               <div className='discounts'>{Math.floor(product.newPrice / product.oldPrice *100) }%</div>
            </div>)
            })}

         </div>

           
      
    </section>
  )
}

export default SectionSale
