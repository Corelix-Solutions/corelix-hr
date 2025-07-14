import { Calculator, Package, Star, TrendingUp, UserCheck } from 'lucide-react'

type ServiceColor = 'blue' | 'green' | 'purple' | 'orange' | 'teal' | 'pink'

interface Service {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  image: string
  color: ServiceColor
  stats: string
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      icon: UserCheck,
      title: 'Employee Management',
      description:
        'Easily manage employee records, roles, and lifecycle from onboarding to offboarding. Centralize all HR data for quick access and compliance.',
      features: [
        'Centralized employee profiles',
        'Role & department assignment',
        'Onboarding/offboarding workflows',
        'Document management',
      ],
      image:
        'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'blue',
      stats: '100% Organized',
    },
    {
      icon: Star,
      title: 'Time and Attendance',
      description:
        'Track employee attendance, leaves, and working hours with automated tools. Ensure accuracy and transparency for payroll and compliance.',
      features: [
        'Automated clock-in/out',
        'Leave request & approval',
        'Absence tracking',
        'Real-time attendance dashboard',
      ],
      image:
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'green',
      stats: '99.9% Accurate',
    },
    {
      icon: Calculator,
      title: 'Payroll',
      description:
        'Automate payroll calculations, deductions, and payouts. Stay compliant with tax regulations and deliver payslips on time, every time.',
      features: [
        'Automated payroll processing',
        'Tax & deduction management',
        'Payslip generation',
        'Multi-currency support',
      ],
      image:
        'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'purple',
      stats: '100% On Time',
    },
    {
      icon: Package,
      title: 'UI Settings and Customizations',
      description:
        'Personalize your HR system with flexible UI settings. Customize dashboards, themes, and workflows to match your organization’s needs.',
      features: [
        'Custom dashboards',
        'Theme & branding options',
        'Configurable workflows',
        'Role-based access controls',
      ],
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'teal',
      stats: 'Fully Flexible',
    },
  ]

  const colorMap: Record<
    ServiceColor,
    { bg: string; text: string; border: string; light: string }
  > = {
    blue: {
      bg: 'bg-blue-500',
      text: 'text-blue-600',
      border: 'border-blue-200',
      light: 'bg-blue-50',
    },
    green: {
      bg: 'bg-green-500',
      text: 'text-green-600',
      border: 'border-green-200',
      light: 'bg-green-50',
    },
    purple: {
      bg: 'bg-purple-500',
      text: 'text-purple-600',
      border: 'border-purple-200',
      light: 'bg-purple-50',
    },
    orange: {
      bg: 'bg-orange-500',
      text: 'text-orange-600',
      border: 'border-orange-200',
      light: 'bg-orange-50',
    },
    teal: {
      bg: 'bg-teal-500',
      text: 'text-teal-600',
      border: 'border-teal-200',
      light: 'bg-teal-50',
    },
    pink: {
      bg: 'bg-pink-500',
      text: 'text-pink-600',
      border: 'border-pink-200',
      light: 'bg-pink-50',
    },
  }

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Star className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold text-sm">
              Our Solutions Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Enterprise Solutions That
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Drive Real Results
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide industry-leading software solutions that transform how
            businesses operate, scale, and succeed in today&apos;s competitive
            landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isEven = index % 2 === 0
            const colors = colorMap[service.color]

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-8 lg:gap-16`}>
                {/* Content */}
                <div className="flex-1 space-y-6 lg:space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 ${colors.bg} rounded-xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className={`w-4 h-4 ${colors.text}`} />
                          <span
                            className={`text-sm font-semibold ${colors.text}`}>
                            {service.stats}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-center p-3 ${colors.light} rounded-lg border ${colors.border}`}>
                        <div
                          className={`w-2 h-2 ${colors.bg} rounded-full mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-700 font-medium text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-tr from-${service.color}-600/20 to-transparent`}></div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-10 h-10 ${colors.light} rounded-lg flex items-center justify-center`}>
                          <Star className={`w-5 h-5 ${colors.text}`} />
                        </div>
                        <div>
                          <div className="text-lg font-bold text-gray-900">
                            4.9/5
                          </div>
                          <div className="text-sm text-gray-600">
                            Client Rating
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
