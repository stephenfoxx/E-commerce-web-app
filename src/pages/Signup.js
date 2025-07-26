import React from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { CiFaceSmile } from 'react-icons/ci'
import { TextField } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {setEmail} from '../redux/authSlice'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';
const Signup = () => {
  const { email } = useSelector((state) => state.authSlice)
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (!email) {
      
      toast.error('empty inputs', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return
    }
    navigate("/continue");
  }
  return (
    <div className="bg-white h-screen">
      <div className="w-1/4 mx-auto pt-40">
        <img
          src="/myjumia-top-logo.png"
          alt=""
          className="w-20 h-20 block mx-auto"
        />
        <h1 className="font-bold text-center text-xl my-6">
          What's your email address?
        </h1>
        <p className="text-center text-md my-6">
          Type your email to log in or create a Jumia account.
        </p>

        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
          className="w-full focus:border-jumiayellow "
          defaultValue={email}
        />
<ToastContainer/>
        <button
          className="w-full py-2 text-white bg-jumiayellow mt-6"
          onClick={handleNavigate}
        >
          Continue
        </button>

        <p className="text-jumiayellow font-bold mt-6 text-center hover:bg-jumiayellowlight ">
          Log in or register with phone number
        </p>
      </div>
    </div>
  );
}

export default Signup