"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import PillNav from "./reactbits/PillNav";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-6 md:py-6 md:mix-blend-difference text-black bg-white">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <Link href="/">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold tracking-tighter uppercase"
          >
            <Image src="/medd.png" alt="Medd Logo" width={70} height={50} />
          </motion.span>
        </Link>

        <PillNav
          logo="/smiles.jpg"
          logoAlt="Company Logo"
          items={[
            { label: "About", href: "#" },
            { label: "Work", href: "#work" },
            { label: "Contact", href: "#contact" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </div>
    </nav>
  );
};
