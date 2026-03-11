import { MapPin, CheckCircle } from 'lucide-react';

const serviceAreas = [
  'Tilak Nagar',
  'Vikas Puri',
  'Uttam Nagar',
  'Shubash Nagar',
  'Mangolpuri',
  'Palam',
  'Janakpuri',
  'Rajouri Garden',
  'Paschim vihar',
  'Punjabi bagh',
  'Rohini',
  'Green Park',
];

export default function ServiceArea() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-10 w-10 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Areas We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Providing reliable AC services across the metro area and surrounding communities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't See Your Area?
            </h3>
            <p className="text-gray-600 mb-6">
              We're constantly expanding our service coverage. Contact us to check if we can service your location.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">50+</span>
            </div>
            <p className="text-gray-900 font-semibold">Neighborhoods Covered</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2hr</span>
            </div>
            <p className="text-gray-900 font-semibold">Average Response Time</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">24/7</span>
            </div>
            <p className="text-gray-900 font-semibold">Emergency Service</p>
          </div>
        </div>
      </div>
    </section>
  );
}
