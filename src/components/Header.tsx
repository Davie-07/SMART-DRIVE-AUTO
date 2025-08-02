import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { FaPhoneAlt, FaTimes } from "react-icons/fa";

const Header = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.href.replace("#", ""));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showMobileMenu) {
      timer = setTimeout(() => setShowMobileMenu(false), 5000);
    }
    return () => clearTimeout(timer);
  }, [showMobileMenu]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace("#", ""));
    element?.scrollIntoView({ behavior: "smooth" });
    setShowMobileMenu(false);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md shadow-sm py-1">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-2">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="Auto Fast Logo"
            className="h-8 object-contain"
          />
        </div>

        {/* Centered Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center space-x-4 bg-emerald-700/40 backdrop-blur-sm px-6 py-2 rounded-full shadow-md">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-base font-semibold px-4 py-1 rounded-full transition-colors duration-200 ${
                  activeSection === item.href.replace("#", "")
                    ? "bg-white text-green-700 shadow-md"
                    : "text-white hover:bg-emerald-500/30"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <a
          href="tel:+254703766689"
          className="hidden md:flex items-center space-x-2 text-white hover:text-emerald-300 transition-colors px-3 py-1 rounded-full bg-black"
        >
          <FaPhoneAlt
            className="text-lg text-emerald-400"
            style={{
              animation: "vibrate 0.3s infinite",
              display: "inline-block"
            }}
          />
          <span className="text-sm font-medium">+254 703 766 689</span>
        </a>

        {/* Mobile Menu Button */}
        <Button
          variant="outline"
          className="md:hidden bg-green-700 text-white border-none hover:bg-green-800 h-8 px-4 rounded-full"
          onClick={() => setShowMobileMenu(true)}
        >
          <span className="text-sm">Menu</span>
        </Button>
      </nav>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="fixed top-20 left-6 right-6 z-50 flex justify-center">
          <div className="backdrop-blur-md bg-green-700/90 rounded-xl p-4 shadow-lg flex flex-wrap justify-center items-center gap-4 animate-slide-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-xs text-white font-semibold hover:text-white/80 transition-transform transform hover:scale-105 px-3 py-1 rounded"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => setShowMobileMenu(false)}
              className="text-white hover:text-red-300 text-lg"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      {/* Inline animation styles */}
      <style>
        {`
          @keyframes vibrate {
            0% { transform: translateX(0); }
            20% { transform: translateX(-2px); }
            40% { transform: translateX(2px); }
            60% { transform: translateX(-2px); }
            80% { transform: translateX(2px); }
            100% { transform: translateX(0); }
          }
          @keyframes slide-in {
            0% { transform: translateY(40px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-slide-in {
            animation: slide-in 0.4s ease-out forwards;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
