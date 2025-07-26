import React from 'react'

const Card = ({image, description, price, discount}) => {
  return (
    <div className="  hover:scale-105 transition-all ease-in-out duration-200 shadow-md hover:shadow-2xl rounded-md">
      <div>
        <img src={image} alt="" className='w-[10em] h-[10em]' />
      </div>
      <div>
        <p>{description}</p>
        <p>#{new Intl.NumberFormat().format(price)}</p>
        <p className="line-through text-gray-400">#{discount}</p>
      </div>
    </div>
  );
}

export default Card