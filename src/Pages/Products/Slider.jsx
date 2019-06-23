import React, { Component } from 'react'
import Slider from "react-slick";
import Slider_PRo from './utils'
import {Image}from 'rbx'


export default class Slider_Product extends Component {
    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };

        return (
            <Slider {...settings} >
                
                {Slider_PRo.Slider_cons.map((tipo, index) => {
                    return (
                    <Image.Container size={280}>
                    <center>
                        <br/>
                    <Image src={tipo.img} alt="Imagenes Carrusel Slider"  style={{ width: "620px", height: "350px" }} />
                    </center>
                    </Image.Container>
                     
                    )
                })}

            </Slider>
        )
    }
}
