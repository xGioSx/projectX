import React from 'react'
import './choosennavigator.css'
import arrowright from '../../../assets/svg/arrowright.svg'


const Choosennavigator = () => {
  return (
    <nav className='nav_header'>
        <div className='div_header'>
            <ul className='choosen_category'>
                <li> <span>home</span>
                    <img src={arrowright} alt="" />
                </li>
                <li><span>clothings</span>
                    <img src={arrowright} alt="" />
                </li>
                <li><span>men`s wear</span>
                     <img src={arrowright} alt="" />
                </li>
                <li><span>summer clothing</span></li>
            </ul>
        </div>
     
    </nav>
  )
}

export default Choosennavigator
