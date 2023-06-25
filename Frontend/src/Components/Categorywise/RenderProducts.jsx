import React from "react";
import Button from '@mui/material/Button';
export function RenderProducts({
  image,
  name,
  price,
  discountPrice,
  rating
}) {
  return <div className="categorywise">
        <div className="categorywise__image">
            <img src={image} width={150} alt="" />
        </div>
        <div className="details">
            <h3>{name}</h3>
           

            <div className="price">
               <p>{price}</p>
               <p>{discountPrice}%off</p>
               <p>{discountPrice * price / 100}</p>
              
            </div>
            <div className="rating">
                <p>⭐{rating}</p>
            </div>

            <Button style={{backgroundColor:"red", color:"white"}}>View Product</Button>

        </div>
    </div>;
}
  