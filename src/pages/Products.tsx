
import { Check, Star, Code, Shield, Network, Home, Smartphone, Cloud, Wrench, Video, Sparkles, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      icon: Code,
      name: 'ValstineCMS',
      category: 'Content Management',
      status: 'Available Now',
      statusColor: 'bg-green-100 text-green-700 border-green-200',
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
      status: 'Coming This Fall',
      statusColor: 'bg-orange-100 text-orange-700 border-orange-200',
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
      status: 'Coming Soon',
      statusColor: 'bg-blue-100 text-blue-700 border-blue-200',
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
      status: 'Beta Available',
      statusColor: 'bg-purple-100 text-purple-700 border-purple-200',
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
      status: 'Available Now',
      statusColor: 'bg-green-100 text-green-700 border-green-200',
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
      status: 'Coming This Winter',
      statusColor: 'bg-cyan-100 text-cyan-700 border-cyan-200',
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
      status: 'Available Now',
      statusColor: 'bg-green-100 text-green-700 border-green-200',
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
      status: 'Live & Running',
      statusColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
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
      
      {/* Enhanced Hero Section */}
      <section className="pt-20 pb-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-12 h-12 bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
            <Code className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="absolute top-32 right-16 animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="w-10 h-10 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce" style={{ animationDelay: '2s' }}>
          <div className="w-8 h-8 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center">
            <Zap className="h-4 w-4 text-white" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white animate-fade-in">
            {/* Subtitle */}
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-white/30 w-12"></div>
              <span className="mx-4 text-sm font-medium tracking-wider uppercase opacity-90">
                Innovation at Your Fingertips
              </span>
              <div className="h-px bg-white/30 w-12"></div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our Software
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl sm:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              Cutting-edge software solutions designed to accelerate your digital transformation
              <span className="block mt-2 text-lg opacity-75">
                From enterprise applications to consumer-focused platforms
              </span>
            </p>
            
            {/* Stats or Features */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold">8+</div>
                <div className="text-sm opacity-75">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-75">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm opacity-75">Uptime</div>
              </div>
            </div>
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
                    <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
                      {product.category}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                      {product.name}
                    </h2>
                    {/* Status Badge */}
                    <Badge className={`${product.statusColor} font-medium mb-4`}>
                      {product.status}
                    </Badge>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                      {product.description}
                    </p>
                  </div>

                  {/* Features and Pricing Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {/* Features */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
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
                            className={`relative border transition-all hover:shadow-md ${plan.popular ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : 'border-gray-200 dark:border-gray-700'}`}
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
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white shadow-2xl">
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
