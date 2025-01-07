import "./App.css";
import Header from "./components/Header";
import GameButton from "./components/GameButton";

function App() {
  return (
    <div className="min-h-screen bg-radial-game font-barlow pt-24">
      <Header  />
      <GameButton />
    </div>
  );
}

export default App;
