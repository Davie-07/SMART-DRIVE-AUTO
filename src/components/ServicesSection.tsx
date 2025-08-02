import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Car,
  Wrench,
  Settings,
  PaintBucket,
  Zap,
  Wind,
  CircleDot,
  Cog,
} from "lucide-react";

// Local image imports
import diagnosisImg from "../assets/Diagnosis.jpg";
import mechanicalImg from "../assets/mechanical.jpg";
import engineImg from "../assets/EngineB.png";
import bodyworkImg from "../assets/bodywork.jpg";
import electricalImg from "../assets/Electrical-Diagnostics.jpg";
import acImg from "../assets/ac1.png";
import alignmentImg from "../assets/wheel-alignment.webp";
import suspensionImg from "../assets/suspension.webp";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Vehicle Diagnosis",
      subtitle: "(All Car Brands)",
      description:
        "Comprehensive car diagnostics for all vehicle brands in Kenya using advanced equipment. Ensure accurate fault detection and reliable auto repair.",
      icon: Car,
      image: diagnosisImg,
      price: "KSH 10,000",
    },
    {
      id: 2,
      title: "Mechanical Repairs",
      subtitle: "",
      description:
        "Expert mechanical repair services for brakes, transmission, and suspension. Trusted auto repair in Kenya for all vehicle systems.",
      icon: Wrench,
      image: mechanicalImg,
      price: "KSH 15,000",
    },
    {
      id: 3,
      title: "Engine Overhaul",
      subtitle: "",
      description:
        "Complete engine overhaul services to restore performance. Ideal for aging vehicles needing professional engine rebuilding in Kenya.",
      icon: Settings,
      image: engineImg,
      price: "KSH 20,000",
    },
    {
      id: 4,
      title: "Body Work Repairs",
      subtitle: "",
      description:
        "Professional auto body shop services including dent removal, paint jobs, and collision repair. Enhance your car’s appearance affordably.",
      icon: PaintBucket,
      image: bodyworkImg,
      price: "KSH 10,000",
    },
    {
      id: 5,
      title: "Electrical Diagnosis",
      subtitle: "",
      description:
        "Advanced electrical diagnostics for modern vehicles. We fix wiring, sensors, and electronic systems with precision.",
      icon: Zap,
      image: electricalImg,
      price: "KSH 5,000",
    },
    {
      id: 6,
      title: "AC Installation & Repair",
      subtitle: "",
      description:
        "Air conditioning installation and repair for all car models. Stay cool with our affordable and efficient AC services.",
      icon: Wind,
      image: acImg,
      price: "KSH 10,000",
    },
    {
      id: 7,
      title: "Wheel Alignment",
      subtitle: "",
      description:
        "Precision wheel alignment to improve tire wear and driving safety. Trusted by Kenyan drivers for accurate alignment services.",
      icon: CircleDot,
      image: alignmentImg,
      price: "KSH 5,000",
    },
    {
      id: 8,
      title: "Steering & Suspension",
      subtitle: "",
      description:
        "Complete steering and suspension repair for smooth driving. We ensure stability and comfort on Kenyan roads.",
      icon: Cog,
      image: suspensionImg,
      price: "KSH 5,000",
    },
  ];

  return (
    <section id="services" className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our <span className="text-automotive-blue">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover expert auto repair services in Kenya. From diagnostics to full rebuilds, we deliver quality and affordability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Icon Overlay */}
                    <div className="absolute top-4 left-4 bg-automotive-blue text-white p-3 rounded-lg shadow-lg">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-right mb-2">
                    <span className="text-muted-foreground text-sm">From </span>
                    <span className="font-bold text-lg text-foreground">{service.price}</span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-1">{service.title}</h3>
                  {service.subtitle && (
                    <p className="text-automotive-blue font-medium text-sm mb-3">
                      {service.subtitle}
                    </p>
                  )}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-automotive-blue hover:text-automotive-blue/80 font-medium"
                  >
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
