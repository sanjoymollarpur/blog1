import React from 'react'
import Templete from '../templete/Templete'
//import './Navbar.css'
import arr from '../data/Fitnessdata'
export default function Navbar() {
    return (
        <div>
            <Templete arr={arr} tt="Fitness"/>
        </div>
    )
}