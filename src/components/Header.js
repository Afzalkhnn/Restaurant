import React from 'react'
import  './Header.css'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <div className='nav'>
        <div className='heading'>
            <h1>MY Restaurant</h1>

        </div>
        <div className='link'>
            <ul>
                <li>
                    <Link to={"/"} style={{textDecoration:"none", color:"white"}}>Home</Link>
                    </li>
                    <li>
                    <Link to={"/Menu"} style={{textDecoration:"none", color:"white"}}>Menu</Link>
                    </li>
                    
                    <li>
                    <Link to={"/About"} style={{textDecoration:"none", color:"white"}}>About</Link>
                    </li>
                    <li>
                    <Link to={"/Contact"} style={{textDecoration:"none", color:"white"}}>Contact</Link>
                    </li>

                
            
                
            </ul>



            


        </div>
    </div>
  )
}

export default Header