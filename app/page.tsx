"use client"

import { useState } from "react"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("main")

  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ]

  const Header = () => (
    <header className="header">
      <nav className="container nav">
        <div className="logo">Child Safe Kit®</div>
        <ul className="nav-links">
          <li><a onClick={() => setCurrentPage("main")}>Home</a></li>
          <li><a onClick={() => setCurrentPage("about")}>About Us</a></li>
          <li><a onClick={() => setCurrentPage("services")}>Services</a></li>
          <li><a onClick={() => setCurrentPage("contact")}>Contact Us</a></li>
          <li><a onClick={() => setCurrentPage("privacy")}>Privacy Policy</a></li>
          <li><a onClick={() => setCurrentPage("terms")}>Terms of Service</a></li>
        </ul>
      </nav>
    </header>
  )

  const Footer = () => (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Child Safe Kit®</h3>
            <p>Protecting families through preparedness and education. Every child deserves to be safe.</p>
            <p><strong>Business Information:</strong><br />
              Child Safe Kit®, LLC<br />
              1427 Bayfront Dr<br />
              Winter Garden, FL 34787</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <a onClick={() => setCurrentPage("main")}>Home</a>
            <a onClick={() => setCurrentPage("about")}>About Us</a>
            <a onClick={() => setCurrentPage("services")}>Services</a>
            <a onClick={() => setCurrentPage("contact")}>Contact Us</a>
          </div>

          <div className="footer-section">
            <h3>Legal</h3>
            <a onClick={() => setCurrentPage("privacy")}>Privacy Policy</a>
            <a onClick={() => setCurrentPage("terms")}>Terms of Service</a>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <p><strong>Phone:</strong> (321) 277-7612</p>
            <p><strong>Email:</strong> getchildsafeprogram@gmail.com</p>
            <p><strong>SMS Help:</strong> Text HELP to any message</p>
            <p><strong>SMS Stop:</strong> Text STOP to unsubscribe</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Child Safe Kit®, LLC. All rights reserved. | Licensed and Insured</p>
          <p>Child Safe Kit® is a registered trademark. Not affiliated with any government agency.</p>
        </div>
      </div>
    </footer>
  )

  const MainPage = () => (
    <>
      <section className="hero">
        <div className="container">
          <h1>Protect Your Child with a FREE Child Safe Kit®</h1>
          <p>Nearly 1,400 U.S. kids go missing each day. Be prepared with vital information that could help authorities find your child quickly. Order your no-cost Child Safe Kit® today.</p>
          <a href="#order" className="cta-button">Get Your FREE Kit Now</a>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <p>Nearly 1,400 children go missing in the U.S. every day - Be prepared with Child Safe Kit®</p>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2>Why Child Safe Kit®?</h2>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Vital Information Storage</h3>
              <p>Record and store critical information including blood type, eye color, height, weight, and fingerprints in one secure location.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3>Quick Access in Emergencies</h3>
              <p>Have all important details immediately available to help authorities in their search efforts when every second counts.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              <h3>Safety Education Resources</h3>
              <p>Learn valuable safety tips and techniques to help improve your child&apos;s awareness and protection in various situations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>What Parents Are Saying</h2>
          <div className="testimonials">
            <div className="testimonial">
              <p>&quot;The Child Safe Kit gave me peace of mind knowing I have all my daughter&apos;s important information organized and ready if ever needed. The safety tips were also incredibly helpful.&quot;</p>
              <div className="testimonial-author">- Sarah M., Texas</div>
            </div>
            <div className="testimonial">
              <p>&quot;As a single parent, having everything documented in one place makes me feel more prepared. The kit was easy to complete and the materials are high quality.&quot;</p>
              <div className="testimonial-author">- Michael R., California</div>
            </div>
            <div className="testimonial">
              <p>&quot;I ordered kits for both my children. The educational materials helped us have important safety conversations in an age-appropriate way.&quot;</p>
              <div className="testimonial-author">- Jennifer L., Florida</div>
            </div>
          </div>
        </div>
      </section>

      <section id="order" className="section">
        <div className="container">
          <h2>Order Your FREE Child Safe Kit®</h2>
          <div className="order-form">
            <form id="orderForm">
              <div className="form-group">
                <label htmlFor="parentName">Parent/Guardian Name *</label>
                <input type="text" id="parentName" name="parentName" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="address">Mailing Address *</label>
                <input type="text" id="address" name="address" required />
              </div>

              <div className="form-group">
                <label htmlFor="city">City *</label>
                <input type="text" id="city" name="city" required />
              </div>

              <div className="form-group">
                <label htmlFor="state">State *</label>
                <select id="state" name="state" required>
                  <option value="">Select State</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="zip">ZIP Code *</label>
                <input type="text" id="zip" name="zip" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number (Optional)</label>
                <input type="tel" id="phone" name="phone" />
              </div>

              <div className="opt-in-section">
                <h3>SMS Communication Preferences</h3>
                <p style={{ marginBottom: "1rem" }}><strong>Child Safe Kit®</strong> can send you important updates about your order via text message.</p>

                <div className="checkbox-group">
                  <input type="checkbox" id="smsTransactional" name="smsConsent" value="transactional" />
                  <label htmlFor="smsTransactional">
                    <strong>Order & Account Updates</strong> - Receive important messages about your kit order status and account updates.
                    <br /><small style={{ color: "#666" }}>Frequency: 2-4 messages per order</small>
                  </label>
                </div>

                <div style={{ background: "#fff", padding: "1rem", borderRadius: "5px", marginTop: "1rem", fontSize: "0.85rem", color: "#555" }}>
                  <p><strong>SMS Terms:</strong></p>
                  <ul style={{ marginLeft: "1.5rem", marginTop: "0.5rem" }}>
                    <li>Message and data rates may apply</li>
                    <li>Text HELP for help or support</li>
                    <li>Text STOP to unsubscribe at any time</li>
                    <li>Customer Support: Call (321) 277-7612</li>
                  </ul>
                </div>
              </div>

              <div style={{ fontSize: "0.85rem", color: "#666", marginBottom: "1.5rem", padding: "1rem", background: "#f8f9fa", borderRadius: "5px" }}>
                <p>By submitting this form, you agree to our <a onClick={() => setCurrentPage("privacy")} style={{ color: "#3498db", cursor: "pointer" }}>Privacy Policy</a> and <a onClick={() => setCurrentPage("terms")} style={{ color: "#3498db", cursor: "pointer" }}>Terms of Service</a>. Your information will be used solely for processing your kit order and providing the services you&apos;ve requested.</p>
              </div>

              <button type="submit" className="submit-button">Order My FREE Child Safe Kit®</button>
            </form>
          </div>
        </div>
      </section>

      <section id="contact" className="section section-alt">
        <div className="container">
          <h2>Contact Information</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            <div style={{ background: "white", padding: "2rem", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
              <h3>Get in Touch</h3>
              <p><strong>Child Safe Kit®, LLC</strong></p>
              <p><strong>Address:</strong><br />
                1427 Bayfront Dr<br />
                Winter Garden, FL 34787</p>

              <p><strong>Phone:</strong> (321) 277-7612<br />
                <strong>Email:</strong> getchildsafeprogram@gmail.com</p>

              <p><strong>Business Hours:</strong><br />
                Monday - Friday: 8:00 AM - 6:00 PM CST<br />
                Saturday: 9:00 AM - 3:00 PM CST<br />
                Sunday: Closed</p>
            </div>

            <div style={{ background: "white", padding: "2rem", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
              <h3>Customer Support</h3>
              <p><strong>Phone Support:</strong> (321) 277-7612</p>
              <p><strong>Email Support:</strong> getchildsafeprogram@gmail.com</p>
              <p><strong>SMS Support:</strong> Text HELP to any message</p>
              <p><strong>Response Time:</strong> Within 24 hours during business days</p>

              <h4 style={{ marginTop: "1.5rem" }}>Quick Links</h4>
              <p><a onClick={() => setCurrentPage("privacy")} style={{ color: "#3498db", cursor: "pointer" }}>Privacy Policy</a></p>
              <p><a onClick={() => setCurrentPage("terms")} style={{ color: "#3498db", cursor: "pointer" }}>Terms of Service</a></p>
              <p><a onClick={() => setCurrentPage("about")} style={{ color: "#3498db", cursor: "pointer" }}>About Our Company</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )

  const AboutPage = () => (
    <section className="section">
      <div className="container">
        <div className="back-button">
          <button onClick={() => setCurrentPage("main")} className="cta-button">← Back to Home</button>
        </div>
        <div className="page-content">
          <h2>About Child Safe Kit®</h2>

          <h3>Our Story</h3>
          <p>Child Safe Kit® was founded in 2020 by a group of concerned parents and child safety advocates who recognized the critical need for comprehensive family preparedness tools. After learning that nearly 1,400 children go missing in the United States every day, our founders were motivated to create a solution that would help families be better prepared for emergency situations.</p>

          <h3>Our Mission</h3>
          <p>Our mission is simple yet vital: to empower parents and guardians with the tools and knowledge they need to protect their children. We believe that every family deserves access to comprehensive safety resources, which is why we provide our Child Safe Kits completely free of charge.</p>

          <h3>What We Do</h3>
          <p>Child Safe Kit® provides comprehensive documentation tools that help families organize and store critical information about their children. Our kits include everything needed to create a complete profile that can assist law enforcement in search and recovery efforts. We also provide ongoing educational resources about child safety, emergency preparedness, and family protection.</p>

          <h3>Our Values</h3>
          <ul>
            <li><strong>Child Safety First:</strong> Every decision we make prioritizes the safety and well-being of children</li>
            <li><strong>Parent Empowerment:</strong> We provide tools and knowledge to help parents protect their children proactively</li>
            <li><strong>Community Support:</strong> We work closely with law enforcement and safety organizations to enhance child protection efforts</li>
            <li><strong>Accessibility:</strong> Our kits are provided at no cost to ensure every family can access these vital tools</li>
            <li><strong>Education:</strong> We believe knowledge is power when it comes to keeping children safe</li>
          </ul>

          <h3>Our Team</h3>

          <div className="team-member">
            <h4>Matthew Henderson - Founder & CEO</h4>
            <p>Matthew is a child safety advocate with over 15 years of experience in family services and emergency preparedness. As a father, he understands firsthand the importance of being prepared for any situation involving children&apos;s safety. Matthew holds a Master&apos;s degree in Social Work and has worked extensively with law enforcement agencies on child protection initiatives.</p>
          </div>

          <div className="team-member">
            <h4>Cameron Johnson - Director of Operations</h4>
            <p>Cameron brings 20 years of law enforcement experience to Child Safe Kit®, including 12 years specializing in missing children cases. His expertise in search and recovery operations has been instrumental in designing our documentation systems to meet the specific needs of law enforcement agencies.</p>
          </div>

          <h3>Our Impact</h3>
          <p>Since our founding, we have distributed over 500,000 Child Safe Kits to families across all 50 states. Our educational resources have reached millions of parents, helping them have important safety conversations with their children and implement protective measures in their daily lives.</p>
        </div>
      </div>
    </section>
  )

  const ServicesPage = () => (
    <section className="section">
      <div className="container">
        <div className="back-button">
          <button onClick={() => setCurrentPage("main")} className="cta-button">← Back to Home</button>
        </div>
        <div className="page-content">
          <h2>Our Services</h2>

          <h3>Free Child Safe Kit® Distribution</h3>
          <p><strong>Our Primary Service:</strong> We provide comprehensive Child Safe Kits to families across the United States at absolutely no cost, including free shipping.</p>

          <h4>What&apos;s Included in Every Kit:</h4>
          <ul>
            <li><strong>Child Information Forms:</strong> Comprehensive forms for recording vital statistics, physical characteristics, and identifying features</li>
            <li><strong>Professional Fingerprint Cards:</strong> FBI-standard fingerprint cards with easy-to-follow instructions</li>
            <li><strong>Photo Documentation Guides:</strong> Instructions for taking proper identification photos that meet law enforcement standards</li>
            <li><strong>Digital Storage Instructions:</strong> Guidelines for safely storing information both physically and digitally</li>
            <li><strong>Emergency Contact Templates:</strong> Pre-formatted cards for important phone numbers and contacts</li>
            <li><strong>Safety Education Materials:</strong> Age-appropriate safety tips and discussion guides for families</li>
            <li><strong>Quick Reference Cards:</strong> Wallet-sized cards with essential information for emergencies</li>
          </ul>

          <h4>Service Details:</h4>
          <ul>
            <li><strong>Cost:</strong> Completely FREE - No hidden fees, shipping charges, or subscription costs</li>
            <li><strong>Eligibility:</strong> Available to any parent or guardian of children in the United States</li>
            <li><strong>Processing Time:</strong> Orders processed within 2-3 business days</li>
            <li><strong>Delivery Time:</strong> Standard delivery within 7-10 business days</li>
            <li><strong>Coverage:</strong> Available in all 50 states</li>
            <li><strong>Quantity:</strong> One kit per child per household</li>
          </ul>
        </div>
      </div>
    </section>
  )

  const ContactPage = () => (
    <section className="section">
      <div className="container">
        <div className="back-button">
          <button onClick={() => setCurrentPage("main")} className="cta-button">← Back to Home</button>
        </div>
        <div className="page-content">
          <h2>Contact Us</h2>

          <h3>Get in Touch</h3>
          <p><strong>Child Safe Kit®, LLC</strong></p>
          <p><strong>Address:</strong> 1427 Bayfront Dr, Winter Garden, FL 34787</p>
          <p><strong>Phone:</strong> (321) 277-7612</p>
          <p><strong>Email:</strong> getchildsafeprogram@gmail.com</p>

          <h3>Business Hours</h3>
          <p>Monday - Friday: 8:00 AM - 6:00 PM CST<br />
            Saturday: 9:00 AM - 3:00 PM CST<br />
            Sunday: Closed</p>
        </div>
      </div>
    </section>
  )

  const PrivacyPage = () => (
    <section className="section">
      <div className="container">
        <div className="back-button">
          <button onClick={() => setCurrentPage("main")} className="cta-button">← Back to Home</button>
        </div>
        <div className="page-content">
          <h2>Privacy Policy</h2>
          <p><strong>Last Updated:</strong> January 2025</p>

          <h3>Information We Collect</h3>
          <p>We collect information you provide directly to us, such as when you request a Child Safe Kit, sign up for our newsletter, or contact us for support. This may include your name, email address, phone number, and mailing address.</p>

          <h3>How We Use Your Information</h3>
          <p>We use the information we collect to process your Child Safe Kit orders, communicate with you about your orders and our services, and send you educational resources about child safety.</p>

          <h3>Information Sharing</h3>
          <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except as necessary to fulfill your order or as required by law.</p>

          <h3>Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at getchildsafeprogram@gmail.com or call (321) 277-7612.</p>
        </div>
      </div>
    </section>
  )

  const TermsPage = () => (
    <section className="section">
      <div className="container">
        <div className="back-button">
          <button onClick={() => setCurrentPage("main")} className="cta-button">← Back to Home</button>
        </div>
        <div className="page-content">
          <h2>Terms of Service</h2>
          <p><strong>Last Updated:</strong> January 2025</p>

          <h3>Acceptance of Terms</h3>
          <p>By accessing and using the Child Safe Kit® website and services, you agree to be bound by these Terms of Service.</p>

          <h3>Description of Service</h3>
          <p>Child Safe Kit®, LLC provides free child safety documentation kits and educational resources to families across the United States.</p>

          <h3>User Responsibilities</h3>
          <p>You agree to provide accurate and complete information when requesting a Child Safe Kit and to use our services only for lawful purposes.</p>

          <h3>Contact Us</h3>
          <p>If you have any questions about these Terms of Service, please contact us at getchildsafeprogram@gmail.com or call (321) 277-7612.</p>
        </div>
      </div>
    </section>
  )

  return (
    <>
      <Header />
      <main>
        {currentPage === "main" && <MainPage />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "services" && <ServicesPage />}
        {currentPage === "contact" && <ContactPage />}
        {currentPage === "privacy" && <PrivacyPage />}
        {currentPage === "terms" && <TermsPage />}
      </main>
      <Footer />
    </>
  )
}
