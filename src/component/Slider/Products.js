import React, { Component } from "react";
import Slider from "react-slick";

export default class Products extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: 1000,
      arrows: false,
      responsive: [
        {
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
          <div className="product-text text-center">
            <h2 className="fw-bold mb-5">Top Products</h2>
          </div>
          <div className="product-btn text-center pt-4 pb-5">
            <button className="btn text-white rounded-pill ms-2" id="New Arrival" data-bs-toggle="tab" data-bs-target="#New Arrival" type="button" role="tab" aria-controls="New Arrival" aria-selected="true">New Arrival</button>
            <button className="btn rounded-pill border ms-2" id="Featured" data-bs-toggle="tab" data-bs-target="#Featured" type="button" role="tab" aria-controls="Featured" aria-selected="true">Featured</button>
            <button className="btn rounded-pill border" id="Top Rated" data-bs-toggle="tab" data-bs-target="#Top Rated" type="button" role="tab" aria-controls="Top Rated" aria-selected="true">Top Rated</button>
          </div>
          <Slider {...settings}>
            <div className="col-lg-3">
              <div className="product-main text-center fade show active">
                <div className="product-box">
                  <img src="image/featured-1-8.jpg" alt className="img-fluid" />
                </div>
                <div className="product-meta pt-4">
                  <p className="mb-2">Men / Women</p>
                  <h3 className="text-dark fs-4 fw-bold pb-1">Simple Fabric Shoes</h3>
                  <span className="fw-bold">$100.85</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-main text-center fade show">
                <div className="product-box">
                  <img src="image/featured-1-4.jpg" alt className="img-fluid" />
                </div>
                <div className="product-meta pt-4">
                  <p className="mb-2">Men / Women</p>
                  <h3 className="text-dark fs-4 fw-bold pb-1">Air Jordan 7 Retro</h3>
                  <span className="fw-bold">$180.85</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-main text-center fade show">
                <div className="product-box">
                  <img src="image/featured-1-5.jpg" alt className="img-fluid" />
                </div>
                <div className="product-meta pt-4">
                  <p className="mb-2">Men / Women</p>
                  <h3 className="text-dark fs-4 fw-bold pb-1">Nike Air Max 270 SE</h3>
                  <span className="fw-bold">$120.85</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-main text-center">
                <div className="product-box">
                  <img src="image/featured-1-6.jpg" alt className="img-fluid" />
                </div>
                <div className="product-meta pt-4">
                  <p className="mb-2">Men / Women</p>
                  <h3 className="text-dark fs-4 fw-bold pb-1">Adidas Sneaker Shoes</h3>
                  <span className="fw-bold">$190.85</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-main text-center fade show active">
                <div className="product-box">
                  <img src="image/featured-1-8.jpg" alt className="img-fluid" />
                </div>
                <div className="product-meta pt-4">
                  <p className="mb-2">Men / Women</p>
                  <h3 className="text-dark fs-4 fw-bold pb-1">Simple Fabric Shoes</h3>
                  <span className="fw-bold">$100.85</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}


