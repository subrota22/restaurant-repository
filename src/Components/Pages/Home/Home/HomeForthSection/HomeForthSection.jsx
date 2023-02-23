import React from 'react';

const HomeForthSection = () => {
    //all food price data 
    const allFoodPrice = [
        {
            id: 1,
            price: 10.99,
            foodName: "Classic Burger",
            foodDescription: "This is a nice Classic Burger you can test it to check we are true or not !!",
            image: "https://i.ibb.co/QYrkcRn/right-Side-Image.jpg"
        },
        {
            id: 2,
            price: 6.99,
            foodName: "Choclate Milkshake",
            foodDescription: "This is a nice Choclate Milkshake you can test it to check we are true or not !!",
            image: "https://i.ibb.co/pwfMHMM/coklet-Milk-Image.jpg"
        },
        {
            id: 3,
            price: 5.99,
            foodName: "Classic Fries",
            foodDescription: "This is a nice Classic Fries you can test it to check we are true or not !!",
            image: "https://i.ibb.co/rv5h0Dg/homeb.jpg"
        },
        {
            id: 4,
            price: 8.99,
            foodName: "Pancakes",
            foodDescription: "This is a nice Pancakes you can test it to check we are true or not !!",
            image: "https://i.ibb.co/jZnR2RQ/pancakes.jpg"
        },
        {
            id: 5,
            price: 3.99,
            foodName: "Ice Cream",
            foodDescription: "This is a nice Ice Cream you can test it to check we are true or not !!",
            image: "https://i.ibb.co/hdBnXjf/iceCream.jpg"
        },
        {
            id: 6,
            price: 9.99,
            foodName: "Chicken Burger",
            foodDescription: "This is a nice Chicken Burger you can test it to check we are true or not !!",
            image: "https://i.ibb.co/xGQrRN6/chiken-Burgur.jpg"
        },
        {
            id: 7,
            price: 6.99,
            foodName: "Egg toast",
            foodDescription: "This is a nice Egg toas you can test it to check we are true or not !!",
            image: "https://i.ibb.co/5Ty0nSL/egg-toas.jpg"
        },
        {
            id: 8,
            price: 1.99,
            foodName: "Regular Soda",
            foodDescription: "This is a nice drink you can test it to check we are true or not !!",
            image: "https://i.ibb.co/3rKcMw3/regular-soda.jpg"
        }

    ]

    return (
        <>
            <div className="secondBrowsForHome topSpaceOfHomeSecondDiv mb-5"  data-aos="zoom-in-left">
                <div className="textSpace">
                    <h2 className='text-center fs-3 fw-bold my-3'> Browse our menu </h2>
                    <p className='p-4 my-5 text-dark fs-6 fw-bold w-auto mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> ugue quam diam vitae velit bibendum elementum.</p>
                </div>
                <div className="container">
                    <div className="row responsiveCard">
                    {/* col-12 col-md-6 col-lg-3 */}
                        {
                            allFoodPrice?.map(food =>
                                <div className="priceDiv" key={food?.id}  data-aos="zoom-in">
                                    <div className="d-flex flex-column">
                                        <img src={food?.image} alt="food" className='foodImage' />
                                        <button className='internalPrice fs-6 fw-bold'>$ {food?.price} USD</button>
                                    </div>
                                    <p className='fs-4 fw-bold my-3 text-center'>{food?.foodName}</p>
                                    <p className='fs-6 fw-bold my-2 text-center'>{food?.foodDescription}</p>
                                </div>
                            )
                        }
                    
                    </div>
                    <div className="d-flex flex-column my-3 flex-lg-row justify-content-center mx-auto buttonGroup" data-aos="fade-down">
                            <button className="onlineOrder my-4"> Back a table </button>
                            <button className="reservateButton my-4"> Order online </button>
                        </div>
                </div>
            </div>

            <div className="topSpaceOfHomeSecondDiv pizzaDivStyle">
                <div className="d-flex flex-column my-3 flex-lg-row justify-content-center w-100">
                    <div className='rightDivFlex' data-aos="zoom-in-right"
                        data-aos-easing="linear">
                        <div className="auto">
                            <h2 className='fs-2 fw-bold text-start  text-white' style={{ marginLeft: "150px" }}>Taste the most <br />
                                delicious burger in <br /> Los Angeles, CA</h2>
                            <p className='my-3 px-2  text-start text-white fw-bold text-secondary' style={{ marginLeft: "130px" }}>
                                Lorem ipsum dolor sit amet consectetur <br />
                                adipiscing elit ugue quam diam  vitae velit <br />
                                bibendum elementum. Order online</p>

                        </div>
                        <div className="d-flex flex-column my-5 flex-lg-row justify-content-center buttonGroup">
                            <button className="onlineOrder my-3" style={{ border: "none" }}> Order online </button>
                            <button className="reservateButton reservateButtonStyle my-3" style={{ border: "2px solid white" }} > Reservate </button>
                        </div>
                    </div>
                    <div className='leftDivFlex' data-aos="zoom-in-left"
                        data-aos-easing="linear">
                        <img src="https://i.ibb.co/6Hh5hZF/hill-Of-Pizza.jpg" alt="pizza" className='pizzaImage' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeForthSection;



