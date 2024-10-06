"use client"
import React from "react"

// Lista de classes de delay que foram definidas no tailwind.config.js
// const delayClasses = [
//   'delay-100', 'delay-200', 'delay-300', 'delay-400',
//   'delay-500', 'delay-600', 'delay-700', 'delay-800',
//   'delay-900', 'delay-1000'
// ];

// Função para selecionar uma classe de delay aleatória
// const getRandomDelayClass = () => {
//   const randomIndex = Math.floor(Math.random() * delayClasses.length);
//   return delayClasses[randomIndex];
// };

const BlinkBlocks = () => {
  // Renderizando as células
  const cells = Array.from({ length: 9 }).map((_, index) => (
    <div
      key={index}
      className="animated-cell h-2 w-2 animate-blink bg-white"
      style={{ animationDelay: `${Math.floor(Math.random() * 5000)}ms` }}
    ></div>
  ))

  return (
    <div className="flex flex-row items-center justify-center px-4 pt-4">
      <div className="grid grid-cols-3 gap-1">{cells}</div>
    </div>
  )
}

export default BlinkBlocks
