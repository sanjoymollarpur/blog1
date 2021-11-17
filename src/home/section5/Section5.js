import React from 'react'
import './Section5.css'
import arr from '../../data/Datas2'
import Card3 from '../../card/Card3'
export default function Section5() {
    return (
        <div className="container-s2">
           <div className="heading">
                <h5>Latest Articles</h5>
                <hr className="line-s2" />
            </div>
            <hr />
            <div className="con-s5">
                {arr.map((val, index)=><Card3 key={index} publishedAt={val.publishedAt} desc={val.description} url={val.url} author={val.author} title={val.title} imgurl={val.urlToImage}/>)}
                
            </div>
        </div>
    )
}