
import React, { useEffect } from 'react'
import { useState } from 'react'
import "./CartPage.css"
import QuantityBox from './QuantityBox'

function CartProductCard({ name , count , price , pic , itemId }) {

     // const handleminus = (itemId) =>{
     //      if(quantity>1){
     //           setQuantity((prev)=> dispatch(updateAsync({itemId,count:prev-1})))
     //      }
         
     // }
     // const handleplus = () => {
     //      if(quantity<=10){
     //           setQuantity((prev)=> dispatch(updateAsync({itemId,count:prev+1})))
     //      }
     // }

     // console.log(quantity)
     // useEffect(()=>{
     //      dispatch(updateAsync({itemId, quantity}))
     // },[quantity])


  return (
   <div className="cart-product-card">
       <div className="cart-product-cardproduct cart-product-card__child">
            <img src={pic} alt=""  width={80}/>
            <h3>{name}</h3>
       </div>
       <h3>Rs {price}</h3>
       <div className="quantity cart-product-card__child">
          <QuantityBox    count={count}  itemId={itemId} />
       </div>
       <div className="subtotal cart-product-card__child">
        <h3>{price*count}</h3>
       </div>
   </div>
  )
}




    export default CartProductCard