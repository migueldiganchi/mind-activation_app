import { useEffect, useState } from "react";
import { getCharacters } from "../../api/io";

import GameStatus from "./GameStatus";
import GameInfo from "./GameInfo";
import GameOverBox from "./GameOverBox";
import GameLoader from "./GameLoader";

import CardGrid from "./Cards/CardGrid";

const GameBoard = ({ isGaming }) => {
  const CHARACTERS_COUNTER = 6;

  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [isShowingCards, setIsShowingCards] = useState(false);
  const [isMixing, setIsMixing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const loadBoard = (characters) => {
    let gameCharacters = characters.slice(0, CHARACTERS_COUNTER);
    let gameCards = [];

    gameCharacters.map((character) => {
      gameCards = gameCards.concat([
        { ...character, uniqueKey: character.id },
        { ...character, uniqueKey: character.id + "_clone" },
      ]);
    });

    setCards(gameCards);
  };

  const mixCards = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const isFlippedCard = (cardUniqueKey) => {
    const cardIndex = flippedCards.findIndex(
      (fCard) => fCard.uniqueKey === cardUniqueKey
    );
    return cardIndex > -1;
  };

  const isMatchedCard = (cardId) => {
    const cardIndex = matchedCards.findIndex((mCard) => mCard.id === cardId);
    return cardIndex > -1;
  };

  const showBoardColor = (isCorrect) => {
    setIsCorrect(isCorrect);
    setIsError(!isCorrect);
    setTimeout(() => {
      setIsCorrect(false);
      setIsError(false);
    }, 999);
  };

  const flipCard = (character) => {
    if (flippedCards.length === 0) {
      // Flip first card
      setFlippedCards([{ ...character }]);
    } else if (flippedCards.length === 1) {
      // Flip second card
      setFlippedCards((prevFlippedCards) => [...prevFlippedCards, character]);

      // Check if second card has matched with first one
      if (flippedCards[0].id === character.id) {
        // Add card to correct character matched
        setMatchedCards((prevMatchedCards) => [...prevMatchedCards, character]);

        // Show success color in board
        showBoardColor(true);

        // Check if game has hover
        if (matchedCards.length + 1 === CHARACTERS_COUNTER) {
          setTimeout(() => {
            setIsGameOver(true);
          }, 999);
        }
      } else {
        // Show fail color in board
        showBoardColor(false);
      }

      // Count new turn
      setTurns((prevTurns) => prevTurns + 1);

      // Wait one second before restart flipped cards
      setTimeout(() => {
        setFlippedCards([]);
      }, 999);
    }
  };

  const startGame = () => {
    // Mix cards
    const mixedCards = mixCards(cards.slice());

    // Set waiting times
    const mixingCardsTime = 3000;
    const showingCardsTime = 3000;

    // Mixing effect on
    setIsMixing(true);
    setTimeout(() => {
      // Mixing effect off
      setIsMixing(false);

      // set mixed cards
      setCards(mixedCards);

      // Showing cards on
      setIsShowingCards(true);
      setTimeout(() => {
        // Showing cards off
        setIsShowingCards(false);
      }, showingCardsTime);
    }, mixingCardsTime);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const goHome = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    // API Connection
    const fetchData = async () => {
      // Loading On
      setIsLoading(true);

      // Get characters
      const charactersData = await getCharacters();

      // Loading Off
      setIsLoading(false);

      // Load cards in the board with character information
      loadBoard(charactersData);
    };

    // Reading information from server
    fetchData();

    // Check for game status
    if (isGaming) {
      startGame();
    }
  }, [isGaming]);

  return isLoading ? (
    <div className="initial-loading disabled text-light">
      Cargando el juego, por favor espera un momento...
    </div>
  ) : (
    <div className={"game " + (isError ? "error" : isCorrect ? "success" : "")}>
      {/* Game status */}
      {isGaming ? (
        <GameStatus
          isOneCardFlipped={flippedCards.length == 1}
          isError={isError}
          isCorrect={isCorrect}
          isMixing={isMixing}
          isShowingCards={isShowingCards}
          isGameOver={isGameOver}
          isGaming={isGaming}
        />
      ) : null}

      {/* Game information */}
      {!isGameOver && !isMixing && !isShowingCards ? (
        <GameInfo
          isGaming={isGaming}
          turns={turns}
          matchedCards={matchedCards}
        />
      ) : null}

      {/* Mixing cards */}
      {isMixing ? <GameLoader /> : null}

      {/* Cards board */}
      {!isMixing && !isGameOver ? (
        <CardGrid
          cards={cards}
          isGaming={isGaming}
          isCorrect={isCorrect}
          isError={isError}
          isFlippedCard={isFlippedCard}
          isMatchedCard={isMatchedCard}
          isShowingCards={isShowingCards}
          onCardClick={flipCard}
        />
      ) : null}

      {/* Game Over information */}
      {isGameOver ? (
        <GameOverBox
          turns={turns}
          onReloadPageClick={reloadPage}
          onGoHomeClick={goHome}
        />
      ) : null}
    </div>
  );
};

export default GameBoard;
