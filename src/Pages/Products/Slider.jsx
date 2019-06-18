import React, { Component } from 'react'
import Slider from "react-slick";
import styled, { keyframes } from "styled-components";
import Slider_PRo from './utils'

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
            <Slider {...settings} styled={{ height: "auto" }}>

                {Slider_PRo.Slider_cons.map((tipo, index) => {
                    return (<>
                        <div><img src={tipo.img} alt="" style={{ width: "1500px", height: "500px" }} />
                        </div>
                    </>)
                })}

            </Slider>
        )
    }
}
