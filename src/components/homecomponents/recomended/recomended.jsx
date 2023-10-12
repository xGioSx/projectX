import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useSearchParams, } from 'react-router-dom'
import { getProducts } from '../../../store/products'
import './recomended.css'

const Recomended = () => {
  // const [searchParams, setSearchParams] = useSearchParams()
  // const params = Object.fromEntries([...searchParams]);

  const dispatch = useDispatch()



  const params = {categoryId : '', priceFrom :'', priceTo:'' }

  const {products} = useSelector((state) => state.products)
  useEffect(() => {
    dispatch(getProducts(params))
  }, [dispatch])

 console.log(products)

  return (
    <section className='recomendedsection'>
      <div className='recomended'>
          <div className='recomendSpan'> 
            <span> <b>recomended items</b></span>
          </div>
          <div className='all_product'>
            <ul className='recomended_items_ul'>             
                {products.map((product, index) => {
                  return  index < 8 && <Link to={`/singlproduct/${product.id}` } key={product.id}> 
                  <li  className='prduct_list'> 
                  <img src={product.images} alt="" />
                  <div className='product_info'>
                    <span className='price'>${product.price}</span>
                    <span className='product' title={product.description}>{product.brand}</span>
                  </div>
                </li> 
                </Link>
                })}              
            </ul>
          </div>
      </div>

    </section>
  )
}

export default Recomended


