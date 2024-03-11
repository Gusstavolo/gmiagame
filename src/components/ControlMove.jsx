import styled from 'styled-components';
import { Player } from './Player';
import React, { useState } from 'react';


const CardStyle = styled.div`
        display: flex;
        position: absolute;
        width: 200px;
        height: 200px;
        top: 430px;
        background: black;
        
`;



export const ButtonCard = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Click me
    </button>
  );
}

export const DirectionMove = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });

  const UpMove = () => {
    setPlayerPosition(prevState => ({ ...prevState, y: prevState.y + 1 }));
    console.log('up', playerPosition);
  }

  const DawnMove = () => {
    setPlayerPosition(prevState => ({ ...prevState, y: prevState.y - 1 }));
    console.log('down', playerPosition);
  }

  const LeftMove = () => {
    setPlayerPosition(prevState => ({ ...prevState, x: prevState.x - 1 }));
    console.log('left', playerPosition);
  }

  const RightMove = () => {
    setPlayerPosition(prevState => ({ ...prevState, x: prevState.x + 1 }));
    console.log('right', playerPosition);
  }

  return (
    <CardStyle>
      <ButtonCard onClick={UpMove} />
      <ButtonCard onClick={DawnMove} />
      <ButtonCard onClick={LeftMove} />
      <ButtonCard onClick={RightMove} />
    </CardStyle>
  );
}