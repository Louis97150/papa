import { Award, Shield, FileText, CheckCircle } from 'lucide-react';

const credentials = [
  {
    icon: Award,
    title: 'SAMS Accredited',
    description: 'Society of Accredited Marine Surveyors',
    details: 'Professional accreditation ensuring the highest standards of marine surveying.',
  },
  {
    icon: Shield,
    title: 'Bureau Veritas',
    description: 'Non-exclusive surveyor',
    details: 'Recognized by one of the world\'s leading marine classification societies.',
  },
  {
    icon: FileText,
    title: 'ABYC Standards',
    description: 'American Boat & Yacht Council',
    details: 'Following industry-leading technical standards and guidelines.',
  },
  {
    icon: CheckCircle,
    title: 'NFPA Guidelines',
    description: 'National Fire Protection Association',
    details: 'Adhering to comprehensive safety and fire protection standards.',
  },
];

export default function Credentials() {
  return (
    <section id="credentials" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Credentials
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Internationally recognized certifications and adherence to industry standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-500/20 p-4 rounded-lg">
                    <Icon className="h-8 w-8 text-blue-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {credential.title}
                    </h3>
                    <p className="text-blue-300 font-medium mb-3">
                      {credential.description}
                    </p>
                    <p className="text-blue-200 leading-relaxed">
                      {credential.details}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Trusted Worldwide
            </h3>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Our surveys are accepted by international insurance companies and financial institutions around the globe. We maintain the highest professional standards, ensuring thorough, accurate, and reliable assessments for every vessel we inspect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
