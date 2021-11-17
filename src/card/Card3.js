import React from 'react'
//import './Navbar.css'

export default function Card3(props) {
    return (
        <div className="col-sm-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <p>{props.publishedAt}</p>
        <h6><b> Author: </b>  {props.author}</h6>
        <a href={props.url} className="btn btn-primary">Go Details</a>
                </div>
            </div>
        </div>
    )
}