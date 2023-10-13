import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home'
import ProductPage from '../pages/productPage'
import Cart from '../pages/cart';
import SinglProduct from '../pages/singlProduct';
import Register from '../components/register';
import Signup from '../components/signup/signup';
import OutletMain from './outlet';
import RequireAuth from '../components/RequireAuth/RequireAuth';

const Router = () => {
    return (
      <Routes>
        <Route path='/' element={<OutletMain/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/ProductPage' element={<ProductPage/>}/> 
          <Route path='/singlproduct/:productid' element={<SinglProduct/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route element={<RequireAuth/>}>
            <Route path='/cart' element={<Cart/>} />
          </Route>
          <Route path='*' element={'notfound'}/>
        </Route>
      </Routes>

   )
  
}

export default Router