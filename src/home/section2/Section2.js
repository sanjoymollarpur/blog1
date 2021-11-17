import React from 'react'
import Card from '../../card/Card'
import './Section2.css'
//import arr from '../../data/Data'
import arr from '../../data/Datas2'
export default function Section2() {
    
    return (
        <div className="container-s2">
            <div className="heading">
                <h5>The Latest</h5>
                <hr className="line-s2"/>
            </div>
            <div className="card-con-s2">
                {arr.map((val,index)=><Card key={index} publishedAt={val.publishedAt} desc={val.description} url={val.url} author={val.author} title={val.title} imgurl={val.urlToImage}/>)}
            </div>
            
        </div>
    )
}