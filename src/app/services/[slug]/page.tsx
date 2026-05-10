import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface ServiceData {
  slug: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  priceRange: string
  turnaround: string
  process: { step: string; description: string }[]
  image: string
  category: string
}

const servicesData: Record<string, ServiceData> = {
  'screen-restoration': {
    slug: 'screen-restoration',
    title: 'Screen Restoration',
    subtitle: 'Display Architecture Reconstruction',
    description: 'Surgical-grade screen replacement using OEM-quality components with precise calibration.',
    longDescription: 'Our screen restoration service encompasses complete display panel replacement, including the OLED matrix, digitizer, and true tone calibration. We source only premium-quality display assemblies to ensure color accuracy, brightness consistency, and touch sensitivity match original specifications.',
    priceRange: '₨8,500 - ₨45,000',
    turnaround: '2h - 24h',
    process: [
      { step: 'DIAGNOSTIC_SCAN', description: 'Assess display damage and identify underlying issues' },
      { step: 'COMPONENT_SOURCING', description: 'Procure OEM-quality display assembly' },
      { step: 'SURGICAL_REMOVAL', description: 'Carefully remove damaged display without harming frame' },
      { step: 'CALIBRATION_TRANSFER', description: 'Transfer true tone and color calibration data' },
      { step: 'QUALITY_VALIDATION', description: '48-point display performance test' },
    ],
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=1600',
    category: 'display',
  },
  'battery-replacement': {
    slug: 'battery-replacement',
    title: 'Battery Replacement',
    subtitle: 'Power Cell Regeneration',
    description: 'Genuine battery replacement with health calibration and cycle optimization.',
    longDescription: 'Battery degradation affects device performance and longevity. Our battery replacement service uses genuine or premium-grade cells with complete health recalibration. We restore original mAh capacity and optimize battery management system settings for peak performance.',
    priceRange: '₨4,500 - ₨22,000',
    turnaround: '1h - 24h',
    process: [
      { step: 'HEALTH_ANALYSIS', description: 'Evaluate current battery capacity and cycle count' },
      { step: 'CELL_REPLACEMENT', description: 'Install genuine or premium-grade battery cell' },
      { step: 'BMS_CALIBRATION', description: 'Reset battery management system parameters' },
      { step: 'CHARGE_TESTING', description: 'Complete charge cycle validation' },
      { step: 'PERFORMANCE_BENCHMARK', description: 'Verify restored performance metrics' },
    ],
    image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&q=80&w=1600',
    category: 'power',
  },
  'motherboard-surgery': {
    slug: 'motherboard-surgery',
    title: 'Motherboard Surgery',
    subtitle: 'Board-Level Microintervention',
    description: 'Micron-precision IC repair, reballing, and trace reconstruction in ISO-5 cleanroom.',
    longDescription: 'Our most advanced service requiring microsurgery-level precision. Operating in ISO-5 cleanroom conditions, our technical surgeons perform board-level repairs including IC reballing, trace reconstruction, solder joint repair, and component-level replacement. Success rate of 97.3% across all board-level interventions.',
    priceRange: '₨12,000 - ₨65,000',
    turnaround: '24h - 120h',
    process: [
      { step: 'ADVANCED_DIAGNOSTIC', description: 'Identify specific IC or trace failure points' },
      { step: 'CLEANROOM_PREP', description: 'Prepare ISO-5 environment for microsurgery' },
      { step: 'IC_EXTRACTION', description: 'Carefully remove affected component' },
      { step: 'BALL_REMOVAL', description: 'Clean and prepare pad surfaces' },
      { step: 'PRECISION_REBALL', description: 'Apply fresh solder balls with 0.01mm accuracy' },
      { step: 'REFLOW_PLACEMENT', description: 'Mount component with thermal profile optimization' },
      { step: '48H_STRESS_TEST', description: 'Extended validation under thermal load' },
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600',
    category: 'board',
  },
  'water-damage-recovery': {
    slug: 'water-damage-recovery',
    title: 'Water Damage Recovery',
    subtitle: 'Ultrasonic Restoration Protocol',
    description: 'Comprehensive water damage treatment with ultrasonic cleaning and component rescue.',
    longDescription: 'Water exposure requires immediate intervention. Our recovery protocol includes emergency drying, ultrasonic cleaning of all board components, corrosion treatment, and systematic component testing. We prioritize component rescue over wholesale replacement, often saving data and functionality others would declare lost.',
    priceRange: '₨5,000 - ₨60,000',
    turnaround: '12h - 120h',
    process: [
      { step: 'EMERGENCY_DRY', description: 'Immediate drying protocol to prevent further damage' },
      { step: 'ULTRASONIC_BATH', description: '45-minute ultrasonic cleaning cycle' },
      { step: 'CORROSION_TREATMENT', description: 'Chemical treatment of corrosion sites' },
      { step: 'COMPONENT_TEST', description: 'Systematic testing of each board component' },
      { step: 'REPAIR_OR_REPLACE', description: 'Component-level repair or replacement as needed' },
      { step: 'FULL_RESTORATION', description: 'Complete device reassembly and testing' },
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600',
    category: 'recovery',
  },
  'data-recovery': {
    slug: 'data-recovery',
    title: 'Data Recovery',
    subtitle: 'Information Extraction Service',
    description: 'Extract critical data from damaged or non-functional devices.',
    longDescription: 'When devices fail, precious data often appears lost forever. Our data recovery service uses advanced techniques including chip-off recovery, NAND reading, and cloud backup coordination. We prioritize non-destructive methods while extracting maximum recoverable data.',
    priceRange: '₨15,000 - ₨80,000',
    turnaround: '48h - 168h',
    process: [
      { step: 'INITIAL_ASSESSMENT', description: 'Determine recovery feasibility and method' },
      { step: 'NAND_EXTRACTION', description: 'Careful removal of memory chip if needed' },
      { step: 'BINARY_READING', description: 'Direct memory chip interface reading' },
      { step: 'ENCRYPTION_BREAK', description: 'Handle device encryption appropriately' },
      { step: 'DATA_EXTRACTION', description: 'Extract recoverable files and data' },
      { step: 'DATA_TRANSFER', description: 'Secure transfer to new device or storage' },
    ],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600',
    category: 'recovery',
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData[slug]
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.title} | ${service.subtitle}`,
    description: service.description,
    keywords: [
      service.title.toLowerCase(),
      'iPhone repair Lahore',
      'technical lab',
      service.category,
      'Abrar Market',
    ],
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-fib-9 px-fib-4 md:px-fib-7">
        <div className="absolute top-24 left-6 tech-label">SERVICE_PROTOCOL_V4</div>
        <div className="absolute top-24 right-6 tech-label">TECHNICAL_LAB_LAHORE</div>

        <div className="max-w-[1440px] mx-auto w-full">
          <span className="mono-text text-specialist-orange mb-fib-4 block">{service.category.toUpperCase()}_MODULE</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display tracking-tighter mb-fib-4">
            {service.title}
          </h1>
          <p className="mono-text text-titanium/50 mb-fib-6">{service.subtitle}</p>
          <p className="text-xl text-titanium/60 max-w-2xl leading-relaxed">
            {service.longDescription}
          </p>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-fib-7 px-fib-4 md:px-fib-7 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-fib-8">
            {/* Pricing & Turnaround */}
            <div className="glassmorphism p-fib-6 border border-white/5">
              <span className="mono-text text-specialist-orange mb-fib-4 block">PRICING_FRAMEWORK</span>
              <div className="space-y-fib-6">
                <div>
                  <span className="mono-text text-[8px] text-titanium/30 block mb-fib-2">PRICE_ESTIMATE</span>
                  <span className="text-4xl font-mono text-live-green">{service.priceRange}</span>
                </div>
                <div>
                  <span className="mono-text text-[8px] text-titanium/30 block mb-fib-2">TURNAROUND_TIME</span>
                  <span className="text-4xl font-mono text-specialist-orange">{service.turnaround}</span>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="glassmorphism p-fib-6 border border-white/5">
              <span className="mono-text text-specialist-orange mb-fib-4 block">RESTORATION_PIPELINE</span>
              <div className="space-y-fib-4">
                {service.process.map((step, index) => (
                  <div key={step.step} className="flex items-start gap-fib-3">
                    <span className="w-6 h-6 bg-specialist-orange/10 border border-specialist-orange/30 flex items-center justify-center flex-shrink-0">
                      <span className="mono-text text-[8px] text-specialist-orange">{index + 1}</span>
                    </span>
                    <div>
                      <span className="mono-text text-[8px] text-specialist-orange/60 block">{step.step}</span>
                      <span className="text-sm text-titanium/70">{step.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-fib-8 px-fib-4 md:px-fib-7 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-4xl font-display tracking-tighter mb-fib-6">Initiate Service Protocol</h2>
          <p className="text-titanium/50 max-w-xl mx-auto mb-fib-7">
            Ready to restore your device? Contact our technical team for immediate assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-fib-4">
            <a
              href={`https://wa.me/923231459121?text=Hi, I need ${service.title.toLowerCase()} service`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-fib-7 py-fib-3 bg-specialist-orange text-space-black font-display text-[10px] uppercase tracking-widest hover:bg-titanium transition-all duration-700 min-h-[44px] flex items-center justify-center gap-fib-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              INQUIRE_NOW
            </a>
            <a
              href="/services"
              className="px-fib-7 py-fib-3 border border-titanium/20 text-titanium font-display text-[10px] uppercase tracking-widest hover:border-titanium transition-all duration-700 min-h-[44px] flex items-center justify-center"
            >
              VIEW_ALL_SERVICES
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}