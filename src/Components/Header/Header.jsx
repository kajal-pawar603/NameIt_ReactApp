 import React from "react";
 import './Header.css';

//  creating the function based Component


const Header =({headTitle,headerExpanded}) =>{
    return (
        <div className="head-container">
            <img src=" https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" 
            //in this if user types something heade image expanded otherwise contracted
            className={`head-img ${
                headerExpanded
                ?'head-image-expanded'
                :'head-image-contracted'
            }`}
            alt="HeaderImg" />
            {/* condition is added for head text contracted or expanded   */}
            <h1 className={`head-text ${
                headerExpanded
                ?'head-text-expanded'
                :'head-text-contracted'
            }`}>{headTitle}</h1>
        </div>
    )
};

export default Header;