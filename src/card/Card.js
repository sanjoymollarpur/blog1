import React from 'react'
//import './Navbar.css'
//import i1 from '../images/hillriver.jpg'
export default function Card(props) {
    return (
        <div className="card" style={{ width: "20rem" }}>
            <img src={props.imgurl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                    {props.desc}
                </p>
                 <p>{props.publishedAt}</p>
                <h6><b> Author: </b>  {props.author}</h6>
                <a href={props.url} className="btn btn-primary">Go Details</a>
            </div>
        </div>
    )
}