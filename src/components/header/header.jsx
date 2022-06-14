import React from "react";
import "./header.css"
import CTA from "./CTA";
import ME from "../../assets/1.jpg"
import HeaderSocial from "./headerSocial";



const Header = () => {
    return (
       <header>
           <div className="container header__container">
               <h5>Hi I'm</h5>
               <h1>Abdullahil Kafi</h1>
               <h5 className="text-light">IT Project Staff (Software Engineer)</h5>
               <CTA/>
               <HeaderSocial/>

               <div className="me">
                   <img src={ME} alt=""/>
               </div>

               <a href="#contact" className="scroll_down">Scroll Down</a>
           </div>



       </header>
    )
}
export default Header