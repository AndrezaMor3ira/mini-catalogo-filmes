import React from "react";

interface TagsProps {
  genero: string;
}

export default function Tag({ genero }: TagsProps) {
  const colorTheme: Record<string, string> = {
    "Ficção Científica": "bg-teal-600 text-white",
    Fantasia: "bg-fuchsia-600 text-white",
    Animação: "bg-amber-700 text-white",
  };

  const themeClass = colorTheme[genero] || "bg-gray-600 text-white";

  return (
    <span className={`px-2 py-1 rounded-md text-xs font-medium ${themeClass}`}>
      {genero}
    </span>
  );
}
