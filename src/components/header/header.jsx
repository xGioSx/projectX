import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import brandphoto from '../../assets/logo/brand.png'
import user1 from '../../assets/logo/user.png'
import user2 from '../../assets/logo/message.png'
import user3 from '../../assets/logo/heart.png'
import user4 from '../../assets/logo/cart.png'


const Header = () => {
  return (
    <header className='header'>
        <div className='headerConteiner'>
            <Link to='/' className='link brand'>
                <img src={brandphoto} alt="" />
                <span>eComerse</span>
            </Link>
                

            <div className='search'>
                
                    <input type="search" placeholder='search' />
                    <span className='category_snan'>all category</span>
                    <button>search</button>
                
            </div>

            <div className='user_conteiner'>
                <div>
                    <img src={user1} alt="" />
                    <span>profile</span>
                </div>
                <div>
                    <img src={user2} alt="" />
                    <span>message</span>
                </div>
                <div>
                    <img src={user3} alt="" />
                    <span>orders</span>
                </div>
                <div>
                    <img src={user4} alt="" />
                    <span>my cart</span>
                </div>


            </div>

        
        </div>
    </header>
  )
}

export default Header
