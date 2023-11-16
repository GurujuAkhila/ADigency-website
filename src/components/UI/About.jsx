import React from "react";
import '../../styles/about.css';
// import aboutImg from '../../images/about-us.jpg'

const chooseData = [
    {
        icon: 'ri-wifi-line',
        title: 'First Working Process',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea aspernatur voluptate enim facilis culpa!'
    },
    {
        icon: 'ri-team-line',
        title: 'Dedicated Team',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea aspernatur voluptate enim facilis culpa!'
    },
    {
        icon: 'ri-customer-service-2-line',
        title: '24/7 Support',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea aspernatur voluptate enim facilis culpa!'
    },
]

const About = () => {
    return <section id="about">
        <div className="container">
            <div className="about__wrapper">
                <div className="about__content">
                    <h6 className="subtitle">Why Choose us?</h6>
                    <h2>Specialist in aviding Clients on</h2>
                    <h2 className="highlight">Financial Challenges</h2>
                    <p className="description about__content-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nobis, culpa, illum magni tempora quisquam alias qui eaque sit, facere dignissimos quos animi!</p>

                    <div className="choose__item-wrapper">
                        {
                            chooseData.map((item, index) => (
                                <div className="choose__us-item" key={index}>
                                    <span className="choose__us-icon"><i class={item.icon}></i></span>
                                    <div>
                                        <h4 className="choose__us-title">{item.title}</h4>
                                        <p className="description">{item.desc}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* <div className="about__img">
                    <img src={aboutImg} alt="" />
                </div> */}
            </div>
        </div>
    </section>
}

export default About;