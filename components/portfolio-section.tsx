"use client"

import FadeIn from "./animations/fade-in"
import StaggerChildren from "./animations/stagger-children"
import StaggerItem from "./animations/stagger-item"
import HoverCard from "./animations/hover-card"

export default function PortfolioSection() {
  const portfolioItems = [
    {
      category: "Tech Startup",
      title: "300% LinkedIn Engagement Growth",
      description: "Implemented strategic content plan resulting in triple engagement rates within 3 months.",
    },
    {
      category: "Professional Services",
      title: "50+ Qualified Leads Generated",
      description: "Optimized profile and content strategy leading to consistent monthly lead generation.",
    },
    {
      category: "E-commerce Brand",
      title: "5X Network Growth",
      description: "Strategic connection building resulting in exponential network expansion.",
    },
    {
      category: "SaaS Company",
      title: "12 High-Value Partnerships",
      description: "Facilitated strategic B2B connections leading to valuable partnership opportunities.",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-background" aria-label="Portfolio section" role="region">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center text-text-primary mb-12">Success Stories</h2>
        </FadeIn>

        <StaggerChildren staggerDelay={0.15}>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <StaggerItem key={index}>
                <HoverCard className="bg-primary-50 rounded-xl overflow-hidden h-full">
                  <div className="p-6">
                    <div className="text-primary-600 font-semibold mb-2">{item.category}</div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">{item.title}</h3>
                    <p className="text-text-secondary">{item.description}</p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}

