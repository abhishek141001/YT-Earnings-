import React from "react";


function Header(){
    return(
        
            <div className="headerContainer">
            <div className="logoName">
                <img className="logo" src="/img/logo.png" alt="logo"/>
                <h2 className="anchorName">anchors</h2><span className="beta"><p className="betaText">beta</p></span>
            </div>
            <div className="popUpButton">
                <button className="popup"></button>
                {/* <img className="popupImg" src/> */}
            </div>
            </div>
        
    )
}
export default Header;