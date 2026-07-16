import React from "react";
import Image from "next/image";
import Cards_Filmes from "@/components/Cards_Filmes";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full mb-8 gap-6">
      <div className="flex flex-row items-center gap-4">
        <Image
          src={"/images/FilmSlate.svg"}
          alt="logo"
          width={64}
          height={64}
          className="min-[200px]:max-w-[24px] min-[500px]:max-w-[64px]"
        />

        <div className="min-[490px]:text-2xl min-[985px]:text-4xl font-bold">
          Mini Catálogo de Filmes
        </div>
      </div>

      <Cards_Filmes />
    </div>
  );
}
