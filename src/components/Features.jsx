import React from 'react';
import { Shield, Zap, Smartphone, CreditCard } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Glass-morphic design',
    desc: 'A futuristic 3D card with pristine edges and depth, engineered for clarity and control.'
  },
  {
    icon: Shield,
    title: 'Instant security',
    desc: 'Freeze, set limits, and create virtual cards in real time with programmatic rules.'
  },
  {
    icon: Zap,
    title: 'Lightning-fast settle',
    desc: 'Optimized rails for fast authorization and settlement with minimal latency.'
  },
  {
    icon: Smartphone,
    title: 'Native mobile controls',
    desc: 'Biometric approvals, push alerts, and device-level risk assessment, all in-app.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28 bg-black">
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(600px 300px at 80% 10%, rgba(120,120,255,0.08), transparent 60%)'
      }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">Built for modern finance teams</h2>
          <p className="mt-3 text-white/70">Minimal, digital, and secure by default. APIs for automation, controls for peace of mind.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:bg-white/10 transition">
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition" style={{
                background: 'radial-gradient(300px 120px at 50% 0%, rgba(255,255,255,0.12), transparent 70%)'
              }} />
              <div className="relative">
                <div className="h-10 w-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="security" className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-semibold">Enterprise-grade protection</h4>
              <p className="mt-1 text-white/70">ISO 27001 controls, tokenized PANs, device attestation, and granular roles.</p>
            </div>
            <button className="inline-flex h-10 px-5 rounded-md border border-white/20 bg-white/5 hover:bg-white/10 transition">Read the whitepaper</button>
          </div>
        </div>
      </div>
    </section>
  );
}
