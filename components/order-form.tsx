"use client"

import type React from "react"

import { useState } from "react"

export default function OrderForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  })

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    alert("Thank you for your order! Your FREE Child Safe Kit will be shipped within 7-10 business days.")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <section id="order" className="py-12">
      <div className="container mx-auto px-5">
        <h2 className="text-center mb-8 text-4xl text-slate-700">Order Your FREE Child Safe Kit®</h2>
        <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="parentName" className="block mb-2 font-bold text-slate-700">
                Parent/Guardian Name *
              </label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                required
                value={formData.parentName}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500 focus:shadow-sm focus:shadow-blue-500/30"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-bold text-slate-700">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500 focus:shadow-sm focus:shadow-blue-500/30"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="address" className="block mb-2 font-bold text-slate-700">
                Mailing Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500 focus:shadow-sm focus:shadow-blue-500/30"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="city" className="block mb-2 font-bold text-slate-700">
                City *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                value={formData.city}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500 focus:shadow-sm focus:shadow-blue-500/30"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="state" className="block mb-2 font-bold text-slate-700">
                State *
              </label>
              <select
                id="state"
                name="state"
                required
                value={formData.state}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500 focus:shadow-sm focus:shadow-blue-500/30"
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="zip" className="block mb-2 font-bold text-slate-700">
                ZIP Code *
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                required
                value={formData.zip}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500 focus:shadow-sm focus:shadow-blue-500/30"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block mb-2 font-bold text-slate-700">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500 focus:shadow-sm focus:shadow-blue-500/30"
              />
            </div>

            <div className="text-sm text-gray-600 mb-6 p-4 bg-gray-50 rounded-md">
              <p>
                By submitting this form, you agree to our Privacy Policy and Terms of Service. Your information will be
                used solely for processing your kit order and providing the services you've requested.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white p-4 border-none rounded-md text-lg font-bold cursor-pointer transition-colors duration-300 hover:bg-green-700"
            >
              Order My FREE Child Safe Kit®
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
