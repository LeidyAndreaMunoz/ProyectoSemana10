import React from 'react';
import Carousel from '../../Components/Carousel';
import Search from '../../Components/Search';
import CardsHome from '../../Components/CardsHome';

function Homepage() {
    return (
        <div>
            <Carousel />
            <Search />
            <CardsHome />
        </div>
    )
};

export default Homepage;