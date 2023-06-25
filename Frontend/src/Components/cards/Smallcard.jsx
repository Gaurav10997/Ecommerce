import React from 'react'
import { Link } from 'react-router-dom'
import NameCard from './NameCard'
function Smallcard({ tempobj }) {


  return (
    <div className="smallcard__main" >
        
    {tempobj.map((el,index)=>(
      <Link to= {`category/${el.name}`} key={index}  style={{paddingLeft: 13, textDecoration: 'none'}}  >
      <NameCard  image={el.url} name={el.name}  size="medium"  />
      </Link>
    ))}


</div>
  )
}



  export default Smallcard