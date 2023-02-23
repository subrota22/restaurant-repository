import React from 'react';
import rightArrow from "../../../../../assets/homeImages/right-arrow-svgrepo-com.svg";
import leftArrow from "../../../../../assets/homeImages/left-arrow-svgrepo-com.svg";
import star from "../../../../../assets/homeImages/star-svgrepo-com.svg";
const HomeFifthSection = () => {
    return (
        <>
            <div className='topSpaceOfHomeSecondDiv fifthSection' data-aos="fade-up" data-aos-delay="800">
                <div className="alignOfUserFeedbackText fw-bold">
                    <h2>What our clients say</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt voluptate fugit deleniti sunt quasi nisi <br /> voluptas ex repellendus perspiciatis ipsum!</p>
                </div>

                <div className="container">
                    <div className="row">

                        <div className="d-flex  flex-row justify-content-center ">
                            <div className='Arrow'>
                                <img src={leftArrow} alt="rightArrow" className='rightArrow' />
                            </div>
                            {/* user feedback div  */}
                            <div className='middleDivForUserFeedback'>
                                <div className="flex-flex">
                                    {
                                        [0, 1, 2, 3, 4].map(() =>
                                            <img src={star} alt="star" className='star' />
                                        )
                                    }
                                </div>
                                <p className='fs-4 fw-bold my-2'>“You must try these burgers”</p>
                                <p className='fs-6 fw-bold my-2'>Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.</p>
                                <div className="d-flex flex-start my-4">
                                    <div className='mx-3'>
                                        <img src="https://i.ibb.co/6rTBBXF/face1.jpg" alt="face" className='face1' />
                                    </div>
                                    <div className='mx-3 fs-6 fw-bold'>
                                        <p>Matt Cannon <br /> San Diego, CA</p>

                                    </div>
                                </div>
                            </div>
                            <div className='Arrow'>
                                <img src={rightArrow} alt="leftArrow" className='leftArrow' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column my-3 flex-lg-row justify-content-center buttonGroup">
                    <button className="onlineOrder my-3"> Back a table </button>
                    <button className="reservateButton my-3"> Order online </button>
                </div>
            </div>
        </>
    );
};

export default HomeFifthSection;