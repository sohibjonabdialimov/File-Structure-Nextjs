import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="h-[70px] leading-[70px] bg-slate-700 text-white text-xl">
      <nav className="flex items-center justify-between container">
        <div className="h-[40px]">
          <Image
            className="h-[100%]"
            src="/next.svg"
            alt="Next.js Logo"
            width={120}
            height={100}
            priority
          />
        </div>
        <ul className="flex items-center justify-center gap-x-5">
          <li>
            <Link href={"/"} className="mb-5">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/user"}>User</Link>
          </li>
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
