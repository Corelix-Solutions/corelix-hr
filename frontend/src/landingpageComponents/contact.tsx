'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Shield,
  Star,
  Zap,
} from 'lucide-react'
import React, { useState } from 'react'

const ContactSection = () => {
  const [showCalendly, setShowCalendly] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    service: '',
    message: '',
  })

  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'Email Us',
      subtitle: 'Get expert advice',
      content: 'hellocorelixsolutions@gmail.com',
      action: 'Send Email',
      color: 'blue',
      response: 'Response within 2 hours',
    },
    {
      icon: Phone,
      title: 'Call or WhatsApp',
      subtitle: 'Speak with our team',
      content: '+63 9156716478',
      action: 'Start Chat',
      color: 'green',
      response: 'Available 9AM - 6PM PHT',
    },
    {
      icon: Calendar,
      title: 'Schedule Demo',
      subtitle: 'See it in action',
      content: 'Free 30-minute session',
      action: 'Book Now',
      color: 'purple',
      response: 'Next available slot',
    },
  ]

  const benefits = [
    { icon: Zap, text: 'Free consultation & system audit' },
    { icon: Shield, text: 'No commitment required' },
    { icon: Award, text: 'Dedicated success manager' },
    { icon: CheckCircle, text: 'Implementation support included' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setShowCalendly(false)}
              aria-label="Close">
              ×
            </button>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/hellocorelixsolutions"
              style={{ minWidth: 320, height: 700 }}></div>
            <script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async></script>
          </div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-blue-100 mb-6">
            <Star className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold text-sm">
              Ready to Get Started?
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Let&apos;s Transform Your
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Business Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join 500+ enterprises who have revolutionized their operations with
            Corelix Solutions. Start your transformation journey today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white pb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl lg:text-3xl font-bold mb-2">
                        Get Your Free Consultation
                      </CardTitle>
                      <p className="text-blue-100 text-lg">
                        Schedule a personalized demo and see how we can help
                      </p>
                    </div>
                    <div className="hidden md:flex items-center space-x-4 text-blue-100">
                      <Clock className="h-5 w-5" />
                      <span className="text-sm">15 min setup</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="firstName"
                          className="text-sm font-semibold text-gray-700">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-200 rounded-xl"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="lastName"
                          className="text-sm font-semibold text-gray-700">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Smith"
                          className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-200 rounded-xl"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-semibold text-gray-700">
                          Business Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-200 rounded-xl"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="company"
                          className="text-sm font-semibold text-gray-700">
                          Company Name *
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Company"
                          className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-200 rounded-xl"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="service"
                        className="text-sm font-semibold text-gray-700">
                        Primary Interest *
                      </Label>
                      <select
                        id="service"
                        name="service"
                        className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
                        value={formData.service}
                        onChange={handleInputChange}
                        required>
                        <option value="">
                          What solution interests you most?
                        </option>
                        <option value="complete-suite">
                          Complete Business Suite
                        </option>
                        <option value="erp">ERP System</option>
                        <option value="crm">CRM System</option>
                        <option value="accounting">Accounting System</option>
                        <option value="pos">POS System</option>
                        <option value="inventory">Inventory Management</option>
                        <option value="hr">HR System</option>
                        <option value="consultation">
                          Business Consultation
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-sm font-semibold text-gray-700">
                        Tell us about your needs
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Describe your current challenges and what you hope to achieve..."
                        className="min-h-[100px] border-gray-200 focus:border-blue-500 focus:ring-blue-200 rounded-xl resize-none"
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl group">
                        <Send className="mr-2 h-5 w-5" />
                        Get Your Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <p className="text-sm text-gray-500 text-center mt-3">
                        We&apos;ll contact you within 2 hours during business
                        hours
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar - Contact Methods & Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Other Ways to Connect
              </h3>
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                const handleClick = () => {
                  if (method.title === 'Schedule Demo') {
                    setShowCalendly(true)
                  } else if (method.title === 'Call or WhatsApp') {
                    window.open(`https://wa.me/639156716478`, '_blank')
                  } else if (method.title === 'Email Us') {
                    window.open(
                      `mailto:hellocorelixsolutions@gmail.com`,
                      '_blank',
                    )
                  }
                }

                return (
                  <Card
                    key={index}
                    className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 group cursor-pointer bg-white/80 backdrop-blur-sm hover:bg-white overflow-hidden"
                    onClick={handleClick}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${
                            method.color === 'blue'
                              ? 'from-blue-500 to-blue-600'
                              : method.color === 'green'
                              ? 'from-green-500 to-green-600'
                              : 'from-purple-500 to-purple-600'
                          } rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-lg font-semibold text-gray-900">
                              {method.title}
                            </h4>
                            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                          </div>
                          <p className="text-sm text-gray-600 mb-1">
                            {method.subtitle}
                          </p>
                          <p
                            className={`font-medium ${
                              method.color === 'blue'
                                ? 'text-blue-600'
                                : method.color === 'green'
                                ? 'text-green-600'
                                : 'text-purple-600'
                            } mb-1`}>
                            {method.content}
                          </p>
                          <p className="text-xs text-gray-500">
                            {method.response}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}>
              <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-600 to-indigo-600 text-white overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    What You Get
                  </h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => {
                      const IconComponent = benefit.icon
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-white/90">{benefit.text}</span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}></motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}>
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Get in Touch</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">
                        hellocorelixsolutions@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Phone className="h-5 w-5 text-green-600" />
                      <span className="text-sm">+63 9156716478</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <MapPin className="h-5 w-5 text-purple-600" />
                      <span className="text-sm">Serving clients globally</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
