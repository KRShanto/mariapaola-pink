"use client"

import FadeIn from "./animations/fade-in"
import StaggerChildren from "./animations/stagger-children"
import StaggerItem from "./animations/stagger-item"
import { motion } from "framer-motion"

export default function TestimonialsSection() {
  const testimonials = [
    {
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
      name: "Sarah Johnson",
      title: "CEO, TechVision",
      quote:
        "Mariapaola's LinkedIn optimization strategies transformed our online presence. We're now connecting with quality leads regularly and have seen a significant increase in our conversion rates.",
    },
    {
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
      name: "Mark Roberts",
      title: "Founder, Growth Co",
      quote:
        "The multilingual support and content creation services have helped us expand into new markets effectively. Mariapaola's strategic approach to LinkedIn has been instrumental in our company's growth over the past year.",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-primary-50" aria-label="Testimonials section" role="region">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center text-text-primary mb-12">Client Testimonials</h2>
        </FadeIn>

        <StaggerChildren staggerDelay={0.15}>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="bg-background p-8 rounded-xl shadow-sm h-full"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center mb-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-text-primary text-lg">{testimonial.name}</div>
                      <div className="text-text-muted text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                  <p className="text-text-secondary">{testimonial.quote}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}

