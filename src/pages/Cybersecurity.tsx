import { Shield, Lock, Eye, AlertTriangle, Users, FileCheck, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Cybersecurity = () => {
  const services = [
    {
      icon: Shield,
      title: 'Security Audits',
      description: 'Comprehensive security assessments to identify vulnerabilities'
    },
    {
      icon: Eye,
      title: 'Threat Detection',
      description: 'Advanced monitoring systems to detect and prevent cyber threats'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Encryption and secure data storage solutions'
    },
    {
      icon: FileCheck,
      title: 'Compliance Solutions',
      description: 'Ensure compliance with industry standards and regulations'
    },
    {
      icon: Users,
      title: 'Security Training',
      description: 'Employee training programs to prevent security breaches'
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: '24/7 incident response and recovery services'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Security',
      price: '$1,499',
      features: [
        'Security audit & assessment',
        'Basic firewall setup',
        'Antivirus deployment',
        'Security awareness training',
        '3 months support'
      ]
    },
    {
      name: 'Advanced Security',
      price: '$4,999',
      features: [
        'Comprehensive security suite',
        'Threat monitoring & detection',
        'Data encryption solutions',
        'Compliance assistance',
        'Incident response plan',
        '12 months support'
      ]
    },
    {
      name: 'Enterprise Security',
      price: '$12,999',
      features: [
        'Full cybersecurity infrastructure',
        '24/7 security monitoring',
        'Advanced threat protection',
        'Compliance management',
        'Dedicated security team',
        'Ongoing maintenance'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Comprehensive security solutions to protect your digital assets and ensure compliance
            </p>
            <Button size="lg" className="bg-white text-primary-900 hover:bg-gray-100">
              Get Security Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Security Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Protect your business with our comprehensive cybersecurity services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Cybersecurity Matters
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { number: '43%', label: 'of cyber attacks target small businesses' },
              { number: '$4.45M', label: 'average cost of a data breach in 2023' },
              { number: '95%', label: 'of successful attacks are due to human error' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Don't Wait Until It's Too Late
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Protect your business with proactive cybersecurity measures. Get a free security assessment today.
            </p>
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
              Free Security Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Cybersecurity Packages
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Protect your business with our comprehensive security solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-primary-600">{plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-primary-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary-600 hover:bg-primary-700">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cybersecurity;
