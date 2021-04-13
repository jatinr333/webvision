import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container"><a className="navbar-brand" href="{null}">Web-Vision</a>
 

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
 <FontAwesomeIcon icon={faBars} style={{color:'white'}} />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
      <Link smooth={true} to='home' offset={-110} className="nav-link" href="{null}">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
      <Link smooth={true} to='about' offset={-110} className="nav-link" href="{null}">about me</Link>
      </li>
      <li className="nav-item">
      <Link smooth={true} to='services' offset={-110} className="nav-link" href="{null}">Services</Link>
      </li> <li className="nav-item">
      <Link smooth={true} to='contact' offset={-110} className="nav-link" href="{null}">Contact</Link>
      </li>
      
    </ul>
   
  </div></div>
</nav>
    )
}

export default Navbar
