"use client"

import Contact from "@/components/contact"

interface ContactPageProps {
  showPage: (page: string) => void
}

export default function ContactPage({ showPage }: ContactPageProps) {
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
        <Contact showPage={showPage} />
      </div>
    </section>
  )
}
