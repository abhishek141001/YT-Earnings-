import React, { useState } from "react";
import PopUpForm from "./popUpForm";


function Header(){
       
   const [isOpen,setIsOpen] = useState(false) 


    return(
        
            <div className="headerContainer">
            <div className="logoName">
                <img className="logo" src="/img/logo.png" alt="logo"/>
                <h2 className="anchorName">YtEarnings</h2><span className="beta"><p className="betaText">beta</p></span>
            </div>
            <div className="popUpButton">
                <button className="popup" onClick={()=>{setIsOpen(true)}}><img className="phoneImg" src="/img/phone.png" /><p className="requestCall">Request a call back</p></button>
                <PopUpForm open ={isOpen} onClose={()=>{setIsOpen(false)}}/>
                {/* <img className="popupImg" src/> */}
            </div>
            </div>
        
    )
}
export default Header;