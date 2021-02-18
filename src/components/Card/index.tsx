import React, { FC } from 'react';

interface CardsProps {
  id: number;
  value: string;
  width: number;
  height: number;
  flipped: boolean;
  solved: boolean;
  disabled: boolean;
  handleClick: (id: number) => void;
}

const Card: FC<CardsProps> = (props) => {
  return (
    <div
      className="card"
      style={{ width: props.width, height: props.height, opacity: props.solved ? 0.7 : undefined }}
      onClick={() => (props.disabled ? null : props.handleClick(props.id))}
    >
      <img
        style={{ width: props.width, height: props.height, opacity: props.flipped || props.solved ? 1 : 0 }}
        src={props.flipped || props.solved ? require(`../../assets/${props.value}.png`).default : null}
        alt="card"
      />
      {props.children}
    </div>
  );
};

export default Card;
