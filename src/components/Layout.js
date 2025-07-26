import React from 'react'
import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
    <>
      <div className="h-10 bg-black">
        <img
          src="/images/LAST-CHANCE.gif"
          alt=""
          className="w-[80%] object-cover h-full m-auto block"
        />
      </div>
        <Navbar />

      {children}
    </>
  );
}

export default Layout