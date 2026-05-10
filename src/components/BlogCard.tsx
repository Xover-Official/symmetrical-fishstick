'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  image: string
  featured?: boolean
}

interface BlogCardProps {
  post: BlogPost
  variant?: 'default' | 'featured' | 'compact'
}

export function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  if (variant === 'featured') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:col-span-2"
      >
        <Link
          href={`/lab/${post.slug}`}
          className="group block glassmorphism border border-white/5 overflow-hidden"
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover grayscale contrast-110 opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-[2000ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-space-black via-space-black/30 to-transparent" />
            <span className="absolute top-fib-4 left-fib-4 mono-text text-[8px] text-space-black bg-specialist-orange px-fib-2 py-fib-1">
              FEATURED
            </span>
          </div>
          <div className="p-fib-6">
            <div className="flex items-center gap-fib-4 mb-fib-3">
              <span className="mono-text text-[8px] text-specialist-orange">{post.category}</span>
              <span className="mono-text text-[8px] text-titanium/30">{post.readTime}</span>
            </div>
            <h2 className="text-3xl font-display leading-tight mb-fib-3 group-hover:text-specialist-orange transition-colors">
              {post.title}
            </h2>
            <p className="text-titanium/50 text-sm leading-relaxed mb-fib-4">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-fib-2">
              <span className="mono-text text-[9px] text-titanium/40">ARCHIVE_DATE</span>
              <span className="mono-text text-[9px] text-titanium/60">{post.date}</span>
            </div>
          </div>
        </Link>
      </motion.article>
    )
  }

  if (variant === 'compact') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Link
          href={`/lab/${post.slug}`}
          className="group flex items-start gap-fib-4 p-fib-4 border border-white/5 hover:border-specialist-orange/30 transition-all duration-500"
        >
          <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover grayscale opacity-50 group-hover:opacity-80 transition-opacity"
            />
          </div>
          <div className="flex-1 min-w-0">
            <span className="mono-text text-[7px] text-specialist-orange block mb-fib-1">{post.category}</span>
            <h3 className="text-base font-display truncate group-hover:text-specialist-orange transition-colors">
              {post.title}
            </h3>
            <div className="flex items-center gap-fib-3 mt-fib-2">
              <span className="mono-text text-[7px] text-titanium/30">{post.date}</span>
              <span className="mono-text text-[7px] text-titanium/30">{post.readTime}</span>
            </div>
          </div>
        </Link>
      </motion.article>
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link
        href={`/lab/${post.slug}`}
        className="group block glassmorphism border border-white/5 overflow-hidden hover:border-specialist-orange/30 transition-all duration-500"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover grayscale contrast-110 opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-black via-space-black/20 to-transparent" />
          <span className="absolute top-fib-3 left-fib-3 mono-text text-[7px] text-titanium bg-space-black/50 backdrop-blur-sm px-fib-2 py-fib-1">
            {post.category}
          </span>
        </div>
        <div className="p-fib-5">
          <h2 className="text-xl font-display mb-fib-2 group-hover:text-specialist-orange transition-colors leading-tight">
            {post.title}
          </h2>
          <p className="text-titanium/50 text-xs leading-relaxed mb-fib-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="mono-text text-[7px] text-titanium/30">{post.date}</span>
            <span className="mono-text text-[7px] text-titanium/30">{post.readTime}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}