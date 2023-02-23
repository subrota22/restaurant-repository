import React from 'react';

const AboutThirdSection = () => {
    return (
        <>
   <div className="aboutTeamSection" data-aos="zoom-in">
   <div className="container">
            <div className="row">
                <h2 className='text-center fs-2 fw-bold'> Meet our team </h2>
                <p className='text-secondary fs-6 text-center fw-bold'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <br />
                 dolore eu fugiat nulla pariatur.</p>
                 <div className="col-12 col-md-6 col-lg-4 text-center my-4 teamPersonDiv">
                    <img src="https://i.ibb.co/ZdXnPTD/firstMan.png" alt="first man" className='teamPerson' />
                     <p className='fs-5 fw-bold py-2'>John Carter</p>
                     <p className='positionOfPerson'>Co-founder- and Manager</p>
                 </div>
                 <div className="col-12 col-md-6 col-lg-4 text-center my-4 teamPersonDiv">
                    <img src="https://i.ibb.co/p3MmPVd/second-Man.png" alt="first man" className='teamPerson' />
                     <p className='fs-5 fw-bold py-2'>Andy Smith</p>
                     <p className='positionOfPerson'>Co-founder- and Manager</p>
                 </div>
                 <div className="col-12 col-md-6 col-lg-4 text-center my-4 teamPersonDiv">
                    <img src="https://i.ibb.co/8xv2w4D/sister.png" alt="first man" className='teamPerson' />
                     <p className='fs-5 fw-bold py-2'>Sophie Moore</p>
                     <p className='positionOfPerson'>Head of Staff</p>
                 </div>
            </div>
           </div>
   </div>
        </>
    );
};

export default AboutThirdSection;