import { useState } from "react";
import Game from "../components/Games/Game";
import Page from "../components/Page";

const GamePage = () => {
  const [isGaming, setIsGaming] = useState(false);

  setTimeout(() => {
    setIsGaming(true);
  }, 99);

  return (
    <Page>
      {/* Game */}
      <Game isGaming={isGaming} />
    </Page>
  );
};

export default GamePage;
