import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ClinicBanner() {
  return (
    <section className="py-28 lg:py-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <img
            src="https://media.base44.com/images/public/6a294544a0dec9f8c2b54f91/4db364699_generated_06bbbf03.png"
            alt="The Dental Space modern clinic interior"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#432F23]/80 via-[#432F23]/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 md:px-14 max-w-lg">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#FF8660] mb-4">
                Your Comfort, Our Priority
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                A Space Designed for
                <span className="text-[#FFD9CA]"> Anxiety-Free </span>
                Visits.
              </h2>
              <p className="mt-4 font-body text-white/70 leading-relaxed text-sm">
                From the moment you walk in, everything is designed to put you at ease — soothing interiors, advanced technology, and a team that genuinely cares.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex px-8 py-3.5 bg-[#E85737] text-white font-display text-sm font-semibold uppercase tracking-wide rounded-full hover:bg-[#D85016] transition-colors"
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
