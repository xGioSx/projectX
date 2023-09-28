import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home'
import ProductPage from '../pages/productPage'
import Cart from '../pages/cart';
import SinglProduct from '../pages/singlProduct';
import Register from '../components/register';
import Signup from '../components/signup/signup';

const Router = () => {
    return (
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/ProductPage' element={<ProductPage/>}/>
        <Route path='/cart' element={<Cart/>}/>   
        <Route path='/singlproduct/:productid' element={<SinglProduct/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={'notfound'}/>
      </Routes>

   )
  
}

export default Router