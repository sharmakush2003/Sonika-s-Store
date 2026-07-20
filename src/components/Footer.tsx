"use client";

import { InstagramIcon, WhatsAppIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="pt-28 pb-16 bg-deep text-cream/70 border-t border-gold/10 overflow-hidden relative jaipur-border">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.02] pointer-events-none translate-x-1/3 -translate-y-1/3 rounded-full border border-gold" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-[0.015] pointer-events-none -translate-x-1/2 translate-y-1/2 rounded-full border border-rose" />

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="back-to-top"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-20">

          {/* Column 1: House Bio */}
          <div className="reveal">
            <div className="text-[36px] font-light tracking-[2px] mb-8 text-gold inline-block leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              House <span className="italic">of</span> Sonika
            </div>
            <p className="text-[15px] leading-[1.8] text-cream/60 pr-6 italic mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              "Where the warmth of Jaipur's artisan heritage meets the elegance of everyday living — curated with love, delivered to your home."
            </p>
            
            <div className="mb-8 text-[14px] leading-relaxed text-cream/70" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <div className="text-gold font-semibold mb-2 uppercase tracking-widest text-[11px]">Visit Our Studio</div>
              <div className="font-semibold text-cream text-[15px] mb-0.5">Sonika Malik</div>
              <div>C107, Akashganga, Civil Lines</div>
              <div>Jaipur, 302006</div>
              <div className="mt-3 pt-2 border-t border-gold/15">
                <a href="mailto:sonikamalik.sm@gmail.com" className="text-gold hover:text-gold/80 transition-colors text-[13px] tracking-wide font-sans block">
                  sonikamalik.sm@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-5">
              <a href="#" className="social-icon-btn" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://wa.me/8188000001?text=Hi%20House%20of%20Sonika!%20I'd%20like%20to%20enquire%20about%20your%20handcrafted%20products." target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="WhatsApp">
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a href="mailto:sonikamalik.sm@gmail.com" className="social-icon-btn" aria-label="Email">
                <MailIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Collections */}
          <div className="reveal">
            <div className="text-[12px] font-bold tracking-[5px] uppercase text-gold mb-10">Collections</div>
            <ul className="space-y-5">
              <li><a href="/#home-furnishing" className="footer-link">Home Furnishing</a></li>
              <li><a href="/#ethnic-fashion" className="footer-link">Ethnic Fashion</a></li>
              <li><a href="/#jaipur-rajai" className="footer-link">Jaipur Rajai Special</a></li>
              <li><a href="/#handcrafted-bags" className="footer-link">Handcrafted Bags</a></li>
            </ul>
          </div>

          {/* Column 3: The House */}
          <div className="reveal">
            <div className="text-[12px] font-bold tracking-[5px] uppercase text-gold mb-10">The House</div>
            <ul className="space-y-5">
              <li><a href="/our-heritage" className="footer-link">Our Heritage</a></li>
              <li><a href="/the-sonika-story" className="footer-link">The Sonika Story</a></li>
              <li><a href="/artisan-craft" className="footer-link">Artisan Craft</a></li>
              <li><a href="/sustainability" className="footer-link">Sustainability</a></li>
              <li><a href="/privacy-policy" className="footer-link">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-[11px] uppercase tracking-[4px] text-cream/60 font-medium text-center md:text-left">
            © 2026 House of Sonika · Timeless Jaipur Heritage · Handcrafted with Elegance & Purpose
          </div>

          <div className="w-full md:w-auto mt-6 md:mt-0 text-center md:text-right group cursor-default">
            <div className="text-[10px] uppercase tracking-[2px] text-cream/50 inline-block">
              <span className="opacity-80 mr-1.5">Handcrafted by</span>
              <a
                href="https://digifysoft.in/"
                target="_blank"
                rel="noreferrer"
                className="relative inline-block overflow-hidden align-bottom"
              >
                <span className="font-bold text-gold/60 group-hover:text-gold transition-colors duration-500">digifysoft.in</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold/50 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
