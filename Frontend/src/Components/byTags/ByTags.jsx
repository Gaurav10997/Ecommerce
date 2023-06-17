import React from 'react'
import { API_URL } from '../API.JSX';
import { useEffect ,useState} from 'react';
import RenderProductPage from '../Navbar/RenderProductPage';
import MenuProps from "./../common/filterBy/MenuProps"
import { RenderProducts } from '../Categorywise/RenderProducts';
import { Routes, Route, useParams } from 'react-router-dom';

 function ByTags() {

    const [order , setOrder] = useState("")
    function toggleOrder(name){
      setOrder(name)
    }
    // Extracting the 'tag' parameter from the URL
    const { tag } = useParams();
  
    // Setting up state to store the fetched products
    const [products, setProduct] = useState([]);
  
    // Fetching the products based on the tag
    useEffect(() => {
      fetch(`${API_URL}/api/v1/products`)
        .then((res) => res.json())
        .then((data) => setProduct(order === "low"
        ? data.data.product.filter((el) => el.tag === tag).sort((a, b) => a.price - b.price)
           : order === "high"
           ? data.data.product.filter((el) => el.tag === tag).sort((a, b) => b.price - a.price)
             : data.data.product.filter((el) => el.tag === tag)));
    }, [tag,order]);
  
    // Rendering the fetched products
    return(
        // <RenderProducts   image={image} name={name} price={price} discountPrice={discountPrice} rating={rating}  />
      
                <RenderProductPage   toggleOrder={toggleOrder} products={products} heading={"Best Of Boats"} order={order} />
    )
   
  }
export default ByTags



  