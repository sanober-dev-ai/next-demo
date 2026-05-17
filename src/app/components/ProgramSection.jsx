"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { categories, programsData } from "./utils/constants";

const ProgramsSection = ({ selectedCategory, selectedProgram }) => {
  const [activeCategory, setActiveCategory] = useState(
    selectedCategory || "ug",
  );

  const [activeProgram, setActiveProgram] = useState(selectedProgram || "");

  // Sync category from FindProgram
  useEffect(() => {
    if (selectedCategory) {
      setActiveCategory(selectedCategory);
    }
  }, [selectedCategory]);

  // Sync selected program from FindProgram
  useEffect(() => {
    setActiveProgram(selectedProgram || "");
  }, [selectedProgram]);

  // Get programs of active category
  let displayedPrograms = programsData[activeCategory] || [];

  // Filter specific selected course
  if (activeProgram) {
    displayedPrograms = displayedPrograms.filter(
      (program) => program.title === activeProgram,
    );
  }

  return (
    <section id="programs" className="py-24 bg-[#f8fafc] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-sm text-orange-500 font-semibold">
            Academic Programs
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#16214a]">
            Explore Your Future
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Discover industry-focused programs designed to build future leaders
            and innovators.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-14">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.id}
                onClick={() => {
                  // Change category
                  setActiveCategory(category.id);

                  // Clear selected course filter
                  setActiveProgram("");
                }}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#16214a] text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-[#16214a]"
                }`}
              >
                <Icon size={20} />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-16">
          {displayedPrograms.length > 0 ? (
            displayedPrograms.map((program, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-2xl font-bold text-[#16214a] leading-snug group-hover:text-blue-700 transition">
                      {program.title}
                    </h3>

                    <p className="mt-4 text-gray-800 font-semibold">
                      {program.school}
                    </p>

                    <p className="mt-1 text-gray-500">
                      Duration — {program.duration}
                    </p>
                  </div>

                  {/* Arrow */}
                  <button className="min-w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center group-hover:bg-[#16214a] group-hover:text-white transition duration-300">
                    <ArrowUpRight
                      size={20}
                      className="group-hover:rotate-45 transition duration-300"
                    />
                  </button>
                </div>

                {/* Animated Bottom Line */}
                <div className="mt-8 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-gradient-to-r from-blue-600 to-orange-400 group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500 text-lg">No programs found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
