import React from 'react';
import start from "../../../assets/homeImages/star-svgrepo-com.svg";
import logo from "../../../assets/homeImages/nav_logo.svg";
import "./Footer.css";
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <>
           <footer className='footerDiv' data-aos="zoom-in">
           <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <img src={logo} alt="logo" className='logo my-2' />
                        <p className='fs-6 my-2' style={{color:"gray" , fontWeight:"bold"}}>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit
                            <br /> bibendum elementum.</p>
                        <div className="d-flex justify-content-start">
                            {
                                [0, 1, 2, 3, 4].map(() =>
                                    <img src={start} alt="start" className='FooterStart mx-1' />
                                )
                            }
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="d-flex justify-content-around">
                            <div className='text-secondary fs-6 text-center'>
                                <h2 className='fs-5 text-dark text-center ms-0'>Pages</h2>
                                <ul className='pages'>
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/">Contact</NavLink></li>
                                    <li><NavLink to="/">Blog Post</NavLink></li>
                                    <li><NavLink to="/">Blog</NavLink></li>
                                    <li><NavLink to="/">Menu</NavLink></li>
                                    <li><NavLink to="/">About</NavLink></li>
                                    <li><NavLink to="/">Delivery</NavLink></li>
                                </ul>
                            </div>
                            <div>
                                <h2 className='fs-5 text-dark text-center ms-0'>Utilities</h2>
                                <ul className='text-secondary utilities fs-6 text-center'>
                                    <li> <NavLink to="/"> Home </NavLink> </li>
                                    <li> <NavLink to="/"> About </NavLink> </li>
                                    <li> <NavLink to="/"> Menu </NavLink> </li>
                                    <li> <NavLink to="/"> Blog </NavLink> </li>
                                    <li> <NavLink to="/"> Blog Post</NavLink>  </li>
                                    <li> <NavLink to="/"> Contact </NavLink> </li>
                                    <li> <NavLink to="/"> Delivery </NavLink> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <h2 className='text-dark  fs-5'> Follow us on Instagram </h2>
                        <div className="d-flex flex-column flex-lg-row">
                            <div>
                                <div className="d-flex flex-column flex-lg-row">
                                    <img src="https://i.ibb.co/pJv4spk/homec.jpg" alt="follow" className='foodFollowImageSize' />
                                    <img src="https://i.ibb.co/QKxPh1b/articles2.jpg" alt="follow" className='foodFollowImageSize' />
                                </div>
                                <div className="d-flex flex-column flex-lg-row">
                                    <img src="https://i.ibb.co/bgVKKbZ/articles3.jpg" alt="follow" className='foodFollowImageSize' />
                                    <img src="https://i.ibb.co/hy6b9gb/articles4.jpg" alt="follow" className='foodFollowImageSize' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </footer>
        </>
    );
};

export default Footer;