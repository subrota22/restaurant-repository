import React from 'react';
import valueLogo from "../../../../assets/aboutImages/valueLogo.svg" ;
import valueLogo2 from "../../../../assets/aboutImages/valueLogo2.svg" ;
import valueLogo3 from "../../../../assets/aboutImages/valueLogo3.svg" ;
import valueLogo4 from "../../../../assets/aboutImages/valueLogo4.svg" ;
import valueLogo5 from "../../../../assets/aboutImages/valueLogo5.svg" ;
import valueLogo6 from "../../../../assets/aboutImages/valueLogo6.svg" ;
const AboutForthSection = () => {
//The value that drive everything we do, data collection 
const valueData = [
    {
        logo:valueLogo ,
        name:"Love & Passion",
        description:" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    },
    {
        logo:valueLogo2 ,
        name:"Flavour",
        description:" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    },
    {
        logo:valueLogo3 ,
        name:"Care & craft",
        description:" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    },
    {
        logo:valueLogo4 ,
        name:"Customer-first",
        description:" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    },
    {
        logo:valueLogo5 ,
        name:"Teamwork",
        description:" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    },
    {
        logo:valueLogo6 ,
        name:"Quality",
        description:"Duis aute irure dolor in reprehenderit  in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    },

]
    return (
        <>
      <div className="aboutForthSectionDiv">
      <div className="container">
        <div className="row">
            <h2 className='fs-2 fw-bold text-center' data-aos="zoom-in">The value that drive everything <br /> we do</h2>
           
         {
            valueData?.map ( (item) => 
            <div className="col-12 col-md-6 col-lg-4 valueDiv" data-aos="zoom-in">
            <img src={item?.logo} alt="value logo" className='valueLogoImage'/>
            <p className='fs-2 text-secondary fw-bold'>{item?.name}</p>
            <p className='text-secondary fw-bold fs-6 text-center'>{item?.description}</p>
            </div>
            )
         }
        </div>
       </div>
      </div>
        </>
    );
};

export default AboutForthSection;