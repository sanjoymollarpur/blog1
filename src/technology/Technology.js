import React from 'react'
import Templete from '../templete/Templete'
//import './Navbar.css'
import arr from '../data/Techdata'
export default function Navbar() {
    return (
        <div>
            <Templete arr={arr} tt="Technology"/>
        </div>
    )
}