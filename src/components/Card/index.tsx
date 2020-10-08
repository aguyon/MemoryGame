import React, { FunctionComponent } from 'react';

interface CardsProps {
  id: number;
  value: string;
  width: number;
  height: number;
  flipped: () => void;
  solved: boolean;
  disabled: boolean;
  handleClick: (id: number) => void;
}

const Card: FunctionComponent<CardsProps> = ({
  id,
  value,
  width,
  height,
  flipped,
  solved,
  disabled,
  handleClick,
  children
}) => {
  return (
    <div
      className="card"
      style={{ width, height }}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <img
        style={{ width, height, opacity: flipped || solved ? 1 : 0 }}
        src={flipped || solved ? require(`../../assets/${value}.png`) : null}
        alt=""
      />
      {children}
    </div>
  );
};

export default Card;
