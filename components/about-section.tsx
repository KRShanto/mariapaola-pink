"use client";

import Image from "next/image";
import FadeIn from "./animations/fade-in";
import ScaleIn from "./animations/scale-in";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-background"
      aria-label="About section"
      role="region"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScaleIn delay={0.1}>
            <div className="relative">
              <Image
                className="rounded-2xl shadow-xl"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/afcae687ca-a0042ec48e6966467b98.png"
                alt="professional female consultant working at desk with laptop, warm lighting, business casual attire"
                width={800}
                height={533}
                layout="responsive"
              />
            </div>
          </ScaleIn>
          <div>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Meet Mariapaola
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div
                id="quick-intro"
                className="bg-primary-50 p-6 rounded-xl mb-8 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-primary-600 mb-3">
                  <i className="fa-regular fa-clock mr-2"></i>
                  For those who like to get straight to the point
                </h3>
                <p className="text-text-secondary">
                  Founder of MPG VA Services with 20+ years of experience in
                  digital marketing. LinkedIn optimization specialist helping
                  businesses grow organically.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div
                id="detailed-intro"
                className="bg-primary-50 p-6 rounded-xl hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-primary-600 mb-3">
                  <i className="fa-regular fa-star mr-2"></i>
                  For those with a little more time
                </h3>
                <p className="text-text-secondary mb-4">
                  Hello! I&apos;m Mariapaola, your digital marketing ally. With
                  over two decades of experience, I&apos;ve mastered the art of
                  LinkedIn optimization and lead generation. As the founder of
                  MPG VA Services, I help businesses leverage the power of
                  LinkedIn to create meaningful connections and drive growth -
                  all without spending a dime on ads.
                </p>
                <p className="text-text-secondary">
                  My approach combines strategic thinking with authentic
                  relationship building, ensuring your LinkedIn presence truly
                  reflects your brand&apos;s value.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
