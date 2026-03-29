"use client"

interface TermsPageProps {
  showPage: (page: string) => void
}

export default function TermsPage({ showPage }: TermsPageProps) {
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
          <h2 className="text-slate-700 mb-8 text-center text-3xl">Terms of Service</h2>
          <p className="text-center text-slate-600 mb-8">
            <strong>Child Safe Program</strong>
          </p>

          <p className="mb-6 leading-relaxed">
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Acceptance of Terms</h3>
          <p className="mb-6 leading-relaxed">
            By accessing and using this website and ordering our Child Safe Kit, you accept and agree to be bound by the
            terms and provisions of this agreement with Child Safe Program.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Service Description</h3>
          <p className="mb-6 leading-relaxed">
            Child Safe Program provides free child safety documentation kits to families in the United States. Our service
            includes the kit materials and educational resources at no cost to the user.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Eligibility</h3>
          <p className="mb-6 leading-relaxed">
            Our service is available to parents and guardians of children in the United States. One kit per child per
            household. Child Safe Program reserves the right to verify eligibility and prevent abuse of our free service.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">User Responsibilities</h3>
          <p className="mb-6 leading-relaxed">
            You agree to provide accurate and complete information when ordering a kit. You are responsible for maintaining the confidentiality of any account information and for all activities that occur under your account.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Intellectual Property</h3>
          <p className="mb-6 leading-relaxed">
            All content, trademarks, and other intellectual property on this website are owned by Child Safe Program. You may not reproduce, distribute, or create derivative works without our express written permission.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Limitation of Liability</h3>
          <p className="mb-6 leading-relaxed">
            The Child Safe Kit is provided as an educational and preparedness tool. Child Safe Program makes no guarantees about the
            effectiveness of our materials in any specific situation. Users are responsible for the proper completion
            and storage of kit materials.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Indemnification</h3>
          <p className="mb-6 leading-relaxed">
            You agree to indemnify and hold harmless Child Safe Program and its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our services or violation of these terms.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Governing Law</h3>
          <p className="mb-6 leading-relaxed">
            These Terms of Service shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Changes to Terms</h3>
          <p className="mb-6 leading-relaxed">
            Child Safe Program reserves the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the updated terms on this page.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Contact Information</h3>
          <p className="mb-6 leading-relaxed">
            For questions about these Terms of Service, contact Child Safe Program at getchildsafeprogram@gmail.com or (321) 277-7612.
          </p>
        </div>
      </div>
    </section>
  )
}
