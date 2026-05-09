'use client'

import TextReveal from './TextReveal'

const products = [
  { name: 'iPhone 15 Pro Max Clear Case', price: 1500 },
  { name: 'Original Apple 20W Charger', price: 3500 },
  { name: 'Spigen Tempered Glass', price: 800 },
  { name: 'Type-C to Lightning Cable', price: 1200 },
  { name: 'AirPods Pro 2 Silicone Case', price: 600 },
  { name: 'Baseus 20000mAh Power Bank', price: 4500 },
]

export default function Accessories() {
  return (
    <section id="accessories" className="py-32 md:py-64 px-8 md:px-16 bg-[#0c0c0c]">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <TextReveal as="h2" className="text-4xl md:text-6xl font-display">
            The Collection.
          </TextReveal>
          <p className="text-[11px] uppercase tracking-ultra-wide text-brand-text/40 max-w-[200px]">
            Selected essentials for the modern iPhone user.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32">
          {products.map((product) => (
            <div key={product.name} className="group">
              <div className="aspect-[4/5] bg-[#111] mb-8 relative overflow-hidden">
                 <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-110">
                   📱
                 </div>
              </div>
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-body tracking-wide group-hover:italic transition-all duration-500">
                  {product.name}
                </h3>
                <span className="text-[11px] uppercase tracking-ultra-wide text-brand-text/60">
                  Rs. {product.price}
                </span>
              </div>
              <div className="mt-4 horizontal-divider" />
            </div>
          ))}
        </div>
        
        <div className="mt-32 text-center">
           <a href="https://wa.me/923231459121" className="text-[11px] uppercase tracking-ultra-wide border-b border-brand-text/20 pb-2 hover:border-brand-text transition-colors duration-500">
             Enquire for full catalogue
           </a>
        </div>
      </div>
    </section>
  )
}
