'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Clock,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

export default function Footer() {
  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'Accounting System', href: '#accounting' },
        { name: 'ERP Solutions', href: '#erp' },
        { name: 'CRM Platform', href: '#crm' },
        { name: 'POS Systems', href: '#pos' },
        { name: 'Inventory Management', href: '#inventory' },
        { name: 'HR Solutions', href: '#hr' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#docs' },
        { name: 'API Reference', href: '#api' },
        { name: 'Help Center', href: '#help' },
        { name: 'Video Tutorials', href: '#tutorials' },
        { name: 'Webinars', href: '#webinars' },
        { name: 'Blog', href: '#blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Support', href: '#support' },
        { name: 'System Status', href: '#status' },
        { name: 'Security', href: '#security' },
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Cookie Policy', href: '#cookies' },
      ],
    },
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/carl-saginsin-30358928a/',
      color: 'hover:text-blue-700',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Corelix-Solutions',
      color: 'hover:text-gray-300',
    },
  ]

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Global Headquarters',
      value: 'Serving clients worldwide',
    },
    { icon: Phone, label: 'Phone', value: '+63 9156716478' },
    { icon: Mail, label: 'Email', value: 'hellocorelixsolutions@gmail.com' },
    { icon: Clock, label: 'Support Hours', value: '24/7 Available' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Newsletter Section */}
        <div className="border-b border-gray-800/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Stay Updated with
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {' '}
                  Industry Insights
                </span>
              </h3>
              <p className="text-xl text-gray-400 mb-8">
                Get the latest updates on business automation, industry trends,
                and exclusive offers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl focus:bg-white/20 focus:border-blue-400"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 h-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Join 10,000+ business leaders. Unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-6 gap-12">
              {/* Company Info - Takes 2 columns */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-6">
                  {/* Logo */}
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src="/corelixSolutionpfp1.png"
                        alt="Corelix Solutions"
                        width={48}
                        height={48}
                        className="rounded-2xl shadow-lg border-2 border-white/10"
                      />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
                    </div>
                    <div>
                      <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Corelix Solutions
                      </span>
                      <div className="text-sm text-blue-400 font-medium">
                        Enterprise Software
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-lg">
                    Empowering businesses worldwide with integrated software
                    solutions that drive growth, efficiency, and innovation.
                    Trusted by 500+ enterprises across 50+ countries.
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    {contactInfo.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 text-gray-400">
                        <item.icon className="h-5 w-5 text-blue-400" />
                        <div>
                          <span className="text-sm font-medium text-gray-300">
                            {item.label}:
                          </span>
                          <span className="text-sm ml-2">{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="space-y-4">
                    <h4 className="text-white font-semibold">Follow Us</h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          className={`w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:bg-white/20 transition-all duration-300 ${social.color}`}
                          aria-label={social.name}
                          target="_blank"
                          rel="noopener noreferrer">
                          <social.icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Footer Links - Takes 4 columns */}
              <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {footerSections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-4">
                    <h3 className="font-bold text-white text-lg">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm">
                            {link.name}
                            <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400 text-sm">
                <span>
                  &copy; {new Date().getFullYear()} Corelix Solutions. All
                  rights reserved.
                </span>
                <div className="flex items-center space-x-4">
                  <a
                    href="#privacy"
                    className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <span className="text-gray-600">•</span>
                  <a
                    href="#terms"
                    className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                  <span className="text-gray-600">•</span>
                  <a
                    href="#cookies"
                    className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>All systems operational</span>
                </div>
                <a
                  href="#status"
                  className="flex items-center space-x-1 hover:text-white transition-colors">
                  <span>System Status</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
