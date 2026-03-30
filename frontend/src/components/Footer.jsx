import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-black text-slate-300">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="w-11 h-11 rounded-full bg-[#0c1113] text-[#feeb01] flex items-center justify-center font-semibold">CG</span>
                            <div>
                                <h3 className="text-white text-lg font-semibold">Code Guardian</h3>
                                <p className="text-sm text-slate-400">Personal code reviews, made simple.</p>
                            </div>
                        </div>

                        <p className="text-sm text-slate-400 max-w-xl">Track code quality, spot security issues, and get AI-driven suggestions so your team ships with confidence. Designed for developers and teams who value clarity and speed.</p>
                    </div>

                    <div>
                        <h4 className="text-sm text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><a href="/" className="hover:text-[#feeb01]">Home</a></li>
                            <li><a href="/playground" className="hover:text-[#feeb01]">Playground</a></li>
                            <li><a href="/report" className="hover:text-[#feeb01]">Reports</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><a href="/docs" className="hover:text-[#feeb01]">Docs</a></li>
                            <li><a href="/terms" className="hover:text-[#feeb01]">Terms</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
                    <div>© {year} Code Guardian — Built with care for developers.</div>

                    <div className="flex items-center gap-6 mt-3 md:mt-0">
                        <a href="/terms" className="hover:text-[#feeb01]">Terms</a>
                        <a href="/privacy" className="hover:text-[#feeb01]">Privacy</a>
                        <a href="/contact" className="hover:text-[#feeb01]">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
