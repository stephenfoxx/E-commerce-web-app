import React from 'react'
import Slider from './Slider'
import {CiApple} from 'react-icons/ci'
import { TbToolsKitchen } from "react-icons/tb";
const Banner = () => {

  const sidenav = [
    {
      icon: <CiApple/>,
      text: "Supermarket",
    },
    {
      icon: <TbToolsKitchen/>,
      text: "Health & Beauty",
    },
    {
      icon: "",
      text: "Home & Office",
    },
    {
      icon: "",
      text: "Phones & Tablets",
    },
    {
      icon: "",
      text: "Computing",
    },
    {
      icon: "",
      text: "Electronics",
    },
    {
      icon: "",
      text: "Fashion",
    },
    {
      icon: "",
      text: "Baby Products",
    },
    {
      icon: "",
      text: "Gaming",
    },
    {
      icon: "",
      text: "Sporting Goods",
    },
    {
      icon: "",
      text: "Automobile",
    },
    {
      icon: "",
      text: "Other Categories",
    },
  ];
   
  return (

 
      <div className="grid grid-cols-slider  gap-3   ">
        <ul className="flex flex-col h-full justify-between bg-white">
          {sidenav.map((links) => {
            return (
              <li>
                <a href="" className="hover:text-jumiayellow flex items-center">
                  {links.icon}
                  {links.text}
                </a>
              </li>
            );
          })}
        </ul>
        <div>
          <Slider />
        </div>
        <div className='grid grid-rows-2 gap-2'>
          <div className="">
            <img
              src="https://ng.jumia.is/cms/0-1-cpr/2022/june-14/218X184.jpg"
              alt=""

              className='h-full w-full'
            />
          </div>
          <div>
            <img
              src="https://ng.jumia.is/cms/0-1-christmas-sale/2022/designs/Christmas-sale-BSB.gif"
              alt=""
              className='h-full w-full'
            />
          </div>
        </div>
      </div>
   
  );
}

export default Banner