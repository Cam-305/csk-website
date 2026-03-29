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
          <p className="text-center text-slate-600 mb-8">
            <strong>Child Safe Program</strong>
          </p>

          <p className="mb-6 leading-relaxed">
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Introduction</h3>
          <p className="mb-6 leading-relaxed">
            Child Safe Program is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Information We Collect</h3>
          <p className="mb-6 leading-relaxed">
            We collect information you provide directly to us, such as when you order a Child Safe Kit, contact us, or
            sign up for communications. This may include your name, email address, mailing address, phone number, and
            communication preferences.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">How We Use Your Information</h3>
          <p className="mb-6 leading-relaxed">
            Child Safe Program uses the information we collect to process and fulfill your kit orders, communicate with you about your
            order, provide customer support, and send you important updates if you have opted in to receive them.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Information Sharing</h3>
          <p className="mb-6 leading-relaxed">
            Child Safe Program does not sell, trade, or otherwise transfer your personal information to third parties except as described
            in this policy. We may share your information with service providers who assist us in operating our website
            and conducting our business.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Data Security</h3>
          <p className="mb-6 leading-relaxed">
            Child Safe Program implements appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Your Rights</h3>
          <p className="mb-6 leading-relaxed">
            You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us at any time by contacting us directly.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Changes to This Policy</h3>
          <p className="mb-6 leading-relaxed">
            Child Safe Program may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Contact Us</h3>
          <p className="mb-6 leading-relaxed">
            If you have questions about this Privacy Policy, please contact Child Safe Program at getchildsafeprogram@gmail.com or (321) 277-7612.
          </p>
        </div>
      </div>
    </section>
  )
}
