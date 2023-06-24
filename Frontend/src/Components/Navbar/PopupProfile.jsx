import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { LogoutHandlerContext } from "../../store/AuthContext";
import { useContext } from "react";
function PopupProfile({toggle,isLogin}) {
    const logout = useContext(LogoutHandlerContext)
    console.log(logout)
    return (<div className='popupprofile'>
              { isLogin &&   <p className='popupprofilename popupprofilechild'>Hi Gaurav Mandal!</p>}
              { !isLogin &&   <p className='popupprofilename popupprofilechild'>Hi BoatHead!</p>}
              { isLogin &&   <Link to="/order" style={{textDecoration:"none"}} onClick={()=>toggle()} >
                  <p className='popupprofilechild'>Manage Your Order</p>
                  </Link>}
                
                 { isLogin &&   <Link to="/account" style={{textDecoration:"none"}} onClick={()=>toggle()} >
                  <p className='popupprofilechild'>Account</p>
                  </Link>}
                 {isLogin &&  <Button  onClick={logout} style={{ backgroundColor: 'red', color:"white" }}  >Logout</Button>}
                 {!isLogin && <Link to={"/authentication"} style={{textDecoration:"none"}}>
                    <Button variant="contained" style={{ backgroundColor: 'red' , width:"100%" , color:"white"  }}  >Login</Button>
                 </Link>}
                </div>);
  }
export default PopupProfile