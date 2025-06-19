"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export default function MaterialResearchService() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#fb4e4e] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl md:text-7xl font-normal mb-6">
              MATERIAL
              <br />
              RESEARCH
            </h1>
            <p className="text-sm max-w-xs">
              Exploring the intersection of traditional materials and emerging technologies to create innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Meta */}
      <AnimatedSection>
        <div className="case-study-meta">
          <motion.div className="case-study-meta-item" variants={fadeIn}>
            <div className="case-study-meta-label">DURATION</div>
            <div className="case-study-meta-value">12-16 weeks</div>
          </motion.div>
          <motion.div className="case-study-meta-item" variants={fadeIn}>
            <div className="case-study-meta-label">DELIVERABLES</div>
            <div className="case-study-meta-value">Research Report, Material Samples, Prototypes, Documentation</div>
          </motion.div>
          <motion.div className="case-study-meta-item" variants={fadeIn}>
            <div className="case-study-meta-label">TEAM</div>
            <div className="case-study-meta-value">2-3 members</div>
          </motion.div>
          <motion.div className="case-study-meta-item" variants={fadeIn}>
            <div className="case-study-meta-label">PRICING</div>
            <div className="case-study-meta-value">
              <span className="text-[#fb4e4e]">Contact for details</span>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Overview Section */}
      <AnimatedSection>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl mb-6">Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Our material research service explores the possibilities at the intersection of traditional materials
                    and emerging technologies. We investigate how new materials and processes can create more
                    sustainable, functional, and meaningful products.
                  </p>
                  <p>
                    Through hands-on experimentation and systematic research, we develop innovative material solutions
                    that address contemporary challenges while respecting cultural and environmental contexts.
                  </p>
                </div>
              </motion.div>
              <motion.div className="relative aspect-[4/3]" variants={fadeIn}>
                <Image
                  src="/placeholder.svg"
                  alt="Material research overview"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.h2 className="text-3xl mb-12" variants={fadeIn}>
              Our Process
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={fadeIn} className="bg-white p-8 rounded-lg">
                <div className="text-4xl text-[#fb4e4e] mb-4">01</div>
                <h3 className="text-xl mb-4">Exploration</h3>
                <p className="text-gray-600">
                  We investigate traditional materials and emerging technologies to identify potential combinations and
                  applications.
                </p>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-white p-8 rounded-lg">
                <div className="text-4xl text-[#fb4e4e] mb-4">02</div>
                <h3 className="text-xl mb-4">Experimentation</h3>
                <p className="text-gray-600">
                  We conduct hands-on experiments to test material properties, processes, and potential applications.
                </p>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-white p-8 rounded-lg">
                <div className="text-4xl text-[#fb4e4e] mb-4">03</div>
                <h3 className="text-xl mb-4">Documentation</h3>
                <p className="text-gray-600">
                  We document our findings and create detailed reports with recommendations for implementation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Related Case Studies */}
      <AnimatedSection>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-12">
              <motion.h2 className="text-3xl" variants={fadeIn}>
                Related Case Studies
              </motion.h2>
              <motion.div variants={fadeIn}>
                <Link href="/case-study" className="flex items-center text-sm hover:text-[#fb4e4e]">
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div variants={fadeIn}>
                <Link href="/case-study/sustainable-tech-packaging" className="group">
                  <div className="relative aspect-[4/3] mb-6">
                    <Image
                      src="/placeholder.svg"
                      alt="Sustainable Tech Packaging"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl mb-2 group-hover:text-[#fb4e4e] transition-colors">
                    Sustainable Tech Packaging
                  </h3>
                  <p className="text-gray-600">
                    Developing eco-friendly packaging solutions for technology products.
                  </p>
                </Link>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Link href="/case-study/india-blockchain-week" className="group">
                  <div className="relative aspect-[4/3] mb-6">
                    <Image
                      src="/placeholder.svg"
                      alt="India Blockchain Week"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl mb-2 group-hover:text-[#fb4e4e] transition-colors">
                    India Blockchain Week
                  </h3>
                  <p className="text-gray-600">
                    Complete branding and website development for a major blockchain event.
                  </p>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <motion.h2 className="text-4xl mb-6" variants={fadeIn}>
              Ready to Explore New Materials?
            </motion.h2>
            <motion.p className="text-lg mb-8 max-w-2xl mx-auto" variants={fadeIn}>
              Let's discover innovative material solutions that can transform your products and processes.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link
                href="/contact"
                className="inline-flex items-center text-lg border-b-2 border-[#fb4e4e] pb-1 hover:text-[#fb4e4e]"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
} 