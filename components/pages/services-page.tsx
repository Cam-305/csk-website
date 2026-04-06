"use client"

interface ServicesPageProps {
  showPage: (page: string) => void
}

export default function ServicesPage({ showPage }: ServicesPageProps) {
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
          <h2 className="text-slate-700 mb-8 text-center text-3xl">Our Services</h2>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Free Child Safe Program® Distribution</h3>
          <p className="mb-6 leading-relaxed">
            <strong>Our Primary Service:</strong> We provide comprehensive Child Safe Programs to families across the United
            States at absolutely no cost, including free shipping.
          </p>

          <h4 className="text-slate-700 mt-6 mb-2 text-lg">What's Included in Every Kit:</h4>
          <ul className="my-4 ml-8 space-y-2">
            <li>
              <strong>Child Information Forms:</strong> Comprehensive forms for recording vital statistics, physical
              characteristics, and identifying features
            </li>
            <li>
              <strong>Professional Fingerprint Cards:</strong> FBI-standard fingerprint cards with easy-to-follow
              instructions
            </li>
            <li>
              <strong>Photo Documentation Guides:</strong> Instructions for taking proper identification photos that
              meet law enforcement standards
            </li>
            <li>
              <strong>Digital Storage Instructions:</strong> Guidelines for safely storing information both physically
              and digitally
            </li>
            <li>
              <strong>Emergency Contact Templates:</strong> Pre-formatted cards for important phone numbers and contacts
            </li>
            <li>
              <strong>Safety Education Materials:</strong> Age-appropriate safety tips and discussion guides for
              families
            </li>
            <li>
              <strong>Quick Reference Cards:</strong> Wallet-sized cards with essential information for emergencies
            </li>
          </ul>

          <h4 className="text-slate-700 mt-6 mb-2 text-lg">Service Details:</h4>
          <ul className="my-4 ml-8 space-y-2">
            <li>
              <strong>Cost:</strong> Completely FREE - No hidden fees, shipping charges, or subscription costs
            </li>
            <li>
              <strong>Eligibility:</strong> Available to any parent or guardian of children in the United States
            </li>
            <li>
              <strong>Processing Time:</strong> Orders processed within 2-3 business days
            </li>
            <li>
              <strong>Delivery Time:</strong> Standard delivery within 7-10 business days
            </li>
            <li>
              <strong>Coverage:</strong> Available in all 50 states
            </li>
            <li>
              <strong>Quantity:</strong> One kit per child per household
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
