"use client"

interface ContactProps {
  showPage?: (page: string) => void
}

export default function Contact({ showPage }: ContactProps) {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-5">
        <h2 className="text-center mb-8 text-4xl text-slate-700">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p>
              <strong>Child Safe Kit®, LLC</strong>
            </p>
            <p className="mb-4">
              <strong>Address:</strong>
              <br />
              1427 Bayfront Dr
              <br />
              Winter Garden, FL 34787
            </p>

            <p className="mb-4">
              <strong>Phone:</strong> (321) 277-7612
              <br />
              <strong>Email:</strong> getchildsafeprogram@gmail.com
            </p>

            <p>
              <strong>Business Hours:</strong>
              <br />
              Monday - Friday: 8:00 AM - 6:00 PM CST
              <br />
              Saturday: 9:00 AM - 3:00 PM CST
              <br />
              Sunday: Closed
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
            <p>
              <strong>Phone Support:</strong> (321) 277-7612
            </p>
            <p>
              <strong>Email Support:</strong> getchildsafeprogram@gmail.com
            </p>
            <p>
              <strong>SMS Support:</strong> Text HELP to any message
            </p>
            <p className="mb-6">
              <strong>Response Time:</strong> Within 24 hours during business days
            </p>

            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            {showPage && (
              <>
                <p>
                  <a onClick={() => showPage("privacy")} className="text-blue-500 cursor-pointer hover:text-blue-700">
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a onClick={() => showPage("terms")} className="text-blue-500 cursor-pointer hover:text-blue-700">
                    Terms of Service
                  </a>
                </p>
                <p>
                  <a onClick={() => showPage("about")} className="text-blue-500 cursor-pointer hover:text-blue-700">
                    About Our Company
                  </a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
