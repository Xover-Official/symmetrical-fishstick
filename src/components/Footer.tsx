'use client'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-display font-bold mb-4">
              GILL<span className="text-specialist-orange">.</span>MOBILE
            </h3>
            <p className="text-white/30 text-sm leading-relaxed mb-2">
              iPhone Specialists since 2018.
            </p>
            <p className="text-white/30 text-sm leading-relaxed mb-6">
              Authorized dealer of premium mobile accessories in Abrar Market, Lahore.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-specialist-orange/20 transition-all text-lg">📸</a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-specialist-orange/20 transition-all text-lg">📘</a>
              <a href="https://maps.google.com/?q=Abrar+Market+Lahore" target="_blank" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-specialist-orange/20 transition-all text-lg">📍</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-display font-bold uppercase tracking-widest mb-6 text-white/50">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'iPhone Repair', 'Sell Your iPhone', 'Accessories', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 hover:text-specialist-orange transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-display font-bold uppercase tracking-widest mb-6 text-white/50">
              Our Services
            </h4>
            <ul className="space-y-3">
              {['Screen Replacement', 'Battery Change', 'Water Damage', 'Data Recovery', 'Chip-Level Repair', 'Face ID Fix', 'Back Glass Repair'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/40 hover:text-specialist-orange transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-display font-bold uppercase tracking-widest mb-6 text-white/50">
              Visit Us
            </h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <span>
                  <strong className="text-white/60 block">Gill Mobile Shop</strong>
                  Shop #24, 2nd Floor,<br />
                  Abrar Market, The Mall Road,<br />
                  Lahore, Punjab, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <div>
                  <a href="tel:+923231459121" className="text-specialist-orange hover:text-white transition-colors font-bold block">
                    0323-1459121
                  </a>
                  <span className="text-xs text-white/30">Jamshed Jutt (Owner)</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">🕐</span>
                <span>
                  Mon-Sat: 11:00 AM - 9:00 PM<br />
                  Friday: 2:00 PM - 9:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © 2025 Gill Mobile Shop, Abrar Market, Lahore. All rights reserved.
          </p>
          <p className="text-white/20 text-xs flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> in Pakistan | iPhone Specialist
          </p>
        </div>
      </div>
    </footer>
  )
}
