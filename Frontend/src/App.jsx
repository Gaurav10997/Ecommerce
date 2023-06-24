import './App.css'

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Routes , Route} from 'react-router-dom';
import React ,{useContext, useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchAsync } from './redux/features/cartSlice';
import Checker from './Components/Navbar/Checker';
import Homepage from './Components/HomePage/Homepage';
import CartPage from './Components/cartPage/CartPage';
import Navbar from './Components/Navbar/Navbar';
import Authentication from './Components/authentication/authentication';
import ProductsPage from './Components/productsPage/ProductsPage';
import Footer from './Components/Footer/Footer';
import Cart from './redux/features/Cart';
import Me from './Components/me/me';
import AuthContext from './store/AuthContext';
import { API_URL } from './Components/API.JSX';
import { IsLoggedInContext } from './store/AuthContext';
import Login from './Components/authentication/Login';
import ByTags from './Components/byTags/ByTags';
import MyAccount from './Components/myaccount/MyAccount';
import LoginModel from './Components/common/loginModel/LoginModel';
function App() {
  const dispatch = useDispatch();
  const items = useSelector((state)=>state.cart.items)
  useEffect(()=>{
    dispatch(fetchAsync())
  },[dispatch])
  let ctx = useContext(IsLoggedInContext);

    // console.log(items);
  return (
    <>
   
     <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path="/:tag" element={<ByTags></ByTags>}/>
      <Route path={`/category/:id`}  element={<Checker></Checker>}></Route>
    
      <Route path={'/authentication'} element ={<Authentication></Authentication> }/>
     
      <Route path={'/description/:id'} element ={< ProductsPage/>}/>
      <Route path={'/cart'} element ={< CartPage/>}/>
      <Route path={'/testing'} element ={< Cart/>}/>
      <Route path={'/account'} element ={<MyAccount></MyAccount>}/>
    </Routes> 


    
    
    </>

  )
}

export default App
