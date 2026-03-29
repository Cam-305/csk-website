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

          <p className="mb-6 leading-relaxed">
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Acceptance of Terms</h3>
          <p className="mb-6 leading-relaxed">
            By accessing and using this website and ordering our Child Safe Kit, you accept and agree to be bound by the
            terms and provision of this agreement.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Service Description</h3>
          <p className="mb-6 leading-relaxed">
            Child Safe Kit® provides free child safety documentation kits to families in the United States. Our service
            includes the kit materials and educational resources at no cost to the user.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Eligibility</h3>
          <p className="mb-6 leading-relaxed">
            Our service is available to parents and guardians of children in the United States. One kit per child per
            household. We reserve the right to verify eligibility and prevent abuse of our free service.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Limitation of Liability</h3>
          <p className="mb-6 leading-relaxed">
            Child Safe Kit® is provided as an educational and preparedness tool. We make no guarantees about the
            effectiveness of our materials in any specific situation. Users are responsible for the proper completion
            and storage of kit materials.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Contact Information</h3>
          <p className="mb-6 leading-relaxed">
            For questions about these Terms of Service, contact us at getchildsafeprogram@gmail.com or (321) 277-7612.
          </p>
        </div>
      </div>
    </section>
  )
}
