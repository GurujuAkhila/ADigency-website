import React from "react";
import '../../styles/testimonial.css';
import Slider from "react-slick";
import ava01 from '../../images/ava-1.jpg';
import ava02 from '../../images/ava-2.jpg';
import ava03 from '../../images/ava-3.jpg';

const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    };
    return <section className="testimonial">
        <div className="container">
            <div className="slider__content-top">
                <h6 className="subtitle">Testimonials</h6>
                <h2>Trusted by Morethan <span className="highlight">5,000 Customers</span></h2>
            </div>
            <div className="slide__wrapper">
                <Slider {...settings}>
                    <div className="slider__item">
                        <p className="description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo a mollitia debitis pariatur doloribus optio tempore rem saepe aliquid! Tempora, aut mollitia tempore quis at qui veniam. Illo, repellat nulla.
                        </p>
                        <div className="customer__details">
                            <div className="customer__img">
                                <img src={ava01} alt="" />
                            </div>

                            <div>
                                <h5 className="customer__name">John Doe</h5>
                                <p className="description">CEO, WorkCreation</p>
                            </div>
                        </div>
                    </div>

                    <div className="slider__item">
                        <p className="description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo a mollitia debitis pariatur doloribus optio tempore rem saepe aliquid! Tempora, aut mollitia tempore quis at qui veniam. Illo, repellat nulla.
                        </p>
                        <div className="customer__details">
                            <div className="customer__img">
                                <img src={ava02} alt="" />
                            </div>

                            <div>
                                <h5 className="customer__name">Tom Cooper</h5>
                                <p className="description">Sr. Manager, Forward</p>
                            </div>
                        </div>
                    </div>

                    <div className="slider__item">
                        <p className="description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo a mollitia debitis pariatur doloribus optio tempore rem saepe aliquid! Tempora, aut mollitia tempore quis at qui veniam. Illo, repellat nulla.
                        </p>
                        <div className="customer__details">
                            <div className="customer__img">
                                <img src={ava03} alt="" />
                            </div>

                            <div>
                                <h5 className="customer__name">Krishna Murthy</h5>
                                <p className="description">CEO, Awsomed</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </section>
}

export default Testimonial;