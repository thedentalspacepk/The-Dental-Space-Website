import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive oral health care including checkups, cleanings, and preventive treatments.',
    image: 'https://media.base44.com/images/public/6a294544a0dec9f8c2b54f91/fab01c602_generated_351faf21.png',
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with veneers, bonding, and aesthetic dental solutions.',
    image: 'https://media.base44.com/images/public/6a294544a0dec9f8c2b54f91/877337e22_generated_6388df7b.png',
  },
  {
    title: 'Teeth Whitening',
    description: 'Professional whitening treatments for a brilliantly radiant smile.',
    image: 'https://media.base44.com/images/public/6a294544a0dec9f8c2b54f91/dc16d42ee_generated_83574887.png',
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacement with precision implant technology.',
    image: 'https://media.base44.com/images/public/6a294544a0dec9f8c2b54f91/d96b81705_generated_13cc8bd5.png',
  },
  {
    title: 'Pediatric Care',
    description: 'Gentle, anxiety-free dental care designed especially for your little ones.',
    image: 'https://media.base44.com/images/public/6a294544a0dec9f8c2b54f91/2523febe3_generated_12fbd8e7.png',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-28 lg:py-40 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD9CA] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#8D3E11] mb-4">
            Our Treatments
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#432F23] leading-tight">
            Transformations,
            <br />
            <span className="text-[#E85737]">Not Procedures.</span>
          </h2>
          <p className="mt-6 font-body text-[#432F23]/60 leading-relaxed">
            Every treatment at The Dental Space is a step toward the smile you've always envisioned. We combine advanced technology with a gentle touch.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                to="/services"
                className="group block bg-[#FEFCFB] border border-[#FFD9CA]/50 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[#E85737]/5 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-[#432F23] group-hover:text-[#E85737] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 font-body text-sm text-[#432F23]/50 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-[#E85737] opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#432F23]/15 text-[#432F23] font-display text-sm font-semibold uppercase tracking-wide rounded-full hover:border-[#E85737] hover:text-[#E85737] hover:tracking-wider transition-all duration-400"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
