import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {collection, addDoc} from 'firebase/firestore'
import { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import { setPassword, setConfirmPassWord } from "../redux/authSlice";
import "react-toastify/dist/ReactToastify.css";
const Final = () => {
  const { password, confirm_password } = useSelector(
    (state) => state.authSlice
  );
const [firstname, setFirstname] = useState("")
const [lastname, setLastname] = useState("")
const [phone, setPhone] = useState("")
  const { email } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!firstname || !lastname ||!phone) {

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

  



    try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        
        if (user) {
            const docRef = collection(db, "users")
            const docadded = await addDoc(docRef, {firstname, lastname, email, phone})
            if (docadded) {
                toast.success("user created", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                });
setTimeout(() => navigate("/"), 1500);
    
}
        }
     
   
    } catch (error) {
      console.log(error)
      toast.error("invalid email or password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    }
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
          <button className="text-jumiayellow" onClick={() => navigate(-2)}>
            edit
          </button>
        </div>
        <TextField
          id="outlined-basic"
          label="First Name"
          type="text"
          variant="outlined"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className="w-full focus:border-jumiayellow my-5"
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          type="text"
          value={lastname}
          onChange={(e) =>setLastname(e.target.value)}
          className="w-full focus:border-jumiayellow "
        />
        <TextField
          id="outlined-basic"
          label="Phone number"
          variant="outlined"
          type="number"
          value={phone}
          onChange={(e) =>setPhone(e.target.value)}
          className="w-full focus:border-jumiayellow "
        />

        <button
          className="w-full py-2 text-white bg-jumiayellow mt-6"
          type="submit"
        >
         Submit
        </button>
        <ToastContainer />
        <p className="text-jumiayellow font-bold mt-6 text-center hover:bg-jumiayellowlight ">
          Log in or register with phone number
        </p>
      </form>
    </div>
  );
};

export default Final;
