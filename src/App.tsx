import React, { FunctionComponent, useState, useEffect } from 'react';

import initializeDeck from './assets';

import GameBoard from './components/GameBoard';
import ResetButton from './components/ResetButton';
import WinModal from './components/WinModal';

const App: FunctionComponent = () => {
  const [clicks, setClicks] = useState(0);
  const [time, setTime] = useState(0);
  const [activeChrono, setActiveChrono] = useState(false);

  const [cards, setCards] = useState([] as any);
  const [flipped, setFlipped] = useState([] as any);
  const [solved, setSolved] = useState([] as any);
  const [disabled, setDisabled] = useState(false);

  const [winModal, setWinModal] = useState(false);

  // Initialisation des cartes du jeu
  useEffect(() => {
    setCards(initializeDeck());
  }, []);

  // Lancement du chronomètre quand une carte est cliquée
  useEffect(() => {
    if (clicks >= 1) setActiveChrono(true);
  }, [clicks]);

  useEffect(() => {
    if (!activeChrono) return;
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [activeChrono, time]);

  // Fin du jeu quand toutes les cartes sont retournés
  useEffect(() => {
    if (cards && solved.length === 16) {
      setActiveChrono(false);
      setWinModal(true);
    }
  }, [cards, solved]);

  const handleClick = (id: number): void => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return;
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        resetCards();
      } else {
        setTimeout(resetCards, 1000);
      }
    }
    setClicks(clicks + 1);
  };

  const sameCardClicked = (id: number): boolean => flipped.includes(id);

  const isMatch = (id: number): boolean => {
    const clickedCard = cards.find((card: { id: number }) => card.id === id);
    const flippedCard = cards.find((card: { id: number }) => flipped[0] === card.id);
    return clickedCard.value === flippedCard.value;
  };

  const resetCards = (): void => {
    setFlipped([]);
    setDisabled(false);
  };

  const resetGame = (): void => {
    setTime(0);
    setClicks(0);
    setActiveChrono(false);
    setFlipped([]);
    setSolved([]);
  };

  return (
    <main className="main">
      <div className="board">
        <header className="board-header">
          <div style={{ alignItems: 'flex-start' }}>
            <h3 className="board-title">Time</h3>
            <p className="board-stats">
              {time / 60 < 10 ? `0${(time / 60).toFixed(0)}` : (time / 60).toFixed(0)}:
              {time % 60 < 10 ? `0${(time % 60).toFixed(0)}` : (time % 60).toFixed(0)}
            </p>
          </div>
          <div style={{ alignItems: 'flex-start' }}>
            <h3 className="board-title align-right">Clicks</h3>
            <p className="board-stats" style={{ marginLeft: '39px' }}>
              {(clicks / 2).toFixed(0)}
            </p>
          </div>
        </header>

        <GameBoard cards={cards} flipped={flipped} disabled={disabled} solved={solved} handleClick={handleClick} />

        <footer className="board-footer">
          <ResetButton onClick={resetGame}>Reset</ResetButton>
        </footer>
      </div>
      {winModal && <WinModal click={clicks} time={time} setModal={setWinModal} />}
    </main>
  );
};

export default App;
