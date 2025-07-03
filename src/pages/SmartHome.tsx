
import { Home, Wifi, Shield, Smartphone, Thermometer, Camera, Lock, Lightbulb, Check, Code, Sparkles, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SmartHome = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Smart Lighting',
      description: 'Automated lighting systems with scheduling, dimming, and color control'
    },
    {
      icon: Thermometer,
      title: 'Climate Control',
      description: 'Intelligent HVAC systems for optimal comfort and energy efficiency'
    },
    {
      icon: Lock,
      title: 'Security Systems',
      description: 'Advanced security with smart locks, alarms, and access control'
    },
    {
      icon: Camera,
      title: 'Surveillance',
      description: 'HD cameras with motion detection and remote monitoring'
    },
    {
      icon: Smartphone,
      title: 'Mobile Control',
      description: 'Control everything from your smartphone or tablet'
    },
    {
      icon: Wifi,
      title: 'IoT Integration',
      description: 'Seamless integration of all smart devices and sensors'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Smart Home',
      price: '$2,999',
      features: [
        'Smart lighting (5 rooms)',
        'Basic security system',
        'Mobile app control',
        'Installation & setup'
      ]
    },
    {
      name: 'Advanced Smart Home',
      price: '$7,999',
      features: [
        'Complete home automation',
        'Advanced security & surveillance',
        'Climate control integration',
        'Voice control system',
        'Energy monitoring',
        '6 months support'
      ]
    },
    {
      name: 'Luxury Smart Home',
      price: '$15,999',
      features: [
        'Premium automation system',
        'Professional surveillance',
        'Advanced AI integration',
        'Custom mobile app',
        'Ongoing maintenance',
        '24/7 support'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="pt-20 pb-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-pulse"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-12 h-12 bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
            <Home className="h-6 w-6 text-white" />
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
                Intelligent Home Solutions
              </span>
              <div className="h-px bg-white/30 w-12"></div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Smart Home
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl sm:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              Transform your home into an intelligent, connected space with our cutting-edge automation systems
              <span className="block mt-2 text-lg opacity-75">
                Complete home automation with AI-powered intelligence
              </span>
            </p>
            
            {/* Stats or Features */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sm opacity-75">Homes Automated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">30%</div>
                <div className="text-sm opacity-75">Energy Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-75">Monitoring</div>
              </div>
            </div>
            
            <Button size="lg" className="bg-white text-primary-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Home Automation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From lighting to security, we provide comprehensive smart home solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Our Smart Home Solutions?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Enhanced Security</h3>
                    <p className="text-gray-600 dark:text-gray-400">24/7 monitoring and instant alerts for complete peace of mind</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Home className="h-6 w-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Energy Efficiency</h3>
                    <p className="text-gray-600 dark:text-gray-400">Reduce energy costs by up to 30% with intelligent automation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Smartphone className="h-6 w-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Remote Control</h3>
                    <p className="text-gray-600 dark:text-gray-400">Control your home from anywhere in the world</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Contact us today for a free consultation and discover how we can transform your home.
              </p>
              <Button className="bg-primary-600 hover:bg-primary-700">
                Schedule Consultation
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
              Smart Home Packages
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose the perfect smart home solution for your needs
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

export default SmartHome;
