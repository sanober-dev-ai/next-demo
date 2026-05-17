"use client";
import Hero from "./components/Hero";
import AboutSection from "./components/About";
import ModernTestimonialSection from "./components/Testimonials";
import FindProgram from "./components/FindProgam";
import ProgramsSection from "./components/ProgramSection";
import CTASection from "./components/CtaBanner";
import { useState } from "react";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import SocialSidebar from "./components/layouts/SocialSidebar";
import ChatBotCTA from "./components/layouts/ChatBot";
import AdmissionForm from "./components/customElement/AdmissionForm";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("ug");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [showAdmissionForm, setShowAdmissionForm] = useState(false);

  return (
    <>
      <Navbar onOpenAdmission={() => setShowAdmissionForm(true)} />
      <SocialSidebar />

      <div className="relative">
        <Hero />

        <div className="absolute left-0 right-0 top-full -translate-y-1/2 md:-translate-y-1/3 z-50 hidden lg:flex">
          <FindProgram onCategorySelect={setSelectedCategory}
            onProgramSelect={setSelectedProgram} />
        </div>
      </div>

      <section id="campus">
        <AboutSection />
      </section>

      <section id="programs">
        <ProgramsSection selectedCategory={selectedCategory}
          selectedProgram={selectedProgram} />
      </section>

      <section id="placements">
        <ModernTestimonialSection />
      </section>

      <section id="contact">
        <CTASection />
      </section>
      <ChatBotCTA />
      <AdmissionForm isOpen={showAdmissionForm}
        onClose={() => setShowAdmissionForm(false)} />
      <Footer />
    </>
  );
};

export default Home;
