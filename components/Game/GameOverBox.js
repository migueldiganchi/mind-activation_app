import React from "react";

const GameOverBox = ({ turns, onReloadPageClick, onGoHomeClick }) => {
  return (
    <div className="game-actions">
      <div className="game-over">
        <div className="game-over_title">¡Felicitaciones!</div>

        <div className="game-over_info">
          Has completado el juego con <b>{turns} turnos</b>
        </div>

        <div className="game-over_actions">
          <button className="btn play-button" onClick={onReloadPageClick}>
            Repetir
          </button>

          <button className="btn home-button" onClick={onGoHomeClick}>
            Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOverBox;
