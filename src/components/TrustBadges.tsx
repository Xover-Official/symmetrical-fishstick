'use client'

import { motion } from 'framer-motion'

const certifications = [
  {
    id: 'iso5',
    name: 'ISO-5',
    fullName: 'Cleanroom Certification',
    description: 'Class 100 cleanroom environment for surgical repairs',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'applexpert',
    name: 'APPLE_GRADE',
    fullName: 'Apple Technical Proficiency',
    description: 'Certified in Apple hardware architecture',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'microsurgery',
    name: 'MICRO_SURGEON',
    fullName: 'Board-Level Microsurgery',
    description: '0.01mm precision repair capability',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: 'quality',
    name: 'QUALITY_GUARD',
    fullName: 'Quality Assurance Protocol',
    description: '47-point diagnostic validation per device',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
]

const warranties = [
  {
    id: 'repair-warranty',
    name: 'Repair Warranty',
    duration: '90 Days',
    description: 'Structural integrity coverage on all repairs',
    color: 'specialist-orange',
  },
  {
    id: 'screen-warranty',
    name: 'Screen Warranty',
    duration: '180 Days',
    description: 'Display replacement coverage',
    color: 'apple-blue',
  },
  {
    id: 'parts-warranty',
    name: 'Parts Warranty',
    duration: '1 Year',
    description: 'Genuine component replacement guarantee',
    color: 'live-green',
  },
]

interface TrustBadgesProps {
  variant?: 'full' | 'compact' | 'certifications-only' | 'warranties-only'
  className?: string
}

export function TrustBadges({ variant = 'full', className = '' }: TrustBadgesProps) {
  const showCertifications = variant === 'full' || variant === 'certifications-only'
  const showWarranties = variant === 'full' || variant === 'warranties-only'

  return (
    <div className={`space-y-fib-7 ${className}`}>
      {showCertifications && (
        <div>
          <div className="mono-text text-specialist-orange mb-fib-4">TECHNICAL_CREDENTIALS</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-fib-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glassmorphism border border-white/5 p-fib-4 text-center group hover:border-specialist-orange/30 transition-all duration-500"
              >
                <div className="text-specialist-orange/60 group-hover:text-specialist-orange transition-colors mb-fib-3 flex justify-center">
                  {cert.icon}
                </div>
                <span className="mono-text text-[8px] text-titanium/30 block mb-fib-1">{cert.fullName}</span>
                <span className="text-sm font-display text-titanium block mb-fib-2">{cert.name}</span>
                <span className="text-[10px] text-titanium/40">{cert.description}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {showWarranties && (
        <div>
          <div className="mono-text text-specialist-orange mb-fib-4">WARRANTY_FRAMEWORK</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-fib-4">
            {warranties.map((warranty, index) => (
              <motion.div
                key={warranty.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border p-fib-4 relative overflow-hidden ${
                  warranty.color === 'specialist-orange' ? 'border-specialist-orange/30 bg-specialist-orange/5' :
                  warranty.color === 'apple-blue' ? 'border-apple-blue/30 bg-apple-blue/5' :
                  'border-live-green/30 bg-live-green/5'
                }`}
              >
                <div className="absolute top-0 right-0 w-16 h-16 -translate-y-8 translate-x-8 rotate-45" 
                  style={{
                    background: warranty.color === 'specialist-orange' ? 'rgba(255,107,53,0.1)' :
                                warranty.color === 'apple-blue' ? 'rgba(0,122,255,0.1)' :
                                'rgba(34,197,94,0.1)'
                  }}
                />
                <span className={`mono-text text-[8px] ${
                  warranty.color === 'specialist-orange' ? 'text-specialist-orange' :
                  warranty.color === 'apple-blue' ? 'text-apple-blue' :
                  'text-live-green'
                }`}>
                  {warranty.name}
                </span>
                <div className="text-2xl font-mono text-titanium mt-fib-2">{warranty.duration}</div>
                <p className="text-[10px] text-titanium/40 mt-fib-1">{warranty.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}