import React from 'react'
import Card1 from '../../card/Card1'
import './Section4.css'
import arr from '../../data/Techdata'
import arr1 from '../../data/Fitnessdata'
const v=5;
export default function Section4() {
    return (
        <div className="card-con-s4">
            <div className="card-item1-s4">

                <div className="card-txt-s4">
                    <h4>Zacks Industry Outlook Highlights: CACI International, Perficient and Forrester Research</h4>
                    <p>Novembar 10 2021 </p>
                </div>
            </div>
            {/* <div className="card-item2-s4">
                <div className="card-txt1-s4">
                    <h5>Title of the verticle image</h5>
                    <p>Travel/August 21 2017 </p>
                </div>
            </div> */}
            {/* <div className="card-item3-s4">
                <div className="card-txt2-s4">
                    <h5>Title of the verticle image</h5>
                    <p>Travel/August 21 2017 </p>
                </div>
            </div> */}
            <Card1 publishedAt={arr1[v].publishedAt} desc={arr1[v].description} url={arr1[v].url} author={arr1[v].author} title={arr1[v].title} imgurl={arr1[v].urlToImage}/>
            <Card1 publishedAt={arr[v].publishedAt} desc={arr[v].description} url={arr[v].url} author={arr[v].author} title={arr[v].title} imgurl={arr[v].urlToImage}/>
            {/* <Card1 publishedAt={arr1[v].publishedAt} desc={arr1[v].description} url={arr1[v].url} author={arr1[v].author} title={arr1[v].title} imgurl={arr1[v].urlToImage}/> */}
            {/* <div className="card-item3-s4">
                <div className="card-txt2-s4">
                    <h5>Title of the verticle image</h5>
                    <p>Travel/August 21 2017 </p>
                </div>
            </div> */}
        </div>

    )
}