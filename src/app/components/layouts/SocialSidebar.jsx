"use client";

import Link from "next/link";
import { socialLinks } from "../utils/constants";

const SocialSidebar = () => {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col">
      {socialLinks.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          className={`${item.bg} text-white p-3 hover:w-14 w-10 md:w-12 transition-all duration-300 flex items-center justify-center shadow-lg`}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialSidebar;
