"use client";

import Link from "next/link";

export default function Instructions() {
  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-start bg-cover bg-center p-6"
      style={{ backgroundImage: "url('/scoreb.jpeg')" }}
    >
      {/* Heading */}
      <h1 className="text-5xl font-bold text-black mb-6 drop-shadow-lg">
        How to Play – Trouble?
      </h1>

      {/* Instructions Box */}
      <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg max-w-3xl text-white text-lg leading-relaxed">
        <p> You’ll see an answer at the top of the screen.</p>
        <p>📝 Choose the question (math expression) that results in that answer.</p>
        <p>🎯 You have 6 options, but only 2 are correct.</p>
        <p>✅ For every correct choice: <strong>+1 score</strong>.</p>
        <p>❌ For every wrong choice: <strong>-1 life</strong>.</p>
        <p>❤️ You start with <strong>5 lives</strong> and <strong>2 minutes</strong> to score as much as you can.</p>
        <p>⏳ The game ends when:</p>
        <ul className="list-disc ml-6">
          <li>Time runs out</li>
          <li>All lives are lost</li>
        </ul>
        <p>🏆 Try to beat your best score!</p>
      </div>

      {/* Home Button */}
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-300 transition"
      >
        Home
      </Link>
    </div>
  );
}
