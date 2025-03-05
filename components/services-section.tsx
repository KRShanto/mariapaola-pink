"use client"

import FadeIn from "./animations/fade-in"
import StaggerChildren from "./animations/stagger-children"
import StaggerItem from "./animations/stagger-item"
import HoverCard from "./animations/hover-card"

export default function ServicesSection() {
  const services = [
    {
      icon: "fa-brands fa-linkedin",
      title: "LinkedIn Optimization & Lead Generation",
      description: "Strategic profile enhancement and organic lead generation techniques that drive real results.",
    },
    {
      icon: "fa-solid fa-bullhorn",
      title: "Digital Marketing & Social Media",
      description:
        "Comprehensive digital marketing strategies across multiple platforms to boost your online presence.",
    },
    {
      icon: "fa-solid fa-palette",
      title: "Content Creation & Canva Design",
      description: "Eye-catching visuals and compelling content that captures your audience's attention.",
    },
    {
      icon: "fa-solid fa-language",
      title: "Multilingual Support",
      description: "Professional services in English, French, Spanish, and Italian for global reach.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-primary-50" aria-label="Services section" role="region">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center text-text-primary mb-12">Core Services</h2>
        </FadeIn>

        <StaggerChildren staggerDelay={0.1}>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <HoverCard className="bg-background p-8 rounded-xl shadow-sm h-full">
                  <i className={`${service.icon} text-4xl text-primary-600 mb-4`}></i>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">{service.title}</h3>
                  <p className="text-text-secondary">{service.description}</p>
                </HoverCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}

