import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-white/70">© {new Date().getFullYear()} RipplePay, Inc. All rights reserved.</p>
            <p className="text-xs text-white/50 mt-1">Futuristic, digital, corporate, minimalistic.</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
