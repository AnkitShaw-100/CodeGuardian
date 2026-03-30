import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Phone } from 'lucide-react'


export default function Pricing() {
    const navigate = useNavigate()

    const primaryBtn = 'inline-flex items-center justify-center w-full px-5 py-3 bg-[#feeb01] text-[#0c1113] font-semibold rounded-lg shadow active:opacity-90'

    return (
        <div className="max-w-7xl mx-auto px-6 py-8 min-h-[80vh]">
            <div className="flex items-center justify-center mb-6">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white">Pricing</h2>
                    <p className="text-slate-400 mt-2">Simple tiers for individuals and teams — upgrade anytime.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start min-h-[60vh]">
                <article className="rounded-2xl bg-[#141b1b] border border-white/6 p-8 transform scale-100 shadow-xl h-full flex flex-col hover:border-[#feeb01]/30 transition-all">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-white">Free</h3>
                            <p className="text-sm text-slate-400 mt-1">Basic reviews · community support</p>
                        </div>
                        <div className="text-2xl font-semibold text-white">$0</div>
                    </div>

                    <ul className="mt-4 space-y-2 text-slate-300 text-sm flex-1">
                        <li>Up to 100 lines / review</li>
                        <li>Community support</li>
                        <li>Basic insights</li>
                        <li>Access to community templates & examples</li>
                        <li>Daily usage limits suitable for individual projects</li>
                        <li>Email notifications for review results (limited)</li>
                    </ul>

                    <div className="mt-6">
                        <button onClick={() => navigate('/payment?plan=Free&price=0')} className={primaryBtn}>Choose Free</button>
                    </div>
                </article>
                <article className="rounded-2xl bg-[#141b1b] border border-[#feeb01]/30 p-8 transform scale-100 shadow-xl h-full flex flex-col hover:border-[#feeb01]/50 transition-all">
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#feeb01]/10 text-[#feeb01] text-xs font-semibold">Most popular</div>
                            <h3 className="text-2xl font-bold text-white mt-3">Pro</h3>
                            <p className="text-sm text-slate-300 mt-1">Priority reviews · team features</p>
                        </div>
                        <div className="text-3xl font-extrabold text-white">$5<span className="text-base font-medium">/mo</span></div>
                    </div>

                    <ul className="mt-4 space-y-2 text-slate-300 text-sm flex-1">
                        <li>Unlimited reviews</li>
                        <li>Team collaboration & sharing</li>
                        <li>Priority AI processing</li>
                        <li>Integrations (CI/CD)</li>
                        <li>Exportable review reports (PDF / JSON)</li>
                        <li>Custom rules & linters for team workflows</li>
                        <li>Dedicated in-app support and onboarding guides</li>
                    </ul>

                    <div className="mt-6">
                        <button onClick={() => navigate('/payment?plan=Pro&price=5')} className={primaryBtn}>Choose Pro</button>
                    </div>
                </article>
                <article className="rounded-2xl bg-[#141b1b] border border-white/6 p-8 transform scale-100 shadow-xl h-full flex flex-col hover:border-[#feeb01]/30 transition-all">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-white">Enterprise</h3>
                            <p className="text-sm text-slate-400 mt-1">SAML, seats, SLAs</p>
                        </div>
                        <div className="text-2xl font-semibold text-white">
                            <Phone className="w-6 h-6 text-white" />
                        </div>
                    </div>

                    <ul className="mt-4 space-y-2 text-slate-300 text-sm flex-1">
                        <li>Single sign-on (SAML)</li>
                        <li>Volume discounts & enterprise SLAs</li>
                        <li>Custom integrations and API access</li>
                        <li>Dedicated account manager and onboarding</li>
                        <li>24/7 priority support and escalation paths</li>
                        <li>Custom billing, contracts, and deployment options</li>
                    </ul>

                    <div className="mt-6">
                        <button onClick={() => navigate('/payment?plan=Enterprise&price=contact')} className={primaryBtn}>Contact Sales</button>
                    </div>
                </article>
            </div>
        </div>
    )
}
