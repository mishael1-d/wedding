"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center bg-deep-green text-white px-4 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 border-[20px] border-white/10 m-4 md:m-8 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 max-w-4xl mx-auto"
      >
        <p className="text-gold uppercase tracking-[0.2em] mb-6 text-sm md:text-base font-serif">
          Together with their families
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-white">
            Gloria
          </h1>
          <span className="font-script text-4xl md:text-6xl text-gold">&</span>
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-white">
            Joseph
          </h1>
        </div>

        <p className="text-gold uppercase tracking-[0.2em] mb-8 text-sm md:text-base font-serif">
          Humbly welcome you to witness their wedding ceremony
        </p>

        <div className="flex items-center justify-center gap-6 text-white font-serif border-t border-b border-white/20 py-6 max-w-lg mx-auto">
          <div className="text-right">
            <span className="block text-lg uppercase tracking-widest">
              Friday
            </span>
          </div>
          <div className="text-5xl md:text-6xl font-bold text-gold px-6 border-l border-r border-white/20">
            05
          </div>
          <div className="text-left">
            <span className="block text-lg uppercase tracking-widest">Dec</span>
            <span className="block text-sm text-gold">2025</span>
          </div>
        </div>

        <p className="mt-6 font-serif text-xl">At 3 PM</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 animate-bounce"
      >
        <span className="text-gold text-2xl">↓</span>
      </motion.div>
    </section>
  );
}
