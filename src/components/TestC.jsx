import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export const Card = ({ id }) => {
    return (
        <div className='card' id={id}>
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

export const GenCard = () => {
    const [cards, setCards] = useState([]);

    const handleClick = () => {
        setCards(prevCards => [...prevCards, { id: `card-${prevCards.length}` }]);
        console.log('aaaaaa');
    }

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(cards);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setCards(items);
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <ButtonCard onClick={handleClick} />
            <Droppable droppableId="cards">
                {(provided) => (
                    <div className='OrganizeCards' {...provided.droppableProps} ref={provided.innerRef}>
                        {cards.map(({id}, index) => (
                            <Draggable key={id} draggableId={id} index={index}>
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <Card id={id} />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}
