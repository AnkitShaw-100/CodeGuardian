import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

export default function Payment() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const plan = searchParams.get('plan') || 'Basic'
  const rawPrice = searchParams.get('price')
  // normalize price param
  const priceParam = rawPrice === null ? null : String(rawPrice)
  const priceMap = {
    Basic: '₹199 / month',
    Pro: '₹499 / month',
    Enterprise: '₹999 / month',
  }

  const primaryBtn =
    'inline-flex items-center justify-center w-full px-5 py-3 bg-[#feeb01] text-[#0c1113] font-semibold rounded-lg shadow active:opacity-90'
  const secondaryBtn =
    'inline-flex items-center justify-center w-full px-5 py-3 bg-transparent border border-white/6 text-slate-200 rounded-lg'

  return (
    <div className="max-w-7xl min-h-[80vh] mx-auto">
      <div className="w-full p-8 text-slate-300">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white">Checkout</h2>
          <p className="text-slate-400 mt-2">
            You’re purchasing the{' '}
            <span className="font-semibold text-white">{plan}</span> plan
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-[#141b1b] p-6 rounded-2xl border border-white/6">
          {/* Plan Summary */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Order Summary
            </h3>

            <div className="flex justify-between text-slate-400">
              <span>{plan} Plan</span>
              <span>
                {priceParam
                  ? (priceParam === 'contact' ? 'Contact Sales' : (priceParam === '0' ? '$0' : `$${priceParam}/mo`))
                  : (priceMap[plan] || '—')}
              </span>
            </div>

            <div className="flex justify-between text-slate-400 mt-2">
              <span>Taxes</span>
              <span>Included</span>
            </div>

            <div className="border-t border-white/6 mt-4 pt-4 flex justify-between text-white font-semibold">
              <span>Total</span>
              <span>
                {priceParam
                  ? (priceParam === 'contact' ? 'Contact Sales' : (priceParam === '0' ? '$0' : `$${priceParam}/mo`))
                  : (priceMap[plan] || '—')}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 gap-3">
            <button
              onClick={() => {
                // later: redirect to backend payment session
                alert('Payment integration coming next')
              }}
              className={primaryBtn}
            >
              Proceed to Secure Payment
            </button>

            <button
              onClick={() => navigate('/pricing')}
              className={secondaryBtn}
            >
              Change Plan
            </button>
          </div>

          <p className="text-xs text-slate-500 text-center mt-4">
            Payments are processed securely. We do not store card details.
          </p>
        </div>
      </div>
    </div>
  )
}
