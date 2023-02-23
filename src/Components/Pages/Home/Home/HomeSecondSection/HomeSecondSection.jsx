import React from 'react';
import menu1 from "../../../../../assets/homeImages/div.svg";
import menu2 from "../../../../../assets/homeImages/div2.svg";
import menu3 from "../../../../../assets/homeImages/div3.svg";
import menu4 from "../../../../../assets/homeImages/div4.svg";
const HomeSecondSection = () => {
    return (
        <>
            <div className="container topSpaceOfHomeSecondDiv" data-aos="fade-up">
                {/* menu div  */}
                <div className="row mx-auto">
                    <p className='text-center fs-3 fw-bold textStyle'>Browse our menu</p>
                    <div className="col-12 col-md-6 col-lg-3 my-3 border-2 homeDivSectionSecond">
                        <img src={menu1} alt="menu one" />
                        <p className='p-4 my-2'>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam</p>
                        <p className='textCommonColor text-center fs-5 fw-bold'> Explore Menu </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 my-3 homeDivSectionSecond">
                        <img src={menu2} alt="menu one" />
                        <p className='p-4 my-2'>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam</p>
                        <p className='textCommonColor text-center fs-5 fw-bold'> Explore Menu </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 my-3 homeDivSectionSecond" >
                        <img src={menu3} alt="menu one" />
                        <p className='p-4 my-2'>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam</p>
                        <p className='textCommonColor text-center fs-5 fw-bold'> Explore Menu </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 my-3 homeDivSectionSecond" >
                        <img src={menu4} alt="menu one" />
                        <p className='p-4 my-2'>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam</p>
                        <p className='textCommonColor text-center fs-5 fw-bold'> Explore Menu </p>
                    </div>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-center buttonGroup">
                    <button className="reservateButton"> Order online</button>
                    <button className="onlineOrder">Back a table </button>
                </div>
            </div>
        </>
    );
};

export default HomeSecondSection;