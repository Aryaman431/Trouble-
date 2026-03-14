"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export default function Game() {
  const [timeLeft, setTimeLeft] = useState(120);
  const [lives, setLives] = useState(5);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const [targetAnswer, setTargetAnswer] = useState(0);
  const [options, setOptions] = useState<{ eq: string; isCorrect: boolean }[]>(
    []
  );
  const [correctsFound, setCorrectsFound] = useState(0);

  const makeCorrectEquation = (answer: number) => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = answer + a;
    const type = Math.floor(Math.random() * 3);

    if (type === 0) return `${answer} + 0`;
    if (type === 1) return `${answer} * 1`;
    return `${b} - ${a}`;
  };

  const makeWrongEquation = (answer: number) => {
    let eq = "";
    while (true) {
      const num1 = Math.floor(Math.random() * 20) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      const ops = ["+", "-", "*", "/"];
      const op = ops[Math.floor(Math.random() * ops.length)];
      const result = eval(`${num1} ${op} ${num2}`);
      if (result !== answer && Number.isInteger(result) && result > 0) {
        eq = `${num1} ${op} ${num2}`;
        break;
      }
    }
    return eq;
  };

  const generateRound = useCallback(() => {
    const newAnswer = Math.floor(Math.random() * 15) + 2;
    const corrects = [
      makeCorrectEquation(newAnswer),
      makeCorrectEquation(newAnswer),
    ];
    const wrongs = [
      makeWrongEquation(newAnswer),
      makeWrongEquation(newAnswer),
      makeWrongEquation(newAnswer),
      makeWrongEquation(newAnswer),
    ];

    const mix = [
      ...corrects.map((eq) => ({ eq, isCorrect: true })),
      ...wrongs.map((eq) => ({ eq, isCorrect: false })),
    ];
    const shuffled = mix.sort(() => Math.random() - 0.5);

    setTargetAnswer(newAnswer);
    setOptions(shuffled);
    setCorrectsFound(0);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0 || lives <= 0) {
      setGameOver(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, lives]);

  useEffect(() => {
    generateRound();
  }, [generateRound]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleClick = (option: { eq: string; isCorrect: boolean }) => {
    if (option.isCorrect) {
      setScore((prev) => prev + 1);
      const found = correctsFound + 1;
      setCorrectsFound(found);
      if (found === 2) {
        generateRound();
      }
    } else {
      setLives((prev) => prev - 1);
    }
  };

  const restartGame = () => {
    setTimeLeft(120);
    setLives(5);
    setScore(0);
    setGameOver(false);
    generateRound();
  };

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center p-6"
      style={{ backgroundImage: "url('/gameback.jpeg')" }}
    >
      {!gameOver ? (
        <>
          {/* HUD */}
          <div className="flex justify-between w-full text-white font-bold text-xl mb-6">
            <span>⏳ {formatTime(timeLeft)}</span>
            <span>❤️ {lives}</span>
            <span>🏆 {score}</span>
          </div>

          {/* Target Answer */}
          <h1 className="text-white text-6xl font-extrabold drop-shadow-lg mb-8">
            {targetAnswer}
          </h1>

          {/* Options */}
          <div className="grid grid-cols-3 gap-6">
            {options.map((option, index) => (
              <button
                key={index}
                className="w-40 h-20 text-black font-bold text-xl bg-cover bg-center border-2 border-black rounded-lg shadow-lg transform transition-transform hover:scale-105 active:scale-95"
                style={{
                  backgroundImage: "url('/gumballs.png')",
                }}
                onClick={() => handleClick(option)}
              >
                {option.eq}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-black/70 p-10 rounded-lg text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Game Over</h1>
          <p className="text-2xl mb-6">Final Score: {score}</p>
          <div className="flex flex-col gap-4 items-center w-48">
            {/* Restart Button */}
            <button
              onClick={restartGame}
              className="w-full px-6 py-3 bg-green-500 rounded-lg hover:bg-green-600 font-bold text-lg"
            >
              Restart
            </button>

            {/* Home Button */}
            <Link
              href="/"
              className="w-full px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 font-bold text-lg text-center"
            >
              Go Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
