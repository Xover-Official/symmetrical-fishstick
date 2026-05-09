'use client'

import ScrambleText from './ScrambleText'

const products = [
  { name: 'Ultra-Clear Polymer Shell', price: 1500 },
  { name: 'GaN Technical Charger 20W', price: 3500 },
  { name: 'Ion-Strengthened Glass', price: 800 },
  { name: 'High-Speed Data Bridge', price: 1200 },
  { name: 'Silicone Protective Matrix', price: 600 },
  { name: 'High-Density Power Module', price: 4500 },
]

export default function Accessories() {
  return (
    <section id="accessories" className="relative py-fib-8 md:py-fib-9 px-fib-4 md:px-fib-7 bg-transparent text-titanium">
      <div className="absolute top-12 left-6 tech-label">
        INVENTORY_SCAN: COMPLETED
      </div>
      <div className="absolute top-12 right-6 tech-label">
        INTEGRITY_CHECK: 100%
      </div>
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-fib-7 flex flex-col md:flex-row justify-between items-end gap-fib-4">
          <div>
            <div className="mono-text mb-fib-2 text-specialist-orange">COMPONENTS_INVENTORY</div>
            <h2 className="text-5xl md:text-7xl font-display tracking-tighter">Technical Collection</h2>
          </div>
          <p className="mono-text text-[9px] text-titanium/40 max-w-[200px] text-right">
            SELECTED ESSENTIALS TESTED FOR PEAK HARDWARE INTEGRITY.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-fib-6 gap-y-fib-8">
          {products.map((product) => (
            <div key={product.name} className="group">
              <div className="aspect-[4/5] bg-white/[0.02] border border-white/5 mb-fib-4 relative overflow-hidden flex items-center justify-center">
                 <div className="text-[10rem] opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 select-none font-display text-white">
                   ACC
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-tr from-titanium/5 to-transparent" />
                 <div className="absolute bottom-fib-2 left-fib-2 mono-text text-[8px] text-titanium/20">
                   CAT_REF: SKU_{product.name.substring(0, 3).toUpperCase()}
                 </div>
              </div>
              <div className="flex justify-between items-start">
                <h3 className="text-base font-body tracking-wider uppercase group-hover:italic transition-all duration-500">
                  <ScrambleText text={product.name} />
                </h3>
                <span className="mono-text text-[10px] text-titanium/60 bg-titanium/5 px-fib-2 py-1 rounded">
                  PKR {product.price}
                </span>
              </div>
              <div className="mt-fib-3 h-[1px] bg-white/10 w-full" />
            </div>
          ))}
        </div>
        
        <div className="mt-fib-8 text-center">
           <a href="https://wa.me/923231459121" className="text-[10px] uppercase tracking-ultra-wide border border-titanium/20 px-fib-7 py-fib-3 hover:bg-titanium hover:text-space-black transition-all duration-500">
             Consult Inventory
           </a>
        </div>
      </div>
    </section>
  )
}
