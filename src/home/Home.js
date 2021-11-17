import React from 'react'

//import Card1 from '../card/Card1'
import Section1 from './section1/Section1'
import './Home.css'
import Section2 from './section2/Section2'
import Section3 from './section3/Section3'
import Section4 from './section4/Section4'
import Section5 from './section5/Section5'
export default function Home() {
    return (
        <div className="container1">
           <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
        </div>
    )
}
