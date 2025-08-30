import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-[88vh] flex items-center">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://my.spline.design/fintechcardlandingrevolutredesign-URUGf5vVU2SYivOMiGP85hlK/"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Radial black ripple and vignette overlays - do not block interaction */}
      <div className="pointer-events-none absolute inset-0">
        {/* Subtle ripple-like radial gradients */}
        <div className="absolute inset-0 opacity-70" style={{
          background: 'radial-gradient(1200px 600px at 50% 75%, rgba(0,0,0,0.9), rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)'
        }} />
        <div className="absolute inset-0 mix-blend-overlay opacity-40" style={{
          background: 'radial-gradient(800px 400px at 50% 85%, rgba(255,255,255,0.06), transparent 60%)'
        }} />
        {/* Soft vignette */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(1200px 1200px at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live FX protection • Real-time controls
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
            A glittering card on liquid black. Fintech, reimagined.
          </h1>
          <p className="mt-5 max-w-xl text-white/80 text-base sm:text-lg">
            Experience a glass-morphic credit card with instant security, dynamic limits, and programmatic payments. Built for modern teams and ambitious individuals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-white text-black hover:bg-white/90 transition shadow-lg shadow-white/10">
              Get your card
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center justify-center h-11 px-6 rounded-md border border-white/20 bg-white/5 hover:bg-white/10 transition">
              Explore dashboard
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
