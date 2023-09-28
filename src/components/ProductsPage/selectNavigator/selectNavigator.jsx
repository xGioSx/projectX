import React from 'react'
import './selectNavigator.css'
import BrandsFilter from '../filters/brandsFilter'
import CategoryFilter from '../filters/categoryFilter'
import FeatureFilter from '../filters/featureFilter'
import PriceRange from '../filters/priceRange'
import RatingsFilter from '../filters/ratingsFilter'

const SelectNavigator = () => {
  return (
    <aside className='aside_filters'>
        <CategoryFilter/>
        <BrandsFilter/>
        <FeatureFilter/>
        <PriceRange/>
        <RatingsFilter/>
    </aside>
  )
}

export default SelectNavigator
