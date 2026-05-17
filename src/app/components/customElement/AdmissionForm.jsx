"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import useAdmissionForm from "../forms/useAdmissionForm";
import AdmissionNotification from "./Notification";
import AdmissionFormFields from "../forms/AdmissionFormFields";

const AdmissionForm = ({ isOpen, onClose }) => {
  const {
    title = "Get Admission Details",
    description = "Fill out the form and our admissions team will connect with you shortly.",
    formData,
    errors,
    handleChange,
    handleSubmit,
    isFormValid,
    showNotification,
    setShowNotification,
  } = useAdmissionForm();

  return (
    <>
      {/* Notification */}
      <AdmissionNotification
        showNotification={showNotification}
        setShowNotification={setShowNotification}
      />

      <AnimatePresence>
        {isOpen ? (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={onClose}
              className="
                fixed inset-0
                bg-black/50
                backdrop-blur-md
                z-[999]
              "
            />

            {/* Modal Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 40 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="
                fixed inset-0
                z-[1000]
                flex items-center justify-center
                p-4 md:p-6
                overflow-y-auto
              "
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="
                  relative
                  w-full
                  max-w-2xl
                  rounded-[32px]
                  bg-white/95
                  backdrop-blur-xl
                  shadow-[0_20px_80px_rgba(0,0,0,0.25)]
                  border border-white/20
                  p-6 md:p-10
                "
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="
                    absolute
                    top-5 right-5
                    w-10 h-10
                    rounded-full
                    bg-gray-100
                    hover:bg-red-50
                    flex items-center justify-center
                    transition-all duration-200
                    group
                  "
                >
                  <X
                    size={20}
                    className="
                      text-gray-600
                      group-hover:text-red-500
                    "
                  />
                </button>

                {/* Header */}
                <div className="pr-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#16214a] leading-tight">
                    {title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed text-base md:text-lg">
                    {description}
                  </p>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <AdmissionFormFields
                    formData={formData}
                    errors={errors}
                    handleChange={handleChange}
                    isFormValid={isFormValid}
                  />
                </form>
              </div>
            </motion.div>
          </>
        ) : (
          <div
            className="
              w-full
              rounded-[32px]
              bg-white
              p-6 md:p-10
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              border border-gray-100
            "
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#16214a]">
              {title}
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed text-base md:text-lg">
              {description}
            </p>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

            <form onSubmit={handleSubmit} className="space-y-5">
              <AdmissionFormFields
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                isFormValid={isFormValid}
              />
            </form>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdmissionForm;
