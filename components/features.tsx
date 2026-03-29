export default function Features() {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-5">
        <h2 className="text-center mb-8 text-4xl text-slate-700">Why Child Safe Kit®?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="text-5xl mb-4 text-blue-500">🛡️</div>
            <h3 className="text-xl font-semibold mb-4">Vital Information Storage</h3>
            <p>
              Record and store critical information including blood type, eye color, height, weight, and fingerprints in
              one secure location.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="text-5xl mb-4 text-blue-500">⚡</div>
            <h3 className="text-xl font-semibold mb-4">Quick Access in Emergencies</h3>
            <p>
              Have all important details immediately available to help authorities in their search efforts when every
              second counts.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="text-5xl mb-4 text-blue-500">📚</div>
            <h3 className="text-xl font-semibold mb-4">Safety Education Resources</h3>
            <p>
              Learn valuable safety tips and techniques to help improve your child's awareness and protection in various
              situations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
