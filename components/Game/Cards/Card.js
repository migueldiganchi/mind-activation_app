const logoUrl = `/portal.png`;

const Card = ({ character, isFlipped, isDisabled, onCardClick }) => {
  const MAX_NAME_LENGTH = 15;

  const handleClick = () => {
    if (!isFlipped) {
      onCardClick(character);
    }
  };

  const truncate = (name, maxLength) => {
    return name.length <= maxLength
      ? name
      : name.substring(0, maxLength) + "...";
  };

  return (
    <div
      className={`card ${isFlipped ? "flipped" : isDisabled ? "disabled" : ""}`}
      onClick={handleClick}
    >
      {isFlipped ? (
        <div className="card-front">
          <img
            className="card-image"
            src={character.image}
            alt={character.name}
          />
          <b className="card-name d-block text-dark">
            {truncate(character.name, MAX_NAME_LENGTH)}
          </b>
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
