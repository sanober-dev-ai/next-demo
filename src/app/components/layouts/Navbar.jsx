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
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07142e]/95 backdrop-blur-xl shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
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
              className="w-auto h-10 sm:h-9 object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-md font-medium text-white hover:text-yellow-300 transition duration-300"
              >
                {item.name}
              </Link>
            ))}

            {/* Desktop Search */}
            {showSearch ? (
              <div className="flex items-center gap-2 ml-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-44 lg:w-56 bg-white/10 border border-white/20 text-white placeholder:text-gray-300 rounded-xl px-4 py-2 text-sm outline-none backdrop-blur-md"
                />

                <button
                  onClick={() => setShowSearch(false)}
                  className="text-white hover:text-red-400 transition"
                >
                  <X size={18} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="ml-2 text-white hover:text-yellow-300 transition"
              >
                <Search size={20} />
              </button>
            )}

            {/* CTA */}
            <button
              className="ml-4 bg-orange-300 hover:bg-orange-400 text-black font-semibold px-5 py-2.5 rounded-xl transition duration-300 shadow-lg"
              onClick={props.onOpenAdmission}
            >
              Admissions 2026
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-white"
            >
              {showSearch ? <X size={22} /> : <Search size={22} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {showSearch && (
          <div className="md:hidden pb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-300 rounded-xl px-4 py-3 text-sm outline-none backdrop-blur-md"
            />
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mb-4 rounded-2xl overflow-hidden border border-white/10 bg-[#07142e]/95 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-base font-medium px-4 py-3 rounded-xl hover:bg-white/10 transition duration-300"
                >
                  {item.name}
                </Link>
              ))}

              <button
                className="mt-4 w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-5 py-3 rounded-xl transition duration-300"
                onClick={props.onOpenAdmission}
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
