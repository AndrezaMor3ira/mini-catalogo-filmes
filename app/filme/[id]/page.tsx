import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/data";
import Tag from "@/components/Tags";

export default async function FilmeDetalhes({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const filme = navItems.find((item) => String(item.id) === String(id));

  if (!filme) {
    return (
      <div className="flex flex-col items-center mt-20 text-white">
        <h1 className="text-2xl font-bold mb-4">Filme não encontrado!</h1>
        <Link
          href="/"
          className="bg-[#ffffff] border border-[#e2e4e8] px-4 py-2 rounded-md font-bold"
        >
          Voltar para Home
        </Link>
      </div>
    );
  }

  return (
    <main className="text-black">
      <div className="mb-8">
        <Link
          href="/"
          className="text-gray-800 hover:text-black hover:underline"
        >
          &larr; Voltar
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-8 bg-[#ffffff] border border-[#e2e4e8]  p-8 rounded-xl">
        <div className="w-full md:w-1/3">
          <Image
            src={filme.imagem}
            alt={`Capa do filme ${filme.titulo}`}
            width={400}
            height={600}
            className="w-full object-cover rounded-md"
          />
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{filme.titulo}</h1>
          <div className="flex gap-4 text-gray-600">
            <span>Ano: {filme.ano}</span> <span>•</span>
            <span>
              Gênero: <Tag genero={filme.genero} />
            </span>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold mb-2">Sinopse</h2>
            <p className="text-gray-600 leading-relaxed">{filme.sinopse}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
