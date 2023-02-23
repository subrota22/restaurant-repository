import React from 'react';
import { Helmet } from 'react-helmet';
import { Typewriter } from 'react-simple-typewriter';
const Contact = () => {
    return (
        <>
            <Helmet><title>Contact</title></Helmet>
            <div className="textDivStyle">
                <h2>
                    <Typewriter
                        words={['coming', ' soon', 'just', 'waiting to', 'watch']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h2>
            </div>
        </>
    );
};

export default Contact;