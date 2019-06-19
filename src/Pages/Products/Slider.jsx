import React, { Component } from 'react'
import Slider from "react-slick";
import styled, { keyframes } from "styled-components";
import Slider_PRo from './utils'
import {Image}from 'rbx'

const Img = styled.img`
    :hover{
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(25%);
    }
`


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
                    <Image.Container size={128}>
                    <center>
                    <Image src={tipo.img} alt="Imagenes Carrusel Slider"  style={{ width: "620px", height: "350px" }} />
                    </center>
                    </Image.Container>
                     
                    )
                })}

            </Slider>
        )
    }
}
