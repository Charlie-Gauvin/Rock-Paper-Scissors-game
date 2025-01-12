import { useGame } from "../../context/GameContext";
import paperIcon from "../../assets/images/icon-paper.svg";
import scissorsIcon from "../../assets/images/icon-scissors.svg";
import rockIcon from "../../assets/images/icon-rock.svg";
import "./GameBoard.css";

export default function GameBoard() {
  // Définir les images pour chaque choix
  const images: { [key: string]: string } = {
    rock: rockIcon,
    paper: paperIcon,
    scissors: scissorsIcon,
  };

  const { restartGame, playerChoice, computerChoice, result } = useGame();

  return (
    <section className="max-w-4xl mx-auto mt-20 flex flex-col items-center justify-center space-y-6 text-text-primary">
      <div className="flex items-center justify-center space-x-10 md:gap-20">
        <div className="flex md:flex-col flex-col-reverse items-center">
          <h2 className="md:text-2xl text-lg font-semibold">YOU PICKED</h2>
          <span
            className={`p-6 md:p-12 lg:p-16 rounded-full border-[15px] border-${playerChoice} bg-text-primary md:mt-12 md:mb-0 mb-6`}
          >
            {playerChoice && (
              <img
                src={images[playerChoice]}
                alt={`${playerChoice}`}
                className="h-12 w-12 md:h-20 md:w-20"
              />
            )}
          </span>
        </div>
        <div className="flex md:flex-col flex-col-reverse items-center">
          <h2 className="md:text-2xl text-lg font-semibold">
            THE HOUSE PICKED
          </h2>
          <span
            className={`p-6 md:p-12 lg:p-16 rounded-full border-[15px] border-${computerChoice} bg-text-primary md:mt-12 md:mb-0 md:mb mb-6 animate-slide-in-right`}
          >
            {computerChoice && (
              <img
                src={images[computerChoice]}
                alt={`${computerChoice}`}
                className="h-12 w-12 md:h-20 md:w-20"
              />
            )}
          </span>
        </div>
      </div>
      <h3 className="text-5xl font-bold pt-14 md:pt-0 animate-slide-in-bottom">{result}</h3>
      <button
        onClick={() => restartGame()}
        className="bg-text-primary text-dark-text rounded-md px-10 py-3 hover:text-rock animate-slide-in-bottom"
      >
        PLAY AGAIN
      </button>
    </section>
  );
}
