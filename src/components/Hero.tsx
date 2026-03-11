import { Calendar, CheckCircle, Clock } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Fast & Reliable <span className="text-blue-600">AC Service</span> at Your Doorstep
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Beat the heat with our professional AC installation, repair, and maintenance services. Available 24/7 for emergency repairs.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Service Now
            </button>

            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-sm font-semibold text-gray-900">24/7 Service</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-sm font-semibold text-gray-900">Licensed Experts</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-sm font-semibold text-gray-900">Same Day Service</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block animate-slideIn">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/3862145/pexels-photo-3862145.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AC Technician"
                  className="rounded-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
