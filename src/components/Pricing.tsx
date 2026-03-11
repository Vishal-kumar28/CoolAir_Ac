import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Basic Service',
    price: 'Rs.999',
    description: 'Perfect for routine checkups',
    features: [
      'AC inspection',
      'Filter cleaning',
      'Basic troubleshooting',
      'Performance check',
      '30-day service warranty',
    ],
    popular: false,
  },
  {
    name: 'Complete Service',
    price: 'Rs.1999',
    description: 'Our most popular package',
    features: [
      'Everything in Basic',
      'Deep cleaning',
      'Gas pressure check',
      'Coil cleaning',
      'Minor repairs included',
      '90-day service warranty',
    ],
    popular: true,
  },
  {
    name: 'Premium Care',
    price: 'Rs.4499',
    description: 'Ultimate AC maintenance',
    features: [
      'Everything in Complete',
      'Gas refill (if needed)',
      'Electrical component check',
      'Duct sanitization',
      'Priority scheduling',
      '6-month service warranty',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the service package that fits your needs. No hidden charges, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular
                  ? 'ring-4 ring-blue-600 transform scale-105'
                  : 'hover:shadow-xl'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600 ml-2">/ service</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom quote for installation or major repairs?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-blue-600 hover:text-blue-700 font-semibold text-lg hover:underline"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
