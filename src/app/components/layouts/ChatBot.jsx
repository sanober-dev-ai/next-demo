"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  MessageCircle,
  X,
  Send,
  GraduationCap,
  Phone,
  Mail,
} from "lucide-react";

const ChatBotCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= Floating Chat Button ================= */}

      <motion.button
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => setIsOpen(true)}
        className="
          fixed
          bottom-6
          right-6
          z-[999]
          h-16
          w-16
          rounded-full
          bg-gradient-to-r
          from-red-600
          to-orange-500
          text-white
          shadow-2xl
          flex
          items-center
          justify-center
          overflow-hidden
          group
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            inset-0
            bg-white/10
            opacity-0
            group-hover:opacity-100
            transition
            duration-300
          "
        />

        {/* Pulse Ring */}

        <span
          className="
            absolute
            inline-flex
            h-full
            w-full
            rounded-full
            bg-orange-400
            opacity-30
            animate-ping
          "
        />

        <MessageCircle className="relative z-10" size={28} />
      </motion.button>
    </>
  );
};

export default ChatBotCTA;
