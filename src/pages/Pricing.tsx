
import { Check, Star, Code, Sparkles, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'one-time',
      description: 'Perfect for small businesses getting started with technology',
      features: [
        'Basic website development',
        'Simple mobile app',
        'Basic networking setup',
        'Email support',
        '3 months warranty'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$9,999',
      period: 'one-time',
      description: 'Comprehensive solutions for growing businesses',
      features: [
        'Advanced web application',
        'Native mobile apps (iOS & Android)',
        'Enterprise networking',
        'Basic cybersecurity package',
        'Priority support',
        '12 months warranty',
        'Training sessions'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large organizations',
      features: [
        'Full-scale digital transformation',
        'Advanced cybersecurity suite',
        'Smart home/office automation',
        'Cloud infrastructure',
        '24/7 dedicated support',
        'Ongoing maintenance',
        'Custom integrations'
      ],
      popular: false
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
                Transparent & Affordable
              </span>
              <div className="h-px bg-white/30 w-12"></div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Simple, Transparent
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl sm:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              Choose the perfect plan for your business needs with no hidden fees
              <span className="block mt-2 text-lg opacity-75">
                Flexible payment options and scalable solutions
              </span>
            </p>
            
            {/* Stats or Features */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold">3</div>
                <div className="text-sm opacity-75">Flexible Plans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">0</div>
                <div className="text-sm opacity-75">Hidden Fees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-75">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'border-primary-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary-600">{plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                  <CardDescription className="mt-4">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                What's included in the warranty?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our warranty covers bug fixes, security updates, and basic maintenance for the specified period.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Can I upgrade my plan later?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, you can upgrade your plan at any time. We'll work with you to expand your existing solution.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Do you offer payment plans?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, we offer flexible payment plans for all our packages. Contact us to discuss options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
