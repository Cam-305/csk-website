export default function Testimonials() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-5">
        <h2 className="text-center mb-8 text-4xl text-slate-700">What Parents Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="mb-4">
              {
                '"The Child Safe Kit gave me peace of mind knowing I have all my daughter\'s important information organized and ready if ever needed. The safety tips were also incredibly helpful."'
              }
            </p>
            <div className="font-bold text-slate-700">- Sarah M., Texas</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="mb-4">
              {
                '"As a single parent, having everything documented in one place makes me feel more prepared. The kit was easy to complete and the materials are high quality."'
              }
            </p>
            <div className="font-bold text-slate-700">- Michael R., California</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="mb-4">
              {
                '"I ordered kits for both my children. The educational materials helped us have important safety conversations in an age-appropriate way."'
              }
            </p>
            <div className="font-bold text-slate-700">- Jennifer L., Florida</div>
          </div>
        </div>
      </div>
    </section>
  )
}
