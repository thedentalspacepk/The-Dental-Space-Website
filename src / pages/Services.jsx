import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7 },
};

const services = [
  {
    title: 'General Dentistry',
    image: 'https://media.base44.com/images/public/6a294544a0dec9f8c2b54f91/fab01c602_generated_351faf21.png',
    description: 'Comprehensive oral health care for the whole family. We focus on prevention and long-term wellness.',
    features: ['Routine Checkups & Cleanings', 'Cavity Fillings', 'Root Canal Therapy', 'Gum Disease Treatment'],
  },
  {
    title: 'Cosmetic Dentistry',
    image: 'https://media.base44.com/images/public/6a294544a0dec9f8c2b54f91/877337e22_generated_6388df7b.png',
    description: 'Enhance the beauty of your smile with our suite of aesthetic treatments designed for natural-looking results.',
    features: ['Porcelain Veneers', 'Dental Bonding', 'Smile Makeovers', 'Tooth Reshaping'],
  },
  {
    title: 'Teeth Whitening',
    image: 'https://media.base44.com/images/public/6a294544a0dec9f8c2b54f91/dc16d42ee_generated_83574887.png',
    description: 'Professional-grade whitening that delivers brilliant results safely and comfortably.',
    features: ['In-Office Whitening', 'Custom Take-Home Kits', 'Sensitivity-Free Options', 'Long-Lasting Results'],
  },
  {
    title: 'Dental Implants',
    image: 'https://media.base44.com/images/public/6a294544a0dec9f8c2b54f91/d96b81705_generated_13cc8bd5.png',
    description: 'Permanent tooth replacement that looks, feels, and functions like your natural teeth.',
    features: ['Single Tooth Implants', 'Full-Arch Restoration', 'Implant-Supported Dentures', 'Bone Grafting'],
  },
  {
    title: 'Pediatric Care',
    image: 'https://media.base44.com/images/public/6a294544a0dec9f8c2b54f91/2523febe3_generated_12fbd8e7.png',
    description: 'Gentle, playful dental care that makes your child\'s visit a positive and even fun experience.',
    features: ['Child-Friendly Environment', 'Preventive Sealants', 'Fluoride Treatments', 'Early Orthodontic Screening'],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFD9CA]/15 to-white" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div {...fadeUp} className="max-w-2xl">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#8D3E11] mb-4">
              Our Services
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[#432F23] leading-[1.05]">
              Treatments That
              <br />
              <span className="text-[#E85737]">Transform.</span>
            </h1>
            <p className="mt-8 font-body text-lg text-[#432F23]/60 leading-relaxed max-w-lg">
              From routine care to complete smile makeovers, we offer a comprehensive range of dental treatments — all delivered with precision and warmth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="pb-28 lg:pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-20 lg:space-y-28">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              {...fadeUp}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-5xl font-black text-[#FFD9CA]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#432F23]">
                  {service.title}
                </h2>
                <p className="mt-4 font-body text-[#432F23]/60 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 space-y-3">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#E85737] shrink-0" />
                      <span className="font-body text-sm text-[#432F23]/70">{f}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="mt-8 group inline-flex items-center gap-2 px-6 py-3 bg-[#E85737] text-white font-display text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-[#D85016] transition-all"
                >
                  Book This Service
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#432F23] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E85737]/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Treatment You Need?
          </h2>
          <p className="font-body text-white/60 max-w-md mx-auto mb-8">
            Schedule a consultation with our team. We'll create a personalized care plan just for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-4 bg-[#E85737] text-white font-display text-sm font-semibold uppercase tracking-wide rounded-full hover:bg-[#D85016] transition-colors shadow-lg shadow-[#E85737]/30"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
