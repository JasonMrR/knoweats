"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const SmallBanner = () => {
  const words = [
    "¡Más que comida! · Somos plastic neutral · +1500kg de plástico recogidos del mar · Gravity Wave certificate · ¡Más que comida! · Somos plastic neutral · +1500kg de plástico recogidos del mar · Gravity Wave certificate · ¡Más que comida! · Somos plastic neutral · +1500kg de plástico recogidos del mar · Gravity Wave certificate · ¡Más que comida! · Somos plastic neutral · +1500kg de plástico recogidos del mar · Gravity Wave certificate · ¡Más que comida! · Somos plastic neutral · +1500kg de plástico recogidos del mar · Gravity Wave certificate · ¡Más que comida! · Somos plastic neutral · +1500kg de plástico recogidos del mar · Gravity Wave certificate · ¡Más que comida! · Somos plastic neutral · +1500kg de plástico recogidos del mar · Gravity Wave certificate · ¡Más que comida! · Somos plastic neutral · +1500kg de plástico recogidos del mar · Gravity Wave certificate · ¡Más que comida! · Somos plastic neutral · +1500kg de plástico recogidos del mar · Gravity Wave certificate",
  ];

  const [index, setIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextWord();
    }, 200); // Velocidad del desplazamiento (en milisegundos)

    return () => clearInterval(intervalId);
  }, [index, wordIndex]);

  const nextWord = () => {
    if (wordIndex < words[index].length - 1) {
      setWordIndex(wordIndex + 1);
    } else {
      setWordIndex(0);
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }
  };

  useEffect(() => {
    controls.start({
      x: -wordIndex * 20,
      transition: { duration: 2, repeat: Infinity, repeatDelay: 1 },
    });
  }, [wordIndex, controls]);

  return (
    <article className="w-full h-28 lg:h-36 m-8 bg-secondary-green overflow-hidden flex items-center">
      <motion.p
        className="text-white text-4xl md:text-5xl font-bold inline-block whitespace-nowrap"
        animate={controls}
      >
        {words[index]}
      </motion.p>
    </article>
  );
};

export default SmallBanner;
