import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-blue-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-blue-700" />
          <span className="font-semibold text-blue-900">BlueCompare</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-blue-900/80">
          <a href="#compare" className="hover:text-blue-700">Compare</a>
          <a href="#why" className="hover:text-blue-700">Why Us</a>
          <a href="#faq" className="hover:text-blue-700">FAQ</a>
          <a href="/test" className="hover:text-blue-700">Status</a>
          <a href="#quote" className="ml-4 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Get a Quote</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-blue-200 text-blue-900">
          <span className="sr-only">Menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-blue-100 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3 text-blue-900/80">
            <a href="#compare" onClick={() => setOpen(false)}>Compare</a>
            <a href="#why" onClick={() => setOpen(false)}>Why Us</a>
            <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
            <a href="/test" onClick={() => setOpen(false)}>Status</a>
            <a href="#quote" onClick={() => setOpen(false)} className="px-4 py-2 rounded-md bg-blue-600 text-white">Get a Quote</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
