"use client"

import { useState, useEffect } from "react"

const faces = [
  "•ᴗ•",
  "•∩•",
  "•o•",
  "•-•",
  "•~•",
  "×ᴗ×",
  "•ᴥ•",
  "•¬•",
  "♡ᴗ♡",
  "•ε•",
  "•ᴗ-",
  "•⌔•",
  "•∆•",
  "•⋄•",
  "•∿•",
  "•▢•",
  "✘ᴗ✘",
  "•⚇•",
  "•☭•",
]

const alphabet = "abcdefghijklmnopqrstuvwxyz"

const MiniBot = () => {
  const [face, setFace] = useState("a")

  const generateFace = () => {
    const index = Math.floor(Math.random() * faces.length)
    return alphabet[index]
  }

  useEffect(() => {
    const time = setInterval(() => {
      setFace(generateFace())
    }, 2000)

    return () => clearInterval(time)
  }, [])

  return (
    <span className="font-emoticon" data-text={face}>
      <span>{face}</span>
    </span>
  )
}

export default MiniBot
