import React from 'react'
import "./MyAccount.css"
import More from './More';
import { Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Face6Icon from '@mui/icons-material/Face6';
import ArticleIcon from '@mui/icons-material/Article';
import ChatIcon from '@mui/icons-material/Chat';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LogoutIcon from '@mui/icons-material/Logout';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
function MyAccount() {
  return (
    <div className="myaccount">
         <div className="userinfomyaccount  myaccountchild">
            <div className="profileinfo">
                <h1>Gaurav Mandal</h1>
                <p>avdhika@gmail.com</p>
                <p>9708608978</p>
            </div>
        </div>

        <div className="mangeadreessandorders myaccountchild">
            <div className="address">
                <HomeIcon></HomeIcon>
                <h3>Manage Address</h3>
            </div>
            <hr />
            <div className="orders">
            <StorefrontIcon></StorefrontIcon>
            <h3>Your Orders</h3>
            </div>

            
        </div>

        <div className="myaccountmore myaccountchild">
            <More  Icon={NotificationsIcon} name={"Notification Center"}  ArrowSymbol={ArrowForwardIosIcon} />
            <More  Icon={HelpCenterIcon} name={"Help and Support"}  ArrowSymbol={ArrowForwardIosIcon} />
            <More  Icon={QuestionAnswerIcon} name={"FAQs"}  ArrowSymbol={ArrowForwardIosIcon} />
            <More  Icon={ArticleIcon} name={"Terms and Condition"}  ArrowSymbol={ArrowForwardIosIcon} />
            <More  Icon={ChatIcon} name={"Get In Touch"}  ArrowSymbol={ArrowForwardIosIcon} />

        </div>  

            <div className="myaccountmore myaccountchild">
            <More  Icon={LogoutIcon} name={"Logout"}   />
            
            
        </div>   
    </div>
   

  )
}



  export default MyAccount