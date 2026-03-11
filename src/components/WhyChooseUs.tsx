import { Zap, Award, DollarSign, ThumbsUp, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Response Time',
    description: 'We reach you within 2 hours of booking. Emergency services available 24/7.',
  },
  {
    icon: Award,
    title: 'Certified Technicians',
    description: 'Our team is fully trained, licensed, and experienced in all AC brands and models.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Transparent pricing with no hidden charges. Get the best value for your money.',
  },
  {
    icon: ThumbsUp,
    title: '100% Satisfaction',
    description: 'We guarantee quality work. Not satisfied? We make it right at no extra cost.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Book at your convenience. Weekend and evening appointments available.',
  },
  {
    icon: Users,
    title: '10,000+ Happy Customers',
    description: 'Join thousands of satisfied customers who trust us for their AC needs.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose CoolAir AC?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We're not just another AC service company. Here's what makes us different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-12 py-8">
            <p className="text-2xl font-bold mb-2">Ready to experience the difference?</p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-4 bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Book Your Service Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
