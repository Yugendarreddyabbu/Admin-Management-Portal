import React from "react";
import { Link } from "react-router-dom";

const LeftNavBar = () => {
    return(
        <div class="wrapper">
       
        <aside class="sidebar-wrapper" data-simplebar="true">
         <div class="sidebar-header">
           <div>
             <img src="/assets/images/carslogo.png" style={{height:"60px", width:"145px"}} alt="logo icon"/>
           </div>
           {/* <div>
             <h4 class="logo-text">CAR SERVICE</h4>
           </div> */}
           <div class="toggle-icon ms-auto"><ion-icon name="menu-sharp"></ion-icon>
           </div>
         </div>
       
         <ul class="metismenu" id="menu">
          
             <a href="dashboard" >
               <div class="parent-icon"><ion-icon name="home-sharp"></ion-icon>
               </div>
               <div class="menu-title">Dashboard</div>
             </a>

             <a href="myBookings" >
            <div class="parent-icon"><ion-icon name="briefcase-sharp"></ion-icon></div>
            <div class="menu-title">My Bookings</div>
          </a>
            
             <a href="payments" >
               <div class="parent-icon"><ion-icon name="receipt-sharp"></ion-icon></div>
               <div class="menu-title"  >Payment</div>
             </a>
         
         </ul>
         
      </aside>
      
        
 
 
          
 
      </div>
    )
}
export default LeftNavBar;