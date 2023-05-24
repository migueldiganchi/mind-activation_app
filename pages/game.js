import { useState } from "react";
import GameBoard from "../components/Game/GameBoard";
import Page from "../components/Page";
import Link from "next/link";

const GamePage = () => {
  const [isGaming, setIsGaming] = useState(false);

  setTimeout(() => {
    setIsGaming(true);
  }, 99);

  return (
    <Page>
      {/* Game */}
      <GameBoard isGaming={isGaming} />
    </Page>
  );
};

export default GamePage;
