import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import URLChecker from '../components/URLChecker';
import { 
  ShieldAlert, 
  Cpu, 
  Terminal, 
  Lock, 
  Activity, 
  Database, 
  CheckCircle2, 
  ArrowRight,
  Fingerprint
} from 'lucide-react';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Banner / Status Ticker */}
      <div className="border-b border-slate-800/80 bg-slate-900/50 py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-slate-300 font-semibold">MODEL CORE:</span>
            <span>Decision Tree (549,346 Validated Records)</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>VECTOR COVERAGE: 18 FEATURES</span>
            <span className="text-radar-cyan font-semibold">STATUS: SECURE</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Technical Manifesto */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-800/60 text-cyan-400 text-xs font-mono">
                <Terminal className="w-3.5 h-3.5" />
                DEFENSIVE CYBER INTELLIGENCE
              </div>

              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Deterministic URL Threat Discovery
              </h1>

              <p className="text-base text-slate-400 leading-relaxed">
                PhishGuard executes multi-vector heuristic and ML feature extractions on inbound links before your browser touches untrusted payloads. Stop credential harvesters, typo-squatting, and zero-day redirection paths.
              </p>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-2xl font-bold font-mono text-white">89.8%</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">Decision Tree Accuracy</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-2xl font-bold font-mono text-radar-cyan">18 Vectors</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">Live Feature Extraction</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {user ? (
                  <Link
                    to="/dashboard"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-radar-cyan hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all"
                  >
                    <span>Open Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <Link
                    to="/signup"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-radar-cyan hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all"
                  >
                    <span>Deploy Protection</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
                <a
                  href="#vectors"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-sm font-medium transition-all"
                >
                  Inspect Detection Vectors
                </a>
              </div>
            </motion.div>

            {/* Right Column: Live Interactive URL Scanner Terminal */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-7"
            >
              <URLChecker />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vector Bento Grid */}
      <section id="vectors" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-900/30">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-xs font-mono text-radar-cyan tracking-widest uppercase">Telemetry Architecture</h2>
            <p className="text-3xl font-bold text-white mt-1">Multi-Stage Feature Extraction</p>
            <p className="text-slate-400 text-sm mt-2">
              Every analyzed destination is dissected across lexical, structural, and cryptographic parameters without executing unsafe scripts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="terminal-card-interactive p-6 rounded-2xl border border-slate-800">
              <div className="p-3 rounded-xl bg-slate-800/60 text-radar-cyan w-fit mb-4">
                <Fingerprint className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Lexical & Entropy Analysis</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                Calculates Shannon entropy across URI tokens, detecting algorithmic generation domains (DGA) and brand impersonation permutations.
              </p>
            </div>

            <div className="terminal-card-interactive p-6 rounded-2xl border border-slate-800">
              <div className="p-3 rounded-xl bg-slate-800/60 text-emerald-400 w-fit mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Cryptographic Protocol Verification</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                Inspects transport security headers, certificate authority hierarchies, and port redirection strategies utilized to bypass enterprise firewalls.
              </p>
            </div>

            <div className="terminal-card-interactive p-6 rounded-2xl border border-slate-800">
              <div className="p-3 rounded-xl bg-slate-800/60 text-amber-400 w-fit mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Tree-Based ML Decision Weights</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                Evaluates branch conditions across 18 engineered features to yield binary classification and calibrated probability confidence intervals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
