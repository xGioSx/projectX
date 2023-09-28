import React from 'react'
import Router from '../routes'
import Header from '../components/header/header'
import Brandinfo from '../components/brandInfo/brandinfo'

const Layout = () => {
  return (
    <>
    <Header/>
      <Router />
    <Brandinfo/>                           
    </>
  )
}

export default Layout
