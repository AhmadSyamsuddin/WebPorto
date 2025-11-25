"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FlowingMenu from "./reactbits/FlowingMenu";


const demoItems = [
  {
    link: "https://nextera-six.vercel.app/",
    text: "Nextera",
    image: "/nextera.jpeg",
  },
  {
    link: "https://karrerkit.vercel.app/",
    text: "KarirKit",
    image: "/karirkit.jpeg",
  },
  {
    link: "https://omr-ip.web.app/login",
    text: "One More Rep",
    image: "/onemorerep.png",
  },
];

export const Projects = () => {

  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-bold uppercase tracking-widest mb-12 text-white text-3xl"
      >
        Portofolio
      </motion.h2>
      <div className="h-[400px] md:h-[600px] relative">
        <FlowingMenu items={demoItems} />
      </div>
    </section>
  );
};
