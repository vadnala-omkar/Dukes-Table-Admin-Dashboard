import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import SlideBar from '../components/SlideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import AllProducts from '../components/forms/AllProducts'
import Welcome from '../components/Welcome'
const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showAddFirm, setShowAddFirm] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  

  const showLoginHandler = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowAddFirm(false);
    setShowAddProduct(false)
    setShowAllProducts(false)
    setShowWelcome(false)
  }
  
  const showRegisterHandler = () => {
    setShowRegister(true);
    setShowLogin(false);
    setShowAddFirm(false);
    setShowAddProduct(false)
    setShowAllProducts(false)
    setShowWelcome(false)
  }

  const showAddFirmHandler = () => {
    setShowRegister(false);
    setShowLogin(false);
    setShowAddFirm(true)
    setShowAddProduct(false)
    setShowAllProducts(false)
    setShowWelcome(false)
  }
  const showAddProductHandler = () => {
    setShowRegister(false);
    setShowLogin(false);
    setShowAddFirm(false)
    setShowAddProduct(true)
    setShowAllProducts(false)
    setShowWelcome(false)
  }
  const showAllProductsHandler = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowAddFirm(false);
    setShowAddProduct(false)
    setShowAllProducts(true)
    setShowWelcome(false)
    
  }
  const showWelcomeHandler = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowAddFirm(false);
    setShowAddProduct(false)
    setShowAllProducts(false)
    setShowWelcome(true)
  }
  return (
    <>
      <section className='landingSection'>
        <Navbar  showLoginHandler = {showLoginHandler}  showRegisterHandler= {showRegisterHandler} />
        <div className='flex'>
            <SlideBar showAddFirmHandler = {showAddFirmHandler} showAddProductHandler= {showAddProductHandler} showAllProductsHandler= {showAllProductsHandler} />
            {showLogin && <Login showWelcomeHandler = {showWelcomeHandler}  />}
            {showRegister && <Register showLoginHandler = {showLoginHandler} />}
            {showAddFirm && <AddFirm />}
            {showAddProduct && <AddProduct />}
            {showAllProducts && <AllProducts />}
            {showWelcome && <Welcome />}
        </div>
      </section>
    </>
  )
}

export default LandingPage;
