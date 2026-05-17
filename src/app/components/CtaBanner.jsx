"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useAdmissionForm from "./forms/useAdmissionForm";
import AdmissionFormCard from "./customElement/AdmissionForm";
import AdmissionNotification from "./customElement/Notification";
import AdmissionForm from "./customElement/AdmissionForm";

const CTASection = () => {
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    isFormValid,
    showNotification,
    setShowNotification,
    ctaSection,
  } = useAdmissionForm();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* ================= Notification ================= */}
      <AdmissionNotification
        showNotification={showNotification}
        setShowNotification={setShowNotification}
      />

      {/* ================= Background ================= */}

      <div className="absolute inset-0 bg-[#16214a]" />

      {/* Gradient Glow */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full" />

      {/* ================= Content ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[4xl p-6 md:p-10 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* ================= Left ================= */}

            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-orange-400 font-semibold">
                Admissions Open 2026
              </p>

              <h2 className="mt-5 text-4xl md:text-6xl font-bold text-white leading-tight">
                Start Your Journey <br />
                With JG University
              </h2>

              <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl">
                Join a future-focused university where innovation, research, and
                career excellence shape tomorrow’s leaders.
              </p>

              {/* Highlights */}

              <div className="mt-10 grid sm:grid-cols-2 gap-5">
                {[
                  "Industry Focused Curriculum",
                  "Global Learning Environment",
                  "Top Placement Support",
                  "Research & Innovation",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-400" />

                    <p className="text-white/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= Right Form ================= */}
            <AdmissionForm
              ctaSection={true}
              formData={formData}
              errors={errors}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isFormValid={isFormValid}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
