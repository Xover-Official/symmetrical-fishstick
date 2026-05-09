'use client'

import TextReveal from './TextReveal'

const services = [
  {
    title: 'Display Restoration',
    desc: 'OLED & Liquid Retina screen replacement with True Tone calibration.',
    price: 'Rs. 5,000+',
  },
  {
    title: 'Battery Resurrection',
    desc: 'Genuine high-capacity cells. Restoration of peak performance capability.',
    price: 'Rs. 3,500+',
  },
  {
    title: 'Water Damage Recovery',
    desc: 'Ultrasonic cleaning and logic board revival using surgical precision.',
    price: 'Rs. 2,000+',
  },
  {
    title: 'Chip-Level Surgery',
    desc: 'Micro-soldering, Face ID restoration and advanced data recovery.',
    price: 'Rs. 6,000+',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-64 px-8 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24">
          <TextReveal as="h2" className="text-4xl md:text-6xl font-display mb-8">
            Expertise.
          </TextReveal>
          <div className="horizontal-divider" />
        </div>

        <div className="grid gap-24">
          {services.map((service, index) => (
            <div key={service.title} className="group cursor-default">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-1 text-[11px] uppercase tracking-ultra-wide text-brand-text/40">
                  0{index + 1}
                </div>
                <div className="md:col-span-5">
                  <h3 className="text-3xl md:text-5xl font-display group-hover:italic transition-all duration-500">
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-4">
                  <p className="text-brand-text/60 font-body tracking-wide leading-relaxed max-w-sm">
                    {service.desc}
                  </p>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <span className="text-[11px] uppercase tracking-ultra-wide">
                    {service.price}
                  </span>
                </div>
              </div>
              <div className="mt-12 horizontal-divider group-hover:bg-brand-text/30 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
