"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Send, BadgeCheck, ShieldCheck, CreditCard, ArrowUpRight, Check } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa';
import { sendEmail } from '@/lib/email';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const socialLinks = [
    { Icon: FaFacebookF, href: "https://www.facebook.com/p/Travel-Operations-61550269560647/", label: 'Facebook' },
    { Icon: FaInstagram, href: "https://www.instagram.com/travel__operations/", label: 'Instagram' },
    { Icon: FaLinkedinIn, href: "#", label: 'LinkedIn' },
    { Icon: FaTwitter, href: "#", label: 'Twitter' },
    { Icon: FaTiktok, href: "#", label: 'TikTok' },
    { Icon: FaYoutube, href: "#", label: 'YouTube' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tours', href: '/tours' },
    { name: 'Umrah Packages', href: '/umrah-packages' },
    { name: 'Visa', href: '/visa' },
    { name: 'Destinations', href: '/destination' },
    { name: 'Blog', href: '/blog' },
  ];

  const services = [
    { name: 'Flight Booking', href: '/book-now' },
    { name: 'Hotel Reservations', href: '/book-now' },
    { name: 'Tour Packages', href: '/tours' },
    { name: 'Umrah Packages', href: '/umrah-packages' },
    { name: 'Visa Consultancy', href: '/visa' },
    { name: 'Travel Insurance', href: '/book-now' },
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    await sendEmail(
      { from_email: email, message: `Newsletter signup: ${email}` },
      { subject: "New Newsletter Subscription" }
    );
    setEmail('');
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-[#0e1a2b] text-[#fbf9f6] pt-24 pb-8 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#c7654d]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-10 relative">
        <div className="bg-[#fbf9f6] text-[#0e1a2b] rounded-3xl p-8 md:p-12 mb-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#c7654d] mb-3">
              <span className="inline-block w-8 h-px bg-[#c7654d] align-middle mr-3"></span>
              Newsletter
            </p>
            <h3 className="font-serif text-3xl md:text-5xl leading-[0.95]">
              Travel deals, <span className="italic text-[#c7654d]">once a fortnight.</span>
            </h3>
            <p className="text-[#143656]/75 text-sm mt-3">
              Flash sales, new packages, and blog updates from our trips.
            </p>
          </div>
          {subscribed ? (
            <div className="flex items-center gap-3 bg-[#f1ece4] rounded-full px-6 py-4">
              <span className="w-9 h-9 rounded-full bg-[#c7654d] text-white flex items-center justify-center shrink-0">
                <Check size={18} strokeWidth={3} />
              </span>
              <span className="font-semibold text-[#0e1a2b] text-sm">You're on the list — thank you!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-[#f1ece4] text-[#0e1a2b] px-5 py-3.5 rounded-full font-medium placeholder:text-[#143656]/40 outline-none focus:ring-2 focus:ring-[#c7654d]"
              />
              <button
                type="submit"
                className="bg-[#0e1a2b] text-white px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-[#c7654d] transition-colors flex items-center justify-center gap-2 shrink-0"
              >
                <Send size={15} strokeWidth={2} /> Subscribe
              </button>
            </form>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12 lg:gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-5">
            <h1 className="font-serif text-3xl text-[#fbf9f6]">
              Travel <span className="italic text-[#e7a892]">Operations</span>
            </h1>
            <p className="text-[#fbf9f6]/70 leading-relaxed text-sm max-w-md">
              A DTS-approved travel desk based in Pakistan. We do Umrah, international tours, flights, hotels, visa consultancy and corporate travel — engineered seamlessly, every time.
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-semibold">
                <BadgeCheck size={11} strokeWidth={2} className="text-[#e7a892]" /> DTS Approved
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-semibold">
                <ShieldCheck size={11} strokeWidth={2} className="text-[#e7a892]" /> NTN Verified
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-semibold">
                <CreditCard size={11} strokeWidth={2} className="text-[#e7a892]" /> Secure Pay
              </span>
            </div>

            <div className="flex items-center gap-2 mt-4">
              {socialLinks.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="bg-white/5 border border-white/10 p-2.5 rounded-full text-[#fbf9f6]/80 hover:bg-[#c7654d] hover:border-[#c7654d] hover:text-white transition-colors"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-serif italic text-[#e7a892] text-lg mb-5">Explore</p>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[#fbf9f6]/70 hover:text-[#e7a892] transition-colors flex items-center gap-2 text-[13px] font-medium group">
                    <ArrowUpRight size={12} strokeWidth={2} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-serif italic text-[#e7a892] text-lg mb-5">Services</p>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[#fbf9f6]/70 hover:text-[#e7a892] transition-colors flex items-center gap-2 text-[13px] font-medium group">
                    <ArrowUpRight size={12} strokeWidth={2} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-serif italic text-[#e7a892] text-lg mb-5">Reach us</p>
            <div className="space-y-4">
              <a href="tel:+923111240111" className="flex items-start gap-3 group">
                <Phone size={14} strokeWidth={2} className="text-[#e7a892] mt-1 shrink-0" />
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#fbf9f6]/40">24/7</div>
                  <span className="text-[13px] font-medium group-hover:text-[#e7a892] transition-colors">+92 311 1240111</span>
                </div>
              </a>

              <a href="mailto:info@traveloperations.pk" className="flex items-start gap-3 group">
                <Mail size={14} strokeWidth={2} className="text-[#e7a892] mt-1 shrink-0" />
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#fbf9f6]/40">Email</div>
                  <span className="text-[13px] font-medium group-hover:text-[#e7a892] transition-colors break-all">info@traveloperations.pk</span>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={14} strokeWidth={2} className="text-[#e7a892] mt-1 shrink-0" />
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#fbf9f6]/40">Office</div>
                  <span className="text-[13px] font-medium leading-relaxed">Lahore, Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#fbf9f6]/50">We accept</span>
          {['EasyPaisa', 'JazzCash', 'SadaPay', 'NayaPay', 'Visa', 'Mastercard', 'Bank Transfer'].map((m) => (
            <span key={m} className="text-[12px] font-medium text-[#fbf9f6]/80">{m}</span>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#fbf9f6]/50 text-[11px] font-medium text-center md:text-left">
            © 2026 Travel Operations.pk — All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] font-medium text-[#fbf9f6]/50">
            <Link href="#" className="hover:text-[#e7a892] transition-colors">Privacy</Link>
            <span>·</span>
            <Link href="#" className="hover:text-[#e7a892] transition-colors">Terms</Link>
            <span>·</span>
            <Link href="#" className="hover:text-[#e7a892] transition-colors">Refunds</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
