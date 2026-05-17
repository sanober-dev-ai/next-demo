"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";

const AdmissionNotification = ({ showNotification, setShowNotification }) => {
  return (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            px-4
          "
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowNotification(false)}
            className="
              absolute
              inset-0
              bg-black/50
              backdrop-blur-md
            "
          />

          {/* Popup */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
              y: 30,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
            className="
              relative
              overflow-hidden
              w-full
              max-w-md
              rounded-[32px]
              border
              border-white/10
              bg-white/10
              backdrop-blur-2xl
              shadow-[0_20px_80px_rgba(0,0,0,0.45)]
              px-8
              py-10
              text-center
            "
          >
            {/* Glow Background */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-green-400/10
                via-transparent
                to-blue-400/10
                pointer-events-none
              "
            />

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowNotification(false)}
              className="
                absolute
                top-5
                right-5
                flex
                items-center
                justify-center
                w-11
                h-11
                rounded-full
                bg-white/10
                border
                border-white/10
                hover:bg-red-500/20
                hover:border-red-400/30
                transition-all
                duration-300
                group
              "
            >
              <X
                size={18}
                className="
                  text-white/70
                  group-hover:text-red-300
                  transition-colors
                "
              />
            </button>

            {/* Success Icon */}
            <motion.div
              initial={{
                scale: 0.5,
                rotate: -15,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                rotate: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.15,
                type: "spring",
                stiffness: 260,
                damping: 15,
              }}
              className="
                relative
                mx-auto
                flex
                items-center
                justify-center
                w-24
                h-24
                rounded-full
                bg-gradient-to-br
                from-green-400
                to-emerald-500
                shadow-[0_0_40px_rgba(34,197,94,0.45)]
              "
            >
              {/* Inner Ring */}
              <div
                className="
                  absolute
                  inset-2
                  rounded-full
                  border
                  border-white/20
                "
              />

              <Check size={42} strokeWidth={3} className="text-white" />
            </motion.div>

            {/* Heading */}
            <h3
              className="
                mt-7
                text-3xl
                font-bold
                text-white
                tracking-tight
              "
            >
              Enquiry Saved
            </h3>

            {/* Description */}
            <p
              className="
                mt-4
                text-white/75
                leading-relaxed
                text-[15px]
              "
            >
              Our admissions team will contact you shortly with complete program
              details and next steps.
            </p>

            {/* Bottom Glow Line */}
            <div
              className="
                mt-8
                mx-auto
                h-[4px]
                w-24
                rounded-full
                bg-gradient-to-r
                from-green-400
                to-emerald-500
                opacity-80
              "
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionNotification;
