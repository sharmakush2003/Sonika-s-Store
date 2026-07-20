"use client";

import { useEffect } from "react";
import Footer from "../../components/Footer";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-deep font-sans">
      
      {/* ── HEADER NAVIGATION ── */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#FDFBF7]/90 backdrop-blur-md border-b border-sand/30">
        <a href="/" className="text-gold tracking-[4px] text-[14px] uppercase font-light">
          ← Back to Home
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-40 pb-20 px-6 bg-[#FDFBF7] text-center border-b border-sand/30">
         <h1 className="font-light tracking-tighter font-serif text-[40px] md:text-[60px] text-deep mb-4">
          Privacy Policy
        </h1>
        <p className="uppercase tracking-[3px] text-muted text-[10px] font-bold">Last Updated: March 2025</p>
      </section>

      {/* ── CONTENT WITH SIDEBAR ── */}
      <section className="py-20 px-6 lg:px-20 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Sidebar Index */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-40 space-y-4 text-[12px] uppercase tracking-[2px] font-medium text-muted/50">
               <button onClick={() => scrollTo('intro')} className="block text-left hover:text-gold transition-colors w-full">1. Introduction</button>
               <button onClick={() => scrollTo('collect')} className="block text-left hover:text-gold transition-colors w-full">2. Information Collection</button>
               <button onClick={() => scrollTo('use')} className="block text-left hover:text-gold transition-colors w-full">3. How We Use Data</button>
               <button onClick={() => scrollTo('whatsapp')} className="block text-left hover:text-gold transition-colors w-full">4. WhatsApp</button>
               <button onClick={() => scrollTo('retention')} className="block text-left hover:text-gold transition-colors w-full">5. Data Retention</button>
               <button onClick={() => scrollTo('contact')} className="block text-left hover:text-gold transition-colors w-full">6. Contact Us</button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4 space-y-20 text-[16px] leading-[2] text-muted font-serif">
            
            <div id="intro" className="reveal scroll-mt-32">
              <h2 className="text-[24px] font-serif font-light text-deep mb-6">1. Introduction</h2>
              <p>
                Welcome to House of Sonika ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and share information when you visit our website <code>houseofsonika.com</code> or communicate with us, specifically through direct channels like WhatsApp.
              </p>
            </div>

            <div id="collect" className="reveal scroll-mt-32">
              <h2 className="text-[24px] font-serif font-light text-deep mb-6">2. Information We Collect</h2>
              <p className="mb-4">We primarily operate through direct communication. Information we may collect includes:</p>
              <ul className="space-y-4 pl-4 border-l border-gold/30">
                <li className="pl-4"><strong>Contact Information:</strong> Your name and phone number when you initiate a chat with us on WhatsApp.</li>
                <li className="pl-4"><strong>Order Details:</strong> Shipping address, billing address, and product preferences necessary to fulfill your orders.</li>
                <li className="pl-4"><strong>Payment Information:</strong> We do not store credit card details locally. Payments are processed securely via third-party gateways (e.g., UPI, bank transfers).</li>
              </ul>
            </div>

            <div id="use" className="reveal scroll-mt-32">
              <h2 className="text-[24px] font-serif font-light text-deep mb-6">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information collected exclusively to provide and improve our services to you:</p>
              <ul className="space-y-4 pl-4 border-l border-gold/30">
                <li className="pl-4">To confirm, process, and deliver your orders from Jaipur to your location.</li>
                <li className="pl-4">To communicate with you regarding your order status or respond to your inquiries on WhatsApp.</li>
                <li className="pl-4">To occasionally send you updates about new collections, if you have opted in.</li>
              </ul>
              <p className="mt-6 font-semibold italic text-deep">We do not sell, rent, or trade your personal information to third parties.</p>
            </div>

            <div id="whatsapp" className="reveal scroll-mt-32">
              <h2 className="text-[24px] font-serif font-light text-deep mb-6">4. WhatsApp Communication</h2>
              <p>
                By clicking our WhatsApp links, you agree to communicate with us on the WhatsApp platform. Please be aware that WhatsApp has its own privacy policies regarding end-to-end encryption and data usage, which operate independently of House of Sonika.
              </p>
            </div>
            
            <div id="retention" className="reveal scroll-mt-32">
              <h2 className="text-[24px] font-serif font-light text-deep mb-6">5. Data Retention</h2>
              <p>
                 We retain your contact and order history only for as long as necessary to fulfill the purposes outlined in this policy, including the fulfillment of any legal, accounting, or reporting requirements.
              </p>
            </div>

            <div id="contact" className="reveal scroll-mt-32 border-t border-sand/30 pt-10">
              <h2 className="text-[24px] font-serif font-light text-deep mb-6">6. Contact Us</h2>
              <p className="mb-6 text-muted">
                If you have any questions about this Privacy Policy, wish to visit our studio, or need support with your order, please contact Sonika Malik via:
              </p>

              <div className="mb-8 p-6 bg-sand/20 border border-gold/20 rounded-sm font-serif">
                <h4 className="text-[18px] text-deep font-semibold mb-2">House of Sonika Studio</h4>
                <p className="text-deep font-medium mb-1">Sonika Malik</p>
                <p className="text-deep/70 leading-relaxed">C107, Akashganga, Civil Lines</p>
                <p className="text-deep/70 leading-relaxed mb-3">Jaipur, 302006</p>
                <p className="text-deep/80 text-[14px]"><strong>Email:</strong> <a href="mailto:sonikamalik.sm@gmail.com" className="text-rose underline hover:text-gold transition-colors font-sans">sonikamalik.sm@gmail.com</a></p>
              </div>

              <div className="flex flex-col sm:flex-row gap-8">
                 <a href="mailto:sonikamalik.sm@gmail.com" className="px-8 py-4 bg-deep text-cream uppercase tracking-[3px] text-[10px] font-bold hover:bg-gold transition-colors text-center">
                   Email Us
                 </a>
                 <a href="https://wa.me/8188000001" className="px-8 py-4 border border-deep text-deep uppercase tracking-[3px] text-[10px] font-bold hover:bg-deep hover:text-cream transition-colors text-center">
                   WhatsApp Us
                 </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
