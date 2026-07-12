import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Shield, Smile, ArrowRight } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7 },
};

const doctors = [
  {
    name: 'Dr. Muhammad Nabeel',
    role: 'Lead Dentist & Founder',
    image: 'https://media.base44.com/images/public/6a294544a0dec9f8c2b54f91/09f968a54_generated_263dda45.png',
    number: '01',
    credentials: [
      'BDS — De\'Montmorency College of Dentistry',
      'Specialization in Restorative Dentistry',
      '8+ years of clinical experience',
      'Passionate about anxiety-free patient care',
    ],
  },
  {
    name: 'Dr. Amna Ahmad Aziz',
    role: 'Associate Dentist',
    image: 'https://media.base44.com/images/public/6a294544a0dec9f8c2b54f91/b28bedf9d_generated_7f0b1559.png',
    number: '02',
    credentials: [
      'BDS — University of Health Sciences, Lahore',
      'Advanced training in Cosmetic Dentistry',
      'Expertise in Pediatric Dental Care',
      'Committed to gentle, compassionate treatment',
    ],
  },
];

const values = [
  { icon: Heart, title: 'Compassion First', text: 'Every patient is treated with empathy, warmth, and genuine care.' },
  { icon: Shield, title: 'Clinical Excellence', text: 'We use the latest technology and evidence-based practices.' },
  { icon: Smile, title: 'Comfort Always', text: 'Our space is designed to eliminate anxiety and promote calm.' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFD9CA]/15 to-white" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div {...fadeUp} className="max-w-2xl">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#8D3E11] mb-4">
              About Us
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[#432F23] leading-[1.05]">
              The People Behind
              <br />
              <span className="text-[#E85737]">Your Best Smile.</span>
            </h1>
            <p className="mt-8 font-body text-lg text-[#432F23]/60 leading-relaxed max-w-lg">
              At The Dental Space, we believe that a visit to the dentist should feel as comfortable as coming home. Our philosophy centers on blending clinical precision with heartfelt care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-24 lg:space-y-32">
            {doctors.map((doc, i) => (
              <motion.div
                key={doc.name}
                {...fadeUp}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  i % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="absolute -top-8 -left-4 font-display text-[120px] font-black text-[#FFD9CA]/40 leading-none select-none">
                    {doc.number}
                  </div>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#8D3E11] mb-3">
                    {doc.role}
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-[#432F23] leading-tight">
                    {doc.name}
                  </h2>
                  <div className="mt-8 space-y-4">
                    {doc.credentials.map((cred, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: j * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E85737] mt-2 shrink-0" />
                        <p className="font-body text-[#432F23]/70 leading-relaxed">{cred}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 lg:py-40 bg-[#FFD9CA]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div {...fadeUp} className="text-center max-w-xl mx-auto mb-16">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#8D3E11] mb-4">
              Our Philosophy
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#432F23]">
              Built On <span className="text-[#E85737]">Care.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center p-8"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E85737]/10 mb-6">
                  <v.icon className="w-6 h-6 text-[#E85737]" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#432F23] mb-3">{v.title}</h3>
                <p className="font-body text-sm text-[#432F23]/60 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#E85737] text-white font-display text-sm font-semibold uppercase tracking-wide rounded-full hover:bg-[#D85016] transition-all shadow-lg shadow-[#E85737]/25"
            >
              Schedule a Visit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
