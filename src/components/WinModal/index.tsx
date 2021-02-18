import React, { FC, Dispatch, SetStateAction } from 'react';

import bravo from '../../assets/bravo.gif';

interface WinModalProps {
  click: number;
  time: number;
  setModal: Dispatch<SetStateAction<boolean>>;
}

const WinModal: FC<WinModalProps> = (props: WinModalProps) => {
  const finalTime = `${props.time / 60 < 10 ? `0${(props.time / 60).toFixed(0)}` : (props.time / 60).toFixed(0)}:${
    props.time % 60 < 10 ? `0${(props.time % 60).toFixed(0)}` : (props.time % 60).toFixed(0)
  }`;

  return (
    <div id="overlay" className="modal-overlay" onClick={() => props.setModal(false)}>
      <div className="modal-content">
        <h4>You did it!</h4>
        <img src={bravo} alt="well done game is over" />
        <p>
          {props.click / 2} clicks - {finalTime}
        </p>
      </div>
    </div>
  );
};

export default WinModal;
