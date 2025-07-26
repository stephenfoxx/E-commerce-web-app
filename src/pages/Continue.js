import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import { setPassword, setConfirmPassWord } from "../redux/authSlice";
import "react-toastify/dist/ReactToastify.css";
const Continue = () => {
  const { password, confirm_password } = useSelector((state) => state.authSlice);
const dispatch = useDispatch()
  const { email } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (
     !password ||
    !confirm_password
    ) {
      console.log(confirm_password)
      toast.error("empty inputs", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    if (password !== confirm_password) {
      toast.error("passwords don't match", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      return;
    }

    navigate('/create-account')

    // try {
    //   const user = await createUserWithEmailAndPassword(auth, email, password)
    //   if (user) {
    //     toast.success("user created", {
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: false,
    //       draggable: true,
    //     });
    //   }
    //   console.log(user)
    // } catch (error) {
    //   console.log(error)
    //   toast.error("invalid email or password", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: false,
    //     draggable: true,
    //   });
    // }
  };
  return (
    <div className="bg-white h-screen">
      <form
        className="w-1/4 mx-auto pt-10 flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <img
          src="/myjumia-top-logo.png"
          alt=""
          className="w-20 h-20 block mx-auto"
        />
        <h1 className="font-bold text-center text-xl ">
          What's your email address?
        </h1>
        <p className="text-center text-md my-6">
          Type your email to log in or create a Jumia account.
        </p>
        <div className="flex justify-between bg-gray-300 p-3">
          <p>{email}</p>
          <button className="text-jumiayellow" onClick={() => navigate(-1)}>
            edit
          </button>
        </div>
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
          className="w-full focus:border-jumiayellow my-5"
        />
        <TextField
          id="outlined-basic"
          label="Confirm password"
          variant="outlined"
          type="password"
          value={confirm_password}
          onChange={(e) => dispatch(setConfirmPassWord(e.target.value))}
          className="w-full focus:border-jumiayellow "
        />

        <button
          className="w-full py-2 text-white bg-jumiayellow mt-6"
          type="submit"
        >
          Continue
        </button>
        <ToastContainer />
        <p className="text-jumiayellow font-bold mt-6 text-center hover:bg-jumiayellowlight ">
          Log in or register with phone number
        </p>
      </form>
    </div>
  );
};

export default Continue;
