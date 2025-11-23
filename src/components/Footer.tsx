export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-900 p-2 rounded-lg">
                <img src="/logoPetit.png" alt="" className="h-10 w-10"/>
              </div>
              <div>
                <div className="text-lg font-bold">St Martin Marine</div>
                <div className="text-sm text-gray-400">Surveyors</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional marine survey and yacht management services in the Caribbean since 2005.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Pre-Purchase Surveys</li>
              <li>Insurance & Valuation</li>
              <li>Condition Surveys</li>
              <li>Yacht Management</li>
              <li>Project Management</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Saint Martin, French West Indies</li>
              <li>Caribbean Sea Coverage</li>
              <li>Martinique to Panama & Bahamas</li>
              <li className="pt-2">
                <a
                  href="mailto:david@stmartinmarinesurveyor.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  david@stmartinmarinesurveyor.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} St Martin Marine Surveyors. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span>SAMS Accredited</span>
              <span>Bureau Veritas</span>
              <span>ABYC Standards</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
