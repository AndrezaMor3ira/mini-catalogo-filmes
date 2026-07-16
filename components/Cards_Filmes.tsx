"use client";

import React, { useState, useEffect } from "react";
import { navItems } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import Tag from "./Tags";

export default function Cards_Filmes() {
  const [busca, setBusca] = useState("");
  const [favoritos, setFavoritos] = useState<number[]>(() => {
    if (typeof window !== "undefined") {
      const favoritosSalvos = localStorage.getItem("meusFavoritos");
      if (favoritosSalvos) {
        return JSON.parse(favoritosSalvos);
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("meusFavoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorito = (id: number) => {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favId) => favId !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  };

  const filmesFiltrados = navItems.filter((filme) =>
    filme.titulo.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <div className="flex flex-col items-center w-full px-4 md:px-8 gap-8">
      <div className="w-full min-[400px]:max-w-[400px] min-[1070px]:max-w-[820px]  mx-auto relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Image
            src="/images/MagnifyingGlass.svg"
            alt="Buscar"
            width={20}
            height={20}
          />
        </div>
        <input
          type="text"
          placeholder="Nome do filme..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full  bg-[#ffffff] border border-gray-400 text-black rounded-[60px] py-3 pl-12 pr-4 focus:outline-none focus:border-black transition-colors"
        />
      </div>
      <div className="flex flex-row flex-wrap gap-6 w-full items-center justify-center min-[1420px]:max-w-[1200px] min-[1680px]:max-w-full mx-auto">
        {filmesFiltrados.map((item) => {
          const isFavorito = favoritos.includes(item.id);

          return (
            <div
              key={item.id}
              className="w-full h-full bg-[#ffffff] border border-[#e2e4e8] rounded-xl  flex flex-col gap-2 min-w-[200px] max-w-[400px]"
            >
              <div>
                <Image
                  src={item.imagem}
                  alt={`Capa do filme ${item.titulo}`}
                  width={400}
                  height={400}
                  className="w-full aspect-video object-cover rounded-t-2xl"
                />
                <h3 className="text-[#17181F] p-[16px] font-bold text-[20px] mt-3">
                  {item.titulo}
                </h3>

                <div className="text-[26px] p-[16px] text-[#747985] flex flex-row  justify-between items-center w-full mt-2 gap-2">
                  <Tag genero={item.genero} />
                  <Image
                    src={
                      isFavorito ? "/images/HeartLike.svg" : "/images/Heart.svg"
                    }
                    alt="Favoritar"
                    width={32}
                    height={32}
                    className="cursor-pointer hover:scale-110 transition-transform"
                    onClick={() => toggleFavorito(item.id)}
                  />
                </div>

                <div className="text-[14px] p-[16px] text-[#747985] flex flex-row  justify-between items-center w-full mt-4">
                  <p className="text-gray-400">{item.ano}</p>
                  <Link
                    href={`/filme/${item.id}`}
                    className="text-[12px] text-[#17191f] hover:underline transition-colors"
                  >
                    Saiba mais...
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {filmesFiltrados.length === 0 && (
        <div className="text-gray-400 mt-10">
          Nenhum filme encontrado com {busca}.
        </div>
      )}{" "}
    </div>
  );
}
