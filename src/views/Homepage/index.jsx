import React from 'react';
import Carousel from '../../components/Carousel';
import Search from '../../components/Search';
import CardsHome from '../../components/cardsHome'
import './homepage.css';

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