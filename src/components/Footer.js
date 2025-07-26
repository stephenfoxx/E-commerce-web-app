import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#282828] text-white py-5">
      <div className=" flex w-[80%] mx-auto gap-56">
        <div>
          <img src="/images/jumialogodark.png" alt="" />
        </div>
        <div className="w-[50%]">
          <p className="font-bold text-[.8rem]">NEW TO JUMIA?</p>
          <p className="text-[.8rem] text-gray-400">
            Subscribe to our newsletter to get updates on our latest offers!
          </p>
          <form action=" flex gap-3  ">
            <input type="text" className="py-3 w-[40%] mx-2" />
            <button className="border hover:border-jumiayellow py-3 px-2">
              Male
            </button>
            <button className="border hover:border-jumiayellow py-3 px-2 ml-3">
              Female
            </button>
          </form>
        </div>
        <div>
          <div>
            <img src="/images/star.png" alt="" className="w-10" />
            <p className="font-bold text-[.8rem]">DOWNLOAD JUMIA FREE APP</p>
            <p className="text-[.8rem] text-gray-400">
              Get access to exclusive offers!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer