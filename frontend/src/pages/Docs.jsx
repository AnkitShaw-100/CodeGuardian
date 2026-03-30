import React, { useMemo, useState } from 'react'

const SECTIONS = [
  {
    id: 'overview',
    title: 'Overview',
    body: `Code Guardian is an AI-powered code review assistant that finds bugs, surfaces best-practices, and suggests improvements. Review single files in the Playground or integrate programmatically via the API.`
  },
  {
    id: 'getting-started',
    title: 'Getting started',
    body: `Open the Playground, paste your code, and click 'Run review'. Use the Report page to inspect findings, add comments, and export results.`
  },
  {
    id: 'playground',
    title: 'Playground',
    body: `The Playground runs a full AI review and returns categorized findings (bug, security, style, complexity). You can iterate locally before committing changes.`
  },
  {
    id: 'best-practices',
    title: 'Best practices',
    body: `Run checks on pull requests, prioritize high-severity issues, and add review suggestions as automated comments in your PR flows.`
  },
  {
    id: 'faq',
    title: 'FAQ & Troubleshooting',
    body: `Common issues and tips for using Code Guardian effectively.`
  }
]

export default function Docs() {
  const [active, setActive] = useState('overview')
  const [query] = useState('')

  const filtered = useMemo(() => {
    if (!query.trim()) return SECTIONS
    const q = query.toLowerCase()
    return SECTIONS.filter(s => s.title.toLowerCase().includes(q) || s.body.toLowerCase().includes(q))
  }, [query])

  const activeSection = SECTIONS.find(s => s.id === active) || SECTIONS[0]

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 min-h-[80vh]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <div className="sticky top-10 space-y-4">
            <h2 className="text-2xl font-bold text-white">Documentation</h2>
            <p className="text-slate-400 text-sm">Everything you need to get the most out of Code Guardian.</p>

            <nav className="mt-2 flex flex-col gap-2">
              {filtered.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActive(section.id)}
                  className={`text-left px-4 py-3 rounded-md w-full ${active === section.id ? 'bg-[#feeb01] text-[#0c1113] font-semibold' : 'text-slate-300 hover:bg-[#071014]'}`}>
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <main className="md:col-span-3 bg-[#141b1b] border border-white/6 rounded-2xl p-6 text-slate-300 min-h-[70vh] hover:border-[#feeb01]/30 transition-all">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-3xl text-white font-extrabold mb-2">{activeSection.title}</h3>
              <p className="text-slate-400 max-w-prose">{activeSection.body}</p>
            </div>
            <div className="hidden md:block">
              <div className="text-sm text-slate-400">Version</div>
              <div className="mt-1 font-semibold text-white">v1.0.0</div>
            </div>
          </div>

          <div className="mt-6 space-y-6">
            {activeSection.id === 'overview' && (
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4">
                  <h4 className="text-white font-semibold mb-2">What Code Guardian does</h4>
                  <ul className="list-disc ml-5 text-slate-300 space-y-1">
                    <li>Finds bugs and anti-patterns</li>
                    <li>Suggests fixes and code improvements</li>
                    <li>Highlights security and performance issues</li>
                    <li>Integrates with CI and PR workflows</li>
                  </ul>
                </div>

                <div className="p-4">
                  <h4 className="text-white font-semibold mb-2">Use cases</h4>
                  <p className="text-slate-300">From quick single-file checks to automated PR pipelines, Code Guardian adapts to your workflow.</p>
                </div>
              </section>
            )}

            {activeSection.id === 'getting-started' && (
              <section>
                <h4 className="text-white font-semibold mb-2">Quick start</h4>
                <ol className="list-decimal ml-5 text-slate-300 space-y-2">
                  <li>Open the <strong>Playground</strong>.</li>
                  <li>Paste a file or snippet and click <em>Run review</em>.</li>
                  <li>Inspect categorized findings in the Report page.</li>
                </ol>

                <h5 className="mt-4 text-white font-semibold">Example</h5>
                <pre className="bg-[#141b1b] p-4 rounded-md text-sm font-mono text-slate-300 mt-2">{`// example.js
function greet(name) {
  console.log('Hello, ' + name)
}`}</pre>
              </section>
            )}

            {activeSection.id === 'playground' && (
              <section>
                <h4 className="text-white font-semibold mb-2">Playground tips</h4>
                <ul className="list-disc ml-5 text-slate-300 space-y-2">
                  <li>Include related helper functions for better context.</li>
                  <li>For large files, focus on specific functions to get concise results.</li>
                  <li>Use the 'Export' action in Report to save findings.</li>
                </ul>
              </section>
            )}

            {activeSection.id === 'best-practices' && (
              <section>
                <h4 className="text-white font-semibold mb-2">Best practices</h4>
                <ul className="list-disc ml-5 text-slate-300 space-y-2">
                  <li>Run reviews on PRs and require fixes for high-severity findings.</li>
                  <li>Use code suggestions as a developer aid — verify automated fixes manually.</li>
                </ul>
              </section>
            )}

            {activeSection.id === 'faq' && (
              <section>
                <h4 className="text-white font-semibold mb-2">FAQ</h4>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-white">Why is an item marked as security?</div>
                    <div className="text-slate-300">We classify patterns that may introduce vulnerabilities (e.g., unsanitized inputs) as security-related.</div>
                  </div>

                  <div>
                    <div className="font-semibold text-white">How to reduce noise?</div>
                    <div className="text-slate-300">Focus reviews on smaller diffs, and tune your CI integration to run only on changed files.</div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
