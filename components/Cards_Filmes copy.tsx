"use client";

import React, { useState } from "react";
import { navItems } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import Tag from "./Tags";

export default function Cards_Filmes() {
  const [busca, setBusca] = useState("");
  const [favoritos, setFavoritos] = useState<number[]>([]);

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
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-2xl mb-12 relative">
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
          className="w-full bg-[#18181b] border border-gray-700 text-gray-300 rounded-md py-3 pl-12 pr-4 focus:outline-none focus:border-gray-500 transition-colors"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {filmesFiltrados.map((item) => {
          const isFavorito = favoritos.includes(item.id);

          return (
            <div
              key={item.id}
              className="bg-[#171521] rounded-xl p-[16px] flex flex-col gap-6"
            >
              <div>
                <Image
                  src={item.imagem}
                  alt={`Capa do filme ${item.titulo}`}
                  width={300}
                  height={160}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-white font-medium text-lg mt-3">
                  {item.titulo}
                </h3>

                <div className="flex flex-col sm:flex-row  justify-between items-center w-full mt-2 gap-2">
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

                <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-4">
                  <p className="text-gray-400">{item.ano}</p>
                  <Link
                    href={`/filme/${item.id}`}
                    className="text-white hover:underline transition-colors"
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
