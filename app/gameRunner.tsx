export function GameRunner({
  isGameOver,
  didWin,
  wordleWord,
  resetGame,
}: {
  isGameOver: boolean;
  didWin: boolean;
  wordleWord: string;
  resetGame: () => void;
}) {
  return (
    <div className="game-runner">
      <div className="game-info">
        <div style={{ fontSize: "20px", fontWeight: "600" }}>
          📝 Guess the 5-letter word in 6 tries!
        </div>
        <GameStatus
          isGameOver={isGameOver}
          didWin={didWin}
          wordleWord={wordleWord}
        />
      </div>
      <button
        className="reset"
        onClick={(e) => {
          resetGame();
          (e.target as HTMLButtonElement).blur();
        }}
      >
        Reset Game
      </button>
    </div>
  );

  function GameStatus({
    isGameOver,
    didWin,
    wordleWord,
  }: {
    isGameOver: boolean;
    didWin: boolean;
    wordleWord: string;
  }) {
    if (!isGameOver) {
      return (
        <div style={{ fontSize: "20px", color: "#888" }}>
          ⏳ Game in progress...
        </div>
      );
    }
    if (didWin) {
      return (
        <div style={{ fontSize: "22px", color: "green", fontWeight: 600 }}>
          🎉 You win! Great job! 🎉
        </div>
      );
    }
    return (
      <div style={{ fontSize: "22px", color: "crimson", fontWeight: 600 }}>
        😢 You lost! The word was <b>{wordleWord.toUpperCase()}</b>
      </div>
    );
  }
}
