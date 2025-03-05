"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./animations/fade-in";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(
        "Thank you for your message! We will get back to you soon."
      );
      setFormData({ name: "", email: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-primary-200 relative overflow-hidden"
      aria-label="Contact section"
      role="region"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-primary-300 rounded-full opacity-40"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ filter: "blur(60px)" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400 rounded-full opacity-30"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ filter: "blur(70px)" }}
      />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-primary-800 mb-6">
              Ready to Elevate Your LinkedIn Game?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-primary-700 mb-8">
              Let&apos;s discuss how we can transform your LinkedIn presence and
              generate organic leads.
            </p>
          </FadeIn>

          <AnimatePresence>
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-background text-primary-600 p-4 rounded-2xl mb-6 font-medium shadow-md"
              >
                {submitMessage}
              </motion.div>
            )}
          </AnimatePresence>

          <FadeIn delay={0.2}>
            <motion.div
              className="bg-background shadow-lg p-8 rounded-3xl border border-primary-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <form className="space-y-4" onSubmit={handleSubmit}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all bg-primary-50 border border-primary-200"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all bg-primary-50 border border-primary-200"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all bg-primary-50 border border-primary-200"
                    required
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-primary-500 to-primary-600 text-text-light px-8 py-4 rounded-2xl text-lg font-semibold w-full disabled:opacity-70"
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && (
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </motion.svg>
                    )}
                  </span>
                </motion.button>
              </form>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
