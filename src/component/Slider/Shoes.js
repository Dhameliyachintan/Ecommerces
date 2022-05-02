import React, { Component } from "react";
import Slider from "react-slick";

export default class Shoes extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
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
          <div className="row">
            <div className="col-xl-3">
              <div className="banner-style2 position-relative text-center">
                <img src="image/banner_4.jpg" alt className="img-fluid" />
                <div className="banner-contents">
                  <span className="text-white fs-4">New Trend Edition</span>
                  <div className="text-center">
                    <button className="btn text-white">Explore All </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="row align-items-center mb-4">
                <div className="col-auto">
                  <h2 className="fw-bold">Nike Special</h2>
                </div>
                <div className="col">
                  <div className="title-line position-relative" />
                </div>
              </div>
              <Slider {...settings}>
                <div className="col-xl-3">
                  <div className="product-main text-center fade show active">
                    <div className="product-box">
                      <img src="image/featured-1-1.jpg" alt className="img-fluid" />
                    </div>
                    <div className="product-meta pt-4">
                      <p className="mb-2">Men / Women</p>
                      <h3 className="text-dark fs-4 fw-bold pb-1">Running Sneaker Shoes</h3>
                      <span className="fw-bold">$180.85</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="product-main text-center fade show">
                    <div className="product-box">
                      <img src="image/featured-1-7.jpg" alt className="img-fluid" />
                    </div>
                    <div className="product-meta pt-4">
                      <p className="mb-2">Men / Sports</p>
                      <h3 className="text-dark fs-4 fw-bold pb-1">Nike Basketball shoes</h3>
                      <span className="fw-bold">$120.85</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="product-main text-center fade show">
                    <div className="product-box">
                      <img src="image/featured-1-3.jpg" alt className="img-fluid" />
                    </div>
                    <div className="product-meta pt-4">
                      <p className="mb-2">Men / Women</p>
                      <h3 className="text-dark fs-4 fw-bold pb-1">Simple Fabric Shoe</h3>
                      <span className="fw-bold">$160.85</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="product-main text-center fade show active">
                    <div className="product-box">
                      <img src="image/featured-1-1.jpg" alt className="img-fluid" />
                    </div>
                    <div className="product-meta pt-4">
                      <p className="mb-2">Men / Women</p>
                      <h3 className="text-dark fs-4 fw-bold pb-1">Running Sneaker Shoes</h3>
                      <span className="fw-bold">$180.85</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="product-main text-center fade show active">
                    <div className="product-box">
                      <img src="image/featured-1-1.jpg" alt className="img-fluid" />
                    </div>
                    <div className="product-meta pt-4">
                      <p className="mb-2">Men / Women</p>
                      <h3 className="text-dark fs-4 fw-bold pb-1">Running Sneaker Shoes</h3>
                      <span className="fw-bold">$180.85</span>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section >
    );
  }
}