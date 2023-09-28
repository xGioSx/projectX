import React from 'react'
import './productpage.css'
import Navbar from '../../components/homecomponents/navbar/navbar';
import Choosennavigator from '../../components/ProductsPage/choosennavigator/choosennavigator';
import SelectNavigator from '../../components/ProductsPage/selectNavigator';
import Itemsconteiner from '../../components/ProductsPage/itemsConteiner/itemsConteiner';



const ProductPage = () => {
  return (
    <div className='test1'>
      <Navbar/>
      <Choosennavigator/>
      <SelectNavigator/>
      <Itemsconteiner/>
  
    </div>
  )
}

export default ProductPage
