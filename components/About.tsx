"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl text-deep-green mb-4">
            The Happy Couple
          </h2>
          <p className="text-gold italic font-serif">Two hearts, one story.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-64 h-80 mb-8 rounded-full overflow-hidden shadow-xl border-4 border-gold/30">
              <Image
                src="/bride.svg"
                alt="Gloria"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-3xl text-deep-green mb-2">
              Gloria Ese-Oghene
            </h3>
            <p className="text-gold uppercase tracking-widest text-sm mb-4">
              The Bride
            </p>
            <p className="text-gray-600 leading-relaxed max-w-md font-serif">
              Gloria loves coffee, rainy days, and Joseph's terrible jokes. She
              can't wait to start their greatest adventure yet.
            </p>
          </motion.div>

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-64 h-80 mb-8 rounded-full overflow-hidden shadow-xl border-4 border-gold/30">
              <Image
                src="/groom.svg"
                alt="Joseph"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-3xl text-deep-green mb-2">
              Somtochukwu Joseph
            </h3>
            <p className="text-gold uppercase tracking-widest text-sm mb-4">
              The Groom
            </p>
            <p className="text-gray-600 leading-relaxed max-w-md font-serif">
              Joseph is an avid hiker, amateur chef, and Gloria's biggest fan.
              He's ready to say "I do" to his best friend.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
