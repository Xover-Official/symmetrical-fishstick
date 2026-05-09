'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import PageWrapper from '@/components/PageWrapper'
import ScrambleText from '@/components/ScrambleText'

interface Product {
  id: number
  name: string
  model: string
  storage: string
  grade: string
  price: number
  originalPrice: number
  batteryHealth: number
  cycleCount: number
  displayType: string
  image: string
  color: string
  chip: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    model: 'A2849',
    storage: '256GB',
    grade: 'Grade A+ Architectural',
    price: 485000,
    originalPrice: 549900,
    batteryHealth: 100,
    cycleCount: 12,
    displayType: 'SUPER_RETINA_XDR_OLED',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800',
    color: 'NATURAL_TITANIUM',
    chip: 'A17_PRO'
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    model: 'A2848',
    storage: '128GB',
    grade: 'Grade A+ Architectural',
    price: 395000,
    originalPrice: 449900,
    batteryHealth: 98,
    cycleCount: 45,
    displayType: 'SUPER_RETINA_XDR_OLED',
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800',
    color: 'BLUE_TITANIUM',
    chip: 'A17_PRO'
  },
  {
    id: 3,
    name: 'iPhone 15',
    model: 'A3090',
    storage: '128GB',
    grade: 'Grade A Premium',
    price: 265000,
    originalPrice: 299900,
    batteryHealth: 97,
    cycleCount: 89,
    displayType: 'SUPER_RETINA_XDR_OLED',
    image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&q=80&w=800',
    color: 'PINK',
    chip: 'A16_BIONIC'
  },
  {
    id: 4,
    name: 'iPhone 14 Pro Max',
    model: 'A2894',
    storage: '512GB',
    grade: 'Grade A+ Architectural',
    price: 365000,
    originalPrice: 429900,
    batteryHealth: 99,
    cycleCount: 34,
    displayType: 'SUPER_RETINA_XDR_OLED',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be59a8d34?auto=format&fit=crop&q=80&w=800',
    color: 'SPACE_BLACK',
    chip: 'A16_BIONIC'
  },
  {
    id: 5,
    name: 'iPhone 14',
    model: 'A2882',
    storage: '256GB',
    grade: 'Grade A Premium',
    price: 215000,
    originalPrice: 259900,
    batteryHealth: 96,
    cycleCount: 120,
    displayType: 'SUPER_RETINA_XDR_OLED',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=800',
    color: 'MIDNIGHT',
    chip: 'A15_BIONIC'
  },
  {
    id: 6,
    name: 'iPhone 13 Pro',
    model: 'A2638',
    storage: '128GB',
    grade: 'Grade B Technical',
    price: 145000,
    originalPrice: 189900,
    batteryHealth: 94,
    cycleCount: 245,
    displayType: 'SUPER_RETINA_XDR_OLED',
    image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&q=80&w=800',
    color: 'GRAPHITE',
    chip: 'A15_BIONIC'
  },
]

const grades = ['All', 'Grade A+ Architectural', 'Grade A Premium', 'Grade B Technical']
const series = ['All', 'iPhone 15 Series', 'iPhone 14 Series', 'iPhone 13 Series']
const storageOptions = ['All', '128GB', '256GB', '512GB']

export default function Collection() {
  const [mounted, setMounted] = useState(false)
  const [selectedGrade, setSelectedGrade] = useState('All')
  const [selectedSeries, setSelectedSeries] = useState('All')
  const [selectedStorage, setSelectedStorage] = useState('All')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredProducts = products.filter(product => {
    const gradeMatch = selectedGrade === 'All' || product.grade === selectedGrade
    const seriesMatch = selectedSeries === 'All' || product.name.includes(selectedSeries.replace(' Series', ''))
    const storageMatch = selectedStorage === 'All' || product.storage === selectedStorage
    return gradeMatch && seriesMatch && storageMatch
  })

  if (!mounted) return null

  return (
    <SmoothScroll>
      <PageWrapper>
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-fib-9 px-fib-4 md:px-fib-7">
          <div className="absolute top-24 left-6 tech-label">
            CURATED_ACQUISITION_V2
          </div>
          <div className="absolute top-24 right-6 tech-label">
            NODE_LAHORE_STUDIO
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-4xl"
          >
            <span className="mono-text text-specialist-orange mb-fib-4 block">CURATION_PROTOCOL_ENGAGED</span>
            <ScrambleText 
              as="h1" 
              text="Curated Acquisition" 
              className="text-6xl md:text-8xl lg:text-9xl font-display leading-[0.85] tracking-tighter mb-fib-6"
            />
            <p className="text-base md:text-lg text-titanium/60 font-body max-w-2xl mx-auto">
              Each device in our collection undergoes 47-point technical validation. 
              Only units achieving Grade A+ status enter the architectural archive.
            </p>
          </motion.div>
        </section>

        {/* Filter Protocol */}
        <section className="py-fib-5 px-fib-4 md:px-fib-7 border-y border-white/5">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-fib-4">
              <div className="mono-text text-specialist-orange mr-fib-4">FILTER_PROTOCOL</div>
              
              <div className="flex flex-wrap items-center gap-fib-6">
                {/* Grade Filter */}
                <div className="flex items-center gap-fib-3">
                  <span className="mono-text text-[8px] text-titanium/30">GRADE</span>
                  <div className="flex gap-fib-2">
                    {grades.map((grade) => (
                      <button
                        key={grade}
                        onClick={() => setSelectedGrade(grade)}
                        className={`px-fib-2 py-fib-1 text-[8px] mono-text transition-all duration-500 ${
                          selectedGrade === grade 
                            ? 'bg-specialist-orange text-space-black' 
                            : 'border border-white/10 hover:border-specialist-orange/50'
                        }`}
                      >
                        {grade}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Series Filter */}
                <div className="flex items-center gap-fib-3">
                  <span className="mono-text text-[8px] text-titanium/30">SERIES</span>
                  <div className="flex gap-fib-2">
                    {series.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSeries(s)}
                        className={`px-fib-2 py-fib-1 text-[8px] mono-text transition-all duration-500 ${
                          selectedSeries === s 
                            ? 'bg-specialist-orange text-space-black' 
                            : 'border border-white/10 hover:border-specialist-orange/50'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Storage Filter */}
                <div className="flex items-center gap-fib-3">
                  <span className="mono-text text-[8px] text-titanium/30">STORAGE</span>
                  <div className="flex gap-fib-2">
                    {storageOptions.map((storage) => (
                      <button
                        key={storage}
                        onClick={() => setSelectedStorage(storage)}
                        className={`px-fib-2 py-fib-1 text-[8px] mono-text transition-all duration-500 ${
                          selectedStorage === storage 
                            ? 'bg-specialist-orange text-space-black' 
                            : 'border border-white/10 hover:border-specialist-orange/50'
                        }`}
                      >
                        {storage}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="ml-auto hidden lg:block mono-text text-[8px] text-titanium/30">
                {filteredProducts.length} UNITS_AVAILABLE
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-fib-8 px-fib-4 md:px-fib-7">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-fib-6">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="group relative"
                  >
                    <div className="glassmorphism border border-white/5 overflow-hidden transition-all duration-700 hover:border-specialist-orange/30">
                      {/* Image Container */}
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <Image 
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover grayscale contrast-125 opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-[2000ms]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-space-black via-space-black/20 to-transparent" />
                        
                        {/* Grade Badge */}
                        <div className="absolute top-fib-4 left-fib-4">
                          <span className="mono-text text-[8px] text-space-black bg-specialist-orange px-fib-2 py-fib-1">
                            {product.grade}
                          </span>
                        </div>

                        {/* Model Reference */}
                        <div className="absolute top-fib-4 right-fib-4">
                          <span className="mono-text text-[8px] text-titanium/40 border border-titanium/10 px-fib-2 py-fib-1 bg-space-black/50 backdrop-blur-sm">
                            {product.model}
                          </span>
                        </div>

                        {/* Technical Specs Overlay - Visible on Hover */}
                        <AnimatePresence>
                          {hoveredId === product.id && (
                            <motion.div 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute bottom-0 left-0 right-0 p-fib-4 bg-space-black/90 backdrop-blur-xl border-t border-white/10"
                            >
                              <div className="grid grid-cols-2 gap-fib-3">
                                <div className="space-y-fib-1">
                                  <span className="mono-text text-[7px] text-titanium/30 block">BATTERY_HEALTH</span>
                                  <span className="font-mono text-sm text-live-green">{product.batteryHealth}%</span>
                                </div>
                                <div className="space-y-fib-1">
                                  <span className="mono-text text-[7px] text-titanium/30 block">CYCLE_COUNT</span>
                                  <span className="font-mono text-sm text-titanium">{product.cycleCount}</span>
                                </div>
                                <div className="space-y-fib-1">
                                  <span className="mono-text text-[7px] text-titanium/30 block">DISPLAY_TYPE</span>
                                  <span className="font-mono text-[10px] text-titanium">{product.displayType}</span>
                                </div>
                                <div className="space-y-fib-1">
                                  <span className="mono-text text-[7px] text-titanium/30 block">CHIPSET</span>
                                  <span className="font-mono text-sm text-titanium">{product.chip}</span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Product Info */}
                      <div className="p-fib-5">
                        <div className="flex items-start justify-between mb-fib-3">
                          <div>
                            <h3 className="text-xl font-display uppercase tracking-tight">{product.name}</h3>
                            <span className="mono-text text-[8px] text-titanium/40 mt-1 block">{product.color} | {product.storage}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-end justify-between">
                          <div>
                            <div className="font-mono text-2xl text-titanium">PKR {product.price.toLocaleString()}</div>
                            <div className="mono-text text-[9px] text-titanium/30 line-through">PKR {product.originalPrice.toLocaleString()}</div>
                          </div>
                          <a 
                            href="https://wa.me/923231459121?text=Hi, I'm interested in this iPhone"
                            className="px-fib-4 py-fib-2 bg-specialist-orange text-space-black mono-text text-[9px] hover:bg-titanium transition-all duration-500"
                          >
                            INQUIRE
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-fib-9">
                <p className="mono-text text-titanium/40">NO_UNITS_MATCHING_CRITERIA</p>
                <p className="text-titanium/20 mt-fib-3">Adjust filter parameters for broader results</p>
              </div>
            )}
          </div>
        </section>

        {/* Trust Metrics */}
        <section className="py-fib-7 px-fib-4 md:px-fib-7 border-t border-white/5">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid md:grid-cols-4 gap-fib-6">
              {[
                { label: 'VALIDATION_POINTS', value: '47', desc: 'Technical checkpoints per unit' },
                { label: 'ARCHIVAL_RATE', value: '12%', desc: 'Only top-grade units accepted' },
                { label: 'CERTIFICATION_TIME', value: '72h', desc: 'Full diagnostic protocol' },
                { label: 'WARRANTY_PERIOD', value: '6mo', desc: 'Structural integrity coverage' },
              ].map((metric) => (
                <div key={metric.label} className="text-center glassmorphism py-fib-5 px-fib-4">
                  <div className="mono-text text-[8px] text-specialist-orange mb-fib-2">{metric.label}</div>
                  <div className="font-mono text-3xl text-titanium mb-fib-1">{metric.value}</div>
                  <div className="mono-text text-[9px] text-titanium/30">{metric.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />

        {/* Session Info */}
        <div className="fixed bottom-12 left-6 z-50 pointer-events-none hidden md:block">
          <p className="mono-text text-[8px] text-white/20 mb-1">SESSION_ID</p>
          <p className="font-mono text-[10px] text-white/40">GILL-8839-COL</p>
        </div>
        <div className="fixed bottom-12 right-6 z-50 pointer-events-none hidden md:block text-right">
          <p className="mono-text text-[8px] text-white/20 mb-1">FILTER_STATE</p>
          <p className="font-mono text-[10px] text-white/40">ACTIVE</p>
        </div>
      </PageWrapper>
    </SmoothScroll>
  )
}