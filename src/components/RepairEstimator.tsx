'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface DeviceClass {
  id: string
  name: string
  series: string
  basePrice: number
}

interface IssueType {
  id: string
  name: string
  category: 'screen' | 'battery' | 'ic' | 'water'
  description: string
  priceRange: { min: number; max: number }
  turnaround: { min: string; max: string }
  complexity: 'simple' | 'moderate' | 'complex' | 'surgical'
}

const deviceClasses: DeviceClass[] = [
  { id: 'iphone-15-pro-max', name: 'iPhone 15 Pro Max', series: 'iPhone 15', basePrice: 549900 },
  { id: 'iphone-15-pro', name: 'iPhone 15 Pro', series: 'iPhone 15', basePrice: 449900 },
  { id: 'iphone-15', name: 'iPhone 15', series: 'iPhone 15', basePrice: 299900 },
  { id: 'iphone-14-pro-max', name: 'iPhone 14 Pro Max', series: 'iPhone 14', basePrice: 429900 },
  { id: 'iphone-14-pro', name: 'iPhone 14 Pro', series: 'iPhone 14', basePrice: 379900 },
  { id: 'iphone-14', name: 'iPhone 14', series: 'iPhone 14', basePrice: 259900 },
  { id: 'iphone-13-pro-max', name: 'iPhone 13 Pro Max', series: 'iPhone 13', basePrice: 329900 },
  { id: 'iphone-13-pro', name: 'iPhone 13 Pro', series: 'iPhone 13', basePrice: 289900 },
  { id: 'iphone-13', name: 'iPhone 13', series: 'iPhone 13', basePrice: 199900 },
  { id: 'iphone-12-pro-max', name: 'iPhone 12 Pro Max', series: 'iPhone 12', basePrice: 279900 },
  { id: 'iphone-12-pro', name: 'iPhone 12 Pro', series: 'iPhone 12', basePrice: 229900 },
  { id: 'iphone-12', name: 'iPhone 12', series: 'iPhone 12', basePrice: 169900 },
]

const issueTypes: IssueType[] = [
  {
    id: 'screen-cracked',
    name: 'Cracked Screen',
    category: 'screen',
    description: 'Display glass or OLED panel replacement',
    priceRange: { min: 8500, max: 45000 },
    turnaround: { min: '2h', max: '24h' },
    complexity: 'moderate',
  },
  {
    id: 'screen-black',
    name: 'Black Screen / No Display',
    category: 'screen',
    description: 'Display not working, may need IC repair',
    priceRange: { min: 15000, max: 55000 },
    turnaround: { min: '24h', max: '72h' },
    complexity: 'complex',
  },
  {
    id: 'battery-drain',
    name: 'Battery Drain Issue',
    category: 'battery',
    description: 'Battery replacement or power management repair',
    priceRange: { min: 4500, max: 18000 },
    turnaround: { min: '1h', max: '24h' },
    complexity: 'simple',
  },
  {
    id: 'battery-swollen',
    name: 'Swollen Battery',
    category: 'battery',
    description: 'Emergency battery replacement required',
    priceRange: { min: 6500, max: 22000 },
    turnaround: { min: '2h', max: '24h' },
    complexity: 'moderate',
  },
  {
    id: 'ic-audio',
    name: 'Audio IC / No Sound',
    category: 'ic',
    description: 'Audio codec or speaker IC replacement',
    priceRange: { min: 12000, max: 35000 },
    turnaround: { min: '24h', max: '72h' },
    complexity: 'complex',
  },
  {
    id: 'ic-face',
    name: 'Face ID Not Working',
    category: 'ic',
    description: 'TrueDepth camera or Face ID sensor repair',
    priceRange: { min: 15000, max: 45000 },
    turnaround: { min: '24h', max: '96h' },
    complexity: 'complex',
  },
  {
    id: 'ic-charging',
    name: 'Charging IC / No Charging',
    category: 'ic',
    description: 'Lightning port or charging IC repair',
    priceRange: { min: 8000, max: 25000 },
    turnaround: { min: '12h', max: '48h' },
    complexity: 'complex',
  },
  {
    id: 'ic-touch',
    name: 'Touch Not Responsive',
    category: 'ic',
    description: 'Touch controller or display driver repair',
    priceRange: { min: 12000, max: 40000 },
    turnaround: { min: '24h', max: '72h' },
    complexity: 'surgical',
  },
  {
    id: 'water-clean',
    name: 'Water Damage - Clean & Dry',
    category: 'water',
    description: 'Ultrasonic cleaning and board restoration',
    priceRange: { min: 5000, max: 15000 },
    turnaround: { min: '12h', max: '48h' },
    complexity: 'moderate',
  },
  {
    id: 'water-repair',
    name: 'Water Damage - Component Repair',
    category: 'water',
    description: 'Full diagnostic, cleaning, and component replacement',
    priceRange: { min: 15000, max: 60000 },
    turnaround: { min: '48h', max: '120h' },
    complexity: 'surgical',
  },
]

const complexityColors = {
  simple: 'text-live-green',
  moderate: 'text-apple-blue',
  complex: 'text-specialist-orange',
  surgical: 'text-red-500',
}

const complexityLabels = {
  simple: 'STRAIGHTFORWARD',
  moderate: 'MODERATE_COMPLEXITY',
  complex: 'ADVANCED_REPAIR',
  surgical: 'MICROSURGERY_REQUIRED',
}

interface RepairEstimatorProps {
  embedded?: boolean
}

export function RepairEstimator({ embedded = false }: RepairEstimatorProps) {
  const [mounted, setMounted] = useState(false)
  const [selectedDevice, setSelectedDevice] = useState<DeviceClass | null>(null)
  const [selectedIssue, setSelectedIssue] = useState<IssueType | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [hoveredIssue, setHoveredIssue] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleDeviceSelect = (device: DeviceClass) => {
    setSelectedDevice(device)
    setSelectedIssue(null)
    setShowResult(false)
  }

  const handleIssueSelect = (issue: IssueType) => {
    setSelectedIssue(issue)
    setShowResult(true)
  }

  const resetEstimator = () => {
    setSelectedDevice(null)
    setSelectedIssue(null)
    setShowResult(false)
  }

  const getEstimateMessage = () => {
    if (!selectedDevice || !selectedIssue) return ''
    const waDevice = encodeURIComponent(selectedDevice.name)
    const waIssue = encodeURIComponent(selectedIssue.name)
    return `https://wa.me/923231459121?text=Hi, I need a repair estimate for ${selectedDevice.name}. Issue: ${selectedIssue.name}`
  }

  return (
    <div className={`${embedded ? '' : 'min-h-screen py-fib-9 px-fib-4 md:px-fib-7 pt-fib-9'}`}>
      {!embedded && (
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-fib-8">
            <span className="mono-text text-specialist-orange mb-fib-3 block">ESTIMATION_ENGINE_v4</span>
            <h2 className="text-4xl md:text-6xl font-display tracking-tighter">Repair Estimator</h2>
            <p className="text-titanium/50 mt-fib-3 max-w-xl mx-auto">
              Select your device and issue to receive a technical estimate. Final pricing subject to physical hardware audit.
            </p>
          </div>
        </div>
      )}

      <div className={`${embedded ? '' : 'max-w-[1200px] mx-auto'} bg-white/[0.02] border border-white/5 p-fib-6 relative`}>
        {/* Terminal Header */}
        <div className="absolute top-0 left-0 right-0 h-fib-2 bg-space-black/80 border-b border-white/5 flex items-center px-fib-4">
          <div className="flex gap-fib-2">
            <span className="w-2 h-2 bg-red-500/80 rounded-full" />
            <span className="w-2 h-2 bg-yellow-500/80 rounded-full" />
            <span className="w-2 h-2 bg-green-500/80 rounded-full" />
          </div>
          <span className="ml-fib-4 mono-text text-[8px] text-titanium/40">REPAIR_ESTIMATION_TERMINAL_v4.0</span>
        </div>

        <div className="mt-fib-6">
          {/* Step 1: Device Selection */}
          <div className="mb-fib-7">
            <div className="mono-text text-specialist-orange mb-fib-3">
              <span className="text-titanium/30 mr-fib-2">STEP_01</span>
              DEVICE_CLASS_IDENTIFICATION
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-fib-2">
              {deviceClasses.map((device) => (
                <button
                  key={device.id}
                  onClick={() => handleDeviceSelect(device)}
                  className={`p-fib-3 text-left border transition-all duration-500 min-h-[44px] ${
                    selectedDevice?.id === device.id
                      ? 'bg-specialist-orange/10 border-specialist-orange'
                      : 'border-white/5 hover:border-white/20 bg-white/[0.01]'
                  }`}
                  aria-pressed={selectedDevice?.id === device.id}
                >
                  <span className="text-[10px] font-mono text-titanium/50 block">{device.series}</span>
                  <span className="text-sm text-titanium">{device.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Issue Selection */}
          <AnimatePresence>
            {selectedDevice && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="mb-fib-7">
                  <div className="mono-text text-specialist-orange mb-fib-3">
                    <span className="text-titanium/30 mr-fib-2">STEP_02</span>
                    ISSUE_NODE_SELECTION
                  </div>

                  {/* Category Tabs */}
                  <div className="flex flex-wrap gap-fib-2 mb-fib-4">
                    {['screen', 'battery', 'ic', 'water'].map((category) => (
                      <span
                        key={category}
                        className="mono-text text-[8px] text-titanium/40 px-fib-3 py-fib-1 border border-white/5"
                      >
                        {category.toUpperCase()}_MODULE
                      </span>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-fib-3">
                    {issueTypes.map((issue) => (
                      <button
                        key={issue.id}
                        onClick={() => handleIssueSelect(issue)}
                        onMouseEnter={() => setHoveredIssue(issue.id)}
                        onMouseLeave={() => setHoveredIssue(null)}
                        className={`p-fib-4 text-left border transition-all duration-500 min-h-[44px] ${
                          selectedIssue?.id === issue.id
                            ? 'bg-specialist-orange/10 border-specialist-orange'
                            : 'border-white/5 hover:border-white/20 bg-white/[0.01]'
                        } ${hoveredIssue === issue.id ? 'bg-white/[0.03]' : ''}`}
                        aria-pressed={selectedIssue?.id === issue.id}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <span className={`text-[10px] font-mono ${complexityColors[issue.complexity]} block mb-1`}>
                              {complexityLabels[issue.complexity]}
                            </span>
                            <span className="text-base text-titanium">{issue.name}</span>
                            <p className="text-[10px] text-titanium/40 mt-fib-1">{issue.description}</p>
                          </div>
                          <div className="text-right">
                            <span className="font-mono text-xs text-titanium/60">
                              ₨{issue.priceRange.min.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Estimate Result */}
                <AnimatePresence>
                  {showResult && selectedIssue && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="glassmorphism border border-specialist-orange/30 p-fib-6"
                    >
                      <div className="mono-text text-specialist-orange mb-fib-4">
                        <span className="text-titanium/30 mr-fib-2">ESTIMATION_TRANSMISSION</span>
                        RESULTS
                      </div>

                      <div className="grid md:grid-cols-2 gap-fib-6 mb-fib-6">
                        <div>
                          <span className="mono-text text-[8px] text-titanium/30 block mb-fib-2">DEVICE_CLASS</span>
                          <span className="text-2xl font-display">{selectedDevice.name}</span>
                        </div>
                        <div>
                          <span className="mono-text text-[8px] text-titanium/30 block mb-fib-2">ISSUE_NODE</span>
                          <span className="text-2xl font-display">{selectedIssue.name}</span>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-fib-4 mb-fib-6 p-fib-4 bg-space-black/50">
                        <div>
                          <span className="mono-text text-[8px] text-titanium/30 block mb-fib-1">PRICE_ESTIMATE</span>
                          <span className="font-mono text-3xl text-live-green">
                            ₨{selectedIssue.priceRange.min.toLocaleString()}
                          </span>
                          <span className="font-mono text-lg text-titanium/40">
                            {' - ₨'}{selectedIssue.priceRange.max.toLocaleString()}
                          </span>
                        </div>
                        <div>
                          <span className="mono-text text-[8px] text-titanium/30 block mb-fib-1">TURNAROUND_TIME</span>
                          <span className="font-mono text-2xl text-specialist-orange">
                            {selectedIssue.turnaround.min}
                          </span>
                          <span className="font-mono text-lg text-titanium/40">
                            {' - '}{selectedIssue.turnaround.max}
                          </span>
                        </div>
                        <div>
                          <span className="mono-text text-[8px] text-titanium/30 block mb-fib-1">COMPLEXITY_LEVEL</span>
                          <span className={`font-mono text-xl ${complexityColors[selectedIssue.complexity]}`}>
                            {selectedIssue.complexity.toUpperCase()}
                          </span>
                        </div>
                      </div>

                      {/* Disclaimer */}
                      <div className="text-[10px] text-titanium/30 mb-fib-5 p-fib-3 border border-white/5">
                        <span className="text-specialist-orange">DISCLAIMER:</span> This is a technical estimate based on typical repair scenarios. 
                        Final pricing is subject to physical hardware audit and may vary based on component availability and damage severity.
                      </div>

                      {/* CTA */}
                      <div className="flex flex-wrap gap-fib-4">
                        <a
                          href={getEstimateMessage()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-fib-6 py-fib-3 bg-specialist-orange text-space-black font-display text-[10px] uppercase tracking-widest hover:bg-titanium transition-all duration-700 min-h-[44px] flex items-center gap-fib-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          INQUIRE_VIA_WHATSAPP
                        </a>
                        <button
                          onClick={resetEstimator}
                          className="px-fib-6 py-fib-3 border border-titanium/20 text-titanium font-display text-[10px] uppercase tracking-widest hover:border-titanium transition-all duration-700 min-h-[44px]"
                        >
                          RESET_ESTIMATION
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}