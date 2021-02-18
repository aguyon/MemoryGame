import React, { FC } from 'react';

interface ButtonProps {
  onClick: () => void;
}

const ResetButton: FC<ButtonProps> = (props) => {
  return (
    <button onClick={props.onClick} className="button">
      {props.children}
    </button>
  );
};

export default ResetButton;
