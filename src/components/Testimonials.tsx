import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Gourav Singh',
    location: 'Chhattarpur',
    rating: 5,
    text: 'Excellent service! My AC stopped working in the middle of summer, and they came within an hour. The technician was professional and fixed it quickly. Highly recommend!',
    date: '2 weeks ago',
  },
  {
    name: 'Dr. Anjali Mehta',
    location: 'Chhattarpur',
    rating: 5,
    text: 'Very impressed with the quality of work. They installed a new AC unit in my home and explained everything clearly. The pricing was transparent and fair.',
    date: '1 month ago',
  },
  {
    name: 'Mr. Ramesh Kumar',
    location: 'Grurgaon',
    rating: 5,
    text: 'I have been using their maintenance service for over a year now. My AC runs like new! The team is always punctual and courteous. Best AC service in town.',
    date: '3 weeks ago',
  },
  {
    name: 'Dimpal Agarwal',
    location: 'Rajouri Garden',
    rating: 5,
    text: 'Great experience from start to finish. Booking was easy, technician arrived on time, and the repair was done professionally. Will definitely use again.',
    date: '1 week ago',
  },
  {
    name: 'Lisa Patel',
    location: 'Green Park',
    rating: 5,
    text: 'Outstanding customer service! They diagnosed the problem accurately and gave me options. No pressure to upsell. Very honest and reliable company.',
    date: '2 months ago',
  },
  {
    name: 'Avtar Singh',
    location: 'Tilak Nagar',
    rating: 5,
    text: 'Called them for an emergency repair on a Sunday. They came immediately and fixed the issue at a fair price. This company truly cares about their customers.',
    date: '3 days ago',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-blue-200" />
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="border-t border-blue-100 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8">
          <p className="text-xl font-semibold text-gray-900 mb-2">
            Join 10,000+ Happy Customers
          </p>
          <p className="text-gray-600 mb-6">
            Experience the same quality service that earned us a 5-star rating
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Book Your Service
          </button>
        </div>
      </div>
    </section>
  );
}
