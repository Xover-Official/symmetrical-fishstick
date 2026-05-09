'use client'

export default function Footer() {
  return (
    <footer className="py-32 px-8 md:px-16 border-t border-brand-text/5 bg-brand-bg">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-32">
          <div>
            <h2 className="text-5xl md:text-7xl font-display mb-12">Let's restore your device.</h2>
            <div className="flex flex-col gap-6">
              <a href="tel:+923231459121" className="text-2xl font-body hover:italic transition-all">0323 1459121</a>
              <a href="https://maps.google.com/?q=Abrar+Market+Lahore" target="_blank" className="text-brand-text/60 font-body max-w-sm">
                Shop #24, 2nd Floor, Abrar Market, The Mall Road, Lahore, Pakistan
              </a>
            </div>
          </div>
          
          <div className="flex flex-col justify-between items-start md:items-end">
            <div className="flex gap-16 text-[11px] uppercase tracking-ultra-wide text-brand-text/40">
              <div className="flex flex-col gap-4">
                <span className="text-brand-text/20 mb-4 italic">Social</span>
                <a href="#" className="hover:text-brand-text transition-colors">Instagram</a>
                <a href="#" className="hover:text-brand-text transition-colors">Facebook</a>
                <a href="#" className="hover:text-brand-text transition-colors">WhatsApp</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-brand-text/20 mb-4 italic">Hours</span>
                <span>Mon-Sat / 11-9</span>
                <span>Fri / 2-9</span>
                <span>Sun / Closed</span>
              </div>
            </div>
            
            <div className="mt-24 text-[10px] uppercase tracking-[0.3em] text-brand-text/20">
              © 2025 Gill Mobile. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
