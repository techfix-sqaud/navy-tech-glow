
import { Calendar, Clock, User, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Consultation = () => {
  const benefits = [
    'Personalized solution recommendations',
    'Cost estimation and timeline planning',
    'Technology stack recommendations',
    'Risk assessment and mitigation strategies',
    'Roadmap for implementation',
    'No obligation, completely free'
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:30 AM - 11:30 AM',
    '2:00 PM - 3:00 PM',
    '3:30 PM - 4:30 PM'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Free Consultation
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Get expert advice on your technology needs - completely free, no strings attached
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                What You'll Get
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">30-Minute Session</h3>
                  <p className="text-gray-600 dark:text-gray-400">One-on-one with our experts</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Expert Guidance</h3>
                  <p className="text-gray-600 dark:text-gray-400">Tailored recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Schedule Your Consultation
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Choose a time that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Booking Form */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle>Book Your Session</CardTitle>
                  <CardDescription>Fill out the form and we'll contact you shortly</CardDescription>
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
                      Project Description
                    </label>
                    <Textarea placeholder="Tell us about your project..." rows={4} />
                  </div>

                  <Button className="w-full bg-primary-600 hover:bg-primary-700">
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>

              {/* Time Slots */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Available Times</h3>
                <div className="space-y-4">
                  {timeSlots.map((slot, index) => (
                    <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow duration-200">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Clock className="h-5 w-5 text-primary-600" />
                            <span className="font-medium text-gray-900 dark:text-white">{slot}</span>
                          </div>
                          <Button size="sm" variant="outline">Select</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Note:</strong> All times are in PST. We'll send you a calendar invite with video call details after booking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultation;
