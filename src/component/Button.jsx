import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
  iconPosition = "right",
  ...props
}) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleMouseDown = () => {
      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
      });
    };

    const handleMouseUp = () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.1,
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    button.addEventListener("mousedown", handleMouseDown);
    button.addEventListener("mouseup", handleMouseUp);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      button.removeEventListener("mousedown", handleMouseDown);
      button.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const baseClasses =
    "font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden";

  const variants = {
    primary:
      "bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-yellow-800 text-yellow-800 bg-transparent hover:bg-yellow-50 hover:border-yellow-600 hover:text-yellow-600",
    ghost: "text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button ref={buttonRef} className={classes} onClick={onClick} {...props}>
      {Icon && iconPosition === "left" && <Icon size={18} />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={18} />}
    </button>
  );
}

export default Button;
