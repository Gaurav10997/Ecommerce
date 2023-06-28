import "./productsPage.css"
import React from 'react'
import QuantityBox from "../cartPage/QuantityBox"
import {addAsync , updateAsync} from "./../../redux/features/cartSlice"
import { useDispatch ,useSelector } from "react-redux"

// eslint-disable-next-line react/prop-types
function PriceCard({ price ,discountPercentage ,id }) {
  console.log(id)
  const carts = useSelector((state)=>state.reducer.cart.items);
  const dispatch = useDispatch()
  const index = carts.findIndex((cart)=>cart.product._id.toString()===id.toString())

  
  return (
   <div className="priceCard">
    <div className="priceCard__price">
      <p className="sellingprice">Rs {price}</p>
      <p className="discountpercentage" >{discountPercentage}% off</p>
      <p className="realprice">Rs {Math.round(price*100/discountPercentage)}</p>
    </div>
    <p>Inclusive of All Taxes</p>
    <div className="priceCard__quantity">
  
    </div>

   {index==-1 && <button  onClick={() => dispatch(addAsync(id))}>Add to Cart </button>}
    {index!=-1 && <QuantityBox  count={carts[index].quantity} itemId={id}  />}
   </div>
  )
}

export default PriceCard