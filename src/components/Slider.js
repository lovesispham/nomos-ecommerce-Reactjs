import React, { Component } from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom'

const img1 = require("../assets/img/slide/1.jpg").default
const img2 = require("../assets/img/slide/2.jpg").default
const img3 = require("../assets/img/slide/3.jpg").default

const sliderData = [
    {
        title:"Coteetciel Backpack",
        description:"SPOETIC ASPECTS OF DAILY LIFE",
        img:img1,
        path:"/catalog",
    },
    {
        title:"Playful furniture",
        description:"SAVE UP TO 50%",
        img:img2,
        path:"/catalog",
    },
    {
        title:"Coteetciel Backpack",
        description:"SAVE UP TO 50%",
        img:img3,
        path:"/catalog",
    }
]

export default class SimpleSlider extends Component {

    


    render() {
        const settings = {
            dots: true,
            arrows: true,
            
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2500,
            speed:300,
            fade: true,
            cssEase: 'ease-in-out',

        };
        return (
            <div>
                <div className="nomos-slide-full v1">
                <Slider {...settings}>
                    
                    {
                        sliderData.map((item, index) => (
                            <div className="slide-img" key={index}>
                                <img className="img-responsive" src={item.img} alt="" />
                                <div className="slide-content v2 box-center" key={index}>
                                    <h3 className="text-animate-2">{item.title}</h3>
                                    <p className="text-animate-1">{item.description}</p>
                                    <Link to={item.path} className="nomos-btn btn-shopnow btn-slider">Shop Now</Link>
                                </div>
                            </div>
                            
                            
                            
                        ))
                    }
                        
                            
                    
                </Slider>
                </div>
            </div>
        );
    }
}