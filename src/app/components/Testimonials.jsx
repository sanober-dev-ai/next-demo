"use client";

import React, { memo, useCallback, useEffect, useMemo, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "CEO, Tech Corp",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    text: "My cooperation with the IT company was very positive. They impressed me with their openness and professionalism in communication. Their work was of high quality and met all project requirements.",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    text: "The team’s ability to translate complex requirements into a seamless user experience was incredible. They didn't just build what we asked; they built what we actually needed.",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    text: "Finding a partner that understands clean code and scalable architecture is rare. These guys are the real deal. The integration was smooth and the post-launch support was top-notch.",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    text: "Their attention to detail regarding brand guidelines was impressive. The final product felt like a natural extension of our company's identity. Highly recommended for creative projects.",
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Startup Founder",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    text: "As a startup, speed is everything. They delivered a high-quality MVP in record time without cutting corners. They are more than just vendors; they are strategic partners.",
  },
  {
    id: 6,
    name: "Aisha Khan",
    role: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    text: "The design fidelity they maintained from Figma to the final live site was 1:1. It is refreshing to work with developers who have a keen eye for aesthetics and micro-interactions.",
  },
  {
    id: 7,
    name: "Marcus Thorne",
    role: "Operations Head",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    text: "Logistics and backend complexity were our biggest hurdles. They built a custom dashboard that simplified our internal workflows significantly. Our efficiency has increased by 40%.",
  },
  {
    id: 8,
    name: "Sophie Laurent",
    role: "Creative Lead",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    text: "Working with this team was a breath of fresh air. They bring a level of passion and creativity to the table that is infectious. The results truly speak for themselves.",
  },
  {
    id: 9,
    name: "Robert Miller",
    role: "E-commerce Owner",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    text: "Our conversion rates skyrocketed after the redesign. The checkout flow is now intuitive and fast. I couldn't be happier with the ROI we've seen since launching.",
  },
  {
    id: 10,
    name: "Linda Wu",
    role: "Tech Consultant",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&q=80",
    text: "Their technical stack is modern and their problem-solving skills are top-tier. Whenever a challenge arose, they had three solutions ready before the next meeting.",
  },
];

/* ================= Thumbnail Component ================= */

const Thumbnail = memo(function Thumbnail({ item, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer transition-all duration-300
      w-16 h-20 overflow-hidden border-2 shrink-0 rounded-md
      ${
        active
          ? "border-orange-400 scale-110"
          : "border-transparent opacity-50 grayscale"
      }`}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover"
      />
    </button>
  );
});

/* ================= Main Component ================= */

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* ================= Screen Detection ================= */

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  /* ================= Navigation ================= */

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  /* ================= Current Testimonial ================= */

  const current = useMemo(() => {
    return testimonials[index];
  }, [index]);

  /* ================= Visible Thumbnails ================= */

  const visibleTestimonials = useMemo(() => {
    if (!isMobile) return testimonials;

    return testimonials.slice(
      Math.max(0, index - 1),
      Math.min(testimonials.length, index + 3),
    );
  }, [index, isMobile]);

  return (
    <section className="relative py-15 px-5 md:px-10 lg:mt-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto z-10">
        {/* ================= Heading ================= */}

        <div className="text-left max-w-6xl mx-auto mb-8">
          <h2 className="text-4xl md:text-6xl font-black text-black leading-tight">
            JG Alumni Testimonials
          </h2>

          <p className="text-gray-400 text-lg mt-0 leading-relaxed">
            Hear from students and graduates who experienced innovation,
            opportunities, and career growth through our modern education
            system.
          </p>
        </div>

        {/* ================= Main Card ================= */}

        <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 items-center mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="contents"
            >
              {/* ================= Image ================= */}

              <div className="relative">
                <div className="absolute -bottom-2 -left-2 w-full h-full border-4 border-orange-400 z-0" />

                <img
                  src={current.image}
                  alt={current.name}
                  className="
                    relative z-10
                    w-full
                    h-87.5 md:h-125
                    object-cover
                    grayscale hover:grayscale-0
                    transition-all duration-500
                  "
                />
              </div>

              {/* ================= Content ================= */}

              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-2xl font-bold">{current.name}</h3>

                    <p className="text-gray-500 text-sm mt-1">{current.role}</p>

                    <div className="flex text-orange-400 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <button
                    className="
                      bg-orange-400 text-white
                      hover:bg-orange-500
                      border border-white/30
                      px-4 py-2
                      text-sm font-semibold
                      rounded-md
                      hover:scale-105
                      transition-all duration-300
                    "
                  >
                    Read more
                  </button>
                </div>

                <p className="text-gray-500 leading-relaxed text-lg italic">
                  "{current.text}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= Navigation ================= */}

        <div
          className="
            mt-8
            flex items-center gap-4
            mx-auto
            w-full max-w-md md:max-w-max
            justify-center
            px-2
          "
        >
          {/* Left */}

          <button
            onClick={prev}
            className="
              p-2 rounded-md
              border border-gray-300
              hover:border-orange-400
              transition-colors
              shrink-0
            "
          >
            <ChevronLeft size={20} />
          </button>

          {/* Thumbnails */}

          <div className="flex gap-3 overflow-hidden">
            {visibleTestimonials.map((item) => {
              const actualIndex = testimonials.findIndex(
                (t) => t.id === item.id,
              );

              return (
                <Thumbnail
                  key={item.id}
                  item={item}
                  active={index === actualIndex}
                  onClick={() => setIndex(actualIndex)}
                />
              );
            })}
          </div>

          {/* Right */}

          <button
            onClick={next}
            className="
              p-2 rounded-md
              border border-gray-300
              hover:border-orange-400
              transition-colors
              shrink-0
            "
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
