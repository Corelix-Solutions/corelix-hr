'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
// ...existing code...
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [, setActiveDropdown] = useState<string | null>(null)

  const navigationItems = [
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
            <div className="relative">
              <img
                src="/corelixSolutionpfp1.png"
                alt="Corelix Solutions"
                width={44}
                height={44}
                className="rounded-2xl shadow-md border-2 border-blue-100"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Open Source HR System
              </span>
              <span className="text-xs text-blue-600 font-medium -mt-1">
                Corelix Solutions
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}>
                  <a
                    href={item.href}
                    className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm rounded-xl hover:bg-blue-50/50 transition-all duration-200 group">
                    {item.name}
                  </a>
                </motion.div>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}>
              <Button
                variant="outline"
                className="border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 rounded-xl"
                onClick={() => {
                  const contact = document.getElementById('contact')
                  if (contact) {
                    contact.scrollIntoView({ behavior: 'smooth' })
                  }
                }}>
                Schedule Demo
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}>
              <Button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-6"
                onClick={() => {
                  const contact = document.getElementById('contact')
                  if (contact) {
                    contact.scrollIntoView({ behavior: 'smooth' })
                  }
                }}>
                Get Started Free
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 p-0">
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}>
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-1">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>
              ))}
              <div className="pt-4 px-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600 rounded-xl"
                  onClick={() => {
                    const contact = document.getElementById('contact')
                    if (contact) {
                      contact.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}>
                  Schedule Demo
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl"
                  onClick={() => {
                    const contact = document.getElementById('contact')
                    if (contact) {
                      contact.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}>
                  Get Started Free
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
