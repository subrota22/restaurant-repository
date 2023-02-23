import React from 'react';

const MenuFirstSection = () => {

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
          <div className="container menuDivSpace" data-aos="zoom-in">
            <div className="row">
             <div className="text-center">
             <h2> Our menu</h2>
            <p className='text-secondary fs-6 fw-bold'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit <br />
             ugue quam diam vitae velit bibendum elementum dolor.</p>
             </div>
             {/* menu items */}
            <div className="d-flex flex-column flex-lg-row justify-content-center allMenuButton" data-aos="zoom-in">
            <button className="allMenu">All</button>
             <button className="menuButton">Breakfast</button>
             <button className="menuButton">Main Dishes</button>
             <button className="menuButton">Drinks</button>
             <button className="menuButton">Deserts</button>
            </div>
            </div>
          </div>
          {/* all food info  */}
            <div className="container mt-5">
                    <div className="row responsiveCard">

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
                </div>

        </>
    );
};

export default MenuFirstSection;