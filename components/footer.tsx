"use client";

import { motion } from "framer-motion";
import FadeIn from "./animations/fade-in";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="bg-secondary-900 text-text-light py-12"
      aria-label="Footer section"
      role="contentinfo"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <FadeIn delay={0.1}>
            <div>
              <h3 className="text-xl font-bold mb-4">MPG VA Services</h3>
              <p className="text-secondary-400">
                Helping businesses grow through strategic LinkedIn optimization
                and digital marketing.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-secondary-400">
                <li>LinkedIn Optimization</li>
                <li>Digital Marketing</li>
                <li>Content Creation</li>
                <li>Multilingual Support</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-secondary-400">
                <li>
                  <i className="fa-regular fa-envelope mr-2"></i>{" "}
                  contact@mpgvaservices.com
                </li>
                <li>
                  <i className="fa-solid fa-phone mr-2"></i> +1 (555) 123-4567
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="text-2xl text-secondary-400 hover:text-primary-500 transition-colors"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fa-brands fa-linkedin"></i>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-2xl text-secondary-400 hover:text-primary-500 transition-colors"
                  aria-label="Twitter"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fa-brands fa-twitter"></i>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-2xl text-secondary-400 hover:text-primary-500 transition-colors"
                  aria-label="Instagram"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fa-brands fa-instagram"></i>
                </motion.a>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.5}>
          <div className="border-t border-secondary-800 mt-12 pt-8 text-center text-secondary-400">
            <p>&copy; {currentYear} MPG VA Services. All rights reserved.</p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
