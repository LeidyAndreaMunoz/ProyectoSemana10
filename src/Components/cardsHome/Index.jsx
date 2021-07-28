import {React, useState, useEffect} from 'react'
import './Cards.css';

const CardDetail = () => {
    const [cards, setCards] = useState(null)
    const [numbers, setNumbers] = useState(0)

    const fetchCars = () => {
        fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
            .then((response) => response.json())
            .then((data) => {
                console.log('dataaaa', data);
                const random = Math.floor(Math.random() * (data.data.length - 0)) + 0
                setNumbers(random - 6);

                setCards(data);
            });
    }

    useEffect(() => {
        fetchCars()
    }, []);

    return(
        <>
        {cards ? (
            <div className="cardsContainer">
                {
                    cards?.data.slice(numbers, numbers+6).map((item) => {
                        return (
                        <div class="popover__wrapper">
                            <a href="#">
                              <h2 class="popover__title"> <img src={item.card_images[0].image_url} alt="Cover card" /></h2>
                            </a>
                            <div class="popover__content">
                            <h4>{item.name} ({item.type})</h4> 
                               <h6>Ataque: {item.atk || '0'} <br /> Defensa: {item.def || '0'}</h6> 
                                 <h6>Arquetipo: {item.archetype || 'No presenta'} </h6> 
                                {/* <p>{item.desc}</p> */}
                            {/* <p class="popover__message">Joseph Francis "Joey" Tribbiani, Jr.</p> */}

                            </div>
                          </div>
                        )
                    })
                }
            </div>
        ) : <h1>Loading...</h1> }
        </>
    )
}

export default CardDetail