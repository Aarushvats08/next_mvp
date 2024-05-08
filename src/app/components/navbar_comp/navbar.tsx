import React from 'react';
import "./navbar.css"
const NavbarComp=()=>{
  return (
    <>
    <nav className="navbar">
      <div className="container nav-container">
  <div className="brand">
    <a href="#"><img src="https://img-cdn.thepublive.com/fit-in/580x326/filters:format(webp)/shethepeople/media/agency_attachments/wkC4dHVAGhhhIc2AHzxb.png" alt="" /></a>
  </div>
  <div className="categories">
    <a href="#">Health</a>
    <a href="#">Medical</a>
    <a href="#">Podcast</a>
  </div>
  </div>
</nav>
    </>
  )
}

export default NavbarComp;