import styled from 'styled-components';


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

    const UpMove = () => {
        
    }
    const DawnMove = () => {

    }
    const LeftMove = () => {

    }
    const RightMove = () => {

    }


    return (
            <CardStyle >

             <ButtonCard onClick={UpMove} />
             <ButtonCard onClick={DawnMove} />
             <ButtonCard onClick={LeftMove} />
             <ButtonCard onClick={RightMove} />
             
             </CardStyle>
            
            )


}