const logoUrl = `/portal.png`;

const Card = ({ character, isFlipped, isDisabled, onCardClick }) => {
  const handleClick = () => {
    if (!isFlipped) {
      onCardClick(character);
    }
  };

  return (
    <div
      className={`card ${isFlipped ? "flipped" : isDisabled ? "disabled" : ""}`}
      onClick={handleClick}
    >
      {isFlipped ? (
        <div className="card-front text-left">
          <img
            className="card-image"
            src={character.image}
            alt={character.name}
          />
          <b className="card-name d-block text-dark">{character.name}</b>
          <small className="card-description">
            <span>{character.species}</span> - <b>{character.status}</b>
          </small>
        </div>
      ) : (
        <div className="card-back">
          <img
            className="card-image_back"
            src={logoUrl}
            alt="Mind Activation Corp."
          />
        </div>
      )}

      <div className="card-box"></div>
    </div>
  );
};

export default Card;
