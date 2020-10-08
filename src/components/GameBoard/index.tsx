import React, { FunctionComponent } from 'react';

import Card from '../Card';

interface GameBoardProps {
  cards: { id: number; value: string; width: number; height: number }[];
  flipped: any;
  solved: any;
  disabled: boolean;
  handleClick: (id: number) => void;
}

const GameBoard: FunctionComponent<GameBoardProps> = ({
  cards,
  flipped,
  solved,
  disabled,
  handleClick
}) => {
  return (
    <div className="board-section">
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          value={card.value}
          width={100}
          height={100}
          flipped={flipped.includes(card.id)}
          solved={solved.includes(card.id)}
          handleClick={handleClick}
          disabled={disabled || solved.includes(card.id)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
