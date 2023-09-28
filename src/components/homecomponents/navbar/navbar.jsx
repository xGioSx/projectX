import React from "react";
import './navbar.css'
import burgermenu from '../../../assets/logo/burgermenu.png'
import helpmenu from '../../../assets/logo/helpmenu.png'
import german from '../../../assets/flag/german.png'


const navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_conteiner"> 

        <div className="nav_list">
          <img src={burgermenu} alt="" />
          <span>all category</span>
          <span>hot offers</span>
          <span>gir boxes</span>
          <span>projects</span>
          <span>menu item</span>
          <span>help</span>
          <img src={helpmenu} alt="" />    
        </div>


        
        

        <div className="ship">

          <div className="ship1">
            <span> ship to</span>
            <img src={german} alt="" />
            <img src={helpmenu} alt=""/>
          </div>

          <div className="ship1">
            <span>Englis, USD</span>
            <img src={helpmenu} alt=""/>
          </div>

        </div>

      </div>
    </nav>
  )
}

export default navbar
