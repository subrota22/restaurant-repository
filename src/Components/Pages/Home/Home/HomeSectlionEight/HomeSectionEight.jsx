import React from 'react';

const HomeSectionEight = () => {
    return (
        <>
            <div className="homeSixDiv homeSectionEight" data-aos="fade-up">
                <div className='d-flex flex-column flex-lg-row my-5 justify-content-between buttonGroup'>
                    <h2 className='text-center my-5'> Follow us on Instagram </h2>
                    <button className="reservateButton my-5 py-2 px-3"> Follow us </button>
                </div>
                {/* food follow images  */}
                <div>
                    <div className="d-flex flex-column flex-lg-row" data-aos="zoom-in-right">
                        <img src="https://i.ibb.co/nmPsgjj/homa.jpg" alt="foodFollow" className='foodFollowImage' />
                        <img src="https://i.ibb.co/YbfSQH6/homeb.jpg" alt="foodFollow" className='foodFollowImage' />
                        <div>
                            <div className="d-flex flex-column flex-lg-row">
                                <img src="https://i.ibb.co/pJv4spk/homec.jpg" alt="follow" className='foodFollowImageSize' />
                                <img src="https://i.ibb.co/QKxPh1b/articles2.jpg" alt="follow" className='foodFollowImageSize' />
                            </div>
                            <div className="d-flex flex-column flex-lg-row" data-aos="zoom-in-left">
                                <img src="https://i.ibb.co/bgVKKbZ/articles3.jpg" alt="follow" className='foodFollowImageSize' />
                                <img src="https://i.ibb.co/hy6b9gb/articles4.jpg" alt="follow" className='foodFollowImageSize' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HomeSectionEight;