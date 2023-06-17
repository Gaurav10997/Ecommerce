import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RenderProducts } from "../Categorywise/RenderProducts";
import MultipleSelectPlaceholder from "./../common/filterBy/MenuProps"
   // eslint-disable-next-line react/prop-types
   export default  function RenderProductPage({toggleOrder, products,heading,order}) {
      return (<>        <h1 style={{
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px"
  // eslint-disable-next-line react/prop-types





  }}>{heading}</h1>
        <div className='categoryWise__heading__main'>
          
          <MultipleSelectPlaceholder toggleOrder={toggleOrder} />
          </div>
        
          <div className="categorywise__main">
          {/* // eslint-disable-next-line react/prop-types */}
          {products?.map(product => {
      return <>
              <Link to={`/description/${product?._id}`} style={{
          paddingLeft: 13,
          textDecoration: 'none'
        }}>
              <RenderProducts key={product?._id} image={product?.images[0]} discountPrice={product.discountPercent} rating={product?.rating} price={product?.price}></RenderProducts>
              </Link>
              </>;
    })}

          </div></>);
    }