import { Wrench, Settings, Droplet, Shield, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'AC Installation',
    description: 'Professional installation of all AC types with proper setup and testing for optimal performance.',
  },
  {
    icon: Wrench,
    title: 'AC Repair',
    description: 'Quick diagnosis and repair of all AC issues. We fix cooling problems, leaks, and electrical faults.',
  },
  {
    icon: Droplet,
    title: 'Gas Refill',
    description: 'Expert gas charging service with genuine refrigerants for maximum cooling efficiency.',
  },
  {
    icon: Shield,
    title: 'Maintenance',
    description: 'Regular maintenance plans to keep your AC running smoothly and prevent costly breakdowns.',
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description: 'Thorough cleaning of filters, coils, and ducts to improve air quality and cooling performance.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive AC solutions for homes and businesses. We handle everything from installation to maintenance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Need a custom service? We're here to help!</p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-blue-600 hover:text-blue-700 font-semibold text-lg hover:underline"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
