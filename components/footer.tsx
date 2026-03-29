"use client"

interface FooterProps {
  showPage: (page: string) => void
}

export default function Footer({ showPage }: FooterProps) {
  return (
    <footer className="bg-slate-700 text-white py-12">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="mb-4 text-blue-400">Child Safe Kit®</h3>
            <p className="mb-4">
              Protecting families through preparedness and education. Every child deserves to be safe.
            </p>
            <p>
              <strong>Business Information:</strong>
              <br />
              Child Safe Kit®, LLC
              <br />
              1427 Bayfront Dr
              <br />
              Winter Garden, FL 34787
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-blue-400">Quick Links</h3>
            <a
              onClick={() => showPage("main")}
              className="text-gray-300 no-underline block mb-2 cursor-pointer hover:text-white"
            >
              Home
            </a>
            <a
              onClick={() => showPage("about")}
              className="text-gray-300 no-underline block mb-2 cursor-pointer hover:text-white"
            >
              About Us
            </a>
            <a
              onClick={() => showPage("services")}
              className="text-gray-300 no-underline block mb-2 cursor-pointer hover:text-white"
            >
              Services
            </a>
            <a
              onClick={() => showPage("contact")}
              className="text-gray-300 no-underline block mb-2 cursor-pointer hover:text-white"
            >
              Contact Us
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-blue-400">Legal</h3>
            <a
              onClick={() => showPage("privacy")}
              className="text-gray-300 no-underline block mb-2 cursor-pointer hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              onClick={() => showPage("terms")}
              className="text-gray-300 no-underline block mb-2 cursor-pointer hover:text-white"
            >
              Terms of Service
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-blue-400">Support</h3>
            <p>
              <strong>Phone:</strong> (321) 277-7612
            </p>
            <p>
              <strong>Email:</strong> getchildsafeprogram@gmail.com
            </p>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-slate-600 text-gray-300">
          <p>&copy; 2025 Child Safe Kit®, LLC. All rights reserved. | Licensed and Insured</p>
          <p>Child Safe Kit® is a registered trademark. Not affiliated with any government agency.</p>
        </div>
      </div>
    </footer>
  )
}
