import React from "react";

const GameStatus = ({
  isOneCardFlipped,
  isError,
  isCorrect,
  isMixing,
  isShowingCards,
  isGameOver,
  isGaming,
}) => {
  let message = null;

  if (isOneCardFlipped) {
    message = <p>La siguiente carta debe coincidir</p>;
  } else if (isError) {
    message = <p>¡Vuelve a intentarlo!</p>;
  } else if (isCorrect) {
    message = <p>¡Acertaste!</p>;
  } else if (isMixing) {
    message = <p>Mezclando. Prepárate</p>;
  } else if (isShowingCards) {
    message = <p>Las cartas desaparecerán en un momento...</p>;
  } else if (isGameOver) {
    message = <p>¿Deseas volver a intentarlo?</p>;
  } else if (isGaming) {
    message = <p>¿Recuerdas en donde está cada carta?</p>;
  }

  return <div className="game-status">{message}</div>;
};

export default GameStatus;
