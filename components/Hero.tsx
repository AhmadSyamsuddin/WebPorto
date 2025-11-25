"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { ArrowDown } from "lucide-react";
import Lanyard from "./reactbits/Lanyard";

export const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center px-6 md:px-12 max-w-screen-2xl mx-auto relative pt-24 md:pt-0">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Text Content */}
        <div className="flex-1 space-y-4 md:space-y-6 z-10">
          <p className="text-sm md:text-base">
            Hi! My name is{" "}
            <span className="text-black bg-white p-1 md:p-2 font-bold mx-1 md:mx-2">
              Ahmad Syamsuddin
            </span>{" "}
            and I am a
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9]">
            <TextReveal>FULLSTACK</TextReveal>
            <br />
            <TextReveal delay={0.2}>WEB DEVELOPER</TextReveal>
          </h1>
          <div className="max-w-xl">
            <TextReveal
              delay={0.4}
              className="text-base md:text-xl font-light text-neutral-500 mt-4 md:mt-8 indent-1"
            >
              A passionate learner and problem solver with a strong interest in
              web and mobile application development. Started my programming
              journey after completing the Hacktiv8 bootcamp as a full-stack web
              developer, transitioning from a previous career as a teacher and
              entrepreneur to fully pursue my passion for technology and
              software development
            </TextReveal>
          </div>
        </div>

        {/* Lanyard Component */}
        <div className="flex-1 h-[300px] md:h-[500px] lg:h-[600px] w-full">
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} fov={20} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 hidden md:block">
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 lg:bottom-24 left-6 md:left-12 flex items-center gap-2 text-sm font-medium z-10"
        >
          <span>SCROLL</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
