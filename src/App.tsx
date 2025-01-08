import "./App.css";
import Header from "./components/Header";
import GameButton from "./components/GameButton";
import RulesModal from "./components/RulesModal";

function App() {
  return (
    <div className="min-h-screen bg-radial-game font-barlow pt-24">
      <Header  />
      <GameButton />
      <RulesModal />
    </div>
  );
}

export default App;
