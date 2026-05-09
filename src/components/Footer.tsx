'use client'

export default function Footer() {
  return (
    <footer className="py-32 px-8 md:px-16 border-t border-gold-champagne/10 bg-charcoal-deep text-gold-champagne">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-32">
          <div>
             <div className="mono-text mb-6 text-gold-champagne/40 text-sm">CONTACT_PORTAL</div>
            <h2 className="text-5xl md:text-7xl font-display mb-12">Clinical Precision. <br/>Bespoke Care.</h2>
            <div className="flex flex-col gap-6">
              <a href="tel:+923231459121" className="text-2xl font-body hover:italic transition-all">0323 1459121</a>
              <a href="https://maps.google.com/?q=Abrar+Market+Lahore" target="_blank" className="text-gold-champagne/60 font-body max-w-sm text-sm uppercase tracking-wider leading-relaxed">
                Shop #24, 2nd Floor, Abrar Market, <br/>The Mall Road, Lahore, Pakistan
              </a>
            </div>
          </div>
          
          <div className="flex flex-col justify-between items-start md:items-end">
            <div className="flex gap-16 text-[10px] uppercase tracking-ultra-wide text-gold-champagne/40">
              <div className="flex flex-col gap-4">
                <span className="text-gold-champagne/20 mb-4 italic">Networks</span>
                <a href="#" className="hover:text-gold-champagne transition-colors">Instagram</a>
                <a href="#" className="hover:text-gold-champagne transition-colors">Facebook</a>
                <a href="#" className="hover:text-gold-champagne transition-colors">WhatsApp</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-gold-champagne/20 mb-4 italic">Hours</span>
                <span>Mon-Sat / 1100 - 2100</span>
                <span>Fri / 1400 - 2100</span>
                <span>Sun / OFFLINE</span>
              </div>
            </div>
            
            <div className="mt-24 flex flex-col md:items-end gap-2">
              <div className="mono-text text-[9px] text-gold-champagne/20">
                SYSTEM_LOC: 31.5204, 74.3587
              </div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-gold-champagne/20">
                © 2025 Gill Boutique & Lab. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
