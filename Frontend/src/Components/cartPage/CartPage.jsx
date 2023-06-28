import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import {fetchAsync} from "./../../redux/features/cartSlice"
import CartProductCard from './CartProductCard';
import CartTotal from './CartTotal';
import { API_URL } from '../API';
import { useContext } from 'react';
import { IsLoggedInContext } from '../../store/AuthContext';

import KeepMountedModal from '../common/model/Model';
function CartPage() {
  const token = localStorage.getItem('token')
  const isLogin = useContext(IsLoggedInContext)
  const carts = useSelector((state)=>state.reducer.cart.items);
  const status = useSelector((state) => state.reducer.cart.status);
  const navigate = useNavigate()
  const [order,setOrder] = useState(false);
  function toggleOrder(){
    fetch(`${API_URL}/api/v1/bookings/checkout-session`,{
      method:"GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        
      },   
    })
    .then((res)=>res.json())
    .then(data=>window.location.href=data.session.url)
  }
  const [cart , setCart] = useState([]);
  const [ProductId , setProductId] = useState([]);
  // console.log(cart);
  useEffect(()=>{
    carts.forEach((el)=>setProductId([...ProductId , el.product._id]))
  },[])

  if(!isLogin){
    return <KeepMountedModal/>
  }
  
// I will add a Beautifull component for saying This 
  if(carts.length==0){
    return <h1>Your cart is Empty </h1>
  }

  if(order){
    return <h1 className='Loader' style={{textAlign:"center"}}>Order Palced Succesfully </h1>
  }
  const cartLength = carts.length;

  if ( status === "loading" || !carts  || carts.length === 0) {
    // Render a loading state or an error message
     return <div>Loading...</div>;
  }
 
  if ( status === "idle" || !carts  || carts.length === 0) {
    // Render a loading state or an error message
    
  }


  let subtotal = 0;
  carts.forEach((cart) => {
    if (cart?.product?.price && cart?.quantity) {
      subtotal += cart?.product?.price * cart?.quantity;
    }
  });



  return (
    <div className="cartPage">
      <div className="cartPage__main">
        <h1>Product</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Subtotal</h1>
      </div>

      { carts?.map((cart, index) => (
    <CartProductCard
      key={index}
      name={cart?.product?.name}
      price={cart?.product?.price}
      pic={cart?.product?.images[0] ?? ''}
      count={cart?.quantity}
      itemId={cart?.product?._id}
    />
   
  ))
  
  }
      <div className="cartpagebtm">
        <CartTotal subtotal={subtotal } toggleOrder={toggleOrder} />

      </div>
    </div>
  );
}

export default CartPage;
