import React, { useState }from 'react'
import './pricerange.css'

const PriceRange = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='price_range_container'>
      <div className='filter_range_container' onClick={() => (setShow(prev => !prev))}>
            <span><b>Price range</b></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z" fill="#8B96A5"/>
            </svg>
      </div>
      <div className={`filter_content ${show? 'showbrands' : ''}`}>
          <div className='range_input'>
            <input type="range" />
          </div>
              <div className='minmax_value'>
                <div className='renge_value'>
                  <span>Min</span> <br />
                  <input type="text" placeholder='0' className="value_namber" id="" />
                </div>
                <div className='renge_value'>
                  <span>Max</span> <br />
                  <input type="text" placeholder='99999' className="value_namber" id="" />
                </div>
              </div>
              <div className='apply'> <button>Apply</button></div>
      </div>
      
    </div>
  )
}

export default PriceRange



