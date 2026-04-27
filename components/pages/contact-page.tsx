"use client"

import { useState } from "react"

interface ContactPageProps {
  showPage: (page: string) => void
}

export default function ContactPage({ showPage }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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

        <h2 className="text-center mb-8 text-4xl text-slate-700">Contact Us</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-green-600 text-xl font-semibold mb-2">Thank you for your message!</div>
                <p className="text-slate-600">We will get back to you within 24 hours.</p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
                  }}
                  className="mt-4 text-blue-500 hover:text-blue-700 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="text-sm text-slate-600 mb-4 p-4 bg-slate-50 rounded-md">
                  <p>
                    I consent to receive marketing text messages, about special offers, discounts, and service updates, from Child Safe Program at the phone number provided. Message frequency may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-md font-bold hover:bg-red-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p>
                <strong>Child Safe Program®, LLC</strong>
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
              <p className="mb-6">
                <strong>Response Time:</strong> Within 24 hours during business days
              </p>

              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
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

              <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600">
                  By using our services, you agree to our{" "}
                  <a onClick={() => showPage("terms")} className="text-blue-500 cursor-pointer hover:text-blue-700 underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a onClick={() => showPage("privacy")} className="text-blue-500 cursor-pointer hover:text-blue-700 underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
