import mechanicImg from "../assets/team.png";
import carLiftImg from "../assets/suspension.jpg";
import diagnosticImg from "../assets/mechanical.jpg";
import brakeRepairImg from "../assets/Electrical-Diagnostics.jpg";
import carServiceImg from "../assets/img1.jpg";
import maintenanceImg from "../assets/wiring.png";

const GallerySection = () => {
  const galleryImages = [
    {
      id: 1,
      src: mechanicImg,
      alt: "Smart Drive Auto - Mechanic working on car engine in Kenya"
    },
    {
      id: 2,
      src: carLiftImg,
      alt: "Smart Drive Auto - Car on lift for professional repairs"
    },
    {
      id: 3,
      src: diagnosticImg,
      alt: "Smart Drive Auto - Engine diagnostic service using advanced tools"
    },
    {
      id: 4,
      src: brakeRepairImg,
      alt: "Smart Drive Auto - Brake system repair by certified technicians"
    },
    {
      id: 5,
      src: carServiceImg,
      alt: "Smart Drive Auto - Full-service car maintenance in Kenya"
    },
    {
      id: 6,
      src: maintenanceImg,
      alt: "Smart Drive Auto - Routine car maintenance and inspection"
    }
  ];

  return (
    <section id='gallery' className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our <span className="text-automotive-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a look at our professional automotive service work and modern facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large image - spans 2 columns on larger screens */}
          <div className="lg:col-span-2 lg:row-span-2">
            <div className="relative h-[400px] lg:h-full rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Regular sized images */}
          {galleryImages.slice(1, 3).map((image) => (
            <div key={image.id} className="relative h-[190px] rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}

          {/* Bottom row images */}
          {galleryImages.slice(3, 6).map((image) => (
            <div key={image.id} className="relative h-[190px] rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
