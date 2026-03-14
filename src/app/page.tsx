import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center h-screen p-8 gap-8">
      {/* Logo */}
      <Image
        src="/maths.png"
        alt="Math logo"
        width={160}
        height={180}
        priority
      />

      {/* Title */}
      <h1 className="text-6xl font-extrabold text-[#ffffff] drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] tracking-wide">
        Trouble?
      </h1>

      {/* Tagline */}
      <p className="text-lg font-bold text-black dark:text-white text-center">
        A fun math game where the answers are found in questions
      </p>

      {/* Buttons */}
      <div className="flex gap-8 mt-4">
        <Link
          href="/game"
          className="bg-white text-black px-6 py-3 rounded-full border border-white transition-colors flex items-center gap-2 hover:bg-gray-200 font-medium text-lg"
        >
          <Image
            className="dark:invert"
            src="/arrow.png"
            alt="arrow logomark"
            width={20}
            height={20}
          />
          Let&apos;s go
        </Link>

        <Link
          href="/scores"
          className="bg-white text-black px-6 py-3 rounded-full border border-white transition-colors flex items-center gap-2 hover:bg-gray-200 font-medium text-lg"
        >
          How to play??
        </Link>
      </div>
    </div>
  );
}
