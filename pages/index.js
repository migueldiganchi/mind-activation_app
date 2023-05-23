import Link from "next/link";
import Game from "../components/Games/Game";
import Page from "../components/Page";

const HomePage = () => {
  return (
    <Page>
      {/* Game Board Presentation */}
      <Game />

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
