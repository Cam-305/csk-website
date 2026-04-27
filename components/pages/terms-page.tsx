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
            <strong>Effective Date:</strong> January 1, 2026
          </p>

          {/* SMS Messaging Terms Section */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <h3 className="text-slate-700 mb-4 text-xl">SMS Messaging Terms & Compliance</h3>
            
            <p className="mb-4 leading-relaxed">
              <strong>1. Program Description:</strong> This messaging program sends appointment confirmation and reminder messages to customers who have booked an appointment with Child Safe Program through our website at https://getchildsafeprogram.com, or via our scheduling forms, and have explicitly opted in to receive SMS notifications. Opt-in is collected via web forms with a dedicated checkbox for SMS consent. Messages include scheduling confirmations, appointment reminders, rescheduling updates, and customer support communications.
            </p>

            <p className="mb-4 leading-relaxed">
              <strong>2. Cancellation Instructions:</strong> You can cancel the SMS service at any time. Simply text &quot;STOP&quot; to the same number that sent you messages. Upon sending &quot;STOP,&quot; we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.
            </p>

            <p className="mb-4 leading-relaxed">
              <strong>3. Support Information:</strong> If you experience issues with the messaging program, reply with the keyword &quot;HELP&quot; for more assistance, or reach out directly to getchildsafeprogram@gmail.com or call (321) 277-7612 during business hours.
            </p>

            <p className="mb-4 leading-relaxed">
              <strong>4. Carrier Liability:</strong> Carriers are not liable for delayed or undelivered messages.
            </p>

            <p className="mb-4 leading-relaxed">
              <strong>5. Message & Data Rates:</strong> Message and data rates may apply for messages sent to you from us and to us from you. Message frequency varies based on your service usage and appointment schedule. For questions about your text plan or data plan, contact your wireless provider.
            </p>

            <p className="mb-4 leading-relaxed">
              <strong>6. Supported Carriers:</strong> Our SMS program works with all major U.S. wireless carriers, including AT&T, T-Mobile, Verizon, Sprint, and most regional carriers.
            </p>

            <p className="mb-4 leading-relaxed">
              <strong>7. Age Restriction:</strong> You must be 18 years or older to participate in our SMS program.
            </p>

            <p className="mb-4 leading-relaxed">
              <strong>8. Privacy Policy:</strong> For privacy-related inquiries, please refer to our{" "}
              <a onClick={() => showPage("privacy")} className="text-blue-500 cursor-pointer hover:text-blue-700 underline">
                Privacy Policy
              </a>
            </p>

            <p className="leading-relaxed italic">
              We comply with all applicable laws and regulations, including the Telephone Consumer Protection Act (TCPA) and CTIA guidelines, regarding the use of SMS communications.
            </p>
          </div>

          {/* General Terms Section */}
          <h3 className="text-slate-700 mt-8 mb-4 text-xl">General Terms</h3>
          <p className="mb-6 leading-relaxed">
            This website (the &quot;Site&quot;) is owned and operated by Child Safe Program (&quot;COMPANY,&quot; &quot;we&quot; or &quot;us&quot;). By using the Site, you agree to be bound by these Terms of Service and to use the Site in accordance with these Terms of Service, our Privacy Policy, and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the Site or from Child Safe Program.
          </p>
          <p className="mb-6 leading-relaxed">
            Accessing the Site, in any manner, whether automated or otherwise, constitutes use of the Site and your agreement to be bound by these Terms of Service.
          </p>
          <p className="mb-6 leading-relaxed">
            We reserve the right to change these Terms of Service or to impose new conditions on the use of the Site from time to time, in which case we will post the revised Terms of Service on this website. By continuing to use the Site after we post any such changes, you accept the Terms of Service, as modified.
          </p>

          {/* Intellectual Property Rights */}
          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Intellectual Property Rights</h3>
          
          <h4 className="text-slate-600 mt-6 mb-3 text-lg font-semibold">Our Limited License to You</h4>
          <p className="mb-6 leading-relaxed">
            This Site and all the materials available on the Site are the property of Child Safe Program and/or our affiliates or licensors and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal non-commercial use.
          </p>
          <p className="mb-6 leading-relaxed">
            You may not use the Site or the materials available on the Site in a manner that constitutes an infringement of our rights or that has not been authorized by us.
          </p>
          <p className="mb-6 leading-relaxed">
            Unless explicitly authorized, you may not modify, copy, reproduce, republish, upload, post, transmit, translate, sell, create derivative works, exploit, or distribute in any manner or medium any material from the Site. However, you may download and/or print one copy of individual pages for your personal, non-commercial use, provided that you keep intact all copyright and other proprietary notices.
          </p>

          <h4 className="text-slate-600 mt-6 mb-3 text-lg font-semibold">Your License to Us</h4>
          <p className="mb-6 leading-relaxed">
            By posting or submitting any material (including comments, blog entries, social media posts, photos, and videos) to us via the Site, internet groups, or other digital venues, you represent that you own the material or have obtained the necessary permissions. You grant us a royalty-free, perpetual, irrevocable, non-exclusive, worldwide license to use, modify, transmit, sell, exploit, create derivative works from, distribute, and publicly perform or display such material.
          </p>

          {/* Disclaimers */}
          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Disclaimers</h3>
          <p className="mb-6 leading-relaxed">
            Throughout the Site, we may provide links and pointers to Internet sites maintained by third parties. Our linking to such third-party sites does not imply an endorsement or sponsorship of such sites or the information, products, or services offered on or through the sites.
          </p>
          <p className="mb-6 leading-relaxed">
            The information, products, and services offered on or through the Site are provided &quot;as is&quot; and without warranties of any kind, either express or implied. To the fullest extent permissible pursuant to applicable law, we disclaim all warranties, including implied warranties of merchantability and fitness for a particular purpose.
          </p>
          <p className="mb-6 leading-relaxed">
            You agree at all times to indemnify and hold harmless Child Safe Program, its affiliates, and their respective officers, directors, agents, and employees from any claims, causes of action, damages, liabilities, costs, and expenses arising out of or related to your breach of any obligation, warranty, or representation under these Terms of Service.
          </p>

          {/* Online Commerce */}
          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Online Commerce</h3>
          <p className="mb-6 leading-relaxed">
            Certain sections of the Site may allow you to purchase products and services from third-party vendors. We are not responsible for the quality, accuracy, timeliness, reliability, or any other aspect of these products and services. If you purchase from a third party linked through the Site, the information obtained during your visit, including payment information, may be collected by both the merchant and us.
          </p>
          <p className="mb-6 leading-relaxed">
            Your participation in any dealings with third-party vendors is solely between you and the third party. Child Safe Program shall not be responsible for any loss or damage incurred as a result of such dealings.
          </p>

          {/* Registration & Passwords */}
          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Registration & Passwords</h3>
          <p className="mb-6 leading-relaxed">
            To access certain features of the Site, you may be required to register and create an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account.
          </p>
          <p className="mb-6 leading-relaxed">
            If you suspect unauthorized use of your account, notify us immediately at getchildsafeprogram@gmail.com. We are not liable for any loss or damage arising from your failure to comply with this obligation.
          </p>

          {/* Termination */}
          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Termination</h3>
          <p className="mb-6 leading-relaxed">
            We reserve the right to terminate or suspend your access to the Site, without notice, if we determine that you have violated these Terms of Service or engaged in conduct that we deem inappropriate or unlawful. Upon termination, you must cease all use of the Site and any content obtained from it.
          </p>

          {/* Governing Law */}
          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Governing Law</h3>
          <p className="mb-6 leading-relaxed">
            These Terms of Service shall be governed by and construed in accordance with the laws of the state in which Child Safe Program operates. Any dispute arising under these Terms shall be resolved exclusively through binding arbitration in that jurisdiction.
          </p>

          {/* Changes to Terms */}
          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Changes to Terms of Service</h3>
          <p className="mb-6 leading-relaxed">
            We may update these Terms of Service from time to time. The latest version will always be available on our website with the effective date.
          </p>

          {/* Contact Information */}
          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Contact Information</h3>
          <p className="mb-2 leading-relaxed">
            For any questions regarding these Terms of Service, please contact us at:
          </p>
          <div className="bg-slate-50 p-6 rounded-lg">
            <p className="mb-2"><strong>Child Safe Program</strong></p>
            <p className="mb-2"><strong>Phone:</strong> (321) 277-7612</p>
            <p className="mb-2"><strong>Email:</strong> getchildsafeprogram@gmail.com</p>
            <p><strong>Website:</strong> https://www.getchildsafeprogram.com/</p>
          </div>

          <p className="mt-8 leading-relaxed text-center italic text-slate-600">
            By using our website and services, you consent to these Terms of Service.
          </p>
        </div>
      </div>
    </section>
  )
}
