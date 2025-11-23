import { User, MapPin, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              St Martin Marine Surveyors has been providing professional marine survey services in the French West Indies since 2005. Founded by David Duong, an Accredited Marine Surveyor, we bring decades of expertise to every inspection.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our surveys are accepted by international insurance and financial institutions worldwide. We specialize in comprehensive inspections for vessels ranging from 15 to over 100 feet, covering sailing vessels and motor yachts.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With extensive knowledge of the Caribbean marine environment and local conditions, we provide insights that go beyond standard inspections, helping you make informed decisions about your vessel.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <User className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">David Duong</h4>
                  <p className="text-gray-600">Accredited Marine Surveyor & Founder</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Saint Martin</h4>
                  <p className="text-gray-600">French West Indies</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Since 2005</h4>
                  <p className="text-gray-600">Nearly two decades of excellence</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/taTete.png"
                alt="La tête du daron"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t " />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="text-3xl font-bold text-blue-900 mb-1">Caribbean</div>
              <div className="text-gray-600">Martinique to Panama & Bahamas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
