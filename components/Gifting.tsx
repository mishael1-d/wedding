"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gifting() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle"
  );

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus("copied");
      setTimeout(() => setCopyStatus("idle"), 2000);
    } catch (err) {
      // Fallback for older browsers or when clipboard API fails
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed"; // Avoid scrolling to bottom
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);

        if (successful) {
          setCopyStatus("copied");
          setTimeout(() => setCopyStatus("idle"), 2000);
        } else {
          throw new Error("Fallback copy failed");
        }
      } catch (fallbackErr) {
        console.error("Failed to copy:", err, fallbackErr);
        setCopyStatus("error");
        setTimeout(() => setCopyStatus("idle"), 2000);
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-cream text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-block p-3 rounded-full bg-soft-blue mb-6">
            <span className="text-3xl">🎁</span>
          </div>
          <h2 className="font-script text-5xl md:text-6xl text-navy-blue mb-4">
            Gifting
          </h2>
          <p className="font-serif text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your presence at our wedding is the greatest gift of all. However,
            if you wish to honour us with a gift, a cash gift would be very
            welcome.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Groom's Account */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gold/20"
          >
            <h3 className="font-serif text-xl text-navy-blue mb-6 border-b border-gray-100 pb-4 text-center">
              Groom's Account
            </h3>

            <div className="space-y-4 text-left">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                  Bank Name
                </p>
                <p className="font-serif text-lg text-navy-blue font-bold">
                  Zenith Bank
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                  Account Name
                </p>
                <p className="font-serif text-base text-navy-blue font-bold">
                  Onwukaife Somtochukwu Joseph
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                  Account Number
                </p>
                <div className="flex items-center gap-3">
                  <p className="font-serif text-xl text-gold font-bold tracking-wider">
                    2178450979
                  </p>
                  <div className="relative">
                    <button
                      onClick={() => handleCopy("2178450979")}
                      className="text-gray-400 hover:text-navy-blue transition-colors text-sm focus:outline-none"
                      title="Copy to clipboard"
                    >
                      (Copy)
                    </button>
                    <AnimatePresence>
                      {copyStatus === "copied" && (
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: -20 }}
                          exit={{ opacity: 0 }}
                          className="absolute left-1/2 -translate-x-1/2 -top-2 bg-navy-blue text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap"
                        >
                          Copied!
                        </motion.span>
                      )}
                      {copyStatus === "error" && (
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: -20 }}
                          exit={{ opacity: 0 }}
                          className="absolute left-1/2 -translate-x-1/2 -top-2 bg-red-500 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap"
                        >
                          Failed to copy
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bride's Account */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gold/20"
          >
            <h3 className="font-serif text-xl text-navy-blue mb-6 border-b border-gray-100 pb-4 text-center">
              Bride's Account
            </h3>

            <div className="space-y-4 text-left">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                  Bank Name
                </p>
                <p className="font-serif text-lg text-navy-blue font-bold">
                  Zenith Bank
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                  Account Name
                </p>
                <p className="font-serif text-base text-navy-blue font-bold">
                  Ewuruje Gloria Ese-Oghene
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                  Account Number
                </p>
                <div className="flex items-center gap-3">
                  <p className="font-serif text-xl text-gold font-bold tracking-wider">
                    2119488971
                  </p>
                  <div className="relative">
                    <button
                      onClick={() => handleCopy("2119488971")}
                      className="text-gray-400 hover:text-navy-blue transition-colors text-sm focus:outline-none"
                      title="Copy to clipboard"
                    >
                      (Copy)
                    </button>
                    <AnimatePresence>
                      {copyStatus === "copied" && (
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: -20 }}
                          exit={{ opacity: 0 }}
                          className="absolute left-1/2 -translate-x-1/2 -top-2 bg-navy-blue text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap"
                        >
                          Copied!
                        </motion.span>
                      )}
                      {copyStatus === "error" && (
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: -20 }}
                          exit={{ opacity: 0 }}
                          className="absolute left-1/2 -translate-x-1/2 -top-2 bg-red-500 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap"
                        >
                          Failed to copy
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <p className="font-script text-4xl md:text-5xl text-navy-blue mb-4">
            Thank You!
          </p>
          <p className="font-serif text-lg text-gray-600 italic">
            For your love, prayers, and support as we begin our journey
            together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
