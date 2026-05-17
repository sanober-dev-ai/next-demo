"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = (props) => {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#campus" },
    { name: "Programs", href: "#programs" },
    { name: "Placements", href: "#placements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-[#07142e]/95 backdrop-blur-xl shadow-2xl border-b border-white/10"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/assets/navbar-1.svg"
              alt="Logo"
              width={100}
              height={60}
              className="w-auto h-9 sm:h-12 object-contain"
              priority
            />

            <Image
              src="/assets/navbar-2.svg"
              alt="Text Logo"
              width={200}
              height={150}
              className="w-auto h-8 sm:h-9 object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  relative
                  px-4
                  py-2
                  text-[15px]
                  font-medium
                  text-white/90
                  hover:text-yellow-300
                  transition-all
                  duration-300
                  after:absolute
                  after:left-4
                  after:bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-yellow-300
                  after:transition-all
                  after:duration-300
                  hover:after:w-[calc(100%-32px)]
                "
              >
                {item.name}
              </Link>
            ))}

            {/* Desktop Search */}
            {showSearch ? (
              <div
                className="
                  flex
                  items-center
                  gap-2
                  ml-2
                  bg-white/10
                  border border-white/10
                  backdrop-blur-xl
                  rounded-2xl
                  px-3
                  py-2
                "
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="
                    w-44
                    lg:w-56
                    bg-transparent
                    text-white
                    placeholder:text-gray-300
                    text-sm
                    outline-none
                  "
                />

                <button
                  onClick={() => setShowSearch(false)}
                  className="
                    text-white/70
                    hover:text-red-400
                    transition
                  "
                >
                  <X size={18} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="
                  ml-2
                  w-11
                  h-11
                  rounded-xl
                  bg-white/10
                  border border-white/10
                  backdrop-blur-md
                  flex items-center justify-center
                  text-white
                  hover:bg-white/20
                  hover:text-yellow-300
                  transition-all duration-300
                "
              >
                <Search size={19} />
              </button>
            )}

            {/* CTA */}
            <button
              className="
                ml-4
                bg-gradient-to-r
                from-yellow-300
                to-orange-300
                hover:from-yellow-200
                hover:to-orange-200
                text-black
                font-semibold
                px-6
                py-3
                rounded-2xl
                transition-all
                duration-300
                shadow-[0_10px_30px_rgba(255,200,0,0.25)]
                hover:scale-[1.03]
              "
              onClick={props.onOpenAdmission}
            >
              Admissions 2026
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-3">
            {/* Search Toggle */}
            <button
              onClick={() => {
                setShowSearch(!showSearch);

                // Close menu when search opens
                if (!showSearch) {
                  setMobileMenuOpen(false);
                }
              }}
              className="
                text-white
                w-10
                h-10
                rounded-xl
                bg-white/10
                border border-white/10
                backdrop-blur-md
                flex items-center justify-center
                transition-all duration-300
                hover:bg-white/20
              "
            >
              {showSearch ? <X size={20} /> : <Search size={20} />}
            </button>

            {/* Menu Toggle */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);

                // Close search when menu opens
                if (!mobileMenuOpen) {
                  setShowSearch(false);
                }
              }}
              className="
                text-white
                w-10
                h-10
                rounded-xl
                bg-white/10
                border border-white/10
                backdrop-blur-md
                flex items-center justify-center
                transition-all duration-300
                hover:bg-white/20
              "
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {showSearch && (
          <div className="md:hidden pb-4">
            <div
              className="
                rounded-2xl
                bg-[#07142e]
                border border-white/10
                shadow-2xl
                backdrop-blur-xl
                p-2
                animate-in
                slide-in-from-top
                duration-300
              "
            >
              <input
                type="text"
                placeholder="Search..."
                className="
                  w-full
                  bg-white/10
                  border border-white/10
                  text-white
                  placeholder:text-gray-300
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  outline-none
                "
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="
              md:hidden
              mb-4
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-[#07142e]/95
              backdrop-blur-2xl
              shadow-[0_20px_60px_rgba(0,0,0,0.45)]
              animate-in
              slide-in-from-top
              duration-300
            "
          >
            <div className="flex flex-col p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowSearch(false);
                  }}
                  className="
                    text-white/90
                    text-base
                    font-medium
                    px-4
                    py-3
                    rounded-2xl
                    hover:bg-white/10
                    transition-all
                    duration-300
                  "
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile CTA */}
              <button
                className="
                  mt-4
                  w-full
                  bg-gradient-to-r
                  from-yellow-300
                  to-orange-300
                  hover:from-yellow-200
                  hover:to-orange-200
                  text-black
                  font-semibold
                  px-5
                  py-3.5
                  rounded-2xl
                  transition-all
                  duration-300
                  shadow-lg
                "
                onClick={() => {
                  props.onOpenAdmission();

                  // Close everything
                  setMobileMenuOpen(false);
                  setShowSearch(false);
                }}
              >
                Admissions 2026
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
