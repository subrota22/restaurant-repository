import React from 'react';
const HomeSixthSection = () => {
    return (
        <>
            <div className="homeSixDiv" data-aos="zoom-in">

                <div className="d-flex flex-column flex-md-row justify-content-between textStyleSectionSix" data-aos="zoom-in-left">
                    <h2 className='ms-2'> Our  articles </h2>
                    <div>
                        <button className="browsArticleButton fw-bold text-secondary">Brows our articles</button>
                    </div>
                </div>
                <div className="d-flex flex-column flex-lg-row" data-aos="zoom-in-right">
                    <div>
                        <div className='RightArticlesStyle fw-bold text-secondary'>
                            <img src="https://i.ibb.co/3sdQZvy/articles.jpg" alt="articles" className='articlesImage' />
                            <div className="py-3 ps-3 fw-bold">
                                <p className='text-secondary fs-5'>September 1, 2022</p>
                                <p className='fs-3  fw-bold'>The secret trick to prepare a <br /> perfect burger</p>
                                <p className='text-secondary fs-6'> Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipisc</p>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div className="d-flex flex-column flex-lg-row" data-aos="zoom-in-left">

                            <div className='articleTextAndImage'>
                                <img src="https://i.ibb.co/znmc8cd/articles1.jpg" alt="articles" className='articlesImageSize' />
                                <p className='mt-3 text-secondary'>September 1, 2022</p>
                                <p>The secret trick to <br /> prepare a perfect burger</p>
                            </div>
                            <div className='articleTextAndImage'>
                                <img src="https://i.ibb.co/QKxPh1b/articles2.jpg" alt="articles" className='articlesImageSize' />
                                <p className='mt-3 text-secondary'>September 1, 2022</p>
                                <p>The secret trick to  <br /> prepare a perfect burger</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-lg-row" data-aos="zoom-in-right">
                            <div className='articleTextAndImage'>
                                <img src="https://i.ibb.co/bgVKKbZ/articles3.jpg" alt="articles" className='articlesImageSize' />
                                <p className='mt-3 text-secondary'>September 1, 2022</p>
                                <p>The secret trick to  <br />  prepare a perfect burger</p>
                            </div>

                            <div className='articleTextAndImage' >
                                <img src="https://i.ibb.co/hy6b9gb/articles4.jpg" alt="articles" className='articlesImageSize' />
                                <p className='mt-3  text-secondary'>September 1, 2022</p>
                                <p>The secret trick to  <br />  prepare a perfect burger</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HomeSixthSection;