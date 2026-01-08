import { useState } from 'react';

export default function LegalPages() {
  const [activeTab, setActiveTab] = useState(null);

  const TermsContent = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Terms & Conditions</h1>
      <p className="text-sm text-gray-600 mb-4">Last Updated: January 2026</p>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
        <p className="text-gray-700 leading-relaxed">
          By accessing and using the services provided by Abroad Achieve ("we," "our," or "us"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Services Provided</h2>
        <p className="text-gray-700 leading-relaxed mb-2">
          Abroad Achieve provides educational consulting services including but not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
          <li>Study abroad counselling and guidance</li>
          <li>University application assistance</li>
          <li>Visa application support</li>
          <li>Scholarship information and guidance</li>
          <li>Pre-departure orientation</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">3. User Responsibilities</h2>
        <p className="text-gray-700 leading-relaxed mb-2">You agree to:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
          <li>Provide accurate and complete information</li>
          <li>Maintain the confidentiality of your account information</li>
          <li>Comply with all applicable laws and regulations</li>
          <li>Not misuse our services or interfere with other users</li>
          <li>Submit all required documents in a timely manner</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Fees and Payment</h2>
        <p className="text-gray-700 leading-relaxed">
          Service fees will be clearly communicated before engagement. Payment terms and refund policies will be outlined in separate service agreements. We reserve the right to modify our fees with prior notice.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">5. No Guarantee of Admission</h2>
        <p className="text-gray-700 leading-relaxed">
          While we provide professional guidance and support, we cannot guarantee admission to any educational institution, visa approval, or scholarship awards. Final decisions rest with the respective universities, embassies, and scholarship committees.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Intellectual Property</h2>
        <p className="text-gray-700 leading-relaxed">
          All content, materials, and resources provided through our services remain the intellectual property of Abroad Achieve. Unauthorized reproduction or distribution is prohibited.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Limitation of Liability</h2>
        <p className="text-gray-700 leading-relaxed">
          Abroad Achieve shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our liability is limited to the amount paid for our services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Termination</h2>
        <p className="text-gray-700 leading-relaxed">
          We reserve the right to terminate or suspend services at any time for violation of these terms or for any other reason at our discretion.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Changes to Terms</h2>
        <p className="text-gray-700 leading-relaxed">
          We may update these Terms and Conditions from time to time. Continued use of our services after changes constitutes acceptance of the modified terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Contact Information</h2>
        <p className="text-gray-700 leading-relaxed">
          For questions about these Terms and Conditions, please contact us at ausvisastudy@gmail.com
        </p>
      </section>
    </div>
  );

  const PrivacyContent = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-4">Last Updated: January 2026</p>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
        <p className="text-gray-700 leading-relaxed mb-2">We collect the following types of information:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
          <li><strong>Personal Information:</strong> Name, email address, phone number, date of birth, nationality</li>
          <li><strong>Academic Information:</strong> Educational history, test scores, transcripts</li>
          <li><strong>Financial Information:</strong> For scholarship and financial aid purposes</li>
          <li><strong>Communications:</strong> Messages, emails, and consultation notes</li>
          <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h2>
        <p className="text-gray-700 leading-relaxed mb-2">Your information is used to:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
          <li>Provide educational counselling and application services</li>
          <li>Process university and visa applications</li>
          <li>Communicate updates and important information</li>
          <li>Improve our services and user experience</li>
          <li>Comply with legal and regulatory requirements</li>
          <li>Send relevant educational opportunities and updates (with your consent)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Information Sharing</h2>
        <p className="text-gray-700 leading-relaxed mb-2">
          We may share your information with:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
          <li><strong>Educational Institutions:</strong> Universities and colleges you're applying to</li>
          <li><strong>Visa Authorities:</strong> Embassy or consulate for visa processing</li>
          <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations</li>
          <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-2">
          We do not sell your personal information to third parties.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Data Security</h2>
        <p className="text-gray-700 leading-relaxed">
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Data Retention</h2>
        <p className="text-gray-700 leading-relaxed">
          We retain your personal information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time, subject to legal requirements.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Your Rights</h2>
        <p className="text-gray-700 leading-relaxed mb-2">You have the right to:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
          <li>Access your personal information</li>
          <li>Correct inaccurate or incomplete data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your information</li>
          <li>Withdraw consent at any time</li>
          <li>Request a copy of your data in a portable format</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Cookies and Tracking</h2>
        <p className="text-gray-700 leading-relaxed">
          Our website may use cookies and similar tracking technologies to enhance user experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Third-Party Links</h2>
        <p className="text-gray-700 leading-relaxed">
          Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. Please review their privacy policies separately.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Children's Privacy</h2>
        <p className="text-gray-700 leading-relaxed">
          Our services are intended for individuals aged 16 and above. We do not knowingly collect information from children under 16 without parental consent.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Changes to Privacy Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          We may update this Privacy Policy periodically. We will notify you of significant changes via email or website notice.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">11. Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          For questions about this Privacy Policy or to exercise your rights, please contact us at:<br/>
          Email: ausvisastudy@gmail.com<br/>
          Phone: +234 808 995 3598
        </p>
      </section>
    </div>
  );

  return (
    <div>
      {/* Links to open modals */}
      <div className="flex gap-4 text-xs text-gray-600 mt-2">
        <button 
          onClick={() => setActiveTab('terms')}
          className="hover:text-purple-600 transition-colors duration-300"
        >
          Terms & Conditions
        </button>
        <button 
          onClick={() => setActiveTab('privacy')}
          className="hover:text-purple-600 transition-colors duration-300"
        >
          Privacy Policy
        </button>
      </div>

      {/* Modal */}
      {activeTab && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {activeTab === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}
              </h2>
              <button 
                onClick={() => setActiveTab(null)}
                className="text-gray-500 hover:text-gray-700 text-3xl leading-none"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'terms' ? <TermsContent /> : <PrivacyContent />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}