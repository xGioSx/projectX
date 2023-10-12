import React, { useEffect } from 'react'
import Router from '../routes'
import Header from '../components/header/header'
import Brandinfo from '../components/brandInfo/brandinfo'
import { useLocation } from 'react-router-dom'

const Layout = () => {

  const location = useLocation()
  useEffect (() => {
  window.scrollTo(0, 0);
  },[location.pathname])

  return (
    <>
    <Header/>
      <Router />
    <Brandinfo/>                           
    </>
  )
}

export default Layout
