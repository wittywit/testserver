"use client"

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

export default function CaseStudiesPage() {
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
              CASE
              <br />
              STUDIES
            </h1>
            <p className="text-sm max-w-xs">
              Explore our portfolio of innovative design solutions that bridge technology and human experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <Link href={`/case-study/${study.slug}`} className="group">
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="text-sm text-[#fb4e4e]">{study.date}</div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal group-hover:text-[#fb4e4e] transition-colors break-words">
                      {study.title}
                    </h2>
                    <p className="text-gray-600">{study.description}</p>
                    <div className="flex items-center text-sm group-hover:text-[#fb4e4e] transition-colors">
                      VIEW CASE STUDY <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Case Studies Data
const caseStudies = [
  {
    title: "India Blockchain Week",
    slug: "india-blockchain-week",
    date: "DECEMBER 2023",
    description: "Complete branding, website, marketing, and NFT development for India's premier blockchain event.",
    image: "/placeholder.svg?height=600&width=1000",
  },
  {
    title: "Ethical AI Interface",
    slug: "ethical-ai-interface",
    date: "NOVEMBER 2023",
    description: "Creating human-centered interfaces for AI systems that prioritize transparency and trust.",
    image: "/placeholder.svg?height=600&width=1000",
  },
  {
    title: "Sustainable Tech Packaging",
    slug: "sustainable-tech-packaging",
    date: "OCTOBER 2023",
    description: "Developing eco-friendly packaging solutions for technology products.",
    image: "/placeholder.svg?height=600&width=1000",
  },
]
