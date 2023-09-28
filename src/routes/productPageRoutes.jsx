import React from 'react'

const ProductPageRoutes = () => {
  return (
    <Routes path='/ProductPage'>
        <Route path='/' element={<HomePage/>}/>
        <Route path='*' element={'notfound'}/>
    </Routes>
  )
}

export default ProductPageRoutes
