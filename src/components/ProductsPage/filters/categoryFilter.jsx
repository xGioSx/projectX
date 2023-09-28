import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../../store/categories'
import './categoryFilter.css'

const CategoryFilter = () => {
    const [show, setShow] = useState(false)
    const [seeAll, setSeeAll] = useState(false)

    const dispatch = useDispatch ()

    const {categories} = useSelector((state) => state.categories)
    useEffect(() => {
      dispatch(getCategories())

    }, [dispatch])


  return (
    <div className='single_filter_container'>
        <div className='filter_header_container' onClick={() => (setShow(prev => !prev))}>
            <span><b>Category</b></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z" fill="#8B96A5"/>
            </svg>
        </div>
        <div className={`filter_content ${show? 'showbrands' : ''}`}>
            <ul className='filtes_content_ul'>
                  {categories.map((product) => {
                        return<li  key={product.id}>{product.name}</li>
                        })} 
            </ul>
            <div className='see_all'><span onClick={() => (setSeeAll(prev => !prev))}>{seeAll? 'less' : `See All`}</span></div>
        </div>
    </div>
  )
}

export default CategoryFilter




