
import { Rocket, Users, Clock, DollarSign, CheckCircle, ArrowRight, Code, Sparkles, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';

const StartProject = () => {
  const projectTypes = [
    {
      icon: Rocket,
      title: 'Smart Home Automation',
      description: 'Complete home automation with IoT integration',
      startingPrice: '$2,999',
      timeline: '2-4 weeks'
    },
    {
      icon: Users,
      title: 'Web Application',
      description: 'Custom web applications for your business',
      startingPrice: '$5,999',
      timeline: '4-8 weeks'
    },
    {
      icon: Clock,
      title: 'Network Infrastructure',
      description: 'Enterprise networking solutions',
      startingPrice: '$3,999',
      timeline: '1-3 weeks'
    },
    {
      icon: DollarSign,
      title: 'Cybersecurity Setup',
      description: 'Comprehensive security solutions',
      startingPrice: '$4,999',
      timeline: '2-6 weeks'
    }
  ];

  const process = [
    'Project consultation and requirements gathering',
    'Detailed proposal with timeline and pricing',
    'Contract signing and project kickoff',
    'Development and regular progress updates',
    'Testing, deployment, and handover',
    'Ongoing support and maintenance'
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
            <Rocket className="h-6 w-6 text-white" />
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
                Turn Vision Into Reality
              </span>
              <div className="h-px bg-white/30 w-12"></div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Start Your
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Project
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl sm:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              Turn your vision into reality with our expert team and proven process
              <span className="block mt-2 text-lg opacity-75">
                From concept to deployment, we deliver excellence
              </span>
            </p>
            
            {/* Stats or Features */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm opacity-75">Projects Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">2-8</div>
                <div className="text-sm opacity-75">Weeks Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-75">Support</div>
              </div>
            </div>
            
            <Button size="lg" className="bg-white text-primary-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold group">
              Get Project Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Project Type
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Select the type of project you want to start
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectTypes.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Starting from</p>
                        <p className="text-2xl font-bold text-primary-600">{project.startingPrice}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Timeline</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{project.timeline}</p>
                      </div>
                    </div>
                    <Button className="w-full bg-primary-600 hover:bg-primary-700">
                      Select This Project
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Project Process
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                We follow a proven methodology to ensure your project is delivered on time, 
                within budget, and exceeds your expectations.
              </p>
              <div className="space-y-4">
                {process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Project Request Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Start Your Project</CardTitle>
                <CardDescription>Tell us about your project and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name
                    </label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company
                  </label>
                  <Input placeholder="Your company name" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <Input placeholder="e.g., $5,000 - $10,000" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Details
                  </label>
                  <Textarea placeholder="Describe your project, goals, and requirements..." rows={4} />
                </div>

                <Button className="w-full bg-primary-600 hover:bg-primary-700">
                  Submit Project Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Not Sure Where to Start?</h2>
            <p className="text-xl mb-8 opacity-90">
              Book a free consultation and we'll help you choose the best approach
            </p>
            <Link to="/consultation">
              <Button size="lg" className="bg-white text-primary-900 hover:bg-gray-100">
                Book Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartProject;
