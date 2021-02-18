import React, { FC } from 'react';

import Card from '../Card';

interface GameBoardProps {
  cards: { id: number; value: string; width: number; height: number }[];
  flipped: any;
  solved: any;
  disabled: boolean;
  handleClick: (id: number) => void;
}

const GameBoard: FC<GameBoardProps> = (props: GameBoardProps) => {
  return (
    <div className="board-section">
      {props.cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          value={card.value}
          width={100}
          height={100}
          flipped={props.flipped.includes(card.id)}
          solved={props.solved.includes(card.id)}
          handleClick={props.handleClick}
          disabled={props.disabled || props.solved.includes(card.id)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
