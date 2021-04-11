import React from 'react'
import Typed from 'react-typed';

const Header = () => {
    return (
       <div className="header-wrapper">
           <div className="main-info">

             <h1>Web Development Company</h1>  
             <Typed className="typed-text"
             strings={["Web Design","Website Development","Mobile Apps"]}
             
             typeSpeed={40}
             backSpeed={50}
           
             loop />
             <a href="#" className="btn-main">Contact Us</a>
           </div>
       </div>
    )
}

export default Header
