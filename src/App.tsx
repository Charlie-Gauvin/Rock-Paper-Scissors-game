import "./App.css";
import Header from "./components/Header";
import GameButton from "./components/GameButton";
import RulesModal from "./components/RulesModal";
import GameBoard from "./components/GameBoard/GameBoard";
import { GameProvider, useGame } from "./context/GameContext";

export default function App() {
  return (
    <GameProvider>
      <div className="min-h-screen bg-radial-game font-barlow pt-24">
        <Header />
        <MainContent />
        <RulesModal />
      </div>
    </GameProvider>
  );
}

const MainContent = () => {
  const { playerChoice } = useGame();

  return <div>{playerChoice ? <GameBoard /> : <GameButton />}</div>;
};
