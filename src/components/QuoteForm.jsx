import { useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function QuoteForm({ type, onResults }) {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    quote_type: type,
    zip_code: '',
    age: '',
    // auto
    vehicle_year: '',
    vehicle_make: '',
    vehicle_model: '',
    accidents_last_5_years: '',
    // home
    home_value: '',
    square_feet: '',
    security_system: false,
  })

  const handleChange = (e) => {
    const { name, value, type: inputType, checked } = e.target
    setForm(prev => ({ ...prev, [name]: inputType === 'checkbox' ? checked : value }))
  }

  const submit = async () => {
    setLoading(true)
    setError('')
    try {
      const payload = {
        ...form,
        age: form.age ? Number(form.age) : undefined,
        vehicle_year: form.vehicle_year ? Number(form.vehicle_year) : undefined,
        accidents_last_5_years: form.accidents_last_5_years ? Number(form.accidents_last_5_years) : undefined,
        home_value: form.home_value ? Number(form.home_value) : undefined,
        square_feet: form.square_feet ? Number(form.square_feet) : undefined,
      }
      const res = await fetch(`${baseUrl}/api/quotes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to fetch quotes')
      const data = await res.json()
      onResults(data.results)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg ring-1 ring-blue-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-blue-900">{type === 'auto' ? 'Auto' : 'Home'} Insurance</h3>
        <span className="text-sm text-blue-900/60">Step {step} of {type === 'auto' ? 2 : 2}</span>
      </div>

      {error && <div className="mb-4 p-3 rounded bg-red-50 text-red-700">{error}</div>}

      {step === 1 && (
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="sm:col-span-1">
            <label className="block text-sm text-blue-900/70 mb-1">ZIP Code</label>
            <input name="zip_code" value={form.zip_code} onChange={handleChange} className="w-full border-blue-200 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="12345" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm text-blue-900/70 mb-1">Age</label>
            <input name="age" value={form.age} onChange={handleChange} className="w-full border-blue-200 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="30" />
          </div>

          {type === 'auto' ? (
            <div className="sm:col-span-1">
              <label className="block text-sm text-blue-900/70 mb-1">Vehicle Year</label>
              <input name="vehicle_year" value={form.vehicle_year} onChange={handleChange} className="w-full border-blue-200 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="2020" />
            </div>
          ) : (
            <div className="sm:col-span-1">
              <label className="block text-sm text-blue-900/70 mb-1">Home Value</label>
              <input name="home_value" value={form.home_value} onChange={handleChange} className="w-full border-blue-200 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="450000" />
            </div>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="grid sm:grid-cols-3 gap-4">
          {type === 'auto' ? (
            <>
              <div>
                <label className="block text-sm text-blue-900/70 mb-1">Make</label>
                <input name="vehicle_make" value={form.vehicle_make} onChange={handleChange} className="w-full border-blue-200 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Toyota" />
              </div>
              <div>
                <label className="block text-sm text-blue-900/70 mb-1">Model</label>
                <input name="vehicle_model" value={form.vehicle_model} onChange={handleChange} className="w-full border-blue-200 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Camry" />
              </div>
              <div>
                <label className="block text-sm text-blue-900/70 mb-1">Accidents (5yr)</label>
                <input name="accidents_last_5_years" value={form.accidents_last_5_years} onChange={handleChange} className="w-full border-blue-200 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="0" />
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-sm text-blue-900/70 mb-1">Square Feet</label>
                <input name="square_feet" value={form.square_feet} onChange={handleChange} className="w-full border-blue-200 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="1800" />
              </div>
              <div className="flex items-center gap-2 mt-6">
                <input type="checkbox" id="security_system" name="security_system" checked={form.security_system} onChange={handleChange} className="rounded text-blue-600 focus:ring-blue-600" />
                <label htmlFor="security_system" className="text-sm text-blue-900/80">Security system installed</label>
              </div>
            </>
          )}
        </div>
      )}

      <div className="mt-6 flex items-center justify-between">
        <button onClick={() => setStep(s => Math.max(1, s-1))} className="px-4 py-2 text-blue-700 hover:text-blue-900">Back</button>
        {step < 2 ? (
          <button onClick={() => setStep(s => s + 1)} className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Next</button>
        ) : (
          <button onClick={submit} disabled={loading} className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50">
            {loading ? 'Getting quotes…' : 'See Quotes'}
          </button>
        )}
      </div>
    </div>
  )
}

export default QuoteForm
