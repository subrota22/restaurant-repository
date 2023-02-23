import React from 'react';
import { Helmet } from 'react-helmet';
import HomeFirstSection from './Home/HomeFirstSection/HomeFirstSection';
import HomeForthSection from './Home/HomeForthSection/HomeForthSection';
import HomeSecondSection from './Home/HomeSecondSection/HomeSecondSection';
import HomeThirdSection from './Home/HomeThirdSection/HomeThirdSection';
import "./Home.css";
import HomeFifthSection from './Home/HomeFifthSection/HomeFifthSection';
import HomeSixthSection from './Home/HomeSixthSection/HomeSixthSection';
import HomeSevenSection from './Home/HomeSeventhSection/HomeSevenSection';
import HomeSectionEight from './Home/HomeSectlionEight/HomeSectionEight';
import CarouselPhotos from '../../Share/Carousel/CarouselPhotos';
const Home = () => {
    return (
        <>
            <Helmet><title>Home page</title></Helmet>
            <section>
                <CarouselPhotos></CarouselPhotos>
                <HomeFirstSection></HomeFirstSection>
                <HomeSecondSection></HomeSecondSection>
                <HomeThirdSection></HomeThirdSection>
                <HomeForthSection></HomeForthSection>
                <HomeFifthSection></HomeFifthSection>
                <HomeSixthSection></HomeSixthSection>
                <HomeSevenSection></HomeSevenSection>
                <HomeSectionEight></HomeSectionEight>
            </section>
        </>
    );
};

export default Home;