import React from 'react';
import aboutLogo from "../../../../../assets/aboutImages/logoAbout.svg";
import aboutLogo2 from "../../../../../assets/aboutImages/logoAbout2.svg";
import aboutLogo3 from "../../../../../assets/aboutImages/logoAbout3.svg";
const HomeThirdSection = () => {
    return (
        <>
            <div className="aboutDivOfHomePage container topSpaceOfHomeSecondDiv" data-aos="fade-down">
                <div className="row">
                    <div className="d-flex flex-column flex-md-column flex-lg-row mx-2">
                        {/* right side div  */}
                        <div className='mx-5 my-3'>
                            <div className="aboutBackgroundOfHomePage" data-aos="fade-down" data-aos-delay="500">
                            </div>

                        </div>
                        {/* left side div  */}
                        <div className='ms-5 topSpaceOfHomeSecondDiv my-3 fw-bold' data-aos="fade-down">
                            <h2> About us</h2>
                            <p> Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum dicta eveniet quos iure mollitia nobis nemo! Sequi eum ducimus reiciendis? Incidunt aliquam repudiandae ea, facere voluptatem hic dolorem ad voluptatum nemo aut, ex illum delectus nisi? Quos nulla magnam perspiciatis quis quam distinctio iste ea voluptas voluptates vero in optio animi fugit soluta a vel assumenda quibusdam nam aut recusandae reprehenderit, facilis minima. Ex dolores maxime illum repellat ducimus quisquam!</p>
                            <div className="d-flex flex-column flex-lg-row buttonGroup">
                                <button className="onlineOrder"> About us </button>
                                <button className="reservateButton"> Join our team </button>
                            </div>
                        </div>

                    </div>

                    {/* third div  */}
                    <div className="internalDivOfAbout my-3 fw-bold text-secondary">
                        <p className='fs-3 fw-bold text-center my-2 text-dark'> Come and visit us</p>
                        <div className="d-flex flex-column  flex-md-row mx-2">
                            <div>
                                <img src={aboutLogo} alt="about logo" className='aboutLogo' />
                            </div>
                            <div className='ms-5'>
                                837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                            </div>
                        </div>

                        <div className="d-flex flex-column   my-2 flex-md-row mx-2">
                            <div>
                                <img src={aboutLogo3} alt="about logo" className='aboutLogo' />
                            </div>
                            <div className='ms-5'>
                                (414) 857 - 0107
                            </div>
                        </div>

                        <div className="d-flex flex-column my-2 flex-md-row mx-2">

                            <div>
                                <img src={aboutLogo2} alt="about logo" className='aboutLogo' />
                            </div>
                            <div className='ms-5'>
                                losangeles@restaurantex.com
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeThirdSection;