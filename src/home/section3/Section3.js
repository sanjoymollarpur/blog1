import React from 'react'
import Card from '../../card/Card1'
import Card1 from '../../card/Card'
import './Section3.css'
import arr1 from '../../data/Data'
import arr from '../../data/Data1'
const v=11;
export default function Section2() {
    //console.log(arr[0])
    return (
        <div className="container-s2">
            <div className="heading">
                <h5>Latest Articles</h5>
                <hr className="line-s2" />
            </div>
            <div className="con-s3">
                <div className="card-con-s3">

                    {arr.map((val, index) => <Card key={index} publishedAt={val.publishedAt} desc={val.description} url={val.url} author={val.author} title={val.title} imgurl={val.urlToImage} />)}
                </div>
                <div className="top-news">
                <div className="adver">
                    
                    <h5 className="txt-s3">Advertistement</h5>
                    
                    
                     </div>
                     <div className="heading">
                <h5>Top post</h5>
                <hr className="line-s2"/>
            </div>
                     <Card1 publishedAt={arr1[v].publishedAt} desc={arr1[v].description} url={arr1[v].url} author={arr1[v].author} title={arr1[v].title} imgurl={arr1[v].urlToImage}/>
                </div>
                
            </div>


        </div>
    )
}