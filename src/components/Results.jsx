function Results({ items, onReset }) {
  return (
    <section id="compare" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-blue-900">Your top matches</h2>
        <button onClick={onReset} className="px-4 py-2 rounded-md bg-blue-100 text-blue-900 hover:bg-blue-200">Start over</button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((c, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg ring-1 ring-blue-100 p-6 flex flex-col">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-900">{c.name}</h3>
                <div className="text-sm text-yellow-600">⭐ {c.rating}</div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-extrabold text-blue-900">${c.monthly}</div>
                <div className="text-xs text-blue-900/60">per month</div>
              </div>
            </div>
            <ul className="mt-4 space-y-1 text-sm text-blue-900/80">
              {c.features.map((f, i) => <li key={i}>• {f}</li>)}
            </ul>
            <button className="mt-6 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">{c.cta}</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Results
