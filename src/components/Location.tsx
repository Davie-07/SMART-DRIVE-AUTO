import { FaMapMarkerAlt } from "react-icons/fa";

const Location = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://maps.google.com/?q=XPRF%2B79+Mombasa"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition"
        title="View Location on Google Maps"
      >
        <FaMapMarkerAlt className="text-xl" />
        <span className="ml-2 hidden md:inline">XPRF+79 Mombasa</span>
      </a>
    </div>
  );
};

export default Location;
