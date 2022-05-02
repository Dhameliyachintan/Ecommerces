import React, { Component } from "react";
import Slider from "react-slick";

export default class Avater extends Component {
    render() {
        var settings = {
            infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear',
                autoplay: 1000,
                autoplay: true
        };
        return (
            <section className="avater-fly pt-5 pb-5">
                <div className="container">
                    <Slider {...settings}>
                        <div className="avater-img">
                            <img src="image/quote_left_2.png" alt className />
                            <img src="image/crown.png" alt />
                            <div className="avater-images">
                                <img src="image/avater_6.jpg" alt className="rounded-circle" />
                            </div>
                            <div className="text-center">
                                <p className="mt-3 pb-3">Distinctively revolutionize functional sources rather than cutting-edge
                                    interfaces.
                                    Appropriately
                                    productize next-generation infomediaries without interoperable e-business. Progressively
                                    empower.</p>
                                <h4>Sowat Ahsan</h4>
                            </div>
                        </div>
                        <div className="avater-img">
                            <img src="image/quote_left_2.png" alt className />
                            <img src="image/crown.png" alt />
                            <div className="avater-images">
                                <img src="image/avater_8.jpg" alt className="rounded-circle" />
                            </div>
                            <div className="text-center">
                                <p className="mt-3 pb-3">Distinctively revolutionize functional sources rather than cutting-edge
                                    interfaces.
                                    Appropriately
                                    productize next-generation infomediaries without interoperable e-business. Progressively
                                    empower.</p>
                                <h4>Imon Hossain</h4>
                            </div>
                        </div>
                        <div className="avater-img">
                            <img src="image/quote_left_2.png" alt className />
                            <img src="image/crown.png" alt />
                            <div className="avater-images">
                                <img src="image/avater_1.jpg" alt className="rounded-circle" />
                            </div>
                            <div className="text-center">
                                <p className="mt-3 pb-3">Distinctively revolutionize functional sources rather than cutting-edge
                                    interfaces.
                                    Appropriately
                                    productize next-generation infomediaries without interoperable e-business. Progressively
                                    empower.</p>
                                <h4>Michel Richard</h4>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }
}