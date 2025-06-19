import { Network, Server, Wifi, Shield, Monitor, Router, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Networking = () => {
  const services = [
    {
      icon: Network,
      title: 'Network Design & Implementation',
      description: 'Custom network architecture tailored to your business needs'
    },
    {
      icon: Wifi,
      title: 'Wireless Solutions',
      description: 'High-performance WiFi networks with enterprise-grade security'
    },
    {
      icon: Server,
      title: 'Server Infrastructure',
      description: 'Robust server solutions for data storage and application hosting'
    },
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Comprehensive security protocols to protect your data'
    },
    {
      icon: Monitor,
      title: '24/7 Monitoring',
      description: 'Continuous network monitoring and proactive maintenance'
    },
    {
      icon: Router,
      title: 'Equipment Installation',
      description: 'Professional installation of routers, switches, and networking hardware'
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$1,999',
      features: [
        'Basic network setup',
        'WiFi installation',
        'Basic security configuration',
        '3 months support'
      ]
    },
    {
      name: 'Enterprise',
      price: '$7,999',
      features: [
        'Advanced network infrastructure',
        'Enterprise WiFi solutions',
        'Server setup & configuration',
        'Network security implementation',
        '12 months support',
        '24/7 monitoring'
      ]
    },
    {
      name: 'Custom Solution',
      price: 'Custom',
      features: [
        'Tailored network architecture',
        'Advanced security measures',
        'Redundancy & failover systems',
        'Ongoing maintenance',
        'Dedicated support team'
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
              Networking Infrastructure
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Enterprise-grade networking solutions for seamless connectivity and optimal performance
            </p>
            <Button size="lg" className="bg-white text-primary-900 hover:bg-gray-100">
              Get Network Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Networking Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From design to maintenance, we handle all aspects of your network infrastructure
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

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Our Networking Solutions?
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Scalable Infrastructure</h3>
                  <p className="text-gray-600 dark:text-gray-400">Networks designed to grow with your business needs</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">99.9% Uptime</h3>
                  <p className="text-gray-600 dark:text-gray-400">Reliable networks with minimal downtime and maximum performance</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Expert Support</h3>
                  <p className="text-gray-600 dark:text-gray-400">Dedicated team of network engineers available 24/7</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Need a Network Upgrade?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Get a free network assessment and discover how we can improve your connectivity.
              </p>
              <Button className="bg-primary-600 hover:bg-primary-700">
                Free Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Networking Packages
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Professional networking solutions for every business size
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
                    {plan.name === 'Custom Solution' ? 'Contact Us' : 'Get Quote'}
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

export default Networking;
