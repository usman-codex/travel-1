"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, BadgeCheck, Plane } from 'lucide-react';
import Link from 'next/link';

const visaCountries = [
  { id: 1, code: "MY", name: "Malaysia", image: "/images/tour1.jpg", price: "15,000", type: "Tourist Visa", processing: "5–7 days", validity: "30 days", success: "98%" },
  { id: 2, code: "SG", name: "Singapore", image: "/images/tour2.jpg", price: "22,000", type: "E-Visa", processing: "7–10 days", validity: "30 days", success: "95%" },
  { id: 3, code: "TH", name: "Thailand", image: "/images/tour3.jpg", price: "18,500", type: "Tourist Visa", processing: "5–7 days", validity: "60 days", success: "97%" },
  { id: 4, code: "TR", name: "Turkey", image: "/images/tour4.jpg", price: "45,000", type: "Sticker Visa", processing: "10–15 days", validity: "90 days", success: "94%" },
  { id: 5, code: "AE", name: "Dubai (UAE)", image: "/images/tour6.jpg", price: "35,000", type: "30-Day E-Visa", processing: "3–5 days", validity: "30 days", success: "99%" },
  { id: 6, code: "AZ", name: "Azerbaijan", image: "/images/tour1.jpg", price: "12,000", type: "E-Visa", processing: "3–5 days", validity: "30 days", success: "99%" },
  { id: 7, code: "UK", name: "United Kingdom", image: "/images/tour2.jpg", price: "65,000", type: "Standard Visitor", processing: "15–20 days", validity: "6 months", success: "92%" },
  { id: 8, code: "US", name: "United States", image: "/images/tour3.jpg", price: "75,000", type: "B1 / B2 Visa", processing: "30–45 days", validity: "10 years", success: "88%" },
];

const VisaCountryCards = () => {
  return (
    <section className="py-24 md:py-32 bg-paper">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#c7654d] mb-4">
              <span className="inline-block w-8 h-px bg-[#c7654d] align-middle mr-3"></span>
              Pick your next destination
            </p>
            <h2 className="font-serif text-[44px] md:text-7xl leading-[0.95] text-[#0e1a2b] tracking-tight">
              Transparent pricing,<br />
              <span className="italic text-[#c7654d]">live success rates.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pt-2">
            <p className="text-[#143656]/80 text-base leading-relaxed">
              Pick a country to see the full requirements, current processing time and what we charge — all on one page.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {visaCountries.map((country, index) => (
            <motion.article
              key={country.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              className="bg-[#fbf9f6] rounded-2xl overflow-hidden border border-[#e5dfd4] group flex flex-col h-full hover:border-[#c7654d]/40 transition-colors"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1a2b]/70 to-transparent"></div>

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-[#fbf9f6] text-[#0e1a2b] text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-sm">
                    {country.code}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-[#0e1a2b]/55 backdrop-blur text-white text-[10px] font-semibold px-2.5 py-1 rounded-sm">
                    <BadgeCheck size={10} strokeWidth={2.5} /> {country.success}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e7a892] mb-1">{country.type}</p>
                  <h3 className="font-serif text-2xl leading-tight">{country.name}</h3>
                </div>
              </div>

              <div className="p-5 flex flex-col grow">
                <div className="grid grid-cols-2 gap-3 mb-5 text-[12px] text-[#143656]/75">
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} className="text-[#c7654d]" strokeWidth={2} /> {country.processing}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Plane size={13} className="text-[#c7654d]" strokeWidth={2} /> {country.validity}
                  </div>
                </div>

                <div className="mt-auto border-t border-[#e5dfd4] pt-4">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#143656]/55 font-semibold">From</div>
                      <div className="font-serif text-2xl text-[#0e1a2b] leading-none mt-1">
                        PKR {country.price}
                      </div>
                    </div>
                  </div>

                  <Link href="/book-now">
                    <button
                      type="button"
                      className="w-full bg-[#0e1a2b] text-white py-3 rounded-full font-semibold text-xs hover:bg-[#c7654d] transition-colors flex items-center justify-center gap-2"
                    >
                      Apply now <ArrowUpRight size={13} strokeWidth={2.5} />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaCountryCards;
