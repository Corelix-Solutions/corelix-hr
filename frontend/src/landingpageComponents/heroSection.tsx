'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ChevronRight, Sparkles } from 'lucide-react'

export default function HeroSection() {
  // ...products array removed...

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden flex flex-col items-center justify-center">
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-2xl z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 py-24">
        {/* Badge */}
        <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur px-5 py-2 rounded-full border border-white/20 mb-6">
          <Sparkles className="h-5 w-5 text-blue-300 animate-pulse" />
          <span className="text-blue-100 font-medium tracking-wide">
            Empowering HR Teams, People & Culture
          </span>
        </div>
        {/* Headline */}
        <motion.h1
          className="text-center text-5xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-xl mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}>
          <span className="block">All-in-One</span>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            HR Management Platform
          </span>
        </motion.h1>
        {/* Subheadline */}
        <motion.p
          className="text-center text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}>
          Transform your HR operations with smart, integrated tools for employee
          management, payroll, attendance, performance, and more. Built for
          modern teams and organizations.
        </motion.p>
        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-10 py-4 rounded-2xl shadow-xl group"
            onClick={() => {
              const contact = document.getElementById('contact')
              if (contact) {
                contact.scrollIntoView({ behavior: 'smooth' })
              }
            }}>
            Get Started
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-10 py-4 rounded-2xl border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all group backdrop-blur-sm bg-transparent"
            onClick={() => {
              const contact = document.getElementById('contact')
              if (contact) {
                contact.scrollIntoView({ behavior: 'smooth' })
              }
            }}>
            Book a Demo
          </Button>
        </motion.div>
        {/* Product Feature Bar */}
        {/* Product Feature Bar removed */}
        {/* Social Proof Bar */}
        <div className="flex flex-wrap items-center gap-8 justify-center text-white/80 text-lg">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">500+</span>
            <span>Clients</span>
          </div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">50+</span>
            <span>Countries</span>
          </div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">24/7</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}
