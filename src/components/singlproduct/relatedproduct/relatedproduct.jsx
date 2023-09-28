import React from 'react'
import './relatedproduct.css'
import laptop from '../../../assets/pictures/leptop.png'

const Relatedproduct = () => {
  return (
    <div className='related_product_full_container'>
        <div className='related_product_container'>
            <div className='related_product_span'> <span>Related products</span></div>
            <div className='related_list_div'>
                <ul className='related_list_ul'>

                    <li>
                        <img src={laptop} alt="" />
                        <div className='related_list_info'>
                            <span>Acer nitrdo pc15</span>
                            <span> $800-$850</span>
                        </div>
                    </li>
                    <li>
                        <img src={laptop} alt="" />
                        <div className='related_list_info'>
                            <span>Acer nitrdo pc15</span> 
                            <span> $800-$850</span>
                        </div>
                    </li>
                    <li>
                        <img src={laptop} alt="" />
                        <div className='related_list_info'>
                            <span>Acer nitrdo pc15</span> 
                            <span> $800-$850</span>
                        </div>
                    </li>
                    <li>
                        <img src={laptop} alt="" />
                        <div className='related_list_info'>
                            <span>Acer nitrdo pc15</span> 
                            <span> $800-$850</span>
                        </div>
                    </li>
                    <li>
                        <img src={laptop} alt="" />
                        <div className='related_list_info'>
                            <span>Acer nitrdo pc15</span> 
                            <span> $800-$850</span>
                        </div>
                    </li>
                    <li>
                        <img src={laptop} alt="" />
                        <div className='related_list_info'>
                            <span>Acer nitrdo pc15</span>
                            <span> $800-$850</span>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Relatedproduct
