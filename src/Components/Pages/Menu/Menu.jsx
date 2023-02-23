import React from 'react';
import { Helmet } from 'react-helmet';
import MenuFirstSection from './MenueFirstSection/MenuFirstSection';
import "./Menu.css" ;
import MenuSecondSection from './MenuSecondSection/MenuSecondSection';
const Menu = () => {
    return (
        <>
        
            <Helmet> <title>Menu</title></Helmet>
            <MenuFirstSection></MenuFirstSection>
            <MenuSecondSection></MenuSecondSection>

        </>
    );
};

export default Menu;