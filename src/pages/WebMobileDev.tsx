
import { Code, Smartphone, Globe, Layers, Database, Zap, Check, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const WebMobileDev = () => {
  const webServices = [
    {
      icon: Globe,
      title: 'Custom Web Applications',
      description: 'Tailored web solutions built with modern frameworks and technologies'
    },
    {
      icon: Layers,
      title: 'E-commerce Platforms',
      description: 'Scalable online stores with secure payment processing'
    },
    {
      icon: Database,
      title: 'Content Management',
      description: 'User-friendly CMS solutions for easy content updates'
    }
  ];

  const mobileServices = [
    {
      icon: Smartphone,
      title: 'Native Mobile Apps',
      description: 'iOS and Android apps built for optimal performance'
    },
    {
      icon: Code,
      title: 'Cross-Platform Solutions',
      description: 'React Native and Flutter apps for multiple platforms'
    },
    {
      icon: Zap,
      title: 'App Store Optimization',
      description: 'Maximize your app\'s visibility and downloads'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Website',
      price: '$2,499',
      features: [
        'Responsive website design',
        'Up to 5 pages',
        'Basic SEO optimization',
        'Contact form integration',
        '3 months support'
      ]
    },
    {
      name: 'Web Application',
      price: '$8,999',
      features: [
        'Custom web application',
        'Database integration',
        'User authentication',
        'Admin dashboard',
        'API development',
        '12 months support'
      ]
    },
    {
      name: 'Mobile App',
      price: '$12,999',
      features: [
        'Native iOS & Android apps',
        'Custom UI/UX design',
        'Backend development',
        'App store submission',
        'Push notifications',
        'Ongoing maintenance'
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
            <Smartphone className="h-4 w-4 text-white" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white animate-fade-in">
            {/* Subtitle */}
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-white/30 w-12"></div>
              <span className="mx-4 text-sm font-medium tracking-wider uppercase opacity-90">
                Modern Digital Solutions
              </span>
              <div className="h-px bg-white/30 w-12"></div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Web & Mobile
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Development
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl sm:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              Custom applications that engage users and drive business growth across all platforms
              <span className="block mt-2 text-lg opacity-75">
                Modern frameworks, scalable architecture, stunning designs
              </span>
            </p>
            
            {/* Stats or Features */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold">150+</div>
                <div className="text-sm opacity-75">Apps Developed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm opacity-75">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-75">Support</div>
              </div>
            </div>
            
            <Button size="lg" className="bg-white text-primary-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Development Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From concept to deployment, we create digital solutions that make an impact
            </p>
          </div>

          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Development</TabsTrigger>
            </TabsList>
            
            <TabsContent value="web">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {webServices.map((service, index) => {
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
            </TabsContent>
            
            <TabsContent value="mobile">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {mobileServices.map((service, index) => {
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
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A proven methodology that ensures quality and timely delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your requirements and goals' },
              { step: '02', title: 'Design', description: 'Creating wireframes and user interface designs' },
              { step: '03', title: 'Development', description: 'Building your application with best practices' },
              { step: '04', title: 'Launch', description: 'Testing, deployment, and ongoing support' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{phase.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Development Packages
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Flexible pricing for web and mobile development projects
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

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Build Your Next Application?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together.
            </p>
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
              Get Project Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebMobileDev;
