import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, TrendingUp, BarChart3, PieChart } from "lucide-react";
import Card from "./Card";
import Button from "./Button";
import Section from "./Section";

gsap.registerPlugin(ScrollTrigger);

function Research() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  // Sample research data - dapat diganti dengan data dari API
  const researchData = [
    {
      id: 1,
      category: "Macro Economic",
      title: "Indonesia Macro Update - BI Rate Update 22 May 2025",
      author: "Fikri C. Permana",
      date: "22 Mei 2024",
      icon: TrendingUp,
    },
    {
      id: 2,
      category: "Market Analysis",
      title: "Southeast Asia Market Outlook - Q2 2025 Review",
      author: "Sarah Johnson",
      date: "15 Juni 2024",
      icon: BarChart3,
    },
    {
      id: 3,
      category: "Investment Strategy",
      title: "ESG Investment Trends in Emerging Markets",
      author: "Michael Chen",
      date: "8 Juni 2024",
      icon: PieChart,
    },
    {
      id: 4,
      category: "Policy Review",
      title: "Central Bank Digital Currency Implementation",
      author: "Dr. Amanda Rodriguez",
      date: "1 Juni 2024",
      icon: BookOpen,
    },
  ];

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current.children,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleSeeMore = () => {
    console.log("Navigate to research page");
    // Implementasi navigasi ke halaman research lengkap
  };

  const handleSeeDetail = (id) => {
    console.log(`Navigate to research detail: ${id}`);
    // Implementasi navigasi ke detail research
  };

  return (
    <Section background="gradient" className="min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 text-center md:text-left gap-8"
        >
          <div className="flex-1">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
              <BookOpen size={16} className="mr-2" />
              RESEARCH
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Recent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                Publications
              </span>
            </h1>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl">
              Discover our latest insights and analysis on market trends,
              economic outlook, and investment strategies.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Button
              variant="outline"
              size="lg"
              onClick={handleSeeMore}
              className="w-full md:w-auto min-w-[150px]"
            >
              See More
            </Button>
          </div>
        </div>

        {/* Research Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {researchData.map((research, index) => (
            <Card
              key={research.id}
              category={research.category}
              title={research.title}
              author={research.author}
              date={research.date}
              onSeeDetail={() => handleSeeDetail(research.id)}
              animationDelay={index * 0.1}
              className="h-full"
            />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-yellow-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated with Our Research
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest market insights
              delivered directly to your inbox.
            </p>
            <Button variant="primary" size="lg" className="mx-auto">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Research;
