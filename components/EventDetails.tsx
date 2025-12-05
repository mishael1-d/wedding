"use client";

import { motion } from "framer-motion";

export default function EventDetails() {
  return (
    <section className="py-20 px-4 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-block p-2 rounded-full bg-soft-green mb-6">
            <span className="text-3xl">📍</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-deep-green mb-4">
            The Ceremony
          </h2>
          <p className="font-serif text-xl text-gray-600 max-w-md mx-auto leading-relaxed">
            Cenon Pavilion, 181 Bakori Rd,
            <br />
            PW, Abuja 901101,
            <br />
            Phase 3 Kubwa
          </p>
          <p className="mt-4 text-gold italic font-serif">Reception within</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-soft-green p-8 md:p-12 rounded-2xl border border-gold/20"
        >
          <h3 className="font-serif text-2xl text-deep-green mb-6 border-b border-deep-green/10 pb-4 inline-block px-8">
            RSVP
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 font-serif text-lg text-deep-green">
            <div>
              <p className="font-bold mb-1">Favour</p>
              <a
                href="tel:08160105587"
                className="hover:text-gold transition-colors"
              >
                08160105587
              </a>
            </div>
            <div>
              <p className="font-bold mb-1">Peter</p>
              <a
                href="tel:08126047874"
                className="hover:text-gold transition-colors"
              >
                08126047874
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <p className="font-serif italic text-gray-500 text-lg">
            "Nevertheless, let every one of you in particular so love his wife
            even as himself; and the wife see that she reverence her husband."
          </p>
          <p className="text-gold mt-2 font-serif">— Ephesians 5:33 KJV</p>
        </motion.div>
      </div>
    </section>
  );
}
