import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div className="navbar1">
          <div className="nav-txt">
          <span className="nav-txt1">The</span> 
         <span className="nav-txt2">Siren</span>
          </div>
          
        <nav>
            <ul className="item">
                <li className="list-item"><Link className="ll" to="/">Home</Link></li>
                <li className="list-item"><Link className="ll" to="/bollywood">Bollywood</Link></li>
                <li className="list-item"><Link className="ll" to="/technology">Technology</Link></li>
                <li className="list-item"><Link className="ll" to="/hollywood">Hollywood</Link></li>
                <li className="list-item"><Link className="ll" to="/fitness">Fitness</Link></li>
                <li className="list-item"><Link className="ll" to="/food">Food</Link></li>
                
            </ul>
            <hr />
        </nav>
        </div>
    )
}
