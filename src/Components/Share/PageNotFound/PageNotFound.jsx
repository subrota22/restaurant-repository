import React from 'react';
import { Helmet } from 'react-helmet';
import "./PageNotFound.css";
const PageNotFound = () => {
    return (
        <>
          <Helmet><title>Page not found</title></Helmet>  
          <img src="https://i.ibb.co/d2spdYt/Page-Not-Found.webp" alt="page not found" className='pageNotFound'/>
        </>
    );
};

export default PageNotFound;