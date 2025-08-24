"use client";
import { useEffect, useState } from "react";
import { GridTiles } from "@/app/gridTiles";
import { GameRunner } from "@/app/gameRunner";

const WORD_LIMIT = 5;
const GUESS_LIMIT = 6;

export function WordGrid() {
  const [wordleWord, setWordleWord] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  function currentIndex(): number {
    return guesses.findIndex((val) => val == null);
  }

  useEffect(() => {
    const handleType = (event: KeyboardEvent) => {
      if (isGameOver) return;
      const currentGuessIndex = currentIndex();
      if (event.key === "Enter") {
        if (currentGuess.length < WORD_LIMIT) {
          return;
        }
        if (
          currentGuess === wordleWord ||
          currentGuessIndex == GUESS_LIMIT - 1
        ) {
          setIsGameOver(true);
        }
        let newGuesses = [...guesses];
        newGuesses[currentGuessIndex] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess("");
      }

      if (event.key === "Backspace") {
        setCurrentGuess((oldGuess) => oldGuess.slice(0, -1));
      }

      if (currentGuess.length >= WORD_LIMIT || currentIndex() == -1) {
        return;
      }

      if (event.key.match(/^[a-zA-z]{1}$/)) {
        setCurrentGuess((oldGuess) => oldGuess + event.key);
      }
    };

    window.addEventListener("keydown", handleType);
    return () => window.removeEventListener("keydown", handleType);
  }, [currentGuess, guesses, isGameOver, wordleWord]);


  useEffect(() => {
    const fetchWords = async () => {
      const response = await fetch("/api/words");
      const words = await response.json();
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setWordleWord(randomWord.toLowerCase());
    };
    fetchWords();
  }, []);

  const resetGame = () => {
    setGuesses(Array(GUESS_LIMIT).fill(null));
    setCurrentGuess("");
    setIsGameOver(false);
    setWordleWord("");
    const fetchWords = async () => {
      const response = await fetch("/api/words");
      const words = await response.json();
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setWordleWord(randomWord.toLowerCase());
    };
    fetchWords();
  };

  const didWin: boolean = guesses[currentIndex() - 1] === wordleWord;

  return (
    <div className="game-wrapper">
      <GridTiles
        guesses={guesses}
        currentGuess={currentGuess}
        wordle={wordleWord}
      />
      <GameRunner
        isGameOver={isGameOver}
        didWin={didWin}
        wordleWord={wordleWord}
        resetGame={resetGame}
      />
    </div>
  );
}
