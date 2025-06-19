"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { basePath } from "@/lib/basePath"

// const experiments = [
//   {
//     title: "Morning Light",
//     description: "A study of how natural light transforms spaces throughout the day.",
//     image: "/images/experiments/morning-light.jpg",
//     slug: "morning-light"
//   },
//   {
//     title: "Water Surface",
//     description: "Exploring the dynamic patterns and reflections created by water surfaces.",
//     image: "/images/experiments/water-surface.jpg",
//     slug: "water-surface"
//   },
//   {
//     title: "Shadow Compositions",
//     description: "Investigating the interplay of light and shadow in architectural spaces.",
//     image: "/images/experiments/shadow-compositions.jpg",
//     slug: "shadow-compositions"
//   },
//   {
//     title: "Weathered Wood",
//     description: "Documenting the natural aging process and patina of wooden surfaces.",
//     image: "/images/experiments/weathered-wood.jpg",
//     slug: "weathered-wood"
//   },
//   {
//     title: "Urban Negative Spaces",
//     description: "Examining the overlooked voids and gaps in urban environments.",
//     image: "/images/experiments/urban-negative-spaces.jpg",
//     slug: "urban-negative-spaces"
//   },
//   {
//     title: "Condensation Patterns",
//     description: "Capturing the ephemeral beauty of condensation on various surfaces.",
//     image: "/images/experiments/condensation-patterns.jpg",
//     slug: "condensation-patterns"
//   }
// ]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function ExperimentsPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 py-12"
    >
      <div className="mb-8">
        <h1 className="text-5xl font-normal">EXPERIMENTS</h1>
        <div className="accent-bar"></div>
      </div>
      
      <div className="border-t border-gray-200 mb-12"></div>
      
      <motion.div 
        variants={itemVariants}
        className="max-w-2xl mx-auto text-center py-20"
      >
        <h2 className="text-3xl mb-4">More Updates Coming Soon</h2>
        <p className="text-gray-600">
          We're currently working on documenting our latest experiments and research.
          Check back soon for new content exploring the intersection of design, technology, and human experience.
        </p>
      </motion.div>
    </motion.div>
  )
} 