import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardCheck, CreditCard, Stethoscope, HelpCircle } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7 },
};

const firstVisitSteps = [
  {
    icon: ClipboardCheck,
    title: 'Complete Your Forms',
    text: 'You can fill out your patient intake forms online before your visit or arrive 15 minutes early to complete them at our office.',
  },
  {
    icon: Stethoscope,
    title: 'Comprehensive Exam',
    text: 'Your dentist will perform a thorough examination, including digital X-rays, a full oral health assessment, and discuss any concerns you have.',
  },
  {
    icon: CreditCard,
    title: 'Personalized Plan',
    text: 'We\'ll create a customized treatment plan with clear pricing, discuss your options, and schedule any follow-up visits you may need.',
  },
];

const faqs = [
  {
    question: 'How often should I visit the dentist?',
    answer: 'We recommend visiting every 6 months for a routine checkup and professional cleaning. However, depending on your oral health, your dentist may suggest more frequent visits.',
  },
  {
    question: 'What can I do about dental anxiety?',
    answer: 'We completely understand dental anxiety — it\'s very common. Our clinic is designed with your comfort in mind. We offer gentle techniques, clear communication at every step, and a calming environment. Let us know about your anxiety so we can accommodate you.',
  },
  {
    question: 'Do you accept insurance?',
    answer: 'Yes, we accept most major dental insurance plans. We recommend calling us at 0326 9779778 before your visit so our team can verify your coverage and help you understand your benefits.',
  },
  {
    question: 'Is teeth whitening safe?',
    answer: 'Professional teeth whitening at The Dental Space is completely safe. We use clinically proven, dentist-grade products that are gentle on your enamel while delivering brilliant, long-lasting results.',
  },
];

function FAQTile({ faq, index, activeIndex, setActiveIndex }) {
  const isActive = activeIndex === index;

  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => setActiveIndex(isActive ? null : index)}
      className={`cursor-pointer rounded-2xl border transition-all duration-500 overflow-hidden ${
        isActive
          ? 'bg-[#E85737] border-[#E85737] shadow-lg shadow-[#E85737]/15'
          : 'bg-white border-[#FFD9CA]/50 hover:border-[#E85737]/30 hover:shadow-md'
      }`}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-lg shrink-0 ${
              isActive ? 'bg-white/20' : 'bg-[#E85737]/10'
            }`}
          >
            <HelpCircle className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#E85737]'}`} />
          </div>
          <div>
            <h3
              className={`font-display text-base font-bold leading-snug ${
                isActive ? 'text-white' : 'text-[#432F23]'
              }`}
            >
              {faq.question}
            </h3>
            <AnimatePresence>
              {isActive && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 font-body text-sm text-white/85 leading-relaxed"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PatientInfo() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFD9CA]/15 to-white" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div {...fadeUp} className="max-w-2xl">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#8D3E11] mb-4">
              Patient Information
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[#432F23] leading-[1.05]">
              Everything You
              <br />
              <span className="text-[#E85737]">Need to Know.</span>
            </h1>
            <p className="mt-8 font-body text-lg text-[#432F23]/60 leading-relaxed max-w-lg">
              Your first visit should feel effortless. Here's what to expect, from the moment you arrive to your personalized care plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* First Visit */}
      <section className="pb-28 lg:pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#432F23]">
              Your First <span className="text-[#E85737]">Visit</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {firstVisitSteps.map((step, i) => (
              <motion.div
                key={step.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative bg-[#FEFCFB] border border-[#FFD9CA]/30 rounded-2xl p-8"
              >
                <span className="absolute top-6 right-6 font-display text-4xl font-black text-[#FFD9CA]/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#E85737]/10 flex items-center justify-center mb-6">
                  <step.icon className="w-5 h-5 text-[#E85737]" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#432F23] mb-3">{step.title}</h3>
                <p className="font-body text-sm text-[#432F23]/60 leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-28 lg:py-40 bg-[#FFD9CA]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div {...fadeUp} className="text-center max-w-xl mx-auto mb-16">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#8D3E11] mb-4">
              Common Questions
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#432F23]">
              Frequently <span className="text-[#E85737]">Asked.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {faqs.map((faq, i) => (
              <FAQTile
                key={i}
                faq={faq}
                index={i}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="font-body text-sm text-[#432F23]/50 mb-4">
              Still have questions? We'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#E85737] text-white font-display text-sm font-semibold uppercase tracking-wide rounded-full hover:bg-[#D85016] transition-all shadow-lg shadow-[#E85737]/25"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
