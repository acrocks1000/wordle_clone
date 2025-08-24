const WORD_LENGTH = 5;

export function GridTiles({
  guesses,
  currentGuess,
  wordle,
}: {
  guesses: (string | null)[];
  currentGuess: string;
  wordle: string;
}) {
  function currentIndex() {
    return guesses.findIndex((val) => val == null);
  }

  return (
    <div className="grid">
      {guesses.map((guess, idx) => {
        const isCurrentGuess = idx == currentIndex();
        return (
          <Tile
            key={idx}
            guess={isCurrentGuess ? currentGuess : guess ?? ""}
            isFinal={!isCurrentGuess && guess !== null}
            wordle={wordle}
          />
        );
      })}
    </div>
  );
}

function Tile({
  guess,
  isFinal,
  wordle,
}: {
  guess: string;
  isFinal: boolean;
  wordle: string;
}) {
  const tiles = [];
  for (let i = 0; i < WORD_LENGTH; i++) {
    const char = guess[i];
    let cssName = "tile";
    if (isFinal) {
      if (char === wordle[i]) {
        cssName += " correct";
      } else if (wordle.includes(char)) {
        cssName += " close";
      } else {
        cssName += " incorrect";
      }
    }
    tiles.push(
      <div className={cssName} key={i}>
        {char}
      </div>
    );
  }
  return <div className="line">{tiles}</div>;
}
