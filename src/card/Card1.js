import React from 'react'
//import './Navbar.css'
//import i2 from '../images/hillriver1.jpg'

export default function Card1(props) {
    return (
        <div className="card mb-3" style={{maxWidth:'980px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.imgurl} className="img-fluid rounded-start" alt="none"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
        <p>{props.publishedAt}</p>
        <h6><b> Author: </b>  {props.author}</h6>
        <a href={props.url} className="btn btn-primary">Go Details</a>
      </div>
    </div>
  </div>
</div>
    )
}