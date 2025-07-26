import React from 'react'
import { phones } from '../products/phone'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/cartSlice'
const Products = () => {

    const dispatch = useDispatch()
    const { cart } = useSelector((state) => state.cartSlice)
    console.table(cart)
  return (
      <div className=''>
          <div className='grid grid-cols-5 gap-5'>
              {phones.map((phone) => {
                  return (
                    <div className="h-[20rem] rounded-lg bg-white shadow-md p-2" key={phone.id}>
                      <section className="h-1/2">
                        <img
                          src={phone.image}
                          alt=""
                          className="w-[70%] h-full"
                        />
                      </section>
                      <section>
                        <p>{phone.title.substring(0, 40)}...</p>
                        <p>₦ {new Intl.NumberFormat().format( phone.discount)}</p>
                        <p className='line-through text-gray-700 text-[.7rem]'>₦ {new Intl.NumberFormat().format( phone.price)}</p>
                        <button className="border-jumiayellow border hover:bg-jumiayellow text-jumiayellow hover:text-white w-full rounde-md" onClick={()=> dispatch(addItem(phone))}>
                          Add To cart
                        </button>
                      </section>
                    </div>
                  );
             })}
          </div>

    </div>
  )
}

export default Products