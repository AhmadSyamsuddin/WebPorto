"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Contact = () => {

  const socialMedia = [
    { name: "Github", url: "https://github.com/AhmadSyamsuddin" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ahmad-syamsuddin/" },
    { name: "Instagram", url: "https://www.instagram.com/ahmadsyamsuddinn/" },
  ];
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto bg-white text-black">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold tracking-tighter"
          >
            LET&apos;S WORK <br /> TOGETHER
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="mailto:hello@example.com"
              className="text-lg md:text-2xl hover:underline underline-offset-4 break-all"
            >
              asyam5214@gmail.com
            </a>
          </motion.div>
        </div>

        <div className="flex gap-8">
          {socialMedia.map((social, i) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <Link href={social.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-lg font-medium">
                {social.name}
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
