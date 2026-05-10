import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface BlogPostData {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  author: string
  image: string
  content: string[]
}

const blogPostsData: Record<string, BlogPostData> = {
  'iphone-oled-vs-lcd-display-technology': {
    slug: 'iphone-oled-vs-lcd-display-technology',
    title: 'OLED vs LCD: The Display Technology Deep Dive',
    excerpt: 'Understanding the fundamental differences between OLED and LCD displays. Why Apple transitioned and what it means for repairability.',
    category: 'DISPLAY_TECH',
    readTime: '8 MIN READ',
    date: '2025-01-15',
    author: 'TECH_SURGEON_001',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=1600',
    content: [
      'The transition from LCD to OLED in iPhone displays marked one of the most significant hardware shifts in smartphone history. Understanding the technical implications is crucial for both users and repair technicians.',
      'OLED (Organic Light-Emitting Diode) displays differ fundamentally from LCD (Liquid Crystal Display) in their light emission mechanism. While LCDs require a backlight that illuminates all pixels equally, OLED pixels emit their own light independently. This means true blacks - when an OLED pixel displays black, it\'s completely off, consuming no power.',
      'From a repair perspective, OLED presents unique challenges. The organic compounds in OLED displays are more sensitive to moisture and physical stress. Their flexible nature, while enabling features like curved edges, requires specialized handling during replacement procedures.',
      'Apple\'s implementation, branded as Super Retina XDR, incorporates additional technologies: ProMotion for adaptive refresh rates up to 120Hz, True Tone for ambient color temperature matching, and Always-On capabilities in newer models. Each adds complexity to the repair process.',
      'When diagnosing display issues on OLED-equipped iPhones, technicians must consider factors irrelevant to LCD devices: burn-in patterns, pixel-level degradation, and the integrity of the display driver IC. These require sophisticated diagnostic equipment beyond simple backlight testing.',
    ],
  },
  'battery-health-myths-debunked': {
    slug: 'battery-health-myths-debunked',
    title: 'Battery Health: 5 Myths Debunked',
    excerpt: 'Separating fact from fiction about iPhone battery degradation, charging habits, and maximum capacity retention.',
    category: 'POWER_SYSTEMS',
    readTime: '6 MIN READ',
    date: '2025-01-10',
    author: 'POWER_ENGINEER_002',
    image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&q=80&w=1600',
    content: [
      'Battery health remains one of the most misunderstood aspects of modern smartphones. Let\'s address the most common misconceptions with technical evidence.',
      'Myth #1: Charging overnight damages batteries. Modern iPhones use optimized charging that stops at 80% and completes to 100% just before you wake up. The battery management system (BMS) prevents overcharging.',
      'Myth #2: Closing apps saves battery. iOS is designed to freeze apps in the background. Force-closing apps actually consumes more power when reopening from scratch.',
      'Myth #3: Fast charging destroys battery health. USB-PD fast charging is carefully managed by the device. While it generates more heat, the BMS regulates temperature to safe levels.',
      'Myth #4: Calibrating by draining to 0% helps. This was true for older NiMH batteries. Modern lithium-ion batteries prefer partial cycles. Deep discharge can actually accelerate capacity loss.',
      'Myth #5: Third-party chargers ruin batteries. Quality matters more than brand. Use MFi-certified or reputable third-party chargers with proper current limiting and temperature protection.',
    ],
  },
  'water-damage-immediate-action-plan': {
    slug: 'water-damage-immediate-action-plan',
    title: 'Water Damage: Your Immediate Action Plan',
    excerpt: 'Critical steps to take within the first 60 seconds of water exposure. Why timing is everything in device recovery.',
    category: 'EMERGENCY_REPAIR',
    readTime: '5 MIN READ',
    date: '2025-01-05',
    author: 'RECOVERY_SPECIALIST_003',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600',
    content: [
      'Water damage is a race against time. The first 60 seconds determine whether a device survives or faces costly repairs. Here\'s the immediate action protocol.',
      'Second 0-10: Immediate power off. Electricity and water create short circuits. Remove the device from water and power it down if it isn\'t already.',
      'Second 10-30: Remove all accessories and SIM tray. Disconnect chargers, headphones, and cases. The SIM tray removal opens critical ports to airflow.',
      'Second 30-60: Do NOT use rice. The rice myth persists despite evidence. Rice actually introduces starch particles into ports. Instead, use silica gel packets or a dedicated drying agent.',
      'After the initial minute: Professional ultrasonic cleaning. Even if the device appears to work, corrosion begins within 24 hours. Our ultrasonic cleaning protocol removes contamination at the microscopic level before it causes permanent damage.',
      'Never attempt to power on a wet device. The temporary functionality you might observe often masks severe internal damage that manifests later as intermittent failures or complete board death.',
    ],
  },
  'face-id-technical-architecture': {
    slug: 'face-id-technical-architecture',
    title: 'Face ID: The Technical Architecture',
    excerpt: 'How Apple TrueDepth camera system works, why repairs are complex, and what happens when it fails.',
    category: 'SECURITY_SYSTEMS',
    readTime: '10 MIN READ',
    date: '2024-12-28',
    author: 'SECURITY_ANALYST_004',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600',
    content: [
      'Face ID represents one of the most sophisticated consumer biometric systems ever deployed. Understanding its architecture explains why repairs require such precision.',
      'The TrueDepth camera system projects over 30,000 invisible infrared dots onto your face, creating a precise depth map. This isn\'t just a 2D image - it\'s a 3D facial geometry captured from multiple angles.',
      'The neural engine, Apple\'s dedicated AI processor, compares this depth map against the stored mathematical representation of your face. This comparison happens locally on the Secure Enclave, never leaving the device.',
      'From a repair standpoint, Face ID is tightly coupled to the device\'s logic board. Each TrueDepth module is paired to its specific phone during manufacturing. Replacing the camera assembly requires reprogramming these pairings - a process Apple doesn\'t authorize at third-party repair facilities.',
      'When Face ID fails after a repair, it\'s typically due to one of three issues: physical damage to the dot projector, damage to the infrared camera, or corruption of the paired secure enclave keys. Each requires specialized diagnostic equipment to identify.',
      'Spoofing Face ID is technically possible but extremely difficult - the system checks for attention (eyes open), depth perception (not a photo), and liveness indicators that defeat most attack vectors.',
    ],
  },
  'board-level-repair-vs-replacement': {
    slug: 'board-level-repair-vs-replacement',
    title: 'Board-Level Repair vs. Replacement',
    excerpt: 'When component-level repair makes sense over wholesale board replacement. Cost, time, and reliability analysis.',
    category: 'BOARD_SURGERY',
    readTime: '7 MIN READ',
    date: '2024-12-20',
    author: 'BOARD_SURGEON_005',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600',
    content: [
      'Board-level repair sits at the apex of technical complexity in mobile device repair. Knowing when to attempt repair versus replacement defines the difference between skilled technicians and parts-swappers.',
      'The economics are compelling. A complete iPhone board replacement costs 60-80% of a new device. Component-level repair can often be accomplished for 20-40% of replacement cost. But economics alone shouldn\'t drive the decision.',
      'Reliability is paramount. Board-level repairs, when performed correctly, can match or exceed original factory quality. The key word is "correctly" - reballing requires precise thermal profiles, clean pad surfaces, and proper flux application.',
      'Common repairable board failures include: audio IC issues causing speaker/microphone problems, USB-C/Lightning port controller failures, power management IC degradation, and NAND memory interface failures.',
      'When repair isn\'t advisable: severe liquid damage with extensive corrosion, physical board delamination, or when multiple critical components have failed. In these cases, replacement is more reliable despite higher cost.',
      'Our diagnostic protocol evaluates board health across 47 parameters before recommending repair versus replacement. This systematic approach ensures you pay only for the work your device actually needs.',
    ],
  },
  'iphone-thermal-management-explained': {
    slug: 'iphone-thermal-management-explained',
    title: 'iPhone Thermal Management Explained',
    excerpt: 'Understanding heat generation, dissipation, and why thermal throttling occurs in modern Apple devices.',
    category: 'THERMAL_SYSTEMS',
    readTime: '9 MIN READ',
    date: '2024-12-15',
    author: 'THERMAL_ENGINEER_006',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1600',
    content: [
      'Heat is the enemy of performance. Understanding iPhone thermal management reveals why devices throttle and how repairs can restore lost performance.',
      'Apple\'s A-series and M-series chips generate significant heat during intensive tasks. The thermal design moves heat from the silicon die through thermal paste, graphite heat spreaders, and finally to the device chassis.',
      'When this chain is interrupted - through degraded thermal paste, damaged heat spreaders, or a poorly fitted screen during repair - thermal throttling kicks in. The device reduces clock speeds to prevent damage, resulting in observable performance loss.',
      'Common thermal issues after repair: improper thermal paste application during board repairs, damaged graphite sheets when opening devices, and imperfect screen seating that affects heat dissipation through the display.',
      'Diagnosing thermal issues requires thermal imaging equipment that reveals hot spots and temperature distribution across the device. Temperature differential analysis between component zones helps identify specific problem areas.',
      'Prevention is better than cure: use calibrated torque drivers during repairs, apply fresh thermal interface materials when required, and verify complete reassembly before device handoff.',
    ],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPostsData[slug]

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category.toLowerCase(), 'iPhone repair', 'technical guide', 'Lahore'],
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPostsData[slug]

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-fib-7 pt-fib-9 px-fib-4 md:px-fib-7">
        <div 
          className="absolute inset-0 z-0 grayscale opacity-20"
          style={{
            backgroundImage: `url("${post.image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-brand-bg/40 z-10" />
        
        <div className="absolute top-24 left-6 tech-label">TECHNICAL_ARCHIVE</div>
        <div className="absolute top-24 right-6 tech-label">AUTHOR: {post.author}</div>

        <div className="relative z-20 max-w-[1440px] mx-auto w-full">
          <span className="mono-text text-specialist-orange mb-fib-3 block">{post.category}</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display tracking-tighter leading-tight mb-fib-4 max-w-4xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-fib-6">
            <span className="mono-text text-[10px] text-titanium/40">{post.date}</span>
            <span className="mono-text text-[10px] text-titanium/40">{post.readTime}</span>
            <span className="mono-text text-[10px] text-titanium/40">{post.author}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-fib-7 px-fib-4 md:px-fib-7">
        <div className="max-w-[900px] mx-auto">
          <p className="text-xl text-titanium/60 leading-relaxed mb-fib-7 pb-fib-6 border-b border-white/5">
            {post.excerpt}
          </p>
          
          <div className="space-y-fib-5">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-titanium/80 leading-loose text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-fib-7 px-fib-4 md:px-fib-7 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-fib-4">
            <Link
              href="/lab"
              className="px-fib-6 py-fib-3 border border-white/10 text-titanium/60 hover:border-specialist-orange/50 hover:text-titanium transition-all min-h-[44px] flex items-center gap-fib-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              BACK_TO_ARCHIVE
            </Link>
            <Link
              href="/uplink"
              className="px-fib-6 py-fib-3 bg-specialist-orange text-space-black font-display text-[10px] uppercase tracking-widest hover:bg-titanium transition-all min-h-[44px] flex items-center gap-fib-2"
            >
              CONSULT_TECHNICAL_TEAM
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}