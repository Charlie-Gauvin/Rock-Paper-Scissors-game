import { useContext, createContext, useState } from "react";

type GameState = {
    playerChoice: string;
    computerChoice: string;
    result: string;
    score: number;
    startGame: (playerChoice: string) => void;
    restartGame: () => void;
};

const GameContext = createContext<GameState | undefined>(undefined);

// Logique du jeu
const winner = (player: string, computer: string) => {
    if (player === computer) return "DRAW";
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "YOU WIN";
    }
    return "YOU LOSE";
};

//Provider
type GameProviderProps = {
    children: React.ReactNode;
};

export const GameProvider = ({ children }: GameProviderProps) => {
    const [player, setPlayer] = useState("");
    const [computer, setComputer] = useState("");
    const [result, setResult] = useState("");
    const [score, setScore] = useState(0);

    const choices = ["rock", "paper", "scissors"];

    // Fonction pour démarrer le jeu
    const startGame = (playerChoice: string) => {
        const randomComputerChoice = choices[Math.floor(Math.random() * choices.length)];
        setPlayer(playerChoice);
        setComputer(randomComputerChoice);

        const gameResult = winner(playerChoice, randomComputerChoice);
        setResult(gameResult);

        if (gameResult === "YOU WIN") setScore((prev) => prev + 1);
        if (gameResult === "YOU LOSE") setScore((prev) => prev - 0);
    };

    //Restart game
    const restartGame = () => {
        setPlayer("");
        setComputer("");
        setResult("");
    };

    return (
        <GameContext.Provider value={{ playerChoice: player, computerChoice: computer, result, score, startGame, restartGame }}>
            {children}
        </GameContext.Provider>
    );
};


// Custom hook
// eslint-disable-next-line react-refresh/only-export-components
export const useGame = (): GameState => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error("useGame must be used within a GameProvider");
    }
    return context;
};
