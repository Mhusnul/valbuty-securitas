import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Card({
  category,
  title,
  author,
  date,
  onSeeDetail,
  className = "",
  animationDelay = 0,
}) {
  const cardRef = useRef(null);

  useEffect(() => {
    const element = cardRef.current;

    gsap.fromTo(
      element,
      {
        y: 50,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
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

    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(element, {
        y: -10,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        y: 0,
        scale: 1,
        duration: 0.3,
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

  return (
    <div
      ref={cardRef}
      className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 overflow-hidden relative ${className}`}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        {/* Category badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold mb-4">
          {category}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-yellow-800 transition-colors duration-300">
          {title}
        </h3>

        {/* Author */}
        <p className="text-yellow-700 font-medium text-sm mb-2">{author}</p>

        {/* Date */}
        <p className="text-gray-500 text-sm mb-6">{date}</p>

        {/* See detail link */}
        <button
          onClick={onSeeDetail}
          className="group/btn flex items-center text-yellow-600 hover:text-yellow-700 font-semibold text-sm transition-all duration-300"
        >
          <span className="mr-2">See Detail</span>
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
