import { Shield, Wrench, FileCheck, Anchor, Ship, Settings } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Pre-Purchase Surveys',
    description: 'Comprehensive vessel inspections to inform your buying decision. Detailed reports accepted by international insurance and financial institutions.',
  },
  {
    icon: FileCheck,
    title: 'Insurance & Valuation',
    description: 'Professional surveys for insurance purposes and accurate vessel valuations. Trusted by major insurance companies worldwide.',
  },
  {
    icon: Ship,
    title: 'Condition Surveys',
    description: 'Detailed assessments for sailing vessels and motor yachts from 15 to 100+ feet. Complete structural and systems evaluation.',
  },
  {
    icon: Wrench,
    title: 'Yacht Management',
    description: 'Full-service absentee owner management, refit projects, and general maintenance. Your vessel in trusted hands.',
  },
  {
    icon: Settings,
    title: 'Project Management',
    description: 'Expert coordination of refit and repair projects. Local supplier recommendations and marina connections.',
  },
  {
    icon: Anchor,
    title: 'Additional Services',
    description: 'Oil analysis, mooring inspections, phase-out evaluations, and comprehensive vessel maintenance support.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive marine survey and yacht management services across the Caribbean
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors">
                  <Icon className="h-8 w-8 text-blue-900 group-hover:text-white transition-colors" />
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

        <div className="mt-16 bg-blue-900 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            "If we cannot make it happen for you, no one will"
          </h3>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Serving the Caribbean Sea from Martinique to Panama and the Bahamas with unmatched expertise and dedication.
          </p>
        </div>
      </div>
    </section>
  );
}
