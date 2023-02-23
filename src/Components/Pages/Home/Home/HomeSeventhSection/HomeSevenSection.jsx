import React from 'react';
import aboutLogo from "../../../../../assets/aboutImages/logoAbout.svg";
import aboutLogo2 from "../../../../../assets/aboutImages/logoAbout2.svg";
import aboutLogo3 from "../../../../../assets/aboutImages/logoAbout3.svg";
const HomeSevenSection = () => {
    return (
        <>
            <div style={{"marginTop" : "150px" , "marginBottom":"100px"}}   data-aos="zoom-in">

                <div className="d-flex flex-column flex-lg-row mt-5">
                    <div className='mt-5 h-100'>
                        <div className='BookTextStyle' style={{ marginTop: "110px" }}  data-aos="zoom-in-left" data-aos-delay="500">
                            <div className="my-3">
                                <p className='fs-3 text-dark fw-bold text-start my-2'> Book your table now</p>
                                <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                                    Iure sunt labore aliquam quidem facilis quam excepturi ad <br />
                                    tempore soluta itaque.</p>
                                <div className="d-flex flex-column  flex-md-row mx-2">
                                    <div>
                                        <img src={aboutLogo} alt="about logo" className='aboutLogo' />
                                    </div>
                                    <div className='ms-5 text-secondary'>
                                        837 W. Marshall Lane <br /> Marshalltown, IA 50158, Los <br /> Angeles
                                    </div>
                                </div>

                                <div className="d-flex flex-column   my-2 flex-md-row mx-2">
                                    <div>
                                        <img src={aboutLogo3} alt="about logo" className='aboutLogo' />
                                    </div>
                                    <div className='ms-5 text-secondary'>
                                        (414) 857 - 0107
                                    </div>
                                </div>

                                <div className="d-flex flex-column my-2 flex-md-row mx-2">

                                    <div>
                                        <img src={aboutLogo2} alt="about logo" className='aboutLogo' />
                                    </div>
                                    <div className='ms-5 text-secondary'>
                                        losangeles@restaurantex.com
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="bookLeftSideDiv text-secondary fs-6 fw-bold"  data-aos="fade-up"  data-aos-delay="1000">
                            <form>
                                <div className="internalDivOfBookTable">
                                    <div className="d-flex flex-column flex-md-row justify-content-center mt-5">
                                        <div className='mx-4'>
                                            <p>Name</p>
                                            <input type="text" placeholder='Johan carter' className='formInput' required />
                                        </div>
                                        <div className='mx-4'>
                                            <p>Email</p>
                                            <input type="text" placeholder='example@email.com' className='formInput' required />
                                        </div>
                                    </div>

                                    <div className="d-flex flex-column flex-md-row justify-content-center mt-5">
                                        <div className='mx-4'>
                                            <p>Phone</p>
                                            <input type="text" placeholder='123 (456) - 789' className='formInput' required />
                                        </div>
                                        <div className='mx-4'>
                                            <p>Location</p>
                                            <input type="text" placeholder='Ex. Los Angeles' className='formInput' required />
                                        </div>
                                    </div>

                                    <div className="d-flex flex-column flex-md-row justify-content-center mt-5">
                                        <div className='mx-4'>
                                            <p>Date</p>
                                            <input type="text" placeholder='Day and month' className='formInput' required />
                                        </div>
                                        <div className='mx-4'>
                                            <p>Schedule</p>
                                            <input type="text" placeholder='Ex. 2:00 PM' className='formInput' required />
                                        </div>
                                    </div>

                                    <div className="d-flex flex-column flex-md-row justify-content-center mt-5">
                                        <div className='mx-4'>
                                            <p>Add a note</p>
                                            <textarea rows="6" cols="60" className='rounded-4 textAreaStyle' placeholder='Do you have any note for us ?' required />
                                        </div>

                                    </div>
                                    <button className="reservateButton ms-5 mt-3"> Book a table </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HomeSevenSection;