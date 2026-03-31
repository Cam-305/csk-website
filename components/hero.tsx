interface HeroProps {
  showPage: (page: string) => void
}

export default function Hero({ showPage }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-slate-700/80 to-blue-500/80 text-white py-16 text-center min-h-[60vh] flex items-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-transparent to-blue-300/20"></div>
      <div className="container mx-auto px-5 relative z-10">
        <h1 className="text-4xl md:text-5xl mb-4 drop-shadow-lg">Protect Your Child with a FREE Child Safe Kit®</h1>
        <p className="text-xl mb-8 max-w-4xl mx-auto">
          Nearly 1,400 U.S. kids go missing each day. Be prepared with vital information that could help authorities
          find your child quickly. Order your no-cost Child Safe Kit® today.
        </p>
        <a
          onClick={() => showPage("contact")}
          className="inline-block bg-red-600 text-white py-4 px-8 no-underline rounded-md text-lg font-bold transition-all duration-300 shadow-lg border-none cursor-pointer hover:bg-red-700 hover:-translate-y-1 hover:shadow-xl"
        >
          Get Your FREE Kit Now
        </a>
      </div>
    </section>
  )
}
