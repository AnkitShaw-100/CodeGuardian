import React from 'react';

export default function Landing() {
    return (
        <div className="space-y-12">
            {/* Hero */}
            <section className="px-6 md:px-12 py-14 bg-transparent">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white">Paste your code. Get a deep, actionable review.</h1>
                        <p className="text-slate-400 max-w-2xl">Code Guardian analyzes your code with an LLM-powered engine to find bugs, security issues, style problems and provides clear remediation steps you can act on immediately.</p>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
                            <a href="/playground" className="inline-flex items-center px-5 py-3 bg-[#feeb01] text-[#0c1113] font-semibold rounded-xl shadow">Try Playground</a>
                            <a href="/docs" className="text-sm text-slate-400 hover:text-[#feeb01]">Read the docs</a>
                        </div>

                    </div>

                    <div className="flex items-start justify-center md:justify-end">
                        <img
                            src="https://i.pinimg.com/736x/fb/26/c7/fb26c7cfac77d8a4d018b397bb7f6c99.jpg"
                            alt="developer working"
                            className="rounded-xl w-full max-w-md object-cover md:max-h-76"
                        />
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="px-6 md:px-12 text-center">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-2xl text-white font-semibold mb-6">How Code Guardian helps</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl bg-[#151a1b] border border-white/5">
                            <h4 className="text-lg text-white font-semibold mb-2">AI Code Review</h4>
                            <p className="text-slate-400 text-sm">Automated reviews that highlight issues, complexity hotspots, and improvement suggestions.</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-[#151a1b] border border-white/5">
                            <h4 className="text-lg text-white font-semibold mb-2">Security Checks</h4>
                            <p className="text-slate-400 text-sm">Find common vulnerabilities, insecure patterns, and recommended fixes.</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-[#151a1b] border border-white/5">
                            <h4 className="text-lg text-white font-semibold mb-2">Actionable Suggestions</h4>
                            <p className="text-slate-400 text-sm">Clear, prioritized steps and code snippets to fix problems fast.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
