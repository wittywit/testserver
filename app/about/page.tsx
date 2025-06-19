"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="mt-12 mb-8">
        <h1 className="text-5xl font-normal">ABOUT</h1>
        <div className="accent-bar"></div>
      </div>

      <div className="border-t border-gray-200 mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div className="relative">
          <div className="relative aspect-[4/5]">
            <Image src="/fish_frame.png?height=1000&width=900" alt="Studio space" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 border border-[hsl(var(--accent))] translate-x-4 translate-y-4 z-[-1]"></div>
        </div>
        <div>
          <h2 className="text-3xl mb-6">Our Studio</h2>
          <div className="accent-bar"></div>
          <div className="space-y-4 text-lg">
            <p>
            Studio Poetics is a multidisciplinary design studio focused on making sense of the everyday.
            Founded in 2023, we started as a research project exploring how design, philosophy, and daily life intersect. Today, we work across objects, spaces, and experiences — creating thoughtful, minimal, and culturally grounded design.
            </p>
            <p>
            We believe that emerging technologies should fit into everyday life without causing disruption. Our approach helps new tools and ideas integrate smoothly into existing cultures and communities.
            </p>
            <p>
            Through our experiments, writing, and design practice, we encourage slower, more intentional ways of seeing and making.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-24" id="philosophy">
        <h2 className="text-3xl mb-6">Our Philosophy</h2>
        <div className="accent-bar"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4 text-lg">
            <p>
            At Studio Poetics, we treat simplicity as a design principle and a mindset. We see space, silence, and restraint not as emptiness, but as room for meaning to emerge.
            </p>
            <p>
              We believe that by stripping away the unnecessary, we can reveal the inherent beauty and meaning in
              ordinary objects and experiences. Our approach is characterized by:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Embracing emptiness as a creative force</li>
              <li>Attention to subtle material qualities</li>
              <li>Appreciation for natural processes and changes</li>
              <li>Thoughtful consideration of how objects exist in space and time</li>
              <li>Respect for craftsmanship and material integrity</li>
            </ul>
          </div>
          <div className="relative">
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="White objects arrangement"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 border border-[hsl(var(--accent))] -translate-x-4 -translate-y-4 z-[-1]"></div>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl mb-6">Our Founding Team</h2>
        <div className="accent-bar"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div key={index} className="">
              <div className="relative aspect-[3/4]">
                <Image src={member.image || "/Pranshu_Kumar_Chaudhary.png"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-1">{member.name}</h3>
                <p className="text-[#fb4e4e] text-sm mb-4">{member.role}</p>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl mb-6">Our Team</h2>
        <div className="accent-bar"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interns.map((intern, index) => (
            <div key={index} className="">
              <div className="relative aspect-[3/4]">
                <Image src={intern.image || "/placeholder.svg"} alt={intern.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-1">{intern.name}</h3>
                <p className="text-[#fb4e4e] text-sm mb-4">{intern.role}</p>
                <p>{intern.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div>
          <h2 className="text-3xl mb-6">Contact Us</h2>
          <div className="accent-bar"></div>
          <div className="space-y-4">
            <p className="text-lg">
              We welcome inquiries, collaborations, and conversations about our work and philosophy.
            </p>
            <div className="space-y-2">
              <p>
                <strong>Email:</strong> hello@poetics.studio
              </p>
              <p>
                <strong>Studio:</strong> Studio Poetics, Goa / Pryaagraj, India
              </p>
              <p>
                <strong>Hours:</strong> Monday–Friday, 10:00–18:00
              </p>
            </div>
            <div className="pt-4">
              <p className="mb-2">
                <strong>Follow Us</strong>
              </p>
              <div className="flex gap-4">
                <Link href="https://instagram.com" className="hover:text-[hsl(var(--accent))]">
                  Instagram
                </Link>
                <Link href="https://twitter.com" className="hover:text-[hsl(var(--accent))]">
                  Twitter
                </Link>
                <Link href="https://pinterest.com" className="hover:text-[hsl(var(--accent))]">
                  Pinterest
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-square">
            <Image src="/placeholder.svg?height=800&width=800" alt="Studio space" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 border border-[hsl(var(--accent))] translate-x-4 translate-y-4 z-[-1]"></div>
        </div>
      </div>
    </div>
  )
}

const team = [
  {
    name: "R M Udahayan",
    role: "Game Designer and XR",
    bio: "Udhayan's Work focuses on developing and envisioning the application of XR and designing and building all of our cozy games.",
    image: "/udhayan.jpg?height=900&width=600",
  },
  {
    name: "Pranshu Chaudhary",
    role: "Playful Futurist",
    bio: "With a background in engineering and design, Pranshu founded Studio Poetics to explore the intersection of design and everyday life.",
    image: "/Pranshu_Kumar_Chaudhary.png?height=900&width=600",
  },
  {
    name: "Monalisa Thakur",
    role: "Designer & Material Researcher",
    bio: "Monalisa's work focuses on material explorations and the sensory qualities of objects, with special attention to visual storytelling, texture and tactility.",
    image: "/monalisa.png?height=900&width=600",
  },
]

const interns = [
  {
    name: "Intern Name",
    role: "Design Intern",
    bio: "Currently pursuing design studies, focusing on user experience and interaction design. Passionate about creating meaningful digital experiences.",
    image: "/placeholder.svg?height=900&width=600",
  },
  {
    name: "Intern Name",
    role: "Research Intern",
    bio: "Studying design research and cultural anthropology. Interested in understanding how technology shapes human behavior and cultural practices.",
    image: "/placeholder.svg?height=900&width=600",
  },
  {
    name: "Intern Name",
    role: "Development Intern",
    bio: "Computer science student with a focus on human-computer interaction. Exploring ways to make technology more accessible and intuitive.",
    image: "/placeholder.svg?height=900&width=600",
  },
]
