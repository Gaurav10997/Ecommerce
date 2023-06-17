
import { useState } from 'react'
import React from 'react'

function MenuProps({toggleOrder}) {

  return (
    <select id="cars" name="cars" style={{padding:"10px",borderRadius:"13px"}} onChange={(e)=>toggleOrder(e.target.value)} >
        <option value="relevance">Sorted By Relevence</option>
        <option value="low">Sorted By Low To High Price</option>
        <option value="high">Sorted By High To Low Price</option>
       
</select>
  )
}

export default MenuProps