import React from 'react';
import Carousel from '../../components/Carousel';
import Search from '../../components/Search';
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