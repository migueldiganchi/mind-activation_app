import Link from "next/link";
import GameBoard from "../components/Game/GameBoard";
import Page from "../components/Page";

const HomePage = () => {
  return (
    <Page>
      {/* Game Board Presentation */}
      <GameBoard />

      {/* Start Game Button */}
      <div className="play-button_box text-center">
        <Link href="game" className="play-button btn cursor-pointer">
          Jugar
        </Link>
      </div>
    </Page>
  );
};

export default HomePage;
