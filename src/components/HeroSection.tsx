import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/logo.png";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
  FaEnvelope,
  FaTimes
} from "react-icons/fa";

const socialLinks = [
  { icon: <FaWhatsapp />, url: "https://wa.me/25473373222", label: "WhatsApp" },
  { icon: <FaFacebookF />, url: "https://facebook.com/yourpage", label: "Facebook" },
  { icon: <FaInstagram />, url: "https://instagram.com/yourprofile", label: "Instagram" },
  { icon: <FaTwitter />, url: "https://twitter.com/yourhandle", label: "Twitter" },
  { icon: <FaEnvelope />, url: "mailto:yourmail@gmail.com", label: "Gmail" },
  { icon: <FaTelegramPlane />, url: "https://t.me/yourusername", label: "Telegram" }
];

const HeroSection = () => {
  const [animateSocials, setAnimateSocials] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateSocials(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 710);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isMobile && showIcons) {
      timer = setTimeout(() => setShowIcons(false), 5000);
    }
    return () => clearTimeout(timer);
  }, [showIcons, isMobile]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-right bg-[length:auto_100%] bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent backdrop-blur-[1px] md:backdrop-blur-0"></div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl text-white">
          <p className="text-lg mb-4 tracking-wide opacity-90">
            Welcome to{" "}
            <span className="text-cyan-600 font-bold inline-block typing-loop">
              SMART DRIVE AUTO TRADING
            </span>


          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Feel <span className="text-blue-400">the difference</span>
            <br />
            with just one visit
          </h1>

          <p className="text-lg leading-relaxed mb-8 max-w-lg opacity-90">
            Your one-stop solution for diagnosis, repairs, and performance upgrades.
          </p>

          <a href="#contact">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-md transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book A Visit
            </Button>
          </a>
        </div>
      </div>

      {/* Desktop Social Icons */}
      {!isMobile && (
        <div
          className={`absolute top-1/3 right-16 flex flex-col items-center space-y-6 z-20 backdrop-blur-md bg-white/10 p-4 rounded-xl shadow-lg ${animateSocials ? "translate-x-20 opacity-0 animate-slide-in" : ""
            }`}
        >
          <span className="text-[#50C878] text-sm font-semibold mb-2">Let's connect:</span>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold text-xl hover:text-blue-700 transition-transform transform hover:scale-110"
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      )}

      {/* Mobile Social Icons */}
      {isMobile && (
        <div className="fixed bottom-6 left-6 right-6 z-50 flex justify-center">
          {!showIcons ? (
            <button
              onClick={() => setShowIcons(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg animate-pulse"
            >
              Connect
            </button>
          ) : (
            <div className="backdrop-blur-md bg-white/30 rounded-xl p-4 shadow-lg flex flex-wrap justify-center items-center gap-4 animate-slide-in">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-bold text-xl hover:text-blue-700 transition-transform transform hover:scale-110"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
              <button
                onClick={() => setShowIcons(false)}
                className="text-red-500 hover:text-red-700 text-lg"
              >
                <FaTimes />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Animation styles */}
      <style>
        <style>
  {`
    @keyframes typing {
      0% { width: 0ch }
      40% { width: 27ch }
      60% { width: 27ch }
      100% { width: 0ch }
    }

    @keyframes blink {
      50% { border-color: transparent }
    }

    .typing-loop {
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      border-right: 2px solid #00ffff;
       vertical-align: middle;
      animation:
        typing 7s steps(27, end) infinite,
        blink 0.7s step-end infinite;
    }
  `}
</style>

      </style>


    </section>
  );
};

export default HeroSection;
