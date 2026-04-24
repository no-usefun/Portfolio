import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function getRandomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function ScrambleText({ text }: { text: string }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let frame = 0;
    const totalFrames = 20; // controls speed

    const interval = setInterval(() => {
      const progress = frame / totalFrames;

      const newText = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";

          if (i < progress * text.length) {
            return text[i]; // reveal actual char
          }
          return getRandomChar(); // scramble
        })
        .join("");

      setDisplay(newText);
      frame++;

      if (frame > totalFrames) {
        clearInterval(interval);
        setDisplay(text); // final lock
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.h1
      className="text-5xl font-bold text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {display}
    </motion.h1>
  );
}
