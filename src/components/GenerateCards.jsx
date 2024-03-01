import React from 'react';

import { CardStyle } from './Cards';
import { useState } from 'react';





export const test = () => {
    return (
        <div className='card'>
            {/* Conteúdo do card */}
        </div>
    );
}

export const ButtonCard = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Click me
    </button>
  );
}

export const GenerateCards = () => {
    const [cards, setCards] = useState([]);

    const handleClick = () => {
        setCards([...cards, test()]);
        console.log('aaaaaa');
    }

    return (
    <><ButtonCard onClick={handleClick} />
      
        <div className='OrganizeCards'>
            
            {cards}
            {/* Outros cards */}
        </div>
    </>
    )
}