import React, { FunctionComponent } from 'react';

interface ButtonProps {
  onClick: () => void;
}

const ResetButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <button onClick={props.onClick} className="button">
      {props.children}
    </button>
  );
};

export default ResetButton;
