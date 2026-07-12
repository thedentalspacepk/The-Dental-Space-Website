import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sara Malik',
    text: 'The Dental Space transformed my experience of going to the dentist. Dr. Nabeel was incredibly gentle, and the entire team made me feel at ease. My smile has never looked better!',
    rating: 5,
  },
  {
    name: 'Ahmed Khan',
    text: 'I was anxious about my dental implant procedure, but Dr. Amna explained every step with such patience. The results exceeded my expectations. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Fatima Rizwan',
    text: 'Finally found a clinic where my kids actually enjoy going to. The pediatric care is outstanding — warm, playful, and professional. We wouldn\'t go anywhere else.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 lg:py-40 bg-[#FFD9CA]/15 relative">
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[#FFD9CA]/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#8D3E11] mb-4">
            Patient Stories
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#432F23] leading-tight">
            Words From Our
            <br />
            <span className="text-[#E85737]">Happy Smiles.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#FFD9CA]/30 relative"
            >
              <Quote className="w-8 h-8 text-[#FFD9CA] mb-4" />
              <p className="font-body text-sm text-[#432F23]/70 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#FF8660] text-[#FF8660]" />
                ))}
              </div>
              <p className="font-display text-sm font-bold text-[#432F23]">
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
