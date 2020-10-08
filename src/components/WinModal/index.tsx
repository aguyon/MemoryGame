import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';

import bravo from '../../assets/bravo.gif';

interface WinModalProps {
  click: number;
  time: number;
  setModal: Dispatch<SetStateAction<boolean>>;
}

const WinModal: FunctionComponent<WinModalProps> = ({
  click,
  time,
  setModal
}) => {
  const finalTime = `${
    time / 60 < 10 ? `0${(time / 60).toFixed(0)}` : (time / 60).toFixed(0)
  }:${time % 60 < 10 ? `0${(time % 60).toFixed(0)}` : (time % 60).toFixed(0)}`;

  return (
    <div id="overlay" className="modal-overlay" onClick={() => setModal(false)}>
      <div className="modal-content">
        <h4>You did it!</h4>
        <img src={bravo} alt="bravo" />
        <p>
          {click / 2} clicks - {finalTime}
        </p>
      </div>
    </div>
  );
};

export default WinModal;
