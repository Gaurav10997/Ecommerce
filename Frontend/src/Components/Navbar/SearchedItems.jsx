import React, { useState } from "react";
import { useEffect } from "react";
import NameCard from "../cards/NameCard";
import { API_URL } from "../API";
function SearchedItems({toggleSearchedItems,search}) {
    const [items ,setItem]  = useState([])
    useEffect(()=>{
        fetch(`${API_URL}/api/v1/products/search/${search}`)
        .then((response)=>response.json())
        .then((data)=>setItem(data.data))
    },[search])
    return (
        <>
        <div className="searchedItems">
        <h1 onClick={()=>toggleSearchedItems()} style={{marginLeft:"270px"}}>x</h1>
        <div className="searcheditems">
        {items?.map((item) => {
            return(
                <NameCard name={item.name} image={item.images[0]} key={item._id} size={"small"} id={item._id} linktotheProduct={true}/>
            )
        })}
    </div>
        </div>

        </>

            );
  }

  export default SearchedItems