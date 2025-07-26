import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Signup from './pages/Signup';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Continue from './pages/Continue';
import Final from './pages/Final';
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from './firebase.config';
import { setLoggedin } from './redux/authSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from './redux/userSlice';
import Products from './pages/Products';
import Cart from './pages/Cart';
function App() {

  const dispatch = useDispatch()
  const getData = async(q) => {
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
       
            dispatch(setUser(doc.data()));
          });
  }
 useEffect(()=>{
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
  dispatch(setLoggedin(true))
      const email = user.email;
      console.log(email)
      const q = query(collection(db, "users"), where("email", "==", email));
getData(q)
    
    } else {
        dispatch(setLoggedin(false));
    }
  });
 },[])
  return (
    <div className="App ">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/continue" element={<Continue />} />
        <Route path="/create-account" element={<Final />} />
        <Route
          path="/products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Cart /> 
            </Layout>
          }
        />
      </Routes>
      {/* <Slider/> */}
    </div>
  );
}

export default App;
