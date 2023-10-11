import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './main.css'
import userlogo from '../../../assets/logo/Avatar1.png'
import { getCategories } from '../../../store/categories'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'

const Main = () => {
    const [searchParams, setSearchParams ] = useSearchParams()
    const params = Object.fromEntries([...searchParams]);

    const dispatch = useDispatch ()

    const navigate = useNavigate()

    const {categories} = useSelector((state) => state.categories)

    useEffect(() => {
      dispatch(getCategories())

    }, [dispatch])

    const handleCategory = (id, category) => {
      setSearchParams ({
        ...params, 
        categoryId: id,
        categoryName: category,
      })
      navigate (`/ProductPage?categoryId=${id}`)

      // const searchParams = new URLSearchParams();
      //     searchParams.set('categoryId', id);
      //     navigate(`/ProductPage?${searchParams.toString()}`);
    }


  return (


    <section className='main_section'>
      <div className='productli_ul'>
        

        <ul className='productsli'>
        {categories.map((product) => {
              return<li  key={product.id} onClick={() => handleCategory(product.id, product.name)}>{product.name}</li>

              })} 
        </ul>
 
        <div className='baner'>
        <div className='in_banner'><span>latest trening<br /> <b>electronic items</b></span><br />
          <button>learn more</button>
        </div>
        </div>

        <div className='right'>
          <div className='login'>
            <div className='hello'>
              <img src={userlogo} alt="" />
              <span>hi, user <br />let`s get started</span>
            </div>
            <div className='buttons'>
              <button className='join_now'>join now</button>
                 <Link to='/signup' className='log_in'>
                    <button className='log_in'>log in</button>
                 </Link> 
          
            </div>
          </div>

          <div className='block1'>
            <span>Get US $10 off <br /> with a new  <br />supplier</span>
          </div>
  
          <div className='block2'>
            <span>Send quotes with <br />supplier <br />preferences</span>
          </div>
        </div>

      </div>
       
    </section>
  )
}

export default Main
