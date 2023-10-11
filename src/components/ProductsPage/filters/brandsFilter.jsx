import React, { useState, useEffect } from 'react'
import './brandsFilter.css'

const BrandsFilter = () => {
    const [show, setShow] = useState(false)
    const [seeAll, setSeeAll] = useState(false)
  return (
    <div className='brand_filter_container'>
        <div className='filter_header_container' onClick={() => (setShow(prev => !prev))}>
            <span><b>Brands</b></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={show? '' : 'svg-down'}>
                <path d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z" fill="#8B96A5"/>
            </svg>
        </div>
        <div className={`filter_content ${show? 'showbrands' : ''}`}>
            <ul className={`label_filter_ul ${seeAll? 'seeallbrands' : ''}`}>
                <li><input type='checkbox' id='idBrand1'></input> <label htmlFor="idBrand1">apple</label>  </li>
                <li><input type='checkbox' id='idBrand2'></input> <label htmlFor="idBrand2">sony</label>  </li>
                <li><input type='checkbox' id='idBrand3'></input> <label htmlFor="idBrand3">samsung</label>  </li>
                <li><input type='checkbox' id='idBrand4'></input> <label htmlFor="idBrand4">nokia</label>  </li>
                <li><input type='checkbox' id='idBrand5'></input> <label htmlFor="idBrand5">pixel</label>  </li>
                <li><input type='checkbox' id='idBrand6'></input> <label htmlFor="idBrand6">lenovo</label>  </li>
                <li><input type='checkbox' id='idBrand7'></input> <label htmlFor="idBrand7">huawei</label>  </li>
                
           
            </ul>
            {/* <div className='see_all'><span>See all</span></div> */}
            <div className='see_all' style={{display: show? 'none' : 'block'}}><span onClick={() => (setSeeAll(prev => !prev))}>{seeAll? 'See All' : `Less`}</span></div>

        </div>
    </div>
  )
}

export default BrandsFilter
