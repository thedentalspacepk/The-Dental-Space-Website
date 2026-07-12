import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background radiance */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD9CA]/20 via-white to-[#FFD9CA]/10" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#FFD9CA]/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            {/* Promo badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD9CA]/60 border border-[#E85737]/20 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#E85737]" />
              <span className="font-body text-xs font-semibold text-[#8D3E11] uppercase tracking-widest">
                30% Off — First 50 Patients
              </span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#432F23] leading-[1.05] tracking-tight">
              Because Every
              <br />
              Smile Deserves
              <br />
              <span className="text-[#E85737]">The Best.</span>
            </h1>

            <p className="mt-8 font-body text-lg text-[#432F23]/60 max-w-md leading-relaxed">
              Experience modern dentistry in a space designed for your comfort. Where clinical excellence meets genuine warmth.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#E85737] text-white font-display text-sm font-semibold uppercase tracking-wide rounded-full hover:bg-[#D85016] transition-all duration-300 shadow-lg shadow-[#E85737]/25"
              >
                Book an Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#432F23]/20 text-[#432F23] font-display text-sm font-semibold uppercase tracking-wide rounded-full hover:border-[#E85737] hover:text-[#E85737] hover:tracking-wider transition-all duration-400"
              >
                Our Services
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-14 flex items-center gap-8">
              <div>
                <p className="font-display text-3xl font-bold text-[#432F23]">5:00</p>
                <p className="font-body text-xs text-[#432F23]/50 uppercase tracking-widest mt-1">PM – 9:30 PM</p>
              </div>
              <div className="w-px h-12 bg-[#432F23]/10" />
              <div>
                <p className="font-display text-3xl font-bold text-[#432F23]">Mon–Sat</p>
                <p className="font-body text-xs text-[#432F23]/50 uppercase tracking-widest mt-1">Open for you</p>
              </div>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] max-h-[700px] rounded-3xl overflow-hidden shadow-2xl shadow-[#432F23]/10">
              <img
                src="https://media.base44.com/images/public/6a294544a0dec9f8c2b54f91/84a17badf_generated_510f09ed.png"
                alt="Beautiful confident smile in warm golden lighting"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#432F23]/20 via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-white rounded-2xl p-5 shadow-xl shadow-[#432F23]/8 border border-[#FFD9CA]/50"
            >
              <p className="font-display text-xs uppercase tracking-widest text-[#8D3E11] mb-1">New Patient Special</p>
              <p className="font-display text-3xl font-bold text-[#E85737]">30% Off</p>
              <p className="font-body text-xs text-[#432F23]/50 mt-1">All services included</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
