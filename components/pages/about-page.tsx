"use client"

interface AboutPageProps {
  showPage: (page: string) => void
}

export default function AboutPage({ showPage }: AboutPageProps) {
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
          <h2 className="text-slate-700 mb-8 text-center text-3xl">About Child Safe Kit®</h2>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Our Story</h3>
          <p className="mb-6 leading-relaxed">
            Child Safe Kit® was founded in 2020 by a group of concerned parents and child safety advocates who
            recognized the critical need for comprehensive family preparedness tools. After learning that nearly 1,400
            children go missing in the United States every day, our founders were motivated to create a solution that
            would help families be better prepared for emergency situations.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Our Mission</h3>
          <p className="mb-6 leading-relaxed">
            Our mission is simple yet vital: to empower parents and guardians with the tools and knowledge they need to
            protect their children. We believe that every family deserves access to comprehensive safety resources,
            which is why we provide our Child Safe Kits completely free of charge.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">What We Do</h3>
          <p className="mb-6 leading-relaxed">
            Child Safe Kit® provides comprehensive documentation tools that help families organize and store critical
            information about their children. Our kits include everything needed to create a complete profile that can
            assist law enforcement in search and recovery efforts. We also provide ongoing educational resources about
            child safety, emergency preparedness, and family protection.
          </p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Our Values</h3>
          <ul className="my-4 ml-8 space-y-2">
            <li>
              <strong>Child Safety First:</strong> Every decision we make prioritizes the safety and well-being of
              children
            </li>
            <li>
              <strong>Parent Empowerment:</strong> We provide tools and knowledge to help parents protect their children
              proactively
            </li>
            <li>
              <strong>Community Support:</strong> We work closely with law enforcement and safety organizations to
              enhance child protection efforts
            </li>
            <li>
              <strong>Accessibility:</strong> Our kits are provided at no cost to ensure every family can access these
              vital tools
            </li>
            <li>
              <strong>Education:</strong> We believe knowledge is power when it comes to keeping children safe
            </li>
          </ul>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Our Team</h3>

          <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
            <h4 className="text-slate-700 mt-6 mb-2 text-lg">Matthew Henderson - Founder & CEO</h4>
            <p>
              Matthew is a child safety advocate with over 15 years of experience in family services and emergency
              preparedness. As a father, he understands firsthand the importance of being prepared for any situation
              involving children's safety. Matthew holds a Master's degree in Social Work and has worked extensively
              with law enforcement agencies on child protection initiatives.
            </p>
          </div>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Our Impact</h3>
          <p className="mb-6 leading-relaxed">
            Since our founding, we have distributed over 500,000 Child Safe Kits to families across all 50 states. Our
            educational resources have reached millions of parents, helping them have important safety conversations
            with their children and implement protective measures in their daily lives.
          </p>
        </div>
      </div>
    </section>
  )
}
