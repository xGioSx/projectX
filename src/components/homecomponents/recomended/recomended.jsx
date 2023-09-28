import React from 'react'
import './recomended.css'
import wallet from "../../../assets/pictures/wallet.png"

const Recomended = () => {
  return (
    <section className='recomendedsection'>

      <div className='recomended'>

          <div className='recomendSpan'> 
            <span> <b>recomended items</b></span>
          </div>

          <div className='all_product'>
            <ul className='recomended_items_ul'>

              <li>
                <div className='prduct_list'>
                  <img src={wallet} alt="" />
                  <div className='product_info'>
                    <span className='price'>$34.00</span>
                    <span className='product'>leather wallet</span>
                  </div>
                </div>
              </li>
              
              <li>
                <div className='prduct_list'>
                  <img src={wallet} alt="" />
                  <div className='product_info'>
                    <span className='price'>$34.00</span>
                    <span className='product'>leather wallet</span>
                  </div>
                </div>
              </li>
              <li>
                <div className='prduct_list'>
                  <img src={wallet} alt="" />
                  <div className='product_info'>
                    <span className='price'>$34.00</span>
                    <span className='product'>leather wallet</span>
                  </div>
                </div>
              </li>
              <li>
                <div className='prduct_list'>
                  <img src={wallet} alt="" />
                  <div className='product_info'>
                    <span className='price'>$34.00</span>
                    <span className='product'>leather wallet</span>
                  </div>
                </div>
              </li>
              <li>
                <div className='prduct_list'>
                  <img src={wallet} alt="" />
                  <div className='product_info'>
                    <span className='price'>$34.00</span>
                    <span className='product'>leather wallet</span>
                  </div>
                </div>
              </li>
              <li>
                <div className='prduct_list'>
                  <img src={wallet} alt="" />
                  <div className='product_info'>
                    <span className='price'>$34.00</span>
                    <span className='product'>leather wallet</span>
                  </div>
                </div>
              </li>
              <li>
                <div className='prduct_list'>
                  <img src={wallet} alt="" />
                  <div className='product_info'>
                    <span className='price'>$34.00</span>
                    <span className='product'>leather wallet</span>
                  </div>
                </div>
              </li>
              <li>
                <div className='prduct_list'>
                  <img src={wallet} alt="" />
                  <div className='product_info'>
                    <span className='price'>$34.00</span>
                    <span className='product'>leather wallet</span>
                  </div>
                </div>
              </li>
              
              
              
            </ul>
          </div>
      </div>

    </section>
  )
}

export default Recomended
