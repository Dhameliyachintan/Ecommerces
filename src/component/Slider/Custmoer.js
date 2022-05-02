import React, { Component } from "react";
import Slider from "react-slick";

export default class Customer extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: 1000,
            arrows: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
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
            <section className="product">
                <div className="container">
                    <div className="customer-text text-center">
                        <h2 className="fw-bold">What Our Customer Say?</h2>
                    </div>
                    <Slider {...settings}>
                        <div className="col-lg-6">
                            <div className="customer-box text-center pt-5 me-4">
                                <div className="customer-texts">
                                    <i className="fa fa-quote-left fs-1" aria-hidden="true" />
                                    <p>Intrinsicly unleash interoperable data whereas pandemic eservices. Energistically
                                        plagiarize-free bandwidth after focused mindshare. Phosfluorescently pontificate
                                        cross-media synergy without clicks-and-mortar services.</p>
                                </div>
                                <div className="customer-img text-center">
                                    <img src="image/avater_2.jpg" alt className="rounded-circle d-inline-block" />
                                    <div className="box-name mt-3">
                                        <h3 className="fw-bold">Imon Hussain</h3>
                                        <p>Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="customer-box text-center pt-5 me-4">
                                <div className="customer-texts">
                                    <i className="fa fa-quote-left fs-1" aria-hidden="true" />
                                    <p>Intrinsicly unleash interoperable data whereas pandemic eservices. Energistically
                                        plagiarize-free bandwidth after focused mindshare. Phosfluorescently pontificate
                                        cross-media synergy without clicks-and-mortar services.</p>
                                </div>
                                <div className="customer-img">
                                    <img src="image/avater_3.jpg" alt className="rounded-circle d-inline-block" />
                                    <div className="box-name mt-3">
                                        <h3 className="fw-bold">Showat Ahsan</h3>
                                        <p>Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="customer-box text-center pt-5 me-4">
                                <div className="customer-texts">
                                    <i className="fa fa-quote-left fs-1" aria-hidden="true" />
                                    <p>Intrinsicly unleash interoperable data whereas pandemic eservices. Energistically
                                        plagiarize-free bandwidth after focused mindshare. Phosfluorescently pontificate
                                        cross-media synergy without clicks-and-mortar services.</p>
                                </div>
                                <div className="customer-img">
                                    <img src="image/avater_1.jpg" alt className="rounded-circle d-inline-block" />
                                    <div className="box-name mt-3">
                                        <h3 className="fw-bold">Showat Ahsan</h3>
                                        <p>Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div >
            </section >
        );
    }
}