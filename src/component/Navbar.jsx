import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, User, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import logo from "../assets/logo.png";
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    // Initial animation
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 }
    );

    // Logo animation
    gsap.fromTo(
      logoRef.current,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)", delay: 0.5 }
    );

    // Scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "About Us",
      submenu: [
        "Company Overview",
        "Vision, Mission & Core Values",
        "Management",
        "Corporate Governance",
        "Career",
      ],
    },
    {
      name: "Services",
      submenu: [
        "Brokerage",
        "Investment Banking",
        "Mutual Fund",
        "Fixed Income",
      ],
    },
    { name: "Research" },
    { name: "Information" },
    { name: "Contact Us" },
  ];

  const toggleMobile = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      gsap.fromTo(
        ".mobile-menu",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  const handleDropdownEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-xl py-2"
          : "bg-white shadow-lg py-4"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div ref={logoRef} className="flex items-center space-x-3">
            <img
              src={logo}
              alt="KB Valbury Sekuritas"
              className="h-10 w-auto transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => handleDropdownEnter(index)}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-yellow-600 font-semibold transition-colors duration-300 py-2">
                  <span>{item.name}</span>
                  {item.submenu && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div
                    className={`absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                      activeDropdown === index
                        ? "opacity-100 visible transform translate-y-0"
                        : "opacity-0 invisible transform -translate-y-4"
                    }`}
                  >
                    <div className="py-4">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="flex items-center px-6 py-3 text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 transition-all duration-200"
                        >
                          <ArrowRight
                            size={14}
                            className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          />
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" icon={User} iconPosition="left">
              Login
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
            >
              Open Account
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobile}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu lg:hidden mt-4 pb-4">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="py-4">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <button className="w-full flex items-center justify-between px-6 py-4 text-left text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 transition-all duration-200">
                      <span className="font-semibold">{item.name}</span>
                      {item.submenu && <ChevronDown size={16} />}
                    </button>

                    {item.submenu && (
                      <div className="bg-gray-50 px-6 pb-4">
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href="#"
                            className="block py-2 text-gray-600 hover:text-yellow-600 transition-colors duration-200"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="p-6 bg-gray-50 space-y-3">
                <Button
                  variant="outline"
                  size="md"
                  className="w-full"
                  icon={User}
                  iconPosition="left"
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500"
                >
                  Open Account
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
