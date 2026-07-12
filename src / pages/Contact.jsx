import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7 },
};

const contactInfo = [
  {
    icon: MapPin,
    label: 'Our Location',
    value: 'First Floor, E-16/2, Walton Road, Lahore',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '0326 9779778',
    href: 'tel:03269779778',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon–Sat: 5:00 PM – 9:30 PM | Sun: Closed',
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFD9CA]/15 to-white" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div {...fadeUp} className="max-w-2xl">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#8D3E11] mb-4">
              Contact & Location
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[#432F23] leading-[1.05]">
              Let's Get You
              <br />
              <span className="text-[#E85737]">Smiling.</span>
            </h1>
            <p className="mt-8 font-body text-lg text-[#432F23]/60 leading-relaxed max-w-lg">
              Ready to book your appointment or just have a question? Reach out — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-28 lg:pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form - Left */}
            <motion.div {...fadeUp} className="lg:col-span-3">
              <div className="bg-white border border-[#FFD9CA]/40 rounded-2xl p-8 md:p-10 shadow-sm">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E85737]/10 mb-6">
                      <CheckCircle className="w-8 h-8 text-[#E85737]" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#432F23] mb-3">
                      Thank You!
                    </h3>
                    <p className="font-body text-[#432F23]/60 max-w-sm mx-auto">
                      We've received your message and will get back to you within 24 hours. We look forward to seeing you!
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', phone: '', service: '', message: '' });
                      }}
                      className="mt-6 font-body text-sm text-[#E85737] font-semibold hover:underline"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl font-bold text-[#432F23] mb-2">
                      Book an Appointment
                    </h2>
                    <p className="font-body text-sm text-[#432F23]/50 mb-8">
                      Fill out the form below and our team will reach out to confirm your visit.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block font-body text-xs font-semibold uppercase tracking-widest text-[#432F23]/60 mb-2">
                            Full Name
                          </label>
                          <Input
                            required
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="border-[#FFD9CA]/60 focus:border-[#E85737] focus:ring-[#E85737]/20 h-12 font-body"
                          />
                        </div>
                        <div>
                          <label className="block font-body text-xs font-semibold uppercase tracking-widest text-[#432F23]/60 mb-2">
                            Phone Number
                          </label>
                          <Input
                            required
                            placeholder="03XX XXXXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="border-[#FFD9CA]/60 focus:border-[#E85737] focus:ring-[#E85737]/20 h-12 font-body"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block font-body text-xs font-semibold uppercase tracking-widest text-[#432F23]/60 mb-2">
                          Service Interested In
                        </label>
                        <Select
                          value={formData.service}
                          onValueChange={(val) => setFormData({ ...formData, service: val })}
                        >
                          <SelectTrigger className="border-[#FFD9CA]/60 h-12 font-body">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Dentistry</SelectItem>
                            <SelectItem value="cosmetic">Cosmetic Dentistry</SelectItem>
                            <SelectItem value="whitening">Teeth Whitening</SelectItem>
                            <SelectItem value="implants">Dental Implants</SelectItem>
                            <SelectItem value="pediatric">Pediatric Care</SelectItem>
                            <SelectItem value="consultation">General Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block font-body text-xs font-semibold uppercase tracking-widest text-[#432F23]/60 mb-2">
                          Message (Optional)
                        </label>
                        <Textarea
                          placeholder="Tell us about any concerns or preferred appointment times..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="border-[#FFD9CA]/60 focus:border-[#E85737] focus:ring-[#E85737]/20 font-body resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full h-12 bg-[#E85737] hover:bg-[#D85016] text-white font-display text-sm font-semibold uppercase tracking-widest rounded-full transition-all"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send & Book
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>

            {/* Info - Right */}
            <motion.div {...fadeUp} className="lg:col-span-2 space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="bg-[#FEFCFB] border border-[#FFD9CA]/30 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#E85737]/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-4 h-4 text-[#E85737]" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#8D3E11] mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-body text-sm text-[#432F23]/80 hover:text-[#E85737] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-body text-sm text-[#432F23]/80">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Promo Card */}
              <div className="bg-[#432F23] rounded-2xl p-6 text-white">
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#FF8660] mb-2">
                  New Patient Offer
                </p>
                <p className="font-display text-2xl font-bold mb-2">
                  30% Off All Services
                </p>
                <p className="font-body text-sm text-white/60">
                  Available for the first 50 patients. Don't miss out on your chance to save!
                </p>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-[#FFD9CA]/30 h-[250px]">
                <iframe
                  title="The Dental Space Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.0!2d74.35!3d31.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sE-16%2F2+Walton+Road+Lahore!5e0!3m2!1sen!2spk!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[30%] contrast-[1.1]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
