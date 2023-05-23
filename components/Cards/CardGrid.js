import Card from "./Card";

const CardGrid = ({
  cards,
  isGaming,
  isCorrect,
  isError,
  isFlippedCard,
  isMatchedCard,
  onCardClick,
  isShowingCards,
}) => {
  return (
    <div className="game-board row">
      {cards.map((card, cardIndex) => (
        <div key={cardIndex} className="col col-3 game-board_item">
          <Card
            key={cardIndex}
            character={card}
            isDisabled={isCorrect || isError}
            isFlipped={
              !isGaming ||
              isShowingCards ||
              isFlippedCard(card.uniqueKey) ||
              isMatchedCard(card.id)
            }
            onCardClick={onCardClick}
          />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
