"use client"
import React from 'react'

export default function NavBar2(){
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/new-home/logo.svg" alt="Relific" className="h-8 w-auto" />
        </div>
        <div className="flex items-center gap-4">
          {/* placeholder links - no links yet per request */}
          <nav className="hidden md:flex gap-6 text-sm text-slate-700">
            <span className="opacity-60">Product</span>
            <span className="opacity-60">Solutions</span>
            <span className="opacity-60">About</span>
            <span className="opacity-60">Pricing</span>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm rounded-md bg-indigo-600 text-white">Get a demo</button>
            <button className="hidden md:inline text-sm text-slate-600">Sign in</button>
          </div>
        </div>
      </div>
    </header>
  )
}
