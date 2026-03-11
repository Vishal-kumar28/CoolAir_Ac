import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ServiceArea from './components/ServiceArea';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <div className="min-h-screen bg-white">

      {/* ✅ WEBSITE NOTE */}
      <div className="bg-yellow-200 text-yellow-900 text-center py-2 text-sm font-semibold">
        ⚠️ Note: 🚧 Website Under Development. Book your service via our contact number.
        📢 Online booking will be available soon
      </div>

      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Testimonials />
      <ServiceArea />
      <ContactForm />
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;