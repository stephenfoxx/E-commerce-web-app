import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiSearch, BiHelpCircle } from "react-icons/bi";
import { BsPerson } from 'react-icons/bs'
import { RxCaretDown } from 'react-icons/rx'
import { GrCart } from 'react-icons/gr'
import { Badge, Button, Divider, Menu, MenuItem } from "@mui/material";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase.config';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CardTravel } from '@mui/icons-material';

const Navbar = () => {
  const {loggedinRed} =  useSelector((state)=> state.authSlice)
  const { user } = useSelector((state) => state.userSlice)
  const { cart } = useSelector((state) => state.cartSlice)
  console.log(cart)

  const getTotalQuantity = () => {
    return cart.reduce((accumulator, item)=> accumulator + item.quantity,0)
  }
  console.log(getTotalQuantity())

  const [loggedin,setLoggedin]  = useState(false)
    const nav1 = [
      "/logos/pay.png",
      "/logos/food.png",
      "/logos/party.png",
      "/logos/prime.png",
      "/logos/logistics.png",
  ]; 
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        setLoggedin(true)
        return
      } 
      setLoggedin(false)
    })
},[])
  const handleLogout = () => {
    signOut(auth);
    window.location.href = ""
}
  const handleNavigate = ()=> navigate('/register')
  return (
    <div>
      <nav className="flex justify-between pl-40 items-center py-3 bg-gray-100">
        <Link
          to=""
          className="flex items-center text-jumiayellow text-[.8em] gap-3 hover:underline"
        >
          <img src="/images/star.png" alt="" className="w-4" />
          sell on jumia
        </Link>

        <ul className="flex gap-2 w-9/12 items-center">
          {nav1.map((links) => {
            return (
              <li className="w-20 h-6" key={links}>
                <Link to="">
                  <img src={links} alt="" className="w-full h-full" />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className="flex justify-between pl-40 items-center bg-white">
        <Link to="" className="w-32 ">
          <img src="/images/Jumia-Logo.png" alt="" className="w-full" />
        </Link>
        <div className="flex w-10/12 gap-3  text-[.8em] items-center">
          <form action="" className="w-6/12 flex gap-2">
            <div className="flex w-[85%] border border-gray-600 items-center pl-3 h-10 rounded ">
              <BiSearch size="20" color="gray" />
              <input
                type="text"
                className="outline-none w-11/12 mr-1 placeholder:text-lg pl-2"
                placeholder="Search products, brands and categories"
              />
            </div>
            <button className="bg-jumiayellow px-3 py-1 text-white text-bold text-[.8rem] h-10 rounded font-bold">
              SEARCH
            </button>
          </form>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            startIcon={<BsPerson />}
            endIcon={<RxCaretDown />}
            style={{ textDecoration: "lowercase", width: "12rem" }}
          >
            {loggedinRed ? (
              <span>Hello, {user?.firstname}</span>
            ) : (
              <span className="capitalize">Account</span>
            )}
          </Button>
          {loggedinRed ? (
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              style={{ width: "100%" }}
            >
              <MenuItem onClick={handleClose}>
                <Button>Orders</Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button>Saved Items</Button>
              </MenuItem>
              <Divider />
              <MenuItem>
                <button
                  onClick={handleLogout}
                  className="text-jumiayellow text-center uppercase"
                >
                  Logout
                </button>
              </MenuItem>
            </Menu>
          ) : (
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              style={{ width: "100%" }}
            >
              <MenuItem>
                <button
                  className="bg-jumiayellow text-white w-full text-[.8rem] py-1 px-3"
                  onClick={handleNavigate}
                >
                  SIGN IN
                </button>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <Button>Orders</Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button>Saved Items</Button>
              </MenuItem>
            </Menu>
          )}

          <Link className="hover:text-jumiayellow flex items-center text-lg w-[4rem] justify-between">
            <BiHelpCircle />
            Help
          </Link>
          <Link className="hover:text-jumiayellow flex items-center text-lg w-[4rem] justify-between" to="/cart">
            <Badge badgeContent={getTotalQuantity()}>
              <GrCart />
            </Badge>
            Cart
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar