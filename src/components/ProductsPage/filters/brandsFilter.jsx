import React, { useState, useEffect } from 'react'
import './brandsFilter.css'

const BrandsFilter = () => {
    const [show, setShow] = useState(false)
  return (
    <div className='brand_filter_container'>
        <div className='filter_header_container' onClick={() => (setShow(prev => !prev))}>
            <span><b>Brands</b></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z" fill="#8B96A5"/>
            </svg>
        </div>
        <div className={`filter_content ${show? 'showbrands' : ''}`}>
            <ul className='label_filter_ul'>
                <li><input type='checkbox'></input> <label htmlFor="idBrand">apple</label>  </li>
                <li><input type='checkbox'></input> <label htmlFor="idBrand">sony</label>  </li>
                <li><input type='checkbox'></input> <label htmlFor="idBrand">samsung</label>  </li>
                <li><input type='checkbox'></input> <label htmlFor="idBrand">nokia</label>  </li>
                <li><input type='checkbox'></input> <label htmlFor="idBrand">pixel</label>  </li>
                <li><input type='checkbox'></input> <label htmlFor="idBrand">lenovo</label>  </li>
                <li><input type='checkbox'></input> <label htmlFor="idBrand">huawei</label>  </li>
                
           
            </ul>
            <div className='see_all'><span>See all</span></div>
        </div>
    </div>
  )
}

export default BrandsFilter
