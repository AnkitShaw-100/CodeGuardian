import React, { useState } from 'react'
import { useUser, useAuth, SignInButton } from '@clerk/clerk-react'

function prettifyCode(raw) {
    // Very lightweight prettifier: simple brace-based indentation for C-like languages
    const lines = raw.replace(/\t/g, '    ').split('\n')
    let level = 0
    const out = []

    for (let rawLine of lines) {
        const line = rawLine.trim()
        if (line === '') { out.push(''); continue }

        // decrease indent if line starts with a closing brace
        if (/^[})\]]/.test(line)) {
            level = Math.max(0, level - 1)
        }

        out.push('    '.repeat(level) + line)

        // increase indent if line ends with an opening brace
        if (/[{([]$/.test(line) && !/\)\s*;?$/.test(line)) {
            level += 1
        }
    }

    return out.join('\n')
}

function renderReview(data) {
    if (!data) return null
    if (typeof data === 'string') {
        // split into paragraphs for readability
        return data.split(/\n\s*\n/).map((p, i) => <p key={i} className="mb-3 text-slate-200">{p}</p>)
    }

    // if object, look for common fields
    const parts = []
    if (data.summary) parts.push(<div key="sum" className="mb-3"><h4 className="mb-2">Summary</h4><div className="text-slate-200">{data.summary}</div></div>)
    if (data.suggestions) parts.push(
        <div key="sug" className="mb-3">
            <h4 className="mb-2">Suggestions</h4>
            <ul className="list-disc list-inside text-slate-200">
                {data.suggestions.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
        </div>
    )
    if (data.issues && Array.isArray(data.issues)) parts.push(
        <div key="issues" className="mb-3">
            <h4 className="mb-2">Issues</h4>
            <div className="space-y-3">
                {data.issues.map((it, i) => (
                    <div key={i} className="p-3 bg-[#141b1b] rounded-md border border-white/6 hover:border-[#feeb01]/30 transition-all">
                        <div className="flex items-start justify-between">
                            <div className="text-sm font-semibold text-white">{it.title || it.message || `Issue ${i + 1}`}</div>
                            <div className="text-xs text-slate-400">{it.severity || it.level || ''} {it.line ? `· line ${it.line}` : ''}</div>
                        </div>
                        {it.excerpt && <pre className="mt-2 text-sm text-slate-200 whitespace-pre-wrap">{it.excerpt}</pre>}
                        {it.suggestion && <div className="mt-2 text-slate-200">Suggestion: {it.suggestion}</div>}
                    </div>
                ))}
            </div>
        </div>
    )

    if (parts.length === 0) {
        return <pre className="whitespace-pre-wrap text-sm text-slate-200">{JSON.stringify(data, null, 2)}</pre>
    }

    return parts
}

export default function Playground() {
    const [code, setCode] = useState(`// Paste code here to review\nfunction hello(){\n  console.log('Hello world')\n}`)
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)
    const { isSignedIn } = useUser()
    const { getToken } = useAuth()

    async function runReview() {
        if (!isSignedIn) return
        setLoading(true)
        setError(null)
        setResult(null)
        try {
            const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'
            const token = await getToken()
            const res = await fetch(`${base}/ai/review-code`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify({ code })
            })

            const json = await res.json()
            if (!res.ok || !json.success) {
                setError(json.message || 'Review failed')
            } else {
                setResult(json.data)
            }
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const pretty = prettifyCode(code)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-6 py-8 min-h-[80vh]">
            {/* Editor (left) */}
            <div className="bg-[#141b1b] rounded-2xl p-4 border border-white/6 h-full flex flex-col hover:border-[#feeb01]/30 transition-all">
                <div className="flex items-center justify-between mb-3 text-slate-400">
                    <div className="font-semibold">Playground</div>
                </div>

                <textarea
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    className="w-full flex-1 min-h-[40vh] resize-none bg-[#081018] p-3 rounded-md text-sm font-mono border border-white/6 text-slate-100"
                />

                <div className="mt-3 grid grid-cols-2 gap-3">
                    {isSignedIn ? (
                        <button onClick={runReview} className={"inline-flex items-center justify-center w-full px-5 py-3 bg-[#feeb01] text-[#0c1113] font-semibold rounded-lg shadow active:opacity-90"} disabled={loading}>
                            {loading ? 'Running…' : 'Run Review'}
                        </button>
                    ) : (
                        <SignInButton mode="modal">
                            <button className={"inline-flex items-center justify-center w-full px-5 py-3 bg-[#feeb01] text-[#0c1113] font-semibold rounded-lg shadow"}>Sign in to Run</button>
                        </SignInButton>
                    )}

                    <button onClick={() => setCode(pretty)} className={"inline-flex items-center justify-center w-full px-5 py-3 bg-transparent border border-white/6 text-slate-200 rounded-lg"}>
                        Format Code
                    </button>
                </div>

                {error && <div className="mt-4 text-red-400">{error}</div>}
            </div>

            {/* Review (right) */}
            <div className="bg-[#141b1b] rounded-2xl p-4 border border-white/6 h-full flex flex-col hover:border-[#feeb01]/30 transition-all">
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <h3 className="text-lg font-semibold text-white">Review</h3>
                        <p className="text-sm text-slate-400">Structured review output appears here.</p>
                    </div>
                    <div className="text-sm text-slate-400">Status: {loading ? 'Running' : (result ? 'Done' : 'Idle')}</div>
                </div>

                <div className="flex-1 overflow-auto max-h-[60vh] modern-scrollbar">
                    {result ? (
                        <div className="space-y-4">
                            {renderReview(result)}
                        </div>
                    ) : (
                        <div className="text-slate-300">No review yet — paste code on the left and click <strong>Run Review</strong>.</div>
                    )}
                </div>
            </div>
        </div>
    )
}
