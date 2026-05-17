"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

import { categories, programsData } from "./utils/constants";

const FindProgram = ({ onCategorySelect, onProgramSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");

  // Programs based on selected category
  const filteredPrograms = useMemo(() => {
    if (!selectedCategory) return [];

    return programsData[selectedCategory] || [];
  }, [selectedCategory]);

  // Handle category change
  const handleCategoryChange = (e) => {
    const value = e.target.value;

    setSelectedCategory(value);

    // Reset selected course
    setSelectedProgram("");

    // Send category to parent
    if (onCategorySelect) {
      onCategorySelect(value);
    }
  };

  // Handle arrow click
  const handleNavigate = () => {
    // Send category to parent
    if (onCategorySelect && selectedCategory) {
      onCategorySelect(selectedCategory);
    }

    // Send selected program to parent
    if (onProgramSelect && selectedProgram) {
      onProgramSelect(selectedProgram);
    }

    // Smooth scroll to Programs Section
    const section = document.getElementById("programs");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="absolute left-0 -top-15 w-full z-40"
    >
      <div className="bg-[#1f2b5b] shadow-2xl mx-auto max-w-6xl rounded-xl">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Title */}
            <div className="shrink-0">
              <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
                Find Your Program
              </h2>
            </div>

            {/* Category Select */}
            <div className="w-full relative border-b border-white/30">
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-full bg-transparent text-white/90 py-3 italic appearance-none outline-none cursor-pointer"
              >
                <option value="" className="text-black">
                  Select Level
                </option>

                {categories.map((category) => (
                  <option
                    key={category.id}
                    value={category.id}
                    className="text-black"
                  >
                    {category.title}
                  </option>
                ))}
              </select>

              {/* Dropdown Icon */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Course Select */}
            <div className="w-full flex items-center border-b border-white/30">
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                disabled={!selectedCategory}
                className="w-full bg-transparent text-white/90 py-3 italic outline-none cursor-pointer"
              >
                <option value="" className="text-black">
                  Select course by keyword
                </option>

                {filteredPrograms.map((program, index) => (
                  <option
                    key={index}
                    value={program.title}
                    className="text-black"
                  >
                    {program.title}
                  </option>
                ))}
              </select>

              {/* Arrow Button */}
              <button
                onClick={handleNavigate}
                disabled={!selectedCategory}
                className="ml-4 p-2 border border-white/40 hover:bg-white hover:text-[#1f2b5b] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronRight
                  size={20}
                  className="text-white hover:text-[#1f2b5b]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FindProgram;
