function Hero({ onStart }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
      <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900">
            Compare auto and home insurance in minutes
          </h1>
          <p className="mt-4 text-blue-900/70 text-lg">
            One simple form. Personalized quotes from top carriers. No spam.
          </p>
          <div className="mt-6 flex gap-3">
            <button onClick={() => onStart('auto')} className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">Get Auto Quote</button>
            <button onClick={() => onStart('home')} className="px-5 py-3 rounded-md bg-blue-100 text-blue-900 hover:bg-blue-200">Get Home Quote</button>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-blue-900/60">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=1" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=2" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=3" />
            </div>
            <span>Trusted by thousands of smart shoppers</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-blue-100 to-transparent rounded-3xl" />
          <div className="relative bg-white rounded-2xl shadow-xl ring-1 ring-blue-100 p-4">
            <img src="https://images.unsplash.com/photo-1759737249772-ca6cae5b2b44?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYXIlMjBhbmQlMjBIb21lfGVufDB8MHx8fDE3NjM0OTEyNTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Car and Home" className="rounded-xl object-cover w-full h-72" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
