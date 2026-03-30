import React from 'react';
import { Bot, Shield, Lightbulb, Globe, Zap, CheckCircle, FileText, Search, BarChart3, Sparkles, Bug, TrendingUp, Book, Clock, Lock, Target } from 'lucide-react';

export default function Landing() {
    const features = [
        {
            icon: <Bot className="w-6 h-6 text-[#feeb01]" />,
            title: "AI Code Review",
            description: "Automated reviews that highlight issues and improvement suggestions."
        },
        {
            icon: <Shield className="w-6 h-6 text-[#feeb01]" />,
            title: "Security Checks",
            description: "Find vulnerabilities and insecure patterns instantly."
        },
        {
            icon: <Lightbulb className="w-6 h-6 text-[#feeb01]" />,
            title: "Actionable Suggestions",
            description: "Clear steps and code snippets to fix problems fast."
        },
        {
            icon: <Globe className="w-6 h-6 text-[#feeb01]" />,
            title: "Multiple Languages",
            description: "JavaScript, Python, Java, Go, Rust, C++, and more."
        },
        {
            icon: <Zap className="w-6 h-6 text-[#feeb01]" />,
            title: "Performance Analysis",
            description: "Identify bottlenecks and optimization opportunities."
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-[#feeb01]" />,
            title: "Best Practices",
            description: "Industry standards and modern coding conventions."
        }
    ];

    const howItWorks = [
        {
            icon: <FileText className="w-5 h-5 text-[#feeb01]" />,
            step: "1",
            title: "Paste Code",
            description: "Paste any code snippet into the playground"
        },
        {
            icon: <Search className="w-5 h-5 text-[#feeb01]" />,
            step: "2",
            title: "Analyze",
            description: "Our AI engine reviews in seconds"
        },
        {
            icon: <BarChart3 className="w-5 h-5 text-[#feeb01]" />,
            step: "3",
            title: "Review",
            description: "Get detailed reports with issues"
        },
        {
            icon: <Sparkles className="w-5 h-5 text-[#feeb01]" />,
            step: "4",
            title: "Apply Fixes",
            description: "Use suggested improvements immediately"
        }
    ];

    const benefits = [
        { icon: <Bug className="w-5 h-5 text-[#feeb01]" />, text: "Catch bugs before production" },
        { icon: <Shield className="w-5 h-5 text-[#feeb01]" />, text: "Reduce security vulnerabilities" },
        { icon: <TrendingUp className="w-5 h-5 text-[#feeb01]" />, text: "Improve code quality" },
        { icon: <Zap className="w-5 h-5 text-[#feeb01]" />, text: "Speed up code reviews" }
    ];

    return (
        <div className="space-y-12">
            {/* Hero */}
            <section className="px-6 md:px-12 py-12 bg-transparent">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                            Paste your code. Get instant, actionable reviews.
                        </h1>
                        <p className="text-slate-400 text-base mb-6 leading-relaxed">
                            Code Guardian analyzes your code with AI to find bugs, security issues, and style problems with clear fixes you can act on immediately.
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <a href="/playground" className="inline-flex items-center px-6 py-2 bg-[#feeb01] text-[#0c1113] font-semibold rounded-lg hover:bg-yellow-300 transition-all text-base">Try Playground</a>
                            <a href="/docs" className="text-base text-slate-400 hover:text-[#feeb01] transition-colors">Read docs →</a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <img
                            src="https://i.pinimg.com/736x/fb/26/c7/fb26c7cfac77d8a4d018b397bb7f6c99.jpg"
                            alt="developer working"
                            className="rounded-lg w-full max-w-sm h-80 object-cover shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="px-6 md:px-12 py-8 bg-[#141b1b]/30 border-y border-white/6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div>
                        <p className="text-3xl font-bold text-[#feeb01]">1000+</p>
                        <p className="text-slate-400 text-sm mt-1">Reviews</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-[#feeb01]">50k+</p>
                        <p className="text-slate-400 text-sm mt-1">Issues Fixed</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-[#feeb01]">98%</p>
                        <p className="text-slate-400 text-sm mt-1">Satisfaction</p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="px-6 md:px-12 py-12">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">Powerful Features</h2>
                        <p className="text-slate-400 text-base">Everything for professional code reviews</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {features.map((feature, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-[#141b1b] border border-white/6 hover:border-[#feeb01]/30 transition-all">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-base text-white font-semibold">{feature.title}</h4>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="px-6 md:px-12 py-12 bg-[#0a0f10]/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">How It Works</h2>
                        <p className="text-slate-400 text-base">4 simple steps</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {howItWorks.map((item, idx) => (
                            <div key={idx} className="relative">
                                <div className="bg-[#141b1b] border border-white/6 rounded-2xl p-6 h-full">
                                    <div className="w-8 h-8 rounded-full bg-[#feeb01] text-[#0c1113] font-bold flex items-center justify-center text-xs mb-3">{item.step}</div>
                                    <h3 className="text-white font-semibold text-base mb-1">{item.title}</h3>
                                    <p className="text-slate-400 text-sm">{item.description}</p>
                                </div>
                                {idx < 3 && <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-[#feeb01]/50 to-transparent transform -translate-y-1/2"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="px-6 md:px-12 py-12">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose Code Guardian?</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Benefits List */}
                        <div className="space-y-3">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="flex-shrink-0">
                                        {benefit.icon}
                                    </div>
                                    <span className="text-white text-base">{benefit.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Trust Box */}
                        <div className="bg-[#141b1b] border border-white/6 rounded-2xl p-6 space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[#feeb01]/10 flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-[#feeb01]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-base">Lightning Fast</h3>
                                    <p className="text-slate-400 text-sm">Results in seconds</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[#feeb01]/10 flex items-center justify-center">
                                    <Lock className="w-5 h-5 text-[#feeb01]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-base">Secure & Private</h3>
                                    <p className="text-slate-400 text-sm">Your code stays confidential</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[#feeb01]/10 flex items-center justify-center">
                                    <Target className="w-5 h-5 text-[#feeb01]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-base">Highly Accurate</h3>
                                    <p className="text-slate-400 text-sm">AI-powered analysis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 md:px-12 py-10 bg-gradient-to-r from-[#feeb01]/5 to-[#feeb01]/10 border border-[#feeb01]/20 rounded-2xl mx-6 md:mx-12">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">Ready to improve your code?</h2>
                    <p className="text-slate-400 text-base mb-5">Start with a free review. No credit card required.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href="/playground" className="inline-flex items-center px-6 py-2 bg-[#feeb01] text-[#0c1113] font-semibold rounded-lg hover:bg-yellow-300 transition-all text-base">Get Started Free</a>
                        <a href="/contact" className="inline-flex items-center px-6 py-2 border border-[#feeb01] text-[#feeb01] font-semibold rounded-lg hover:bg-[#feeb01]/10 transition-all text-base">Contact Sales</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
