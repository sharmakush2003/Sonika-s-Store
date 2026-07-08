"use client";

import { useEffect } from "react";
import Footer from "../../components/Footer";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-ivory text-deep">
      {/* ── HEADER NAVIGATION ── */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
        <a href="/" className="text-gold tracking-[4px] text-[14px] uppercase font-light">
          ← Back to House
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-32 pb-12 px-6 bg-sand/20 text-center">
         <h1 className="font-light tracking-tighter font-serif text-fluid-h2 text-deep mb-2">
          Privacy Policy
        </h1>
        <p className="uppercase tracking-[2px] text-muted text-xs font-medium">Last Updated: March 2025</p>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-16 px-6 bg-ivory">
        <div className="max-w-[700px] mx-auto text-[16px] leading-[1.8] text-muted font-serif space-y-8">
          
          <div className="reveal">
            <h2 className="text-[24px] font-semibold text-deep mb-4">1. Introduction</h2>
            <p>
              Welcome to House of Sonika ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and share information when you visit our website `houseofsonika.com` or communicate with us, specifically through direct channels like WhatsApp.
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-[24px] font-semibold text-deep mb-4">2. Information We Collect</h2>
            <p className="mb-2">We primarily operate through direct communication. Information we may collect includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Your name and phone number when you initiate a chat with us on WhatsApp.</li>
              <li><strong>Order Details:</strong> Shipping address, billing address, and product preferences necessary to fulfill your orders.</li>
              <li><strong>Payment Information:</strong> We do not store credit card details locally. Payments are processed securely via third-party gateways (e.g., UPI, bank transfers).</li>
            </ul>
          </div>

          <div className="reveal">
            <h2 className="text-[24px] font-semibold text-deep mb-4">3. How We Use Your Information</h2>
            <p className="mb-2">We use the information collected exclusively to provide and improve our services to you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To confirm, process, and deliver your orders from Jaipur to your location.</li>
              <li>To communicate with you regarding your order status or respond to your inquiries on WhatsApp.</li>
              <li>To occasionally send you updates about new collections, if you have opted in.</li>
            </ul>
            <p className="mt-4">We do <strong>not</strong> sell, rent, or trade your personal information to third parties.</p>
          </div>

          <div className="reveal">
            <h2 className="text-[24px] font-semibold text-deep mb-4">4. WhatsApp Communication</h2>
            <p>
              By clicking our WhatsApp links, you agree to communicate with us on the WhatsApp platform. Please be aware that WhatsApp has its own privacy policies regarding end-to-end encryption and data usage, which operate independently of House of Sonika.
            </p>
          </div>
          
          <div className="reveal">
            <h2 className="text-[24px] font-semibold text-deep mb-4">5. Data Retention</h2>
            <p>
               We retain your contact and order history only for as long as necessary to fulfill the purposes outlined in this policy, including the fulfillment of any legal, accounting, or reporting requirements.
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-[24px] font-semibold text-deep mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please contact Sonika Malik via:
            </p>
            <ul className="mt-2">
               <li>Email: <a href="mailto:Sonikamalik.sm@gmail.com" className="text-gold hover:underline">Sonikamalik.sm@gmail.com</a></li>
               <li>WhatsApp: <a href="https://wa.me/8188000001" className="text-gold hover:underline">+91 8188000001</a></li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
