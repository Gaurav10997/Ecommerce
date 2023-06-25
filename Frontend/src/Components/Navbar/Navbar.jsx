
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchedItems from './SearchedItems';
import NameCard from '../cards/NameCard';
import ImageAvatars from '../common/avatar/ImageAvatars';
import { useSelector } from 'react-redux';
import PopupProfile from './PopupProfile';
import { useContext } from 'react';
import { IsLoggedInContext } from '../../store/AuthContext';
import { Avatar } from '@mui/material';
import "./Navbar.css"
function Navbar() {
  const isLogin = useContext(IsLoggedInContext)
  const cartCount = useSelector((state) => state.cart.items.length)
  const [popupprofile ,setpopupprofile] = useState(false)
  const [searchedItems ,serSearchedItems] = useState(false)
  const [search , sersearchTerm] = useState("new")
  function togglepopupprofile(){
    setpopupprofile((prev)=>!prev)
    
  }
  function toggleSearchedItems(){
    serSearchedItems((prev)=>!prev)
    
  }
  
  return (
    <>
     
        <div className='Navbar__wrapper'>
      
            <Link to ="/"><img className="Navbar__logo" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo_small.svg?v=1682421543"  alt="image"/></Link> 
            <ul className="navOption">
              <li>Categories</li>
              <Link to={"/day"} style={{textDecoration:"none"}} ><li>Daily Deals</li></Link>
              <Link to={"/best"} style={{textDecoration:"none"}} ><li>Best of Boat</li></Link>
              <Link to={"/new"} style={{textDecoration:"none"}} ><li>New Launches</li></Link>
            </ul>
            <div className="search">
              <input className='search__box' placeholder='Search here' type="text"  id='search' onClick={toggleSearchedItems} onChange={(e)=>sersearchTerm(e.target.value.length>3?e.target.value:"boat")}/>
              {searchedItems && <SearchedItems   toggleSearchedItems={toggleSearchedItems} search = {search} linktotheProduct={true}  />}
            </div>
            <div className="nav__icons">
                {/* <Link to = '/authentication' style={{ textDecoration: 'none'}}> */}
                  <div className='profile__card' >
                    <div className='avatar' onClick={togglepopupprofile}>
                    <Avatar  style={{height:35 , width:35}} />
                    </div>
                  
                   { popupprofile && <PopupProfile toggle={togglepopupprofile} isLogin={isLogin}/>}
                   {/* { popupprofile && !isLogin && <PopupProfile toggle={togglepopupprofile}/>} */}
                 </div>
               
                {/* </Link> */}
                <Link to ='/cart'>

                  <div className="navbar__cart">
                  <i className="fa badge fa-lg" value={cartCount}>&#xf07a;</i>
                  </div>
                  

                </Link>
               
            </div>
          
        </div>


    </>
  )
}





    export default Navbar