import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Section({
  children,
  className = "",
  background = "transparent",
  padding = "py-16",
  animate = true,
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!animate) return;

    const element = sectionRef.current;

    gsap.fromTo(
      element,
      {
        opacity: 0.8,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animate]);

  const backgroundClasses = {
    transparent: "",
    white: "bg-white",
    gray: "bg-gray-50",
    yellow: "bg-yellow-50",
    gradient: "bg-gradient-to-br from-yellow-50 to-orange-50",
  };

  return (
    <section
      ref={sectionRef}
      className={`${backgroundClasses[background]} ${padding} ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
