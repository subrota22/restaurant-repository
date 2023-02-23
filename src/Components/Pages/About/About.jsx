import React from 'react';
import { Helmet } from 'react-helmet';
import AboutFirstSection from './AboutFirstSection/AboutFirstSection';
import "./About.css" ;
import AboutSecondSection from './AboutSecondSection/AboutSecondSection';
import AboutThirdSection from './AboutThirdSection/AboutThirdSection';
import AboutForthSection from './AboutForthSection/AboutForthSection';
import HomeSectionEight from '../Home/Home/HomeSectlionEight/HomeSectionEight';
const About = () => {
    return (
        <>
        <Helmet> <title>About page</title> </Helmet>  

        <AboutFirstSection></AboutFirstSection>
        <AboutSecondSection></AboutSecondSection>
        <AboutThirdSection></AboutThirdSection>
        <AboutForthSection></AboutForthSection>
        <HomeSectionEight></HomeSectionEight>
        </>
    );
};

export default About;