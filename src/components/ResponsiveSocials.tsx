import { useState, useEffect } from "react";
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

const ResponsiveSocials = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 710);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Desktop view */}
      {!isMobile && (
        <div className="fixed top-1/3 right-16 flex flex-col items-center space-y-6 z-50">
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

      {/* Mobile view */}
      {isMobile && (
        <div className="fixed bottom-6 left-6 z-50">
          {!showIcons ? (
            <button
              onClick={() => setShowIcons(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg animate-bounce"
            >
              Connect
            </button>
          ) : (
            <div className="bg-white rounded-xl p-4 shadow-lg flex flex-col items-center space-y-4">
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
                className="text-red-500 hover:text-red-700 text-lg mt-2"
              >
                <FaTimes />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ResponsiveSocials;
