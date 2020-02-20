import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Slider from './components/slider/Slider';
import ProductList from './components/productList/ProductList';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Slider />
      <ProductList />
     <Footer />
    </div>
  );
}

export default App;
