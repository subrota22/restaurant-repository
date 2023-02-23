
import React from 'react';
import menuLogo from "../../../../assets/menuImages/menuLogo.svg";
import menuLogo2 from "../../../../assets/menuImages/menuLogo2.svg";
import menuLogo3 from "../../../../assets/menuImages/menuLogo3.svg";
import menuLogo4 from "../../../../assets/menuImages/menuLogo4.svg";
import menuLogo5 from "../../../../assets/menuImages/menuLogo5.svg";
import menuLogo6 from "../../../../assets/menuImages/menuLogo6.svg";
import menuLogo7 from "../../../../assets/menuImages/menuLogo7.svg";
import menuLogo8 from "../../../../assets/menuImages/menuLogo8.svg";
const MenuSecondSection = () => {

    //all food price data 
    const allFoodPrice = [
        {
            id: 1,
            image: menuLogo,
        },
        {
            id: 2,
            image: menuLogo2,
        },
        {
            id: 3,
            price: 5.99,
           image: menuLogo3,
        },
        {
            id: 4,
            image: menuLogo4,
        },
        {
            id: 5,
            image: menuLogo5,
        },
        {
            id: 6,
            image: menuLogo6
        },
        {
            id: 7,
            image: menuLogo7
        },
        {
            id: 8,
            image: menuLogo8
        }

    ]
    return (
        <>
            <div className="container menuDivSpace" data-aos="zoom-in">
                <div className="row">
                    <div className="text-center">
                        <h2> Order via app </h2>
                        <p className='text-secondary fs-6 fw-bold'>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit <br />
                            ugue quam diam vitae velit bibendum elementum dolor.</p>
                    </div>
                    {/* dishes buttons  */}
                    <div className="d-flex flex-column flex-lg-row justify-content-center allDishesButton">
                        <button className="allMenu">All</button>
                        <button className="menuButton">Breakfast</button>
                        <button className="menuButton">Main Dishes</button>
                        <button className="menuButton">Drinks</button>
                        <button className="menuButton">Deserts</button>
                    </div>
                </div>
            </div>
            {/* app store images  */}
            <div className="container mt-5">
                <div className="row">

                    {
                        allFoodPrice?.map(food =>

                            <div className="col-12 col-md-6 col-lg-3" key={food?.id} data-aos="zoom-in">
                                <div className="appDivStyle">
                                    <img src={food?.image} alt="app store" className='appStore' />
                                </div>
                            </div>

                        )
                    }

                </div>
            </div>

        </>
    );
};

export default MenuSecondSection;