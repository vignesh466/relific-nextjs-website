import React from 'react'
import NavBar2 from './NavBar2'
import ChatbotBubble from './ChatbotBubble'

export const metadata = {
  title: 'Relific — The most intelligent impact management platform',
  description: 'Replace spreadsheets, forms and other point solutions with Relific\'s AI powered suite.'
}

export default function RelificHomePage(){
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <NavBar2 />
      <div className="pt-20">
        {/* Hero Banner Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                  The most intelligent impact management platform. Period.
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                  Replace spreadsheets, forms and other point solutions with Relific's AI powered suite.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
                    Get started free
                  </button>
                  <button className="px-8 py-3 border-2 border-slate-300 hover:border-slate-400 text-slate-700 font-medium rounded-lg transition-colors">
                    Talk to sales
                  </button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <picture>
                  <source media="(max-width: 768px)" srcSet="/assets/new-home/banner_image2.png" />
                  <img 
                    src="/assets/new-home/banner_image.png" 
                    alt="Relific Platform Dashboard" 
                    className="w-full max-w-2xl drop-shadow-2xl"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted by logos */}
        <section className="py-12 border-y border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-center items-center flex-wrap gap-8 md:gap-12 opacity-60 grayscale">
              <img src="/assets/clients/tata-trusts.jpg" alt="Tata Trusts" className="h-10 object-contain"/>
              <img src="/assets/clients/ECOAgri.jpg" alt="ECOAgri" className="h-10 object-contain"/>
              <img src="/assets/clients/Kalike.jpg" alt="Kalike" className="h-10 object-contain"/>
              <img src="/assets/clients/SGIF-Logo.jpg" alt="SGIF" className="h-10 object-contain"/>
              <img src="/assets/clients/RAHINDIA-Logo.png" alt="RAH India" className="h-10 object-contain"/>
              <img src="/assets/clients/sehgal.png" alt="Sehgal" className="h-10 object-contain"/>
            </div>
          </div>
        </section>

        {/* Value Prop Section */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Replace spreadsheets, forms and other<br className="hidden md:block" /> point solutions with Relific's AI powered suite.
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                One fully integrated, designed with AI-first approach so that you can collect and analyze insights simply at scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <img src="/assets/new-home/surver_snap.png" alt="Surve-R" className="w-full h-48 object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Surve-R</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Field data collection with offline-first capabilities, geo-tagging, and rich media support.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <img src="/assets/new-home/driver_snap.png" alt="Drive-R" className="w-full h-48 object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Drive-R</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Unified data integration, ETL pipelines, and interactive analytics dashboards.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <img src="/assets/new-home/programs_snap.png" alt="ProGran" className="w-full h-48 object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">ProGran</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Programme and grant management with comprehensive budget tracking and reporting.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <img src="/assets/new-home/volunteer_snap.png" alt="Volunteer-R" className="w-full h-48 object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Volunteer-R</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Community engagement and volunteer coordination made simple and scalable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet AI-R CTA */}
        <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Meet AI-R, our team of AI agents that are industry experts
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              It is an AI-enabled toolkit to help speed things up for everyone in your organization, to get insights and 
              reports at speed so that you can focus on driving the right actions by right people to build a better world.
            </p>
            <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
              Learn more
            </button>
          </div>
        </section>

        {/* 30 Days Achievement Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
              Here's what you can achieve with<br className="hidden md:block" /> Relific in just 30 days.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Week 1</h3>
                <p className="text-slate-700">
                  Set up your organization, define programs, configure forms, and onboard your team members with ease.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Week 2</h3>
                <p className="text-slate-700">
                  Start collecting data from the field, integrate existing data sources, and build your first dashboards.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Week 4</h3>
                <p className="text-slate-700">
                  Generate compliance reports, analyze program outcomes, and make data-driven decisions confidently.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-slate-600 italic">
                [switch to Relific. On-production in 2-3 weeks. Say quarters!]
              </p>
            </div>
          </div>
        </section>

        {/* Three Ways Section - Dark theme */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Three Ways We Can Give Your Impact<br className="hidden md:block" /> Management Super Powers
              </h2>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-2">
                Learn more →
              </a>
            </div>

            <div className="space-y-16 mt-16">
              {/* Way 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Turn Static Documents Into<br className="hidden md:block" /> Live Program Industries
                  </h3>
                  <p className="text-slate-300 text-lg mb-6">
                    Upload project plans, RFPs, ToRs and concept notes. AI-R analyses them and suggests program structures, 
                    indicators, and baseline questions—dramatically cutting planning time.
                  </p>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-2">
                    Learn more →
                  </a>
                </div>
                <div className="bg-slate-800 rounded-xl p-4">
                  <img 
                    src="/assets/new-home/threeways1.png" 
                    alt="Turn Documents into Programs" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>

              {/* Way 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 bg-slate-800 rounded-xl p-4">
                  <img 
                    src="/assets/new-home/threeways2.png" 
                    alt="Build Complex Forms" 
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Build Complex Forms with a<br className="hidden md:block" /> Simple Sentence
                  </h3>
                  <p className="text-slate-300 text-lg mb-6">
                    Describe what you need in plain language and AI-R creates comprehensive, sector-aware forms with proper 
                    validations, skip logic, and translations—no technical expertise required.
                  </p>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-2">
                    Learn more →
                  </a>
                </div>
              </div>

              {/* Way 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Don't Just Analyze Data.<br className="hidden md:block" /> Chat With It.
                  </h3>
                  <p className="text-slate-300 text-lg mb-6">
                    Ask questions in natural language and get instant insights. AI-R understands your program context and 
                    helps you explore data, identify trends, and generate reports conversationally.
                  </p>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-2">
                    Learn more →
                  </a>
                </div>
                <div className="bg-slate-800 rounded-xl p-4">
                  <img 
                    src="/assets/new-home/threeways3.png" 
                    alt="Chat with Data" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who is it for? */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Who is it for?</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                For everyone from NGOs, government agencies, CSR teams to impact investors and<br className="hidden md:block" /> 
                Research organisations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Row 1 */}
              <div className="bg-slate-50 rounded-xl p-8">
                <div className="mb-6">
                  <img 
                    src="/assets/new-home/whoisitrow1_1.png" 
                    alt="Field Strategic Control" 
                    className="w-full rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Field Strategic Control</h3>
                <p className="text-slate-600">
                  Map out complex, multi-year initiatives. Track milestones, manage budgets, and report against frameworks 
                  like SDGs and IRIS+ with built-in compliance.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-8">
                <div className="mb-6">
                  <img 
                    src="/assets/new-home/whoisitrow1_2.png" 
                    alt="Your Impact Operations Partner" 
                    className="w-full rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Your Impact Operations Partner</h3>
                <p className="text-slate-600">
                  Coordinate field teams, implementing partners, and volunteers from one platform. Automate workflows, 
                  manage tasks, and keep everyone aligned.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Row 2 */}
              <div className="bg-slate-50 rounded-xl p-8">
                <div className="mb-6">
                  <img 
                    src="/assets/new-home/whoisitrow2_1.png" 
                    alt="Eliminate Information Flow" 
                    className="w-full rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Eliminate Information Flow</h3>
                <p className="text-slate-600">
                  Connect data from mobile apps, IoT sensors, ERPs, and spreadsheets. Harmonize and analyze everything 
                  in one place without manual reconciliation.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-8">
                <div className="mb-6">
                  <img 
                    src="/assets/new-home/whoisitrow2_2.png" 
                    alt="Operate everywhere" 
                    className="w-full rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Operate everywhere</h3>
                <p className="text-slate-600">
                  Work offline in remote areas. Sync when connectivity returns. Multi-language support and role-based 
                  access ensure security and usability across diverse teams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Relific Way */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">The Relific Way</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We combine sector expertise, AI-assisted workflows and a single unified data model to help you 
                deliver impact at scale, faster than ever before.
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <img 
                src="/assets/new-home/relific_way.png" 
                alt="The Relific Way Diagram" 
                className="max-w-2xl w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-2 text-slate-900">Simple to start</h4>
                <p className="text-slate-600 text-sm">
                  Get started in days, not months. Pre-built templates and AI assistance mean zero coding required.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-2 text-slate-900">Sector expertise</h4>
                <p className="text-slate-600 text-sm">
                  Built-in best practices for agriculture, education, health, livelihoods, and climate programs.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-2 text-slate-900">AI-augmented</h4>
                <p className="text-slate-600 text-sm">
                  Intelligent agents help with everything from form creation to insight generation and reporting.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-2 text-slate-900">Fully integrated</h4>
                <p className="text-slate-600 text-sm">
                  One platform for data collection, analysis, program management, and compliance reporting.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
                Explore the Relific Way
              </button>
            </div>
          </div>
        </section>

        {/* Trusted by Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Trusted by Visionaries in the Social Sector.
            </h2>
            <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
              From grassroots NGOs to large foundations, Relific powers impact programs across sectors and geographies. 
              Our clients trust us to handle their most critical data and reporting needs.
            </p>
            <div className="flex justify-center items-center flex-wrap gap-8 md:gap-12 opacity-70">
              <img src="/assets/clients/tata-trusts.jpg" alt="Tata Trusts" className="h-12 object-contain grayscale"/>
              <img src="/assets/clients/ECOAgri.jpg" alt="ECOAgri" className="h-12 object-contain grayscale"/>
              <img src="/assets/clients/Kalike.jpg" alt="Kalike" className="h-12 object-contain grayscale"/>
              <img src="/assets/clients/SGIF-Logo.jpg" alt="SGIF" className="h-12 object-contain grayscale"/>
              <img src="/assets/clients/RAHINDIA-Logo.png" alt="RAH India" className="h-12 object-contain grayscale"/>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get AI-Starling from Week 1
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Get the support you need to launch and learn with 2-weeks of free expert<br className="hidden md:block" /> 
              consulting (Rs.6 Lakh in value) when you become a Relific customer.
            </p>
            <button className="px-10 py-4 bg-white text-indigo-600 hover:bg-slate-100 font-semibold rounded-lg transition-colors text-lg">
              Get a demo
            </button>
          </div>
        </section>

      </div>
      <ChatbotBubble />
    </main>
  )
}
