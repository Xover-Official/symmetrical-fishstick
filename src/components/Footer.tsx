'use client'

export default function Footer() {
  return (
    <footer className="py-32 px-8 md:px-16 border-t border-white/5 bg-space-black text-titanium">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-32">
          <div>
             <div className="mono-text mb-6 text-titanium/40 text-sm">CONTACT_PORTAL</div>
            <h2 className="text-5xl md:text-7xl font-display mb-12 uppercase tracking-tighter">Clinical Precision. <br/>Bespoke Care.</h2>
            <div className="flex flex-col gap-6">
              <a href="tel:+923231459121" className="text-2xl font-body hover:italic transition-all">0323 1459121</a>
              <a href="https://maps.google.com/?q=Abrar+Market+Lahore" target="_blank" className="text-titanium/60 font-body max-w-sm text-sm uppercase tracking-wider leading-relaxed">
                Shop #24, 2nd Floor, Abrar Market, <br/>The Mall Road, Lahore, Pakistan
              </a>
            </div>
          </div>
          
          <div className="flex flex-col justify-between items-start md:items-end">
            <div className="flex gap-16 text-[10px] uppercase tracking-ultra-wide text-titanium/40">
              <div className="flex flex-col gap-4">
                <span className="text-titanium/20 mb-4 italic">Networks</span>
                <a href="#" className="hover:text-titanium transition-colors">Instagram</a>
                <a href="#" className="hover:text-titanium transition-colors">Facebook</a>
                <a href="#" className="hover:text-titanium transition-colors">WhatsApp</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-titanium/20 mb-4 italic">Hours</span>
                <span>Mon-Sat / 1100 - 2100</span>
                <span>Fri / 1400 - 2100</span>
                <span>Sun / OFFLINE</span>
              </div>
            </div>
            
            <div className="mt-24 flex flex-col md:items-end gap-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-live-green rounded-full animate-pulse" />
                <span className="mono-text text-[8px] text-live-green">LIVE_FEED_ACTIVE</span>
                <span className="ml-4 mono-text text-[8px] text-titanium/40">SYSTEM_STATUS: NOMINAL</span>
              </div>
              <div className="mono-text text-[9px] text-titanium/20">
                SYSTEM_LOC: 31.5204, 74.3587 // NODE_LAHORE
              </div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-titanium/20">
                © 2025 Gill Boutique & Lab. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
