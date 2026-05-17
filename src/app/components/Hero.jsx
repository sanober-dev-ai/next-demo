"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./customElement/Button";

const heroImages = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2074&auto=format&fit=crop",
];

const headingWords = ["Shape", "Your", "Future", "With", "JG", "University"];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* ================= Background Images ================= */}
      {heroImages.map((image, index) => (
        <motion.div
          key={image}
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentImage === index ? 1 : 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt={`Hero ${index + 1}`}
            fill
            priority={index === 0}
            quality={90}
            sizes="100vw"
            className={`object-cover object-center transition-transform duration-7000 ${
              currentImage === index ? "scale-110" : "scale-100"
            }`}
          />
        </motion.div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/70 z-10" />

      {/* Animated Gradient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-red-500 rounded-full blur-3xl z-10"
      />

      {/* ================= Hero Content ================= */}
      <div className="relative z-20 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto w-full px-6.5 lg:px-8">
          <div className="max-w-4xl mt-3 lg:mt-20 ml-8 lg:ml-0">
            {/* Main Heading */}
            <motion.h1 className="text-white font-black leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-[90px] flex flex-wrap gap-x-4 gap-y-2 max-w-5xl">
              {headingWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 80,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`inline-block ${
                    ["Future", "With", "JG", "University"].includes(word)
                      ? "text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-400"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="mt-8 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              Empowering students through innovation, research, and
              industry-focused education to create future leaders,
              entrepreneurs, and changemakers.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              {/* Primary Button */}
              <Button name="Explore Programs" className="ml-9" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 right-8 z-30 hidden md:flex flex-col items-center gap-3"
      >
        <p className="text-white/50 text-sm rotate-90 mb-10">Scroll</p>

        <div className="w-0.5 h-20 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-full h-10 bg-red-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
