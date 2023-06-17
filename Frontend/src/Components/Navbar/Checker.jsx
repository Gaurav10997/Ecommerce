import React from 'react'
import RenderProductPage from './RenderProductPage';
import '../Categorywise/Categorywise.css' 
import { API_URL } from '../API.JSX';
import Categorywise from '../Categorywise/Categorywise';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import { RenderProducts } from '../Categorywise/RenderProducts';
import MultipleSelectPlaceholder from '../common/filterBy/MenuProps';
function Checker() {
    let { id } = useParams();
    const [dataTemp , setDataTemp ] = useState([])
    const [isLoading , setisLoading] = useState(true)
    const [order , setOrder] = useState("")

    function toggleOrder(name){
      setOrder(name)
    }
    useEffect(() => {
      fetch(`${API_URL}/api/v1/products/categories/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setDataTemp(
            order === "low"
            ? data.data.categories.sort((a, b) => a.price - b.price)
               : order === "high"
               ? data.data.categories.sort((a, b) => b.price - a.price)
                 : data.data.categories)
          setisLoading(false);
        });
    }, [id, order]);
    
  return (
    <>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      dataTemp.length > 0 ? (
        <>
          <RenderProductPage   toggleOrder={toggleOrder} products={dataTemp} heading={dataTemp[0]?.category.name} order={order} />
        </>
      ) : (
        <p>No data available</p>
      )
    )}
  </>


  )
  }

export default Checker