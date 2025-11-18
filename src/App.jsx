import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuoteForm from './components/QuoteForm'
import Results from './components/Results'

function App() {
  const [mode, setMode] = useState(null) // 'auto' | 'home'
  const [results, setResults] = useState(null)

  const start = (type) => {
    setMode(type)
    setResults(null)
    setTimeout(() => {
      const el = document.getElementById('quote')
      el?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  const reset = () => {
    setMode(null)
    setResults(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-blue-900">
      <Navbar />
      <Hero onStart={start} />

      <section id="quote" className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          {!mode && (
            <div className="text-center">
              <h2 className="text-3xl font-bold">Choose a product to get started</h2>
              <p className="mt-2 text-blue-900/70">We’ll ask a few quick questions to tailor your quotes.</p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <button onClick={() => start('auto')} className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">Auto Insurance</button>
                <button onClick={() => start('home')} className="px-5 py-3 rounded-md bg-blue-100 text-blue-900 hover:bg-blue-200">Home Insurance</button>
              </div>
            </div>
          )}

          {mode && !results && (
            <QuoteForm type={mode} onResults={setResults} />
          )}
        </div>
      </section>

      {results && <Results items={results} onReset={reset} />}

      <section id="why" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { title: 'Simple', desc: 'One form, multiple quotes. No pushy sales calls.' },
            { title: 'Transparent', desc: 'See prices and features side-by-side without hidden fees.' },
            { title: 'Secure', desc: 'Your info is encrypted and only used to provide quotes.' }
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm ring-1 ring-blue-100 p-6">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-blue-700 mb-4" />
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="text-blue-900/70 mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-10 bg-blue-900 text-blue-50">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-blue-400" />
            <span className="font-medium">BlueCompare</span>
          </div>
          <p className="text-blue-100/80 text-sm">© {new Date().getFullYear()} BlueCompare. All rights reserved.</p>
          <a href="/test" className="text-blue-200 hover:text-white text-sm">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
