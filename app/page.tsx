"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-4 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-pink-300 rounded-b-[50%] -z-10" />

      {/* Imagen de logo */}
      <div className="mt-4 mb-6">
        <Image
          src="/vet_logo.png"
          alt="Vet Sentrum Logo"
          width={480}
          height={180}
          className="rounded-xl"
        />
      </div>

      {/* Mensaje principal */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">En construcción...</h1>

      {/* Frase */}
      <p className="text-xl font-medium text-gray-700 text-center">
        Nuestro compromiso... <span className="text-pink-500 font-bold">salvar vidas</span>
      </p>

      {/* Huellitas decorativas */}
      <div className="mt-6 flex gap-2 flex-wrap justify-center">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="text-2xl">🐾</span>
        ))}
      </div>
    </main>
  );
}