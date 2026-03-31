"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import AboutPage from "@/components/pages/about-page"
import ServicesPage from "@/components/pages/services-page"
import ContactPage from "@/components/pages/contact-page"
import PrivacyPage from "@/components/pages/privacy-page"
import TermsPage from "@/components/pages/terms-page"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("main")

  const showPage = (page: string) => {
    setCurrentPage(page)
  }

  if (currentPage !== "main") {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header showPage={showPage} />
        {currentPage === "about" && <AboutPage showPage={showPage} />}
        {currentPage === "services" && <ServicesPage showPage={showPage} />}
        {currentPage === "contact" && <ContactPage showPage={showPage} />}
        {currentPage === "privacy" && <PrivacyPage showPage={showPage} />}
        {currentPage === "terms" && <TermsPage showPage={showPage} />}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showPage={showPage} />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Testimonials />
      </main>
      <Footer showPage={showPage} />
    </div>
  )
}
