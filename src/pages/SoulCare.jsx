import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const SoulCare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-cream-900 mb-6">
              Soul Care
            </h1>
            <p className="text-xl text-cream-700 max-w-4xl mx-auto leading-relaxed">
              Comprehensive care solutions designed to support your physical and emotional well-being. 
              From professional physiotherapy to specialized tools for differently-abled individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Physiotherapist Section */}
            <div className="bg-cream-200 border border-cream-300 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-slide-up">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏥</div>
                <h2 className="text-3xl font-bold text-cream-900 mb-4">
                  Professional Physiotherapy
                </h2>
                <p className="text-lg text-cream-700 leading-relaxed mb-6">
                  Connect with certified physiotherapists who are available to provide personalized care and treatment. 
                  Our experienced professionals are ready to help you on your journey to better physical health and mobility.
                </p>
                <div className="space-y-3 text-cream-700 mb-8">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-cream-600 rounded-full mr-3"></span>
                    <span>Certified and experienced physiotherapists</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-cream-600 rounded-full mr-3"></span>
                    <span>Flexible scheduling options</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-cream-600 rounded-full mr-3"></span>
                    <span>Personalized treatment plans</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-cream-600 rounded-full mr-3"></span>
                    <span>Available for consultations</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link to="/contact">
                  <button className="bg-cream-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cream-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer">
                    Book Appointment
                  </button>
                </Link>
              </div>
            </div>

            {/* Divyang Section */}
            <div className="bg-cream-200 border border-cream-300 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">♿</div>
                <h2 className="text-3xl font-bold text-cream-900 mb-4">
                  Divyang Support
                </h2>
                <p className="text-lg text-cream-700 leading-relaxed mb-6">
                  Specially designed tools and solutions for differently-abled individuals. 
                  We offer a comprehensive range of assistive technologies and devices to enhance independence and quality of life.
                </p>
                <div className="space-y-3 text-cream-700 mb-8">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-cream-600 rounded-full mr-3"></span>
                    <span>Assistive technology solutions</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-cream-600 rounded-full mr-3"></span>
                    <span>Mobility enhancement tools</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-cream-600 rounded-full mr-3"></span>
                    <span>Communication aids</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-cream-600 rounded-full mr-3"></span>
                    <span>Daily living support devices</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link to="/contact">
                  <button className="bg-cream-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cream-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer">
                    Explore Products
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default SoulCare;