import '../App.css';
import { createElement } from 'react';
import styled from 'styled-components';

var ChangerCard = ('./models/cards/cardsss.png')


export const CardStyle = styled.div`
        display: flex;
        width: 150px;
        height: 230px;
        border-radius: 10%;
        background: black;
        

`;
    
function Cards() {

    return createElement (
        'div',
    { className: 'card' },
    
    )

}
export default Cards;