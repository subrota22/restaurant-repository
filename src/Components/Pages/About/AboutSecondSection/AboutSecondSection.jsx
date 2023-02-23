import React, { Component } from 'react';

class AboutSecondSection extends Component {
    render() {
        return (
            <>
            <div className="aboutSecondSectionStyle" data-aos="zoom-in">  
                <div className="container aboutSecondSectionSpace" data-aos="zoom-in-right" data-aos-delay="500">
                    <div className="row">
                        <div className="d-flex flex-column flex-lg-row justify-content-between">
                            <div>
                                <img src="https://i.ibb.co/6tLxf87/about-Second-Sec.jpg" alt="about second section" className='aboutSecondSection' />
                            </div>
                            <div className='addSecondSectionTopSpace'>
                                <h2 className='fs-2 fw-bold ms-4'>How our founder met</h2>
                                <p className='px-4 text-secondary fs-6 fw-bold'>Duis aute irure dolor in reprehenderit in voluptate velit esse <br />
                                    cillum dolore eu fugiat nulla pariatur occaecat cupidatat non ut <br />
                                    enim ad minim veniam, quis nostrud exercitation sit.
                                </p>
                                <p className='px-4 text-secondary fs-6 fw-bold'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor
                                    incididunt ut labore et dolore magna aliquaquis <br /> nostrud exercitation.</p>
                                 
                                    <button className="reservateButton text-white"> Contact us </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container aboutSecondSectionSpace" data-aos="zoom-in-left" data-aos-delay="1000">
                    <div className="row">
                        <div className="d-flex flex-column flex-lg-row-reverse justify-content-between">
                            <div>
                                <img src="https://i.ibb.co/3rRV2D1/about-Second-Part-Image.jpg" alt="about second section" className='aboutSecondSection' />
                            </div>
                            <div className='addSecondSectionTopSpace'>
                                <h2 className='fs-2 fw-bold ms-4'>The story of our first burger</h2>
                                <p className='px-4 text-secondary fs-6 fw-bold'>Duis aute irure dolor in reprehenderit in voluptate velit esse <br />
                                    cillum dolore eu fugiat nulla pariatur occaecat cupidatat non ut <br />
                                    enim ad minim veniam, quis nostrud exercitation sit.
                                </p>
                                <p className='px-4 text-secondary fs-6 fw-bold'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor
                                    incididunt ut labore et dolore magna aliquaquis <br /> nostrud exercitation.</p>
                                 
                                    <button className="reservateButton text-white"> Contact us </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </>
        );
    }
}

export default AboutSecondSection;