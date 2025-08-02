import { Button } from "@/components/ui/button";
import photo from "../assets/Persone+Engine.png";
import { FaBriefcase, FaCarSide, FaClock, FaHandshake } from "react-icons/fa";


const AboutSection = () => {
    // Statistics data with icons
    const statistics = [
        {
            value: "100%",
            unit: "",
            label: "PROFESSIONALISM",
            icon: <FaBriefcase className="w-6 h-6" />
        },
        {
            value: "10+",
            label: "Serviced brands",
            icon: <FaCarSide className="w-6 h-6" />
        },
        {
            value: "20",
            unit: "+",
            label: "Years Experience",
            icon: <FaClock className="w-6 h-6" />
        },
        {
            value: "Authentic",
            label: "Partnership",
            icon: <FaHandshake className="w-6 h-6" />
        }
    ];


    return (
        <section id='about' className="py-16 px-4 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image */}
                    <div className="flex justify-center">
                        <img
                            src={photo}
                            alt="car engine"
                            className="w-full max-w-md h-80 object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right side - Content */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-automotive-blue font-bold text-lg text-blue-800 uppercase tracking-wide relative inline-block text-2xl font-semibold underline-animation">
                                ABOUT US
                            </span>
                            <h2 className="text-4xl font-bold text-foreground mt-2 mb-4">
                                Your Trusted Auto Mobile Service Center.
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                At Smart Drive Auto, we combine diligent diagnostics with transparent pricing to ensure every
                                repair earns your trust. Our vision is to redefine automotive care in Kenya through honesty and
                                excellence.
                            </p>

                        </div>

                        {/* Statistics Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            {statistics.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        {/* Icon with red background */}
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 hover:text-red-600 transition-colors duration-300 cursor-pointer">
                                            {stat.icon}
                                        </div>


                                        <div>
                                            <div className="text-2xl font-bold text-foreground">
                                                {stat.value}
                                                {stat.unit && <span className="text-lg font-normal ml-1">{stat.unit}</span>}
                                            </div>
                                            <div className="text-muted-foreground text-xs uppercase tracking-wide mt-1">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h1 className="cursive-text">#ULTIMATE GOOD SERVICE</h1>
                        <Button className="bg-black hover:bg-automotive-blue/90 text-white px-8 py-3">
                            More Details
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;