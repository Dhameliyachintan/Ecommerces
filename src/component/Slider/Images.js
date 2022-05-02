import React, { Component } from "react";
import Slider from "react-slick";

export default class Images extends Component {
    render() {
        var settings = {
            infinite: true,
            speed: 300,
            slidesToShow: 7,
            slidesToScroll: 7,
            autoplay: 1000,
            arrows: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            ]
        };
        return (
            <div className="container pt-5 pb-5">
                <div className="about-text text-center text-dark">
                        <h1 className="fw-bold mb-5">@Aytor Instagram</h1>
                    </div>
                <Slider {...settings}>
                    <img src="image/insta_2.jpg" alt className="img-fluid" />
                    <img src="image/insta_3.jpg" alt className="img-fluid" />
                    <img src="image/insta_4.jpg" alt className="img-fluid" />
                    <img src="image/insta_5.jpg" alt className="img-fluid" />
                    <img src="image/insta_6.jpg" alt className="img-fluid" />
                    <img src="image/insta_1.jpg" alt className="img-fluid" />
                    <img src="image/insta_8.jpg" alt className="img-fluid" />
                    <img src="image/insta_6.jpg" alt className="img-fluid" />
                </Slider>
            </div>
        );
    }
}