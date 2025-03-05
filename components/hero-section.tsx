"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Phone } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[800px] flex items-center" aria-label="Home section" role="region">
      <motion.div
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b61fb770e5-f50f657d89d620a627a5.png"
          alt="abstract professional background with linkedin themed elements, modern geometric shapes in pink colors, minimalist style"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 to-primary-800/80"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-text-light leading-tight mb-6"
            >
              I Guide You Master LinkedIn to Grow Online without Spending Money on Ads
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-text-light/90 mb-8"
            >
              Transform your LinkedIn presence and generate organic leads with proven strategies and expert guidance
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {/* Main CTA button */}
              <Link href="#contact">
                <motion.div
                  className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-text-light px-8 py-4 rounded-lg text-lg font-semibold"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <span className="flex items-center justify-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Book a Discovery Call
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="relative flex flex-col justify-center items-center"
          >
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1722631460154-l9KQsz6b1OReVRoTbo6R3ZKd8p6kq6.jpeg"
                alt="Professional headshot of Mariapaola"
                fill
                className="rounded-full object-cover shadow-2xl border-4 border-white/20"
                priority
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0.3)", "0 0 0 20px rgba(59, 130, 246, 0)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />
            </div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-text-light text-2xl sm:text-3xl font-medium mt-6"
            >
              Mariapaola Gatti
            </motion.h3>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

