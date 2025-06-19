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

// Journal articles data - shared with [slug]/page.tsx
export const journalArticles = [
  {
    slug: "technology-with-empathy",
    title: "Building Technology with Empathy",
    date: "MAY 2, 2025",
    category: "Design Philosophy",
    excerpt: "How we create technology that serves people, not the other way around, through empathetic design practices.",
    image: "/placeholder.svg",
  },
  {
    slug: "gentle-future-interfaces",
    title: "The Gentle Future of Digital Interfaces",
    date: "APRIL 15, 2025",
    category: "Technology Design",
    excerpt: "Exploring how minimalism and thoughtful design can create more calming digital experiences.",
    image: "/placeholder.svg",
  },
  {
    slug: "blockchain-as-design-material",
    title: "Blockchain as a Design Material",
    date: "MARCH 28, 2025",
    category: "Technology Exploration",
    excerpt: "Understanding how blockchain technology can be approached as a design material with unique properties.",
    image: "/placeholder.svg",
  },
]

export default function JournalPage() {
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
              JOURNAL
            </h1>
            <p className="text-sm max-w-xs">
              Exploring the intersection of design, technology, and human experience through thoughtful writing and research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journal Entries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {journalArticles.map((article, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div variants={fadeIn}>
                  <Link href={`/journal/${article.slug}`} className="group">
                    <div className="relative aspect-[4/3] mb-6">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-sm text-[#fb4e4e] mb-2">{article.category}</div>
                    <h2 className="text-2xl mb-2 group-hover:text-[#fb4e4e] transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{article.date}</span>
                      <ArrowRight className="h-4 w-4 text-[#fb4e4e] transition-transform group-hover:translate-x-2" />
                    </div>
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
