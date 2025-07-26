import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/cartSlice";
const Cart = () => {
  const { cart } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const getTotalQuantity = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  const getTotalAmount = () => {
    return cart.reduce((accumulator, item) => accumulator + (item.discount * item.quantity), 0);
  }
  return (
    <>
      {getTotalQuantity() < 1 ? (
        <div className="bg-white flex justify-center w-[80%] mx-auto mt-3 text-center">
          <div className="flex flex-col items-center gap-4 py-4">
            <img
              src="https://www.jumia.com.ng/assets_he/images/cart.668e6453.svg"
              alt=""
            />
            <div>
              <p className="font-bold ">Your cart is empty!</p>
              <p className="my-3">
                Browse our categories and discover our best deals!
              </p>
              <button className="bg-jumiayellow px-3 py-1 text-white text-bold text-[.8rem] h-10 rounded font-bold uppercase">
                Start Shopping
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-cart w-[90%] mx-auto gap-5 mt-3">
          <section className="bg-white p-2">
            <div>
              <header className="py-2">
                <p className="font-bold text-xl">Cart({getTotalQuantity()})</p>
              </header>
              <Divider />
              {cart.map((item) => {
                return (
                  <div>
                    <div className="flex justify-between items-center">
                      <div className="w-[55%] flex items-center">
                        <img src={item.image} alt="" className="w-20" />
                        <p>{item.title}</p>
                      </div>
                      <div className="font-bold text-xl">
                        ₦ {new Intl.NumberFormat().format(item.discount)}
                      </div>
                    </div>
                    <footer className="flex justify-between">
                      <button
                        className="flex gap-3 text-jumiayellow font-bold font-xl items-center"
                        onClick={() => dispatch(removeItem(item))}
                      >
                        <FaTrash fill="#FF9900" /> REMOVE
                      </button>
                      <div className="flex items-center gap-2">
                        <button
                          className="bg-jumiayellow text-white font-bold text-xl p-1 rounded-md shadow-md"
                          onClick={() => dispatch(decrementQuantity(item))}
                        >
                          <AiOutlineMinus />
                        </button>
                        <span className="text-center p-1">{item.quantity}</span>
                        <button
                          className="bg-jumiayellow text-white font-bold text-xl p-1 rounded-md shadow-md"
                          onClick={() => dispatch(incrementQuantity(item))}
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </footer>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="bg-white h-fit">
            <header className="p-2">
              <p className="font-bold">CART SUMMARY</p>
            </header>
            <Divider />
            <div className="flex justify-between font-bold p-2">
              <p className="">Subtotal</p>
              <p>₦ {new Intl.NumberFormat().format(getTotalAmount())}</p>
            </div>
            <Divider />
            <div className="p-2">
              <button className="text-center py-1 shadow-md rounded-md  bg-jumiayellow font-bold font-xl  text-white w-full">
                CHECKOUT (₦ {new Intl.NumberFormat().format(getTotalAmount())})
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Cart;
