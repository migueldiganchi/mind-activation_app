import React from "react";

const GameInfo = ({ isGaming, turns, matchedCards }) => {
  return isGaming ? (
    <div className="game-info">
      <p className="game-info_turns">
        <b>Intentos:</b> {turns}
      </p>
      <p className="game-info_hits">
        <b>Aciertos:</b> {matchedCards.length}
      </p>
    </div>
  ) : (
    <div className="game-info">
      <p>
        <b>Personajes</b>
      </p>
    </div>
  );
};

export default GameInfo;
