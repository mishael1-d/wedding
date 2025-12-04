"use client";

import { motion } from "framer-motion";

export default function ProgramDownload() {
  return (
    <section className="py-24 px-4 bg-deep-green text-center text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="font-script text-5xl md:text-6xl mb-6 text-gold">
          Order of Program
        </h2>
        <p className="text-white/80 mb-10 leading-relaxed font-serif text-lg">
          We’ve gone paperless! Please download the digital program to follow
          along with our special day’s events.
        </p>

        <a
          href="/order-of-program.pdf"
          download="Gloria_Joseph_Wedding_Program.pdf"
          className="inline-block bg-gold text-deep-green font-serif font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-white transition-colors duration-300 transform hover:-translate-y-1"
        >
          Download Program PDF
        </a>
      </motion.div>
    </section>
  );
}
