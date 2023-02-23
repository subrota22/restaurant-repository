import React from 'react';
import app1 from "../../../../assets/companyImages/company1.svg";
import app2 from "../../../../assets/companyImages/company2.svg";
import app3 from "../../../../assets/companyImages/company3.svg";
import app4 from "../../../../assets/aboutImages/uber.svg";
const AboutFirstSection = () => {
    return (
        <>
           <div className="animateDivForAboutFirstSection"  data-aos="zoom-in">
            
           <div className="container aboutFirstSection" data-aos="zoom-in-left">
                <div className="row">
                    <div className="addTopSpaceForAboutTextDiv">
                        <div className='textDivSpace'>
                            <h2 className='fs-1 fw-bold'> Our story started  <br /> back in 1984. </h2>
                            <p className='mt-2 text-secondary fs-6 fw-bold mb-5'>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse <br /> cillum
                                dolore eu fugiat nulla pariatur occaecat cupidatat non ut <br />
                                enim ad minim veniam, quis nostrud exercitation sit
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="backgroundFirstSectionDiv" data-aos="zoom-in-right">

            </div>
            <img src="https://i.ibb.co/X3hKh6X/about-Food-Image.jpg" alt="over_style_image" className='over_style_image'/>
            <img src="https://i.ibb.co/NFGwYWP/about-Pizza.jpg" alt="pizza" className='pizzaStyle'/>
            <div className="aboutAppsStyle" data-aos="zoom-in-right">
                <div className="container">
                    <div className="row">

                     <div className="d-flex flex-column flex-lg-row justify-content-around">
                     <div className="col-12 col-md-6 col-lg-2 fw-bold">
                         As seen on:
                        </div>

                            <img src={app1} alt="app one" className='appStyle'/>
                            <img src={app2} alt="app one" className='appStyle'/>
                            <img src={app3} alt="app one" className='appStyle'/>
                            <img src={app4} alt="app one" className='appStyle'/> 
                        </div>  
                        </div>
                </div>
            </div>

            <div className="dishesImages" data-aos="zoom-in-left">
            <h2 className="text-dark fs-1 fw-bolder my-5 text-center d-block d-lg-none"> Our favourite dishes </h2>
            <img src="https://i.ibb.co/X3hKh6X/about-Food-Image.jpg" alt="over_style_image" className='pizzaImageStyle'/>
            <img src="https://i.ibb.co/NFGwYWP/about-Pizza.jpg" alt="pizza" className='pizzaImageStyle' />
            </div>
           </div>
        </>
    );
};

export default AboutFirstSection;