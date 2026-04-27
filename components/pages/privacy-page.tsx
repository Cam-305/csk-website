"use client"

interface PrivacyPageProps {
  showPage: (page: string) => void
}

export default function PrivacyPage({ showPage }: PrivacyPageProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-5">
        <div className="text-center mb-8">
          <button
            onClick={() => showPage("main")}
            className="bg-red-600 text-white py-3 px-6 rounded-md font-bold hover:bg-red-700 transition-colors"
          >
            ← Back to Home
          </button>
        </div>
        <div className="bg-white p-12 rounded-xl shadow-md max-w-4xl mx-auto text-left">
          <h2 className="text-slate-700 mb-8 text-center text-3xl">Privacy Policy</h2>
          <p className="text-center text-slate-600 mb-4">
            <strong>Child Safe Program</strong>
          </p>
          <p className="text-center text-slate-600 mb-8">
            <strong>Effective Date:</strong> Jan 1st, 2026
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
            <h3 className="text-slate-700 font-bold mb-2">IMPORTANT NOTICE REGARDING TEXT MESSAGING DATA</h3>
            <p className="leading-relaxed">
              Child Safe Program (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) DOES NOT share customer opt-in information, including phone numbers and consent records, with any affiliates or third parties for marketing, promotional, or any other purposes unrelated to providing our direct services. All text messaging originator opt-in data is kept strictly confidential.
            </p>
          </div>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl font-bold">1. Information We Collect</h3>
          <p className="mb-4 leading-relaxed">We collect the following types of information:</p>
          
          <p className="mb-2 leading-relaxed"><strong>Personal Information:</strong></p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Name, email address, phone number, physical address</li>
            <li>Payment information when you make a purchase or request a quote</li>
            <li>Opt-in records and timestamps for all communication channels (SMS, email, etc.)</li>
          </ul>

          <p className="mb-2 leading-relaxed"><strong>Non-Personal Information:</strong></p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>IP address, browser type, device information</li>
            <li>Website usage patterns and analytics</li>
            <li>Cookies and similar technologies</li>
          </ul>

          <p className="mb-2 leading-relaxed"><strong>Customer Communication:</strong></p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Records of inquiries and service requests</li>
            <li>Appointment details and preferences</li>
            <li>Service history and feedback</li>
          </ul>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl font-bold">2. How We Use Your Information</h3>
          <p className="mb-4 leading-relaxed">We use collected data for:</p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Providing and improving our services</li>
            <li>Processing transactions and payments</li>
            <li>Communicating with you about your inquiries, appointments, and promotions</li>
            <li>Enhancing website functionality and user experience</li>
            <li>Ensuring security and fraud prevention</li>
            <li>Maintaining records of your communication preferences and consent</li>
          </ul>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl font-bold">3. SMS Messaging & Compliance</h3>
          <p className="mb-4 leading-relaxed font-semibold">Text Message Program Terms & Conditions</p>
          <p className="mb-4 leading-relaxed">
            By opting into our SMS messaging services, you agree to receive text messages related to our services, including appointment reminders, customer support, and important updates.
          </p>

          <p className="mb-2 leading-relaxed"><strong>Opt-In & Consent:</strong></p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>You will only receive messages if you have explicitly opted in</li>
            <li>We maintain timestamped records of all opt-in actions</li>
            <li>We comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws</li>
          </ul>

          <p className="mb-2 leading-relaxed"><strong>Opt-Out Instructions:</strong></p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>You can cancel SMS notifications at any time by replying &quot;STOP.&quot;</li>
            <li>You will receive a final confirmation message, and no further messages will be sent unless you re-opt in</li>
            <li>All opt-out requests are processed immediately.</li>
          </ul>

          <p className="mb-2 leading-relaxed"><strong>Message Frequency & Content:</strong></p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Message frequency varies based on your interactions with our business</li>
            <li>Messages will be directly related to the services you have requested</li>
            <li>We do not send promotional content without specific consent</li>
          </ul>

          <p className="mb-2 leading-relaxed"><strong>Help & Support:</strong></p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Reply &quot;HELP&quot; for assistance or contact us at getchildsafeprogram@gmail.com</li>
            <li>Customer support is available during regular business hours</li>
          </ul>

          <p className="mb-2 leading-relaxed"><strong>Carrier Information:</strong></p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Standard message and data rates may apply</li>
            <li>Carriers are not liable for delayed or undelivered messages</li>
            <li>Supported carriers include AT&T, Verizon, T-Mobile, Sprint, and most regional carriers</li>
          </ul>

          <p className="mb-2 leading-relaxed font-semibold">SMS Data Protection Statement</p>
          <p className="mb-6 leading-relaxed">
            No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties. We implement strict data protection measures to safeguard your SMS opt-in information and consent records.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl font-bold">4. Information Sharing & Disclosure</h3>
          <p className="mb-4 leading-relaxed">We do not sell, rent, or trade personal information. We may share information with:</p>

          <p className="mb-2 leading-relaxed"><strong>Service Providers:</strong></p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Third-party vendors who assist in our operations (e.g., payment processing, appointment scheduling)</li>
            <li>SMS aggregators and providers solely for the purpose of delivering messages you&apos;ve consented to receive</li>
            <li>All service providers are contractually obligated to maintain confidentiality and security</li>
          </ul>

          <p className="mb-2 leading-relaxed"><strong>Legal Compliance:</strong></p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>If required by law, legal process, or to protect our rights</li>
            <li>In response to valid law enforcement requests or court orders</li>
          </ul>

          <p className="mb-2 leading-relaxed"><strong>Business Transfers:</strong></p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>In case of mergers, acquisitions, or sale of assets</li>
            <li>In such cases, your data remains protected under the terms of this policy</li>
          </ul>

          <p className="mb-6 leading-relaxed">
            All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Message services.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl font-bold">5. Data Security</h3>
          <p className="mb-4 leading-relaxed">We implement and maintain reasonable security measures to protect your personal information:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Encryption of sensitive data in transit and at rest</li>
            <li>Secure access controls and authentication mechanisms</li>
            <li>Regular security assessments and updates</li>
            <li>Employee training on data protection</li>
            <li>Breach notification protocols in accordance with applicable laws</li>
            <li>Secure backup systems and disaster recovery procedures</li>
          </ul>
          <p className="mb-6 leading-relaxed">
            Despite these measures, no method of transmission over the Internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information but cannot guarantee absolute security.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl font-bold">6. Cookies & Tracking Technologies</h3>
          <p className="mb-4 leading-relaxed">We use cookies and similar technologies to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Analyze site traffic and user behavior</li>
            <li>Remember your preferences</li>
            <li>Improve website functionality and user experience</li>
            <li>Measure the effectiveness of our services</li>
          </ul>
          <p className="mb-6 leading-relaxed">
            You may control cookies through your browser settings. Disabling cookies may limit your ability to use certain features of our website.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl font-bold">7. Your Rights & Choices</h3>
          <p className="mb-4 leading-relaxed">You have the right to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Access, update, or delete your personal information</li>
            <li>Opt-out of marketing emails by clicking &quot;unsubscribe&quot; in our emails</li>
            <li>Opt-out of SMS messages by replying &quot;STOP&quot;</li>
            <li>Request information on how we process your data</li>
            <li>Withdraw consent at any time for future communications</li>
            <li>Lodge a complaint with a supervisory authority if you believe your rights have been violated</li>
          </ul>
          <p className="mb-6 leading-relaxed">To exercise these rights, please contact us using the information in Section 10.</p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl font-bold">8. Third-Party Links</h3>
          <p className="mb-6 leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies. This privacy policy applies only to information collected by Child Safe Program.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl font-bold">9. Changes to This Privacy Policy</h3>
          <p className="mb-6 leading-relaxed">
            We may update this policy periodically. The latest version will always be available on our website with the effective date. For significant changes, we will notify you by email or through a notice on our website.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl font-bold">10. Contact Us</h3>
          <p className="mb-4 leading-relaxed">
            If you have questions about this Privacy Policy or how your information is handled, contact us at:
          </p>
          <div className="mb-6">
            <p className="leading-relaxed"><strong>Child Safe Program</strong></p>
            <p className="leading-relaxed">Phone: (321) 277-7612</p>
            <p className="leading-relaxed">Email: getchildsafeprogram@gmail.com</p>
            <p className="leading-relaxed">Website: https://www.getchildsafeprogram.com/</p>
          </div>

          <p className="mt-8 pt-6 border-t border-gray-200 leading-relaxed text-center italic">
            By using our website and services, you consent to this Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  )
}
