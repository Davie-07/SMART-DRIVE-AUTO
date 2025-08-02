import {
  HiUserGroup,
  HiShieldCheck,
  HiClock,
  HiHeart,
  HiCurrencyDollar,
} from "react-icons/hi";

const Competitiveness = () => {
  const features = [
    {
      title: "Experienced Team",
      icon: <HiUserGroup className="w-6 h-6" />,
      description:
        "From diagnostics to full rebuilds, our experts work with care, accuracy, and a customer-first mindset. Your satisfaction is our priority—we listen, we deliver, and we stand by our work.",
    },
    {
      title: "Trusted",
      icon: <HiShieldCheck className="w-6 h-6" />,
      description:
        "Proven track record. With over 1000+ happy customers and 20+ years of service, our reputation speaks for itself. We offer honest diagnostics, fair pricing, and certified repairs—no hidden surprises.",
    },
    {
      title: "24/7 Service",
      icon: <HiClock className="w-6 h-6" />,
      description:
        "Communication is power. Our channels offer top-tier customer support and authentic responses—anytime, anywhere.",
    },
    {
      title: "Customer Satisfaction",
      icon: <HiHeart className="w-6 h-6" />,
      description:
        "We prioritize transparency, satisfaction, and long-term relationships. New customers enjoy extra services, while returning clients benefit from promos, discounts, and more.",
    },
    {
      title: "Pocket-Friendly Services",
      icon: <HiCurrencyDollar className="w-6 h-6" />,
      description:
        "Our pocket-friendly car repair services deliver top-tier results without the premium price tag. Transparent pricing. No hidden fees.",
    },
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Services?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We treat every vehicle like our own—because quality isn’t just a goal, it’s our standard.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border-b-4 border-emerald-500 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon with hover color change */}
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-100 text-green-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitiveness;
