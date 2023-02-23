import React from 'react';
import "../../Home.css";
import app1 from "../../../../../assets/companyImages/company1.svg";
import app2 from "../../../../../assets/companyImages/company2.svg";
import app3 from "../../../../../assets/companyImages/company3.svg";
import app4 from "../../../../../assets/companyImages/company4.svg";
const HomeFirstSection = () => {
    return (
        <>
            <div className="d-flex flex-column flex-lg-row justify-content-between my-5" data-aos="zoom-in-left">
                <div className='mt-5'>
                    <div className='firstSectionTextStyle'>
                        <h2 className="leftFirstTextStyle"> The best place to  </h2>
                        <h2 className='textCommonColor leftFirstTextStyle'>eat burgers in LA.</h2>

                        <div className="DameText">
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam.</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row justify-content-between ">
                        <button className="reservateButton">Reservate</button>
                        <button className="onlineOrder">Online order</button>
                    </div>
                </div>

                <div className='leftSideHomeSec' data-aos="zoom-in-right" data-aos-delay="500">
                    <img src="https://i.ibb.co/XFSD4gp/right-Side-Image.jpg" alt="homeImage" className='homeRightSideImage2' />
                </div>
            </div>
            {/* app store images  */}
            <div className="orderAppDiv my-4" data-aos="zoom-in-left">
                <h2 className='text-center fs-4 fw-bold my-4 appHeadText'>Order from your favorite app today!</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <img src={app1} alt="app one" className='appStyle' />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <img src={app2} alt="app two" className='appStyle' />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <img src={app3} alt="app three" className='appStyle' />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <img src={app4} alt="app four" className='appStyle' />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HomeFirstSection;