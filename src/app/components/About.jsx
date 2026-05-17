// "use client";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";

// export default function AboutShowcaseSection() {
//   const features = [
//     {
//       title: "Smart Classrooms",
//       description:
//         "Interactive digital classrooms with AI-powered learning support and modern teaching infrastructure.",
//       icon: "🎓",
//     },
//     {
//       title: "Global Exposure",
//       description:
//         "International collaborations, industry visits, and global internship opportunities.",
//       icon: "🌍",
//     },
//     {
//       title: "Innovation Labs",
//       description:
//         "Hands-on practical labs designed for research, innovation, and startup incubation.",
//       icon: "🚀",
//     },
//     {
//       title: "Career Support",
//       description:
//         "Dedicated placement assistance, mock interviews, and corporate mentorship programs.",
//       icon: "💼",
//     },
//   ];

//   const faculty = [
//     {
//       name: "Dr. Sarah Williams",
//       role: "Dean of Technology",
//       image:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
//     },
//     {
//       name: "Prof. Daniel Cooper",
//       role: "Head of Innovation",
//       image:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
//     },
//     {
//       name: "Dr. Emma Watson",
//       role: "Research Director",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
//     },
//   ];

//   const campusImages = [
//     "../assets/campus-1.jpg",
//     "../assets/campus-2.jpg",
//     "../assets/campus-3.jpg",
//     "../assets/campus-4.jpg",
//   ];

//   return (
//     <section className="bg-[#f8f9fc] py-20 px-5 md:px-10 overflow-hidden">
//       <div className="max-w-7xl mx-auto space-y-24">
//         {/* Heading */}
//         <div className="text-center max-w-7xl mx-auto">
//           <p className="text-red-600 font-semibold tracking-[3px] uppercase mb-4">
//             Discover Our Campus
//           </p>

//           <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
//             A Modern Learning Environment Built For Future Leaders
//           </h2>

//           <p className="text-gray-600 mt-6 text-lg leading-relaxed">
//             Explore a vibrant university ecosystem designed with innovation,
//             creativity, research, and career excellence at its core.
//           </p>
//         </div>

//         {/* Video + Stats */}
//         <div className="grid lg:grid-cols-2 gap-10 items-center">
//           <div className="relative rounded-[30px] overflow-hidden shadow-2xl group">
//             <img
//               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
//               alt="Campus"
//               className="w-full h-[500px] object-cover group-hover:scale-105 duration-700"
//             />

//             <div className="absolute inset-0 bg-black/40" />

//             <div className="absolute inset-0 flex items-center justify-center">
//               <button className="h-24 w-24 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white text-3xl hover:scale-110 duration-300">
//                 ▶
//               </button>
//             </div>

//             <div className="absolute bottom-8 left-8 text-white">
//               <p className="uppercase tracking-[4px] text-sm mb-2">
//                 Campus Tour
//               </p>
//               <h3 className="text-3xl font-bold max-w-sm">
//                 Experience Innovation Beyond Classrooms
//               </h3>
//             </div>
//           </div>

//           {/* <div className="grid grid-cols-2 gap-5">
//             {[
//               ["15K+", "Students"],
//               ["250+", "Faculty Members"],
//               ["98%", "Placement Support"],
//               ["120+", "Research Labs"],
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-[30px] p-8 shadow-lg border border-gray-100 hover:-translate-y-2 duration-300"
//               >
//                 <h3 className="text-5xl font-black text-red-600 mb-3">
//                   {item[0]}
//                 </h3>
//                 <p className="text-gray-700 text-lg font-medium">{item[1]}</p>
//               </div>
//             ))}
//           </div>
//         </div> */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//             {[
//               [15000, "Students", "+"],
//               [250, "Faculty Members", "+"],
//               [98, "Placement Support", "%"],
//               [120, "Research Labs", "+"],
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 70 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: index * 0.2,
//                   ease: "easeOut",
//                 }}
//                 viewport={{ once: true }}
//                 whileHover={{
//                   y: -10,
//                   scale: 1.03,
//                 }}
//                 className="group relative overflow-hidden bg-white rounded-[30px] p-8 shadow-lg border border-gray-100"
//               >
//                 {/* Hover Glow */}
//                 <div className="absolute inset-0 bg-linear-to-br from-red-50 via-transparent to-orange-50 opacity-0 group-hover:opacity-100 transition duration-500" />

//                 {/* Content */}
//                 <div className="relative z-10">
//                   {/* Counter */}
//                   <h3 className="text-5xl font-black text-red-600 mb-3 flex items-center">
//                     <CountUp
//                       end={item[0]}
//                       duration={2.5}
//                       separator=","
//                       enableScrollSpy
//                       scrollSpyOnce={false}
//                     />

//                     <span>{item[2]}</span>
//                   </h3>

//                   {/* Label */}
//                   <p className="text-gray-700 text-lg font-medium">{item[1]}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//         {/* Features */}
//         <div>
//           <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
//             <div>
//               <p className="text-red-600 font-semibold uppercase tracking-[3px] mb-3">
//                 Why Choose Us
//               </p>
//               <h2 className="text-4xl md:text-5xl font-black text-gray-900">
//                 Everything You Need To Grow
//               </h2>
//             </div>

//             <p className="text-gray-600 max-w-xl text-lg leading-relaxed">
//               We combine academic excellence with practical exposure to prepare
//               students for modern industries and future opportunities.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{
//                   opacity: 0,
//                   y: 80,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: index * 0.15,
//                   ease: "easeOut",
//                 }}
//                 viewport={{
//                   once: false,
//                   amount: 0.3,
//                 }}
//                 whileHover={{
//                   y: -12,
//                   scale: 1.03,
//                 }}
//                 className="group relative overflow-hidden bg-white rounded-[28px] p-8 shadow-md border border-gray-100 hover:bg-red-600 hover:text-white duration-500"
//               >
//                 {/* Animated Background Glow */}
//                 <motion.div
//                   animate={{
//                     scale: [1, 1.2, 1],
//                     opacity: [0.2, 0.35, 0.2],
//                   }}
//                   transition={{
//                     duration: 4,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute -top-20 -right-20 w-40 h-40 bg-red-100 rounded-full blur-3xl"
//                 />

//                 {/* Content */}
//                 <div className="relative z-10">
//                   {/* Floating Icon */}
//                   <motion.div
//                     animate={{
//                       y: [0, -10, 0],
//                       rotate: [0, 4, -4, 0],
//                     }}
//                     transition={{
//                       duration: 4,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                       delay: index * 0.2,
//                     }}
//                     className="text-5xl mb-6 inline-block"
//                   >
//                     {feature.icon}
//                   </motion.div>

//                   {/* Title */}
//                   <motion.h3
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{
//                       duration: 0.5,
//                       delay: index * 0.15 + 0.2,
//                     }}
//                     viewport={{
//                       once: false,
//                     }}
//                     className="text-2xl font-bold mb-4"
//                   >
//                     {feature.title}
//                   </motion.h3>

//                   {/* Description */}
//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{
//                       duration: 0.6,
//                       delay: index * 0.15 + 0.3,
//                     }}
//                     viewport={{
//                       once: false,
//                     }}
//                     className="text-gray-600 group-hover:text-red-100 leading-relaxed"
//                   >
//                     {feature.description}
//                   </motion.p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <section className="relative py-28 overflow-hidden bg-[#f8fafc]">
//           {/* ================= Background Glow ================= */}

//           <div className="absolute top-0 left-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />

//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

//           {/* ================= Content ================= */}

//           <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
//             {/* ================= Heading ================= */}

//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false }}
//               transition={{ duration: 0.7 }}
//               className="text-center mb-16"
//             >
//               <p className="text-orange-500 font-semibold uppercase tracking-[4px] mb-4">
//                 Campus Life
//               </p>

//               <h2 className="text-4xl md:text-6xl font-black text-[#16214a] leading-tight">
//                 Explore Our <br />
//                 Vibrant Campus
//               </h2>

//               <p className="mt-5 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
//                 Discover innovation, creativity, and student life through our
//                 modern campus environment.
//               </p>
//             </motion.div>

//             {/* ================= Gallery Grid ================= */}

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]">
//               {campusImages.map((img, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{
//                     opacity: 0,
//                     y: 60,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   viewport={{ once: false }}
//                   transition={{
//                     duration: 0.7,
//                     delay: index * 0.15,
//                   }}
//                   className={`
//                 relative
//                 overflow-hidden
//                 rounded-[2rem]
//                 group
//                 shadow-xl
//                 ${
//                   index === 1
//                     ? "lg:translate-y-12"
//                     : index === 2
//                       ? "lg:-translate-y-8"
//                       : ""
//                 }
//               `}
//                 >
//                   {/* Image */}

//                   <img
//                     src={img}
//                     alt={`Campus ${index + 1}`}
//                     className="
//                   w-full
//                   h-full
//                   object-cover
//                   transition-all
//                   duration-700
//                   group-hover:scale-110
//                 "
//                   />

//                   {/* Overlay */}

//                   <div
//                     className="
//                   absolute
//                   inset-0
//                   bg-gradient-to-t
//                   from-black/70
//                   via-black/10
//                   to-transparent
//                   opacity-80
//                 "
//                   />

//                   {/* Floating Glass Card */}

//                   <div
//                     className="
//                   absolute
//                   bottom-5
//                   left-5
//                   right-5
//                   backdrop-blur-xl
//                   bg-white/10
//                   border
//                   border-white/10
//                   rounded-2xl
//                   p-4
//                   translate-y-8
//                   opacity-0
//                   group-hover:translate-y-0
//                   group-hover:opacity-100
//                   transition-all
//                   duration-500
//                 "
//                   >
//                     <p className="text-white text-sm uppercase tracking-[3px]">
//                       JG University
//                     </p>

//                     <h3 className="text-white text-xl font-bold mt-1">
//                       Student Experience
//                     </h3>
//                   </div>

//                   {/* Glow Border */}

//                   <div
//                     className="
//                   absolute
//                   inset-0
//                   rounded-[2rem]
//                   border
//                   border-white/10
//                   group-hover:border-orange-400/50
//                   transition-all
//                   duration-500
//                 "
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Faculty Section */}
//         <div>
//           <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
//             <div>
//               <p className="text-red-600 font-semibold uppercase tracking-[3px] mb-3">
//                 Meet Our Experts
//               </p>

//               <h2 className="text-4xl md:text-5xl font-black text-gray-900 max-w-2xl leading-tight">
//                 Learn From Industry Leaders & Researchers
//               </h2>
//             </div>

//             <p className="text-gray-600 max-w-xl text-lg leading-relaxed">
//               Our faculty members bring years of academic knowledge and real
//               industry experience into the classroom.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {faculty.map((member, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100"
//               >
//                 <div className="overflow-hidden h-[420px]">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover group-hover:scale-110 duration-700"
//                   />
//                 </div>

//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                     {member.name}
//                   </h3>

//                   <p className="text-red-600 font-medium text-lg">
//                     {member.role}
//                   </p>

//                   <div className="flex gap-4 mt-6 text-gray-500">
//                     <button className="h-11 w-11 rounded-full border border-gray-200 hover:bg-red-600 hover:text-white duration-300">
//                       in
//                     </button>
//                     <button className="h-11 w-11 rounded-full border border-gray-200 hover:bg-red-600 hover:text-white duration-300">
//                       f
//                     </button>
//                     <button className="h-11 w-11 rounded-full border border-gray-200 hover:bg-red-600 hover:text-white duration-300">
//                       X
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

/* ================= Reusable Heading ================= */

const SectionHeading = ({ tag, title, description, align = "center" }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className={`
        ${align === "center" ? "text-center mx-auto" : "text-left"}
      `}
    >
      {/* Tag */}

      <motion.p
        initial={{
          opacity: 0,
          letterSpacing: "0px",
        }}
        whileInView={{
          opacity: 1,
          letterSpacing: "4px",
        }}
        transition={{
          duration: 0.6,
        }}
        viewport={{
          once: false,
        }}
        className="
          inline-flex
          items-center
          gap-2
          text-orange-500
          font-semibold
          uppercase
          text-sm
          tracking-[4px]
          mb-4
        "
      >
        <span className="w-10 h-[2px] bg-orange-500 rounded-full" />

        {tag}
      </motion.p>

      {/* Title */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.1,
        }}
        viewport={{
          once: false,
        }}
        className="
          text-4xl
          md:text-6xl
          font-black
          text-[#16214a]
          leading-tight
        "
      >
        {title}
      </motion.h2>

      {/* Description */}

      {description && (
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          viewport={{
            once: false,
          }}
          className="
            mt-5
            text-gray-500
            text-lg
            leading-relaxed
            max-w-2xl
            mx-auto
          "
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default function AboutShowcaseSection() {
  const features = [
    {
      title: "Smart Classrooms",
      description:
        "Interactive digital classrooms with AI-powered learning support and modern teaching infrastructure.",
      icon: "🎓",
    },

    {
      title: "Global Exposure",
      description:
        "International collaborations, industry visits, and global internship opportunities.",
      icon: "🌍",
    },

    {
      title: "Innovation Labs",
      description:
        "Hands-on practical labs designed for research, innovation, and startup incubation.",
      icon: "🚀",
    },

    {
      title: "Career Support",
      description:
        "Dedicated placement assistance, mock interviews, and corporate mentorship programs.",
      icon: "💼",
    },
  ];

  const faculty = [
    {
      name: "Dr. Sarah Williams",
      role: "Dean of Technology",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Prof. Daniel Cooper",
      role: "Head of Innovation",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Dr. Emma Watson",
      role: "Research Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const campusImages = [
    "../assets/campus-1.jpg",
    "../assets/campus-2.jpg",
    "../assets/campus-3.jpg",
    "../assets/campus-4.jpg",
  ];

  return (
    <section className="bg-[#f8f9fc] py-20 px-5 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* ================= Main Heading ================= */}

        <SectionHeading
          tag="Discover Our Campus"
          title="A Modern Learning Environment Built For Future Leaders"
          description="Explore a vibrant university ecosystem designed with innovation, creativity, research, and career excellence at its core."
        />

        {/* ================= Video + Stats ================= */}

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Video */}

          <div className="relative rounded-[30px] overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Campus"
              className="
                w-full
                h-[500px]
                object-cover
                group-hover:scale-105
                duration-700
              "
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="
                  h-24
                  w-24
                  rounded-full
                  bg-white/20
                  backdrop-blur-md
                  border
                  border-white/30
                  flex
                  items-center
                  justify-center
                  text-white
                  text-3xl
                  hover:scale-110
                  duration-300
                "
              >
                ▶
              </button>
            </div>

            <div className="absolute bottom-8 left-8 text-white">
              <p className="uppercase tracking-[4px] text-sm mb-2">
                Campus Tour
              </p>

              <h3 className="text-3xl font-bold max-w-sm">
                Experience Innovation Beyond Classrooms
              </h3>
            </div>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              [15000, "Students", "+"],
              [250, "Faculty Members", "+"],
              [98, "Placement Support", "%"],
              [120, "Research Labs", "+"],
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  bg-white
                  rounded-[30px]
                  p-8
                  shadow-lg
                  border
                  border-gray-100
                "
              >
                {/* Glow */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-linear-to-br
                    from-red-50
                    via-transparent
                    to-orange-50
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                  "
                />

                {/* Content */}

                <div className="relative z-10">
                  <h3 className="text-5xl font-black text-red-600 mb-3 flex items-center">
                    <CountUp
                      end={item[0]}
                      duration={2.5}
                      separator=","
                      enableScrollSpy
                      scrollSpyOnce={false}
                    />

                    <span>{item[2]}</span>
                  </h3>

                  <p className="text-gray-700 text-lg font-medium">{item[1]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= Features ================= */}

        <div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              tag="Why Choose Us"
              title="Everything You Need To Grow"
              align="left"
            />

            <p className="text-gray-600 max-w-xl text-lg leading-relaxed">
              We combine academic excellence with practical exposure to prepare
              students for modern industries and future opportunities.
            </p>
          </div>

          {/* Feature Cards */}

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  bg-white
                  rounded-[28px]
                  p-8
                  shadow-md
                  border
                  border-gray-100
                  hover:bg-red-600
                  hover:text-white
                  duration-500
                "
              >
                {/* Glow */}

                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.35, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -top-20
                    -right-20
                    w-40
                    h-40
                    bg-red-100
                    rounded-full
                    blur-3xl
                  "
                />

                {/* Content */}

                <div className="relative z-10">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 4, -4, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    className="text-5xl mb-6 inline-block"
                  >
                    {feature.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>

                  <p className="text-gray-600 group-hover:text-red-100 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= Campus Gallery ================= */}

        <section className="relative py-28 overflow-hidden bg-[#f8fafc]">
          {/* Glow */}

          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
            {/* Heading */}

            <div className="mb-16">
              <SectionHeading
                tag="Campus Life"
                title="Explore Our Vibrant Campus"
                description="Discover innovation, creativity, and student life through our modern campus environment."
              />
            </div>

            {/* Gallery */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]">
              {campusImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}
                  className={`
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    group
                    shadow-xl
                    ${
                      index === 1
                        ? "lg:translate-y-12"
                        : index === 2
                          ? "lg:-translate-y-8"
                          : ""
                    }
                  `}
                >
                  {/* Image */}

                  <img
                    src={img}
                    alt={`Campus ${index + 1}`}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-black/10
                      to-transparent
                      opacity-80
                    "
                  />

                  {/* Floating Card */}

                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      right-5
                      backdrop-blur-xl
                      bg-white/10
                      border
                      border-white/10
                      rounded-2xl
                      p-4
                      translate-y-8
                      opacity-0
                      group-hover:translate-y-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                    "
                  >
                    <p className="text-white text-sm uppercase tracking-[3px]">
                      JG University
                    </p>

                    <h3 className="text-white text-xl font-bold mt-1">
                      Student Experience
                    </h3>
                  </div>

                  {/* Border */}

                  <div
                    className="
                      absolute
                      inset-0
                      rounded-[2rem]
                      border
                      border-white/10
                      group-hover:border-orange-400/50
                      transition-all
                      duration-500
                    "
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= Faculty ================= */}

        <div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <SectionHeading
              tag="Meet Our Experts"
              title="Learn From Industry Leaders & Researchers"
              align="left"
            />

            <p className="text-gray-600 max-w-xl text-lg leading-relaxed">
              Our faculty members bring years of academic knowledge and real
              industry experience into the classroom.
            </p>
          </div>

          {/* Faculty Grid */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-[32px]
                  overflow-hidden
                  shadow-xl
                  border
                  border-gray-100
                "
              >
                {/* Image */}

                <div className="overflow-hidden h-[420px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-110
                      duration-700
                    "
                  />
                </div>

                {/* Content */}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>

                  <p className="text-red-600 font-medium text-lg">
                    {member.role}
                  </p>

                  {/* Social */}

                  <div className="flex gap-4 mt-6 text-gray-500">
                    <button
                      className="
                        h-11
                        w-11
                        rounded-full
                        border
                        border-gray-200
                        hover:bg-red-600
                        hover:text-white
                        duration-300
                      "
                    >
                      in
                    </button>

                    <button
                      className="
                        h-11
                        w-11
                        rounded-full
                        border
                        border-gray-200
                        hover:bg-red-600
                        hover:text-white
                        duration-300
                      "
                    >
                      f
                    </button>

                    <button
                      className="
                        h-11
                        w-11
                        rounded-full
                        border
                        border-gray-200
                        hover:bg-red-600
                        hover:text-white
                        duration-300
                      "
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
