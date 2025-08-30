import React from 'react';
import { CreditCard } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-white/10 border border-white/10">
            <CreditCard className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold tracking-tight">RipplePay</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#security" className="hover:text-white transition">Security</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 px-4 rounded-md border border-white/15 bg-white/5 hover:bg-white/10 transition">Sign in</button>
          <button className="inline-flex h-9 px-4 rounded-md bg-white text-black hover:bg-white/90 transition">Get started</button>
        </div>
      </div>
    </header>
  );
}
