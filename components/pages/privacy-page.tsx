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

          <p className="mb-6 leading-relaxed">
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Information We Collect</h3>
          <p className="mb-6 leading-relaxed">
            We collect information you provide directly to us, such as when you order a Child Safe Kit, contact us, or
            sign up for communications. This may include your name, email address, mailing address, phone number, and
            SMS preferences.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">How We Use Your Information</h3>
          <p className="mb-6 leading-relaxed">
            We use the information we collect to process and fulfill your kit orders, communicate with you about your
            order, provide customer support, and send you important updates if you've opted in to receive them.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Information Sharing</h3>
          <p className="mb-6 leading-relaxed">
            We do not sell, trade, or otherwise transfer your personal information to third parties except as described
            in this policy. We may share your information with service providers who assist us in operating our website
            and conducting our business.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">SMS Communications</h3>
          <p className="mb-6 leading-relaxed">
            If you opt in to receive SMS messages, we will send you order updates and account information. You can opt
            out at any time by texting STOP. Message and data rates may apply.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Contact Us</h3>
          <p className="mb-6 leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at getchildsafeprogram@gmail.com or (321)
            277-7612.
          </p>
        </div>
      </div>
    </section>
  )
}
