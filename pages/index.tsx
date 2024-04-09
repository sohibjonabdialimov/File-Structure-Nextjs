import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <div>
        <h1 className="mb-5 text-xl">Home Page</h1>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={200}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
