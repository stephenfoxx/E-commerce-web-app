import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import { limited_stock, top_selling } from '../product_list'
const Home = () => {
  
  return (
    <>
    
     
      <div className="w-[80%] mx-auto ">
        <Banner />
        <Products item={top_selling} color={"white"} title="Top Selling Item" />
        <Products
          item={limited_stock}
          color={"#B5DE93"}
          title="Defacto Official Store"
        />
      </div>
      <Footer />
    </>
  );
}

export default Home