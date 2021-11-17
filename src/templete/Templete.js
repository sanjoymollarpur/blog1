import React from 'react'
import Card from '../card/Card'
import Card1 from '../card/Card1'
import Card4 from '../card/Card4'
import './Templete.css'
const v=12,v1=10,v2=16,v3=17;
export default function Templete(props) {
    // console.log(props.arr[0])
    return (


        <div className="con-tem">
            <div className="temp-item1">
                <div className="heading">
                    <h5>{props.tt}</h5>
                    <hr className="line-s2" />
                </div>
                {props.arr.map((val, index) => <Card1 key={index} publishedAt={val.publishedAt} desc={val.description} url={val.url} author={val.author} title={val.title} imgurl={val.urlToImage} />)}
            </div>
            <div className="temp-item2">
                <div className="heading">
                    <h5>Top post</h5>
                    <hr className="line-s2" />
                </div>
                <Card title={props.arr[v].title} imgurl={props.arr[v].urlToImage}/>
                <Card4  title={props.arr[v1].title} imgurl={props.arr[v1].urlToImage}/>
                <Card4  title={props.arr[v2].title} imgurl={props.arr[v2].urlToImage}/>
                <Card4  title={props.arr[v3].title} imgurl={props.arr[v3].urlToImage}/>
            </div>
        </div>

    )
}