import React from 'react';

export default function Landing() {
    const features = [
        {
            title: "AI Code Review",
            description: "Automated reviews that highlight issues, complexity hotspots, and improvement suggestions."
        },
        {
            title: "Security Checks",
            description: "Find common vulnerabilities, insecure patterns, and recommended fixes."
        },
        {
            title: "Actionable Suggestions",
            description: "Clear, prioritized steps and code snippets to fix problems fast."
        },
        {
            title: "Multiple Languages",
            description: "Support for JavaScript, Python, Java, Go, Rust, C++, and more coming soon."
        },
        {
            title: "Performance Analysis",
            description: "Identify performance bottlenecks, memory leaks, and optimization opportunities."
        },
        {
            title: "Best Practice Alignment",
            description: "Get recommendations based on industry standards and modern coding conventions."
        }
    ];

    const howItWorks = [
        {
            step: "1",
            title: "Paste Code",
            description: "Paste any code snippet or file content into the playground"
        },
        {
            step: "2",
            title: "Analyze",
            description: "Our AI engine reviews your code in seconds"
        },
        {
            step: "3",
            title: "Review Findings",
            description: "Get detailed reports with categorized issues"
        },
        {
            step: "4",
            title: "Apply Fixes",
            description: "Use suggested code improvements immediately"
        }
    ];

    const benefits = [
        "Catch bugs before production",
        "Reduce security vulnerabilities",
        "Improve code quality consistently",
        "Speed up code reviews",
        "Learn best practices",
        "Save development time"
    ];

    return (
        <div className="space-y-16">
            {/* Hero */}
            <section className="px-6 md:px-12 py-16 bg-transparent">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    <div>
                        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">Paste your code. Get a deep, actionable review.</h1>
                        <p className="text-slate-400 max-w-2xl text-lg mb-6">Code Guardian analyzes your code with an LLM-powered engine to find bugs, security issues, style problems and provides clear remediation steps you can act on immediately.</p>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <a href="/playground" className="inline-flex items-center px-6 py-3 bg-[#feeb01] text-[#0c1113] font-semibold rounded-xl shadow hover:shadow-lg hover:bg-yellow-300 transition-all">Try Playground</a>
                            <a href="/docs" className="text-sm text-slate-400 hover:text-[#feeb01] transition-colors">Read the docs →</a>
                        </div>
                    </div>

                    <div className="flex items-start justify-center md:justify-end">
                        <img
                            src="https://i.pinimg.com/736x/fb/26/c7/fb26c7cfac77d8a4d018b397bb7f6c99.jpg"
                            alt="developer working"
                            className="rounded-xl w-full max-w-md object-cover md:max-h-80 shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="px-6 md:px-12 py-12 bg-[#151a1b]/30 border-y border-white/5">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    <div>
                        <h3 className="text-3xl sm:text-4xl font-bold text-[#feeb01]">1000+</h3>
                        <p className="text-slate-400 mt-2">Code Reviews Completed</p>
                    </div>
                    <div>
                        <h3 className="text-3xl sm:text-4xl font-bold text-[#feeb01]">50k+</h3>
                        <p className="text-slate-400 mt-2">Issues Found & Fixed</p>
                    </div>
                    <div>
                        <h3 className="text-3xl sm:text-4xl font-bold text-[#feeb01]">98%</h3>
                        <p className="text-slate-400 mt-2">User Satisfaction</p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="px-6 md:px-12 py-14">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Everything you need for professional code reviews</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-[#151a1b] border border-white/5 hover:border-[#feeb01]/30 transition-all hover:shadow-lg">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-[#feeb01]/10 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-[#feeb01]"></div>
                                    </div>
                                    <h4 className="text-lg text-white font-semibold">{feature.title}</h4>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="px-6 md:px-12 py-14 bg-[#0a0f10]/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Simple 4-step process to get your code reviewed</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {howItWorks.map((item, idx) => (
                            <div key={idx} className="relative">
                                <div className="bg-[#151a1b] border border-white/5 rounded-2xl p-6 h-full">
                                    <div className="w-12 h-12 rounded-full bg-[#feeb01] text-[#0c1113] font-bold flex items-center justify-center mb-4 text-lg">{item.step}</div>
                                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                                    <p className="text-slate-400 text-sm">{item.description}</p>
                                </div>
                                {idx < 3 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#feeb01]/50 to-transparent transform -translate-y-1/2"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="px-6 md:px-12 py-14">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-8">Why Choose Code Guardian?</h2>
                        <div className="space-y-4">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#feeb01] flex items-center justify-center">
                                        <svg className="w-3 h-3 text-[#0c1113]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-white text-lg">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#151a1b] border border-white/5 rounded-2xl p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-[#feeb01]/10 flex items-center justify-center text-[#feeb01] font-bold text-xl">⚡</div>
                            <div>
                                <h3 className="text-white font-semibold">Lightning Fast</h3>
                                <p className="text-slate-400 text-sm">Get results in seconds</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-[#feeb01]/10 flex items-center justify-center text-[#feeb01] font-bold text-xl">🔒</div>
                            <div>
                                <h3 className="text-white font-semibold">Secure & Private</h3>
                                <p className="text-slate-400 text-sm">Your code stays confidential</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#feeb01]/10 flex items-center justify-center text-[#feeb01] font-bold text-xl">🎯</div>
                            <div>
                                <h3 className="text-white font-semibold">Highly Accurate</h3>
                                <p className="text-slate-400 text-sm">AI-powered analysis engine</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 md:px-12 py-16 bg-gradient-to-r from-[#feeb01]/5 to-[#feeb01]/10 border border-[#feeb01]/20 rounded-3xl mx-6 md:mx-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to improve your code?</h2>
                    <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">Start with a free review today. No credit card required.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/playground" className="inline-flex items-center px-8 py-4 bg-[#feeb01] text-[#0c1113] font-semibold rounded-xl hover:shadow-lg hover:bg-yellow-300 transition-all">Get Started Free</a>
                        <a href="/contact" className="inline-flex items-center px-8 py-4 border border-[#feeb01] text-[#feeb01] font-semibold rounded-xl hover:bg-[#feeb01]/10 transition-all">Contact Sales</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
