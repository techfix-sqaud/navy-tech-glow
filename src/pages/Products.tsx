
import { Check, Star, Code, Shield, Network, Home, Smartphone, Cloud, Wrench, Video } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      icon: Code,
      name: 'ValstineCMS',
      category: 'Content Management',
      description: 'Advanced content management system with AI-powered features and seamless integrations.',
      features: [
        'AI Content Generation',
        'Multi-language Support',
        'Advanced SEO Tools',
        'Custom Workflows',
        'API Integration',
        '24/7 Support'
      ],
      pricing: [
        { plan: 'Starter', price: '$49', period: 'month', popular: false },
        { plan: 'Professional', price: '$149', period: 'month', popular: true },
        { plan: 'Enterprise', price: 'Custom', period: 'pricing', popular: false }
      ],
      type: 'software'
    },
    {
      icon: Shield,
      name: 'SecureGuard Pro',
      category: 'Cybersecurity',
      description: 'Enterprise-grade cybersecurity solution with real-time threat detection and prevention.',
      features: [
        'Real-time Threat Detection',
        'Advanced Firewall',
        'Vulnerability Scanning',
        'Compliance Reporting',
        'Incident Response',
        'Security Training'
      ],
      pricing: [
        { plan: 'Basic', price: '$99', period: 'month', popular: false },
        { plan: 'Professional', price: '$299', period: 'month', popular: true },
        { plan: 'Enterprise', price: 'Custom', period: 'pricing', popular: false }
      ],
      type: 'software'
    },
    {
      icon: Network,
      name: 'NetworkFlow',
      category: 'Networking',
      description: 'Intelligent network management platform for optimizing performance and monitoring.',
      features: [
        'Network Monitoring',
        'Performance Analytics',
        'Automated Optimization',
        'Security Integration',
        'Custom Dashboards',
        'Multi-site Management'
      ],
      pricing: [
        { plan: 'Standard', price: '$79', period: 'month', popular: false },
        { plan: 'Advanced', price: '$199', period: 'month', popular: true },
        { plan: 'Enterprise', price: 'Custom', period: 'pricing', popular: false }
      ],
      type: 'software'
    },
    {
      icon: Home,
      name: 'SmartHome Hub',
      category: 'IoT & Automation',
      description: 'Complete smart home automation platform with AI-driven intelligence and energy optimization.',
      features: [
        'Device Integration',
        'AI Automation',
        'Energy Optimization',
        'Voice Control',
        'Mobile App',
        'Cloud Sync'
      ],
      pricing: [
        { plan: 'Home', price: '$39', period: 'month', popular: false },
        { plan: 'Pro', price: '$89', period: 'month', popular: true },
        { plan: 'Business', price: '$199', period: 'month', popular: false }
      ],
      type: 'software'
    },
    {
      icon: Smartphone,
      name: 'MobileFirst SDK',
      category: 'Mobile Development',
      description: 'Comprehensive mobile development SDK with cross-platform capabilities and advanced features.',
      features: [
        'Cross-platform Support',
        'Native Performance',
        'Push Notifications',
        'Analytics Integration',
        'Offline Capabilities',
        'Developer Tools'
      ],
      pricing: [
        { plan: 'Developer', price: '$29', period: 'month', popular: false },
        { plan: 'Team', price: '$99', period: 'month', popular: true },
        { plan: 'Enterprise', price: '$299', period: 'month', popular: false }
      ],
      type: 'software'
    },
    {
      icon: Cloud,
      name: 'CloudScale Platform',
      category: 'Cloud Infrastructure',
      description: 'Scalable cloud platform with auto-scaling, monitoring, and deployment automation.',
      features: [
        'Auto-scaling',
        'Load Balancing',
        'Monitoring & Alerts',
        'CI/CD Integration',
        'Database Management',
        'Backup & Recovery'
      ],
      pricing: [
        { plan: 'Startup', price: '$59', period: 'month', popular: false },
        { plan: 'Growth', price: '$199', period: 'month', popular: true },
        { plan: 'Scale', price: '$499', period: 'month', popular: false }
      ],
      type: 'software'
    },
    {
      icon: Wrench,
      name: 'InstantApp',
      category: 'Mobile Application',
      description: 'The ultimate handyman app connecting skilled professionals with customers for instant home services.',
      features: [
        'Real-time Booking',
        'GPS Tracking',
        'Secure Payments',
        'Rating & Reviews',
        'Multi-service Support',
        'Emergency Services'
      ],
      pricing: [
        { plan: 'Free', price: 'Free', period: 'download', popular: false },
        { plan: 'Pro Handyman', price: '$19.99', period: 'month', popular: true },
        { plan: 'Business', price: '$49.99', period: 'month', popular: false }
      ],
      type: 'mobile-app',
      appStores: {
        ios: '#',
        android: '#'
      }
    },
    {
      icon: Video,
      name: 'FaliStream',
      category: 'Web Application',
      description: 'Professional video converter and downloader platform for all your media conversion needs.',
      features: [
        'Multi-format Support',
        'High-quality Conversion',
        'Batch Processing',
        'Cloud Storage',
        'Fast Downloads',
        'No Registration Required'
      ],
      pricing: [
        { plan: 'Free', price: 'Free', period: 'forever', popular: false },
        { plan: 'Premium', price: '$9.99', period: 'month', popular: true },
        { plan: 'Pro', price: '$19.99', period: 'month', popular: false }
      ],
      type: 'web-app',
      websiteUrl: 'https://www.falistream.com'
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
              Our Software Products
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Cutting-edge software solutions designed to accelerate your digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  {/* Product Header */}
                  <div className="text-center mb-12">
                    <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
                      {product.category}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      {product.name}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                      {product.description}
                    </p>
                  </div>

                  {/* Features and Pricing Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {/* Features */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">Pricing Plans</h3>
                      <div className="space-y-4">
                        {product.pricing.map((plan, planIndex) => (
                          <Card 
                            key={planIndex} 
                            className={`relative ${plan.popular ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : ''}`}
                          >
                            {plan.popular && (
                              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                                  <Star className="h-3 w-3 mr-1" />
                                  Popular
                                </div>
                              </div>
                            )}
                            
                            <CardContent className="p-6">
                              <div className="flex justify-between items-center">
                                <div>
                                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{plan.plan}</h4>
                                </div>
                                <div className="text-right">
                                  <span className="text-2xl font-bold text-primary-600">{plan.price}</span>
                                  <span className="text-gray-600 dark:text-gray-400 ml-1">/{plan.period}</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="text-center space-y-4">
                        {product.type === 'mobile-app' && product.appStores && (
                          <div className="space-y-3">
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                              <Button 
                                className="bg-black hover:bg-gray-800 text-white px-6 py-3 flex items-center justify-center"
                                onClick={() => window.open(product.appStores.ios, '_blank')}
                              >
                                <span className="mr-2">📱</span>
                                Download on App Store
                              </Button>
                              <Button 
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 flex items-center justify-center"
                                onClick={() => window.open(product.appStores.android, '_blank')}
                              >
                                <span className="mr-2">🤖</span>
                                Get it on Google Play
                              </Button>
                            </div>
                            <Link to="/StartProject">
                              <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
                                Get Started with {product.name}
                              </Button>
                            </Link>
                          </div>
                        )}
                        
                        {product.type === 'web-app' && product.websiteUrl && (
                          <div className="space-y-3">
                            <Button 
                              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3"
                              onClick={() => window.open(product.websiteUrl, '_blank')}
                            >
                              Visit {product.name}
                            </Button>
                            <div className="block">
                              <Link to="/StartProject">
                                <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
                                  Get Started with {product.name}
                                </Button>
                              </Link>
                            </div>
                          </div>
                        )}
                        
                        {product.type === 'software' && (
                          <Link to="/StartProject">
                            <Button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3">
                              Get Started with {product.name}
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Choose the perfect software solution for your needs or let us create a custom solution just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/GetConsultation">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-white text-primary-600 hover:bg-gray-100">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
