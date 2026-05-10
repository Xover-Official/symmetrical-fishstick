'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import PageWrapper from '@/components/PageWrapper'
import { BlogCard } from '@/components/BlogCard'
import ScrambleText from '@/components/ScrambleText'

const blogPosts = [
  {
    slug: 'iphone-oled-vs-lcd-display-technology',
    title: 'OLED vs LCD: The Display Technology Deep Dive',
    excerpt: 'Understanding the fundamental differences between OLED and LCD displays. Why Apple transitioned and what it means for repairability.',
    category: 'DISPLAY_TECH',
    readTime: '8 MIN READ',
    date: '2025-01-15',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
  {
    slug: 'battery-health-myths-debunked',
    title: 'Battery Health: 5 Myths Debunked',
    excerpt: 'Separating fact from fiction about iPhone battery degradation, charging habits, and maximum capacity retention.',
    category: 'POWER_SYSTEMS',
    readTime: '6 MIN READ',
    date: '2025-01-10',
    image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&q=80&w=800',
  },
  {
    slug: 'water-damage-immediate-action-plan',
    title: 'Water Damage: Your Immediate Action Plan',
    excerpt: 'Critical steps to take within the first 60 seconds of water exposure. Why timing is everything in device recovery.',
    category: 'EMERGENCY_REPAIR',
    readTime: '5 MIN READ',
    date: '2025-01-05',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },
  {
    slug: 'face-id-technical-architecture',
    title: 'Face ID: The Technical Architecture',
    excerpt: 'How Apple TrueDepth camera system works, why repairs are complex, and what happens when it fails.',
    category: 'SECURITY_SYSTEMS',
    readTime: '10 MIN READ',
    date: '2024-12-28',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
  },
  {
    slug: 'board-level-repair-vs-replacement',
    title: 'Board-Level Repair vs. Replacement',
    excerpt: 'When component-level repair makes sense over wholesale board replacement. Cost, time, and reliability analysis.',
    category: 'BOARD_SURGERY',
    readTime: '7 MIN READ',
    date: '2024-12-20',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
  },
  {
    slug: 'iphone-thermal-management-explained',
    title: 'iPhone Thermal Management Explained',
    excerpt: 'Understanding heat generation, dissipation, and why thermal throttling occurs in modern Apple devices.',
    category: 'THERMAL_SYSTEMS',
    readTime: '9 MIN READ',
    date: '2024-12-15',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=800',
  },
]

const categories = [
  { id: 'all', name: 'ALL_POSTS' },
  { id: 'DISPLAY_TECH', name: 'DISPLAY_TECH' },
  { id: 'POWER_SYSTEMS', name: 'POWER_SYSTEMS' },
  { id: 'EMERGENCY_REPAIR', name: 'EMERGENCY_REPAIR' },
  { id: 'BOARD_SURGERY', name: 'BOARD_SURGERY' },
  { id: 'SECURITY_SYSTEMS', name: 'SECURITY_SYSTEMS' },
]

export default function Lab() {
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory)

  const featuredPost = blogPosts.find(post => post.featured)

  return (
    <SmoothScroll>
      <PageWrapper>
        <Navbar />

        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center pt-fib-9 px-fib-4 md:px-fib-7">
          <div className="absolute top-24 left-6 tech-label">TECHNICAL_ARCHIVE_V4</div>
          <div className="absolute top-24 right-6 tech-label">KNOWLEDGE_NETWORK</div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[1440px] mx-auto w-full"
          >
            <span className="mono-text text-specialist-orange mb-fib-4 block">TECHNICAL_AUTHORITY</span>
            <ScrambleText
              as="h1"
              text="The Lab"
              className="text-6xl md:text-8xl lg:text-9xl font-display leading-[0.85] tracking-tighter mb-fib-6"
            />
            <p className="text-base md:text-lg text-titanium/60 font-body max-w-2xl leading-relaxed">
              Technical deep-dives, repair guides, and hardware architecture insights.
              Knowledge documentation from the surgical restoration front lines.
            </p>
          </motion.div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-fib-7 px-fib-4 md:px-fib-7 border-t border-white/5">
            <div className="max-w-[1440px] mx-auto">
              <div className="grid md:grid-cols-2 gap-fib-6">
                <BlogCard post={featuredPost} variant="featured" />
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-fib-5 px-fib-4 md:px-fib-7 border-t border-white/5">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-wrap items-center gap-fib-3">
              <span className="mono-text text-[8px] text-specialist-orange">FILTER_PROTOCOL</span>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-fib-3 py-fib-2 mono-text text-[8px] transition-all duration-500 min-h-[44px] ${
                    activeCategory === category.id
                      ? 'bg-specialist-orange text-space-black'
                      : 'border border-white/10 hover:border-specialist-orange/50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-fib-7 px-fib-4 md:px-fib-7">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-fib-5">
              {filteredPosts
                .filter(post => !post.featured)
                .map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-fib-9 glassmorphism border border-white/5">
                <p className="mono-text text-titanium/40">NO_POSTS_MATCHING_CRITERIA</p>
                <Link
                  href="/lab"
                  onClick={() => setActiveCategory('all')}
                  className="inline-block mt-fib-4 px-fib-5 py-fib-2 border border-white/10 text-titanium/40 hover:border-specialist-orange/50 hover:text-titanium transition-all"
                >
                  CLEAR_FILTERS
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter / Subscribe */}
        <section className="py-fib-8 px-fib-4 md:px-fib-7 border-t border-white/5">
          <div className="max-w-[1440px] mx-auto">
            <div className="glassmorphism p-fib-7 border border-white/5 text-center max-w-2xl mx-auto">
              <span className="mono-text text-specialist-orange mb-fib-3 block">KNOWLEDGE_SUBSCRIPTION</span>
              <h2 className="text-3xl font-display tracking-tighter mb-fib-4">
                Technical Updates Direct
              </h2>
              <p className="text-titanium/50 text-sm mb-fib-6">
                Subscribe to receive technical deep-dives and repair case studies.
              </p>
              <form className="flex gap-fib-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="signal@point.domain"
                  className="flex-1 bg-white/[0.03] border border-white/10 px-fib-4 py-fib-3 text-sm font-mono text-titanium placeholder:text-titanium/20 focus:border-specialist-orange/50 focus:outline-none transition-colors min-h-[44px]"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-fib-6 py-fib-3 bg-specialist-orange text-space-black font-display text-[10px] uppercase tracking-widest hover:bg-titanium transition-all duration-700 min-h-[44px]"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </PageWrapper>
    </SmoothScroll>
  )
}