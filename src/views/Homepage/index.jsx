import React from 'react';
import './homepage.css';
import Carousel from '../../Components/Carousel';
import Search from '../../Components/Search';
import CardsHome from '../../Components/cardsHome';

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