import React, { useState } from 'react'
import './featuresFilter.css'

const FeatureFilter = () => {
  const [show, setShow]= useState(false)
  const [seeAll, setSeeAll] = useState(false)
  return (
    <div className='features_filter_container'>
        <div className='filter_header_container' onClick={() => (setShow(prev => !prev))}>
            <span><b>Features</b></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={show? '' : 'svg-down'}>
                <path d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z" fill="#8B96A5"/>
            </svg>
        </div>
        <div className={`filter_content ${show? 'showbrands' : ''}`}>
        <ul className={`label_filter_ul ${seeAll? 'seeallbrands' : ''}`}>
                <li><input type='checkbox' id='idBrand11'></input> <label htmlFor="idBrand11">metalic</label>  </li>
                <li><input type='checkbox' id='idBrand12'></input> <label htmlFor="idBrand12">plastic cover</label>  </li>
                <li><input type='checkbox' id='idBrand13'></input> <label htmlFor="idBrand13">8 GB ram</label>  </li>
                <li><input type='checkbox' id='idBrand14'></input> <label htmlFor="idBrand14">super power</label>  </li>
                <li><input type='checkbox' id='idBrand15'></input> <label htmlFor="idBrand15">large memory</label>  </li>
                <li><input type='checkbox' id='idBrand16'></input> <label htmlFor="idBrand16">3 camera</label>  </li>
                <li><input type='checkbox' id='idBrand17'></input> <label htmlFor="idBrand17">green colo</label>  </li>
                <li><input type='checkbox' id='idBrand18'></input> <label htmlFor="idBrand18">black color</label>  </li>
                
           
            </ul>
            {/* <div className='see_all'><span>See all</span></div> */}
            <div className='see_all' style={{display: show? 'none' : 'block'}}><span onClick={() => (setSeeAll(prev => !prev))}>{seeAll? 'See All' : `Less`}</span></div>

        </div>
    </div>
  )
}

export default FeatureFilter
