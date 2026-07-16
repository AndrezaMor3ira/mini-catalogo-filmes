import React from "react";
import Cards_Filmes from "@/components/Cards_Filmes";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full mb-8 gap-4">
      <div className="flex flex-col justify-center items-center w-full mb-8 gap-2">
        <div className="flex flex-row items-center gap-4">
          <div className="min-[490px]:text-2xl min-[985px]:text-4xl font-bold">
            Mini Catálogo de Filmes
          </div>
        </div>
        <h4 className="text-[16px] text-[#17191F]">
          Busque, favorite e saiba mais
        </h4>
      </div>
      <Cards_Filmes />
    </div>
  );
}
