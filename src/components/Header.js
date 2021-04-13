import React from 'react'
import Typed from 'react-typed';
import { Link } from 'react-scroll'

const Header = () => {
    return (
       <div id="home" className="header-wrapper">
           <div className="main-info">

             <h1>Web Development Company</h1>  
             <Typed className="typed-text"
             strings={["Web Design","Website Development","Mobile Apps"]}
             
             typeSpeed={40}
             backSpeed={50}
           
             loop />
             <Link smooth={true} to='contact' href="{null}" className="btn-main">Contact Us</Link>
           </div>
       </div>
    )
}

export default Header
