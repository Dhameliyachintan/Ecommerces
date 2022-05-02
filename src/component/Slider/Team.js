import React, { Component } from "react";
import Slider from "react-slick";

export default class Team extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
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
            <section className="shope">
                <div className="container">
                    <div className="about-text text-center text-dark">
                        <h1 className="mb-5 fw-bold">Leadership Expart Team</h1>
                    </div>
                    <Slider {...settings}>
                        <div className="col-lg-3">
                            <div className="team-image text-center mx-3">
                                <div className="team-images">
                                    <img src="image/team_3.jpg" alt />
                                </div>
                                <div className="team-text p-3">
                                    <h3>Sudjida Lufz</h3>
                                    <p>Support</p>
                                    <ul className="d-flex justify-content-center p-0">
                                        <li><a href="#"><i className="fab fa-facebook-f text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-twitter text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-instagram text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-pinterest-p text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="team-image text-center mx-3">
                                <div className="team-images">
                                    <img src="image/team_4.jpg" alt />
                                </div>
                                <div className="team-text p-3">
                                    <h3>Henry Josep</h3>
                                    <p>Director</p>
                                    <ul className="d-flex justify-content-center p-0">
                                        <li><a href="#"><i className="fab fa-facebook-f text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-twitter text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-instagram text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-pinterest-p text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="team-image text-center mx-3">
                                <div className="team-images">
                                    <img src="image/team_5.jpg" alt />
                                </div>
                                <div className="team-text p-3">
                                    <h3>Mariya Rozie</h3>
                                    <p>Developer</p>
                                    <ul className="d-flex justify-content-center p-0">
                                        <li><a href="#"><i className="fab fa-facebook-f text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-twitter text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-instagram text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-pinterest-p text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="team-image text-center mx-3">
                                <div className="team-images">
                                    <img src="image/team_2.jpg" alt />
                                </div>
                                <div className="team-text p-3">
                                    <h3>Imon Hossain</h3>
                                    <p>Marketer</p>
                                    <ul className="d-flex justify-content-center p-0">
                                        <li><a href="#"><i className="fab fa-facebook-f text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-twitter text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-instagram text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-pinterest-p text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="team-image text-center mx-3">
                                <div className="team-images">
                                    <img src="image/team_1.jpg" alt />
                                </div>
                                <div className="team-text p-4">
                                    <h3>Michel Richard</h3>
                                    <p>Founder</p>
                                    <ul className="d-flex justify-content-center p-0">
                                        <li><a href="#"><i className="fab fa-facebook-f text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-twitter text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-instagram text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                        <li><a href="#"><i className="fab fa-pinterest-p text-dark ms-3" aria-hidden="true" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }
}


