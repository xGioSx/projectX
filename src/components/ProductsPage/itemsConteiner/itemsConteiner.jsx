import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../store/products'
import './itemsConteiner.css'
import SingleItem from '../singleItem/singleItem'
import { useSearchParams } from 'react-router-dom'

const ItemsConteiner = () => {
        const [searchParams, setSearchParams] = useSearchParams()
        const params = Object.fromEntries([...searchParams]);

        let filter = {categoryId:params.categoryId, priceFrom:params.priceFrom, priceTo:params.priceTo}

        const dispatch = useDispatch()

        const {products} = useSelector ((state) => state.products)
        useEffect(() => {
            dispatch(getProducts(filter))
        }, [dispatch, searchParams])
        


  return (
    <div className='full_item_container'>
          <div className='selected_product'>
            <div className='summary_items'>
              <span> {products.length} items in <b>{params.categoryName? params.categoryName : 'store'}</b></span>
            </div>
            <div className='verify_input'>
              <input type="checkbox" className="verify_only" id="verified_only" />
              <label htmlFor="verified_only">Verified only</label>
            </div>
            <div className='select_value'>
              <select className="selected_items" id="">
                <option value="option1">featured</option>
                <option value="option2">selected</option>
                <option value="option3">second hand</option>
              </select>
            </div>
            <div className='view_list_select'>
              <div className='view_box'>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11 3H3V11H11V3Z" fill="#1C1C1C"/>
                    <path d="M11 13H3V21H11V13Z" fill="#1C1C1C"/>
                    <path d="M21 3H13V11H21V3Z" fill="#1C1C1C"/>
                    <path d="M21 13H13V21H21V13Z" fill="#1C1C1C"/>
                  </svg>
                </button>
              </div>
              <div className='view_box'>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 8H3V4H21V8ZM21 10H3V14H21V10ZM21 16H3V20H21V16Z" fill="#1C1C1C"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>


              


          {products.map((product) => {
                return  <SingleItem key={product.id} product={product}/>
            })}




      
    </div>


  )
}

export default ItemsConteiner
