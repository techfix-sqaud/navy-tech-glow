
import { ArrowRight, Play, Code, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import VideoModal from "./VideoModal";
import valstine from "@/assets/videos/valstine.mp4"; // Adjust the path as necessary

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="pt-20 pb-20 relative overflow-hidden"
    >
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-white/30 w-12"></div>
            <span className="mx-4 text-sm font-medium tracking-wider uppercase opacity-90">
              🚀 Transforming Ideas into Digital Reality
            </span>
            <div className="h-px bg-white/30 w-12"></div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Next-Generation
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Tech Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            From smart home automation to cutting-edge web applications, we
            deliver innovative technology solutions that power your digital
            transformation.
            <span className="block mt-2 text-lg opacity-75">
              Enterprise-grade solutions for the modern world
            </span>
          </p>

          {/* Stats or Features */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-blue-200 opacity-75">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-blue-200 opacity-75">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-blue-200 opacity-75">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99%</div>
              <div className="text-sm text-blue-200 opacity-75">Client Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/StartProject">
              <Button
                size="lg"
                className="bg-white text-primary-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold group"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title="Valstine Demo"
        videoUrl={valstine}
      />
    </section>
  );
};

export default Hero;
