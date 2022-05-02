import React, { Component } from "react";
import Slider from "react-slick";

export default class Logo extends Component {
    render() {
        var settings = {
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
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
            <div className="logo" style={{ paddingTop: 50 }}>
                <div className="container brand-logo">
                    <Slider {...settings}>
                        <div className="col-lg-2 brand-logos ms-5">
                            <img src="image/logo_3.png" alt />
                        </div>
                        <div className="col-lg-2 brand-logos ms-5">
                            <img src="image/logo_4.png" alt />
                        </div>
                        <div className="col-lg-2 brand-logos ms-5">
                            <img src="image/logo_5.png" alt />
                        </div>
                        <div className="col-lg-2 brand-logos ms-5">
                            <img src="image/logo_1.png" alt />
                        </div>
                        <div className="col-lg-2 brand-logos">
                            <img src="image/logo_2.png" alt />
                        </div>
                        <div className="col-lg-2 brand-logos">
                            <img src="image/logo_4.png" alt />
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}