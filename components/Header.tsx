import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="container p-8 flex flex-row items-center gap-2 text-2xl font-medium text-[#111318]">
        <Image
          src={"/images/FilmSlate.svg"}
          alt="logo"
          width={32}
          height={32}
          className="min-[200px]:max-w-[24px] min-[500px]:max-w-[64px]"
        />
        CINEMA
      </div>
    </header>
  );
}
