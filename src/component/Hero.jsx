import { useEffect, useRef } from "react";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";
import Section from "./Section";
import { useFadeIn, useStaggerAnimation } from "../hooks/useAnimations";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef(null);
  const backgroundRef = useRef(null);
  const contentRef = useFadeIn(0.2);
  const featuresRef = useStaggerAnimation(0.1);

  useEffect(() => {
    // Parallax effect for background
    gsap.to(backgroundRef.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Floating animation for hero content
    gsap.to(contentRef.current, {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Secure Trading",
      description: "Bank-level security for your investments",
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Real-time insights and professional research",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 customer service and investment guidance",
    },
  ];

  const handleRegistration = () => {
    console.log("Navigate to registration");
    // Implementasi navigasi ke halaman registrasi
  };

  return (
    <Section
      className="relative min-h-screen overflow-hidden"
      background="gradient"
    >
      <div
        ref={heroRef}
        className="relative z-10 container mx-auto px-4 h-full flex items-center"
      >
        {/* Background Image with Parallax */}
        <div
          ref={backgroundRef}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url("https://www.kbvalbury.com/cfind/source/thumb/images/cover_w1200_h480_bg-buka-rekening.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "3rem",
          }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/80 to-orange-900/60 rounded-3xl z-0" />

        {/* Main Content */}
        <div className="relative z-20 w-full max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div ref={contentRef} className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-100/90 text-yellow-800 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                <Shield size={16} className="mr-2" />
                ACCOUNT OPENING
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Let's Get on{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Board!
                </span>
              </h1>

              <p className="text-xl text-gray-200 mb-8 max-w-lg">
                Start your investing journey with us and unlock the potential of
                the financial markets with expert guidance and cutting-edge
                technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleRegistration}
                  icon={ArrowRight}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold"
                >
                  Register Now
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Content - Features */}
            <div ref={featuresRef} className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                      <feature.icon size={24} className="text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-6 h-6 bg-orange-400 rounded-full opacity-40 animate-bounce" />
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-yellow-300 rounded-full opacity-70" />
      </div>
    </Section>
  );
}

export default Hero;
