'use client';
import Badges from "./components/Badges";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Linkedin, FileText } from "lucide-react";

export default function Neonacho() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-purple-900 text-white p-6 flex flex-col items-center justify-center space-y-10">

      <motion.h1
        className="text-green-400 font-mono text-sm md:text-base leading-tight whitespace-pre-wrap text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      {String.raw`
      █▄█ █▀█ █▀█ █▄░█ ▄▀█ █▀▄ █▀▀ █░█ █▀▀
      █░█ █▄█ █▄█ █░▀█ █▀█ █▄▀ ██▄ █▄█ ██▄
      `}
      </motion.h1>
      <motion.p
        className="text-xl text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Crunchy on the outside. Cloud-native on the inside.
      </motion.p>
      <div className="flex space-x-4">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button className="border border-white text-white border-white hover:bg-white hover:text-black">
            <FileText className="mr-2 h-4 w-4" /> Resume
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/fixguy" target="_blank" rel="noopener noreferrer">
          <Button className="border border-white text-white hover:bg-white hover:text-black transition-colors duration-300">
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </Button>
        </a>
        <a href="mailto:patrick@neonacho.com">
          <Button className="border border-white text-white border-white hover:bg-white hover:text-black">
            <Mail className="mr-2 h-4 w-4" /> Email
          </Button>
        </a>
      </div>

    </div>
  );
}
