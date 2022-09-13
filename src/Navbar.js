import React from 'react'

export default function Navbar() {
  return (
   <>
  
  <div class="d-flex justify-content-around">
    <div className="logo">Be strong!</div>
    <div className="nav">
        <ul>
            <li> <a href="#">Home</a> </li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Classes</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
    <div className="rest">+111 222 123445</div>
  </div>

   </>
  )
}
