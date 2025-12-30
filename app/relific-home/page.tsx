import React from 'react'
import NavBar2 from './NavBar2'
import ChatbotBubble from './ChatbotBubble'

export const metadata = {
  title: 'Relific — Home (New)'
}

export default function RelificHomePage(){
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <NavBar2 />
      <div className="pt-24">
        {/* Banner block */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">The most intelligent impact management platform. Period.</h1>
              <p className="text-lg text-slate-600">Replace spreadsheets, forms and other point solutions with Relific’s AI powered suite.</p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-md">Get started free</button>
                <button className="px-6 py-3 border rounded-md">Talk to sales</button>
              </div>
              <div className="flex items-center gap-6 mt-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-semibold">Zero coding</span>
                  <span className="text-sm text-slate-500">Configure forms, ETL and dashboards</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-semibold">10x impact</span>
                  <span className="text-sm text-slate-500">Deliver faster insights and decisions</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img src="/assets/new-home/banner_image.png" alt="banner" className="w-full max-w-lg rounded-xl shadow-xl" />
            </div>
          </div>
        </section>

        {/* Client logos scroll (use existing public assets clients) */}
        <section className="py-8 border-t">
          <div className="max-w-7xl mx-auto px-6">
            <div className="overflow-hidden">
              <div className="flex gap-8 items-center animate-marquee">
                <img src="/assets/clients/tata-trusts.jpg" alt="client" className="h-12 object-contain"/>
                <img src="/assets/clients/ECOAgri.jpg" alt="client" className="h-12 object-contain"/>
                <img src="/assets/clients/Kalike.jpg" alt="client" className="h-12 object-contain"/>
                <img src="/assets/clients/SGIF-Logo.jpg" alt="client" className="h-12 object-contain"/>
                <img src="/assets/clients/RAHINDIA-Logo.png" alt="client" className="h-12 object-contain"/>
                <img src="/assets/clients/tata-trusts.jpg" alt="client" className="h-12 object-contain"/>
              </div>
            </div>
          </div>
        </section>

        {/* Snapshot description block */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <img src="/assets/new-home/surver_snap.png" alt="Surve-R" className="mx-auto h-28 mb-4" />
              <h3 className="font-semibold">Surve-R</h3>
              <p className="text-sm text-slate-500">Field data collection, offline-first, geo-tagging and media.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <img src="/assets/new-home/driver_snap.png" alt="Drive-R" className="mx-auto h-28 mb-4" />
              <h3 className="font-semibold">Drive-R</h3>
              <p className="text-sm text-slate-500">Data integration, ETL and interactive analytics.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <img src="/assets/new-home/programs_snap.png" alt="ProGran" className="mx-auto h-28 mb-4" />
              <h3 className="font-semibold">ProGran</h3>
              <p className="text-sm text-slate-500">Programme & grant management with budget tracking.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <img src="/assets/new-home/volunteer_snap.png" alt="Volunteers" className="mx-auto h-28 mb-4" />
              <h3 className="font-semibold">Volunteer-R</h3>
              <p className="text-sm text-slate-500">Community and volunteer engagement tools.</p>
            </div>
          </div>
        </section>

        {/* Three ways section */}
        <section className="py-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">Three Ways We Can Give Your Impact Management Super Powers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <img src="/assets/new-home/threeways1.png" alt="three1" className="mb-4 w-full h-48 object-cover rounded" />
                <h3 className="font-semibold">Turn Static Documents into Live Programs</h3>
                <p className="text-sm text-slate-500 mt-2">Rapidly convert plans and templates into active program templates and workflows.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <img src="/assets/new-home/threeways2.png" alt="three2" className="mb-4 w-full h-48 object-cover rounded" />
                <h3 className="font-semibold">Build Complex Forms with a Simple Sentence</h3>
                <p className="text-sm text-slate-500 mt-2">Create sector-aware forms without engineering support.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <img src="/assets/new-home/threeways3.png" alt="three3" className="mb-4 w-full h-48 object-cover rounded" />
                <h3 className="font-semibold">Don’t Just Analyze Data. Chat With It.</h3>
                <p className="text-sm text-slate-500 mt-2">Conversational AI helps you explore insights and produce reports.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who is it for? */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">Who is it for?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <img src="/assets/new-home/whoisitrow1_1.png" alt="who row1" className="mb-4 h-40 w-full object-cover rounded" />
                <h3 className="font-semibold">NGOs & Non-profits</h3>
                <p className="text-sm text-slate-500 mt-2">End-to-end programme tracking and donor reporting.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <img src="/assets/new-home/whoisitrow1_2.png" alt="who row2" className="mb-4 h-40 w-full object-cover rounded" />
                <h3 className="font-semibold">CSR Teams</h3>
                <p className="text-sm text-slate-500 mt-2">Manage compliance, budgets and impact across partners.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <img src="/assets/new-home/whoisitrow1_3.png" alt="who row3" className="mb-4 h-40 w-full object-cover rounded" />
                <h3 className="font-semibold">Foundations & Donors</h3>
                <p className="text-sm text-slate-500 mt-2">Harmonize reporting and measure outcomes across grants.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Relific way (replicated) */}
        <section className="py-12 bg-indigo-50">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold">The Relific Way</h2>
              <p className="text-slate-600 mt-4">We combine sector expertise, AI-assisted workflows and a single data model to deliver impact fast.</p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>AI agents tuned for social impact use-cases</li>
                <li>End-to-end program lifecycle support</li>
                <li>Pre-built integrations and dashboards</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img src="/assets/new-home/relific_way.png" alt="Relific Way" className="rounded shadow max-w-full" />
            </div>
          </div>
        </section>

      </div>
      <ChatbotBubble />
      <style jsx>{`
        /* simple marquee animation */
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .animate-marquee { animation: marquee 18s linear infinite; }
      `}</style>
    </main>
  )
}
