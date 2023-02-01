import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import Header from './components/header';
import { categories } from './categories';
import Nav from './components/nav';
import productData from './products.json';
import Product from './components/product';
import Search from './components/search';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/cart';
import { store } from './context/store';

const App = () => {
  const {cart} = useContext(store)

  const [list] = useState(categories);
  const [title, setTitle] = useState('');
  const [data, setData] = useState(productData)

  useEffect(() => {
    localStorage.setItem('cart-product', JSON.stringify(cart))
  }, [cart])

  

  const searchData = (text) => {
    const newArr = productData.filter(elem => {
      return elem.title.toLowerCase().indexOf(text.toLowerCase()) > -1
    })
    setData(newArr)
  }

  return (
    <div className='app'>
      <Header/>
      <div className="container">
        <Search/>
        <div className="wrapper">
          <div className="left">
            <div className="fidex">
              <Nav/>
            </div>
          </div>
          <div className="right">
            <Routes>
              <Route
                path='/'
                element={<Product />} />
              <Route
                path='/cart'
                element={<Cart />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;