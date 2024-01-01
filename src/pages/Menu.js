import React from 'react'
import { Menulist } from '../components/Data'
import './Menu.css'

function Menu() {
  return (
    <div className='menu'>
      {
        Menulist.map(menu=>(
          <div className='menu-card'>
            <img src={menu.image} alt={menu.name}></img>
            <h5>Dish name:{menu.name}</h5>
            <h5>price:{menu.price}</h5>
          </div>

        ))

      }
      
    </div>
  )
}

export default Menu