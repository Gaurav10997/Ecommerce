import { RenderProducts } from './RenderProducts';
import React from 'react'
import "./Categorywise.css"
import { Link } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
function Categorywise({image , name , price , discountPrice ,rating ,_id }) {
  return (
    <Link to={`/description/${_id}`} style={{paddingLeft: 13, textDecoration: 'none'}}>
       
    <RenderProducts   image={image} name={name} price={price} discountPrice={discountPrice} rating={rating}  />
    
    </Link>
   
  )
}

export default Categorywise;