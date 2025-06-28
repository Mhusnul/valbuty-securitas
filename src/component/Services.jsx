import { useEffect, useRef } from "react";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Users,
  BarChart3,
  Briefcase,
  Building2,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "./Section";
import { useFadeIn, useStaggerAnimation } from "../hooks/useAnimations";

gsap.registerPlugin(ScrollTrigger);

// Service Card Component
function ServiceCard({
  icon: Icon,
  title,
  description,
  variant = "primary",
  className = "",
  onSeeDetail,
  animationDelay = 0,
}) {
  const cardRef = useRef(null);

  useEffect(() => {
    const element = cardRef.current;

    gsap.fromTo(
      element,
      {
        y: 80,
        opacity: 0,
        rotationY: -15,
      },
      {
        y: 0,
        opacity: 1,
        rotationY: 0,
        duration: 0.8,
        delay: animationDelay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Enhanced hover animation
    const handleMouseEnter = () => {
      gsap.to(element, {
        scale: 1.05,
        rotationY: 5,
        z: 50,
        duration: 0.4,
        ease: "power2.out",
      });

      // Icon animation
      gsap.to(element.querySelector(".service-icon"), {
        scale: 1.2,
        rotation: 360,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        rotationY: 0,
        z: 0,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(element.querySelector(".service-icon"), {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animationDelay]);

  const variants = {
    primary:
      "bg-gradient-to-br from-yellow-400 to-yellow-600 text-black hover:from-white hover:to-gray-50 hover:text-gray-900",
    secondary:
      "bg-gradient-to-br from-yellow-700 to-orange-700 text-white hover:from-white hover:to-gray-50 hover:text-gray-900",
  };

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-3xl p-8 h-96 w-80 mx-auto cursor-pointer shadow-xl transition-all duration-500 ${variants[variant]} ${className}`}
      onClick={onSeeDetail}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white transform translate-x-8 -translate-y-8"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white transform -translate-x-4 translate-y-4"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center text-center">
        {/* Icon */}
        <div className="service-icon mb-8 mx-auto w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
          <Icon size={32} className="text-current" />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-sm opacity-90 mb-6 leading-relaxed">{description}</p>

        {/* See Detail Link */}
        <div className="flex items-center justify-center text-sm font-semibold group-hover:text-yellow-600 transition-colors duration-300">
          <span className="mr-2">See Detail</span>
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </div>
  );
}

function Services() {
  const headerRef = useFadeIn(0, "right");
  const cardsRef = useStaggerAnimation(0.2);

  const services = [
    {
      id: 1,
      icon: TrendingUp,
      title: "Retail Brokerage",
      description:
        "Discover the best investment opportunities in the capital market around the world with our comprehensive trading platform.",
      variant: "primary",
    },
    {
      id: 2,
      icon: Briefcase,
      title: "Investment Advisory",
      description:
        "Get personalized investment strategies and professional guidance from our experienced financial advisors.",
      variant: "secondary",
    },
    {
      id: 3,
      icon: Building2,
      title: "Corporate Finance",
      description:
        "Comprehensive corporate financial solutions including IPO, bond issuance, and mergers & acquisitions advisory.",
      variant: "primary",
    },
  ];

  const handleSeeDetail = (serviceId) => {
    console.log(`Navigate to service detail: ${serviceId}`);
    // Implementasi navigasi ke detail service
  };

  return (
    <Section background="white" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-bl from-yellow-50 to-orange-50 rounded-bl-[100px] -z-10"></div>
      <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-tr from-yellow-100/30 to-transparent rounded-tr-[80px] -z-10"></div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Header Section */}
          <div
            ref={headerRef}
            className="lg:col-span-4 text-center lg:text-left"
          >
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-6">
              <Shield size={16} className="mr-2" />
              OUR SERVICES
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Providing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                best investment
              </span>{" "}
              solutions tailored to our customer needs
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              As our aim to be your "lifelong investment partner", KB Valbury
              Sekuritas always strives to provide the best services and
              investment solutions through our branch networks and online
              service in Indonesia.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-yellow-600">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-yellow-600">50K+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Services Cards */}
          <div ref={cardsRef} className="lg:col-span-8">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  variant={service.variant}
                  onSeeDetail={() => handleSeeDetail(service.id)}
                  animationDelay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Services;
