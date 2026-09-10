import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  AlertTriangle,
  Terminal,
  Lock,
  Activity,
  Search,
} from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const SAMPLE_URLS = [
  { label: 'Legitimate Portal', url: 'https://github.com/features/security', type: 'safe' },
  { label: 'Bank Phish Simulation', url: 'http://192.168.0.1/verify-account-security-update.xyz', type: 'malicious' },
  { label: 'Crypto Giveaway Scam', url: 'http://free-eth-airdrop-claim-now.top/connect-wallet', type: 'malicious' },
  { label: 'Enterprise Docs', url: 'https://developer.mozilla.org/en-US/docs/Web', type: 'safe' },
];

// Human-readable labels for the real features the model actually used to
// decide, returned by the backend alongside every prediction.
const FEATURE_LABELS = {
  has_https: 'Uses HTTPS',
  has_ip: 'Host is a raw IP address',
  num_hyphens: 'Hyphens in URL',
  num_subdomains: 'Subdomain depth',
  contains_login: 'Contains "login"',
  contains_secure: 'Contains "secure"',
  contains_bank: 'Contains "bank"',
  url_length: 'URL length (chars)',
  domain_length: 'Domain length (chars)',
};

export default function URLChecker() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const checkURL = async (overrideUrl) => {
    const targetUrl = (overrideUrl || url).trim();
    if (!targetUrl) {
      setError('Please provide a URL string for inspection');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const response = await fetch(`${API_BASE}/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: targetUrl }),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || `Detection server returned ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(
        err.name === 'AbortError'
          ? 'The detection server took too long to respond. It may be waking up from sleep - please try again in a few seconds.'
          : err.message || 'Could not reach the detection server.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Search Bar Container */}
      <div className="terminal-card rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-700/60">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
          <Terminal className="w-5 h-5 text-radar-cyan" />
          <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
            URL Inspection Terminal
          </span>
          <span className="ml-auto flex items-center gap-1.5 text-xs text-radar-emerald font-mono">
            <span className="w-2 h-2 rounded-full bg-radar-emerald animate-pulse"></span>
            LIVE MODEL
          </span>
        </div>

        <div className="space-y-4">
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
            Target Destination URL
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && checkURL()}
                placeholder="https://example-portal.com/login"
                className="w-full pl-10 pr-4 py-3 bg-slate-950/90 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm font-mono focus:outline-none focus:border-radar-cyan transition-colors"
              />
            </div>
            <button
              onClick={() => checkURL()}
              disabled={loading}
              className="px-6 py-3 bg-radar-cyan hover:bg-cyan-400 text-slate-950 font-semibold rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-cyan-950/50"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                  <span>Inspecting...</span>
                </>
              ) : (
                <>
                  <Activity className="w-4 h-4" />
                  <span>Analyze URL</span>
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800 text-rose-300 text-xs font-mono flex items-center justify-between gap-3">
              <span>{error}</span>
              <button onClick={() => checkURL()} className="underline shrink-0">Retry</button>
            </div>
          )}

          {/* Quick Test Samples */}
          <div className="pt-2">
            <p className="text-xs text-slate-500 font-mono mb-2">QUICK TEST SAMPLES:</p>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_URLS.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setUrl(sample.url);
                    checkURL(sample.url);
                  }}
                  className={`text-xs px-3 py-1.5 rounded-lg border font-mono transition-all ${
                    sample.type === 'safe'
                      ? 'border-emerald-900/60 bg-emerald-950/20 text-emerald-400 hover:bg-emerald-900/40'
                      : 'border-rose-900/60 bg-rose-950/20 text-rose-400 hover:bg-rose-900/40'
                  }`}
                >
                  {sample.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Result Display */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className={`terminal-card rounded-2xl p-6 sm:p-8 border ${
            result.prediction === 'safe'
              ? 'border-emerald-700/50 bg-slate-900/90'
              : 'border-rose-700/60 bg-slate-900/90'
          }`}
        >
          {/* Header Verdict */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-2xl border ${
                  result.prediction === 'safe'
                    ? 'bg-emerald-950/50 border-emerald-700 text-emerald-400'
                    : 'bg-rose-950/50 border-rose-700 text-rose-400'
                }`}
              >
                {result.prediction === 'safe' ? (
                  <ShieldCheck className="w-8 h-8" />
                ) : (
                  <AlertTriangle className="w-8 h-8" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {result.prediction === 'safe' ? 'Verified Safe Destination' : 'Malicious Threat Detected'}
                  </h3>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-mono uppercase font-bold ${
                      result.prediction === 'safe'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                    }`}
                  >
                    {result.prediction.toUpperCase()}
                  </span>
                </div>
                <p className="text-xs font-mono text-slate-400 mt-1 break-all">
                  Target: {result.url}
                </p>
              </div>
            </div>

            {/* Score Pill */}
            <div className="text-left sm:text-right font-mono">
              <p className="text-xs text-slate-400">MODEL CONFIDENCE</p>
              <p
                className={`text-3xl font-extrabold ${
                  result.prediction === 'safe' ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {(result.confidence * 100).toFixed(1)}%
              </p>
            </div>
          </div>

          {/* Real extracted features that fed the model's decision */}
          {result.features && (
            <div className="mt-6">
              <h4 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-3">
                Features Used By The Model
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.entries(FEATURE_LABELS).map(([key, label]) => (
                  <div key={key} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <p className="text-[10px] text-slate-500 font-mono uppercase">{label}</p>
                    <p className="text-sm font-mono font-semibold text-slate-200 mt-1">
                      {typeof result.features[key] === 'number' && (key === 'has_https' || key === 'has_ip')
                        ? (result.features[key] ? 'Yes' : 'No')
                        : String(result.features[key])}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-500 font-mono mt-3 flex items-center gap-1.5">
                <Lock className="w-3 h-3" /> Classified by a decision tree trained on ~550k labeled URLs
              </p>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
