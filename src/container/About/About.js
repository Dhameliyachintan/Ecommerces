import React from 'react';
import Avater from '../../component/Slider/Avater';
import Images from '../../component/Slider/Images';
import Team from '../../component/Slider/Team';

function About(props) {
    return (
        // < !--------------------- about-banner---------------------->
        <div>
            <div className="about" style={{ backgroundImage: 'url(image/breadcumb_bg_about.jpg)' }}>
                <div className="container">
                    <div className="about-text text-center text-white">
                        <h1>About Us</h1>
                    </div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
                            <li className="breadcrumb-item active text-white" aria-current="page">Library</li>
                        </ol>
                    </nav>
                    <div className="overlay" />
                </div>
            </div>
            {/*-------------------Aytor-Shop--------------------*/}
            <section className="shope">
                <div className="container position-relative py-40">
                    <div className="row">
                        <div className="about-shape" />
                        <div className="col-lg-6">
                            <img src="image/about_2.png" alt className="img-fluid" />
                        </div>
                        <div className="col-lg-6 px-5">
                            <div className="shope-text">
                                <h2 className="fw-bold">Learn About Aytor Shop</h2>
                                <p className="pb-3">Interactively underwhelm effective relationships whereas team driven paradigms.
                                    Uniquely impact impactful meta-services vis -a-vis fully tested best practices.
                                    Appropriately e-enable fully potentialities and economical.</p>
                            </div>
                            <hr className="style1" />
                            <div className="check-list pt-4">
                                <p>Assertively customize potentialities and economical relationships whereas</p>
                                <p>Seamlessly disintermediate distributed relationships intellectual capital.</p>
                                <p>Credibly enable B2C potentialities relationships whereas after strategic.</p>
                            </div>
                            <button className="btn">Discover More <i className="fa fa-angle-double-right" aria-hidden="true" /></button>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------------space-extra-bottom-------------------*/}
            <section className="counter-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="counter-center text-center">
                                <div className="box text-center rounded-circle">
                                    <img src="image/count_1.png" alt />
                                </div>
                                <div className="counter-title">
                                    <h2 className="mt-4 fw-bold">22.3k</h2>
                                    <p>Products for sale</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="counter-center text-center">
                                <div className="box text-center rounded-circle">
                                    <img src="image/count_2.png" alt />
                                </div>
                                <div className="counter-title">
                                    <h2 className="mt-4 fw-bold">14.6k</h2>
                                    <p>Sellers active on shop</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="counter-center text-center">
                                <div className="box text-center rounded-circle">
                                    <img src="image/count_3.png" alt />
                                </div>
                                <div className="counter-title">
                                    <h2 className="mt-4 fw-bold">25.3k</h2>
                                    <p>Customer active on store</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="counter-center text-center">
                                <div className="box text-center rounded-circle">
                                    <img src="image/count_4.png" alt />
                                </div>
                                <div className="counter-title">
                                    <h2 className="mt-4 fw-bold">95.6k</h2>
                                    <p>Annual gross sales</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------------Our Story-------------------*/}
            <section className="our-Story">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="shope-text">
                                <h2 className="fw-bold">Learn About Aytor Shop</h2>
                                <p className="pb-3">Synergistically pontificate focused services whereas intuitive leadership.
                                    Competently predominate ubiquitous services rather than client-centric scenarios.
                                    Distinctively mesh B2C benefits for superior customer service. Interactively e-enable
                                    inexpensive total linkage without quality materials. Phosfluorescently negotiate.</p>
                                <p>Synergistically pontificate focused services whereas intuitive leadership. Competently
                                    predominate ubiquitous services rather than client-centric scenarios. Distinctively mesh B2C
                                    benefits for superior customer service. Interactively e-enable inexpensive total linkage
                                    without quality materials. Phosfluorescently negotiate.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="story-img px-5">
                                <img src="image/our_story.jpg" alt className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------------feature-box-------------------*/}
            <section className="feature-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="counter-center text-center">
                                <div className="box text-center rounded-circle">
                                    <img src="image/truck.png" alt />
                                </div>
                                <div className="counter-title">
                                    <h5 className="mt-4 fw-bold">FREE SHIPING</h5>
                                    <p>All orders over $150</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="counter-center text-center">
                                <div className="box text-center rounded-circle">
                                    <img src="image/card.png" alt />
                                </div>
                                <div className="counter-title">
                                    <h5 className="mt-4 fw-bold">QUICK PAYMENT</h5>
                                    <p>100% secure payment</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="counter-center text-center">
                                <div className="box text-center rounded-circle">
                                    <img src="image/return.png" alt />
                                </div>
                                <div className="counter-title">
                                    <h5 className="mt-4 fw-bold">FREE RETURNS</h5>
                                    <p>Money back in 30 days</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="counter-center text-center">
                                <div className="box text-center rounded-circle">
                                    <img src="image/support.png" alt />
                                </div>
                                <div className="counter-title">
                                    <h5 className="mt-4 fw-bold">24/7 SUPPORT</h5>
                                    <p>Get Quick Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------------Expart Team-------------------*/}
            <Team/>
            {/*-------------------avater-fly-------------------*/}
            <Avater/>
            {/*-------------------Aytor-img-------------------*/}
            <Images/>
            {/* <section className="shope">
                <div className="container">
                    <div className="about-text text-center text-dark">
                        <h1 className="fw-bold mb-5">@Aytor Instagram</h1>
                    </div>
                    <div className="row aytor">
                        <div className="Aytor-image">
                            <img src="image/insta_2.jpg" alt className="img-fluid" />
                        </div>
                        <div className="Aytor-image">
                            <img src="image/insta_3.jpg" alt className="img-fluid" />
                        </div>
                        <div className="Aytor-image">
                            <img src="image/insta_4.jpg" alt className="img-fluid" />
                        </div>
                        <div className="Aytor-image">
                            <img src="image/insta_5.jpg" alt className="img-fluid" />
                        </div>
                        <div className="Aytor-image">
                            <img src="image/insta_6.jpg" alt className="img-fluid" />
                        </div>
                        <div className="Aytor-image">
                            <img src="image/insta_1.jpg" alt className="img-fluid" />
                        </div>
                        <div className="Aytor-image">
                            <img src="image/insta_8.jpg" alt className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section> */}
        </div>

    

    );
}

export default About;


