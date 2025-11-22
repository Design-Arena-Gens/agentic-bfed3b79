import Image from 'next/image'

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-white" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 ring-1 ring-brand-200">
                New: AquaFlow Pro
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Industrial water pump, reimagined for efficiency
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Cut energy costs by up to 30% with our smart-controlled, corrosion-resistant pump engineered for 24/7 uptime in the harshest environments.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-brand-600 px-6 py-3 text-white shadow-sm transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  Get a quote
                </a>
                <a
                  href="#specs"
                  className="inline-flex items-center justify-center rounded-md px-6 py-3 text-brand-700 ring-1 ring-inset ring-brand-200 transition hover:bg-brand-50"
                >
                  View specs
                </a>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-6 text-sm">
                <div>
                  <dt className="text-slate-500">Max flow</dt>
                  <dd className="font-semibold">480 m?/h</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Max head</dt>
                  <dd className="font-semibold">95 m</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Efficiency</dt>
                  <dd className="font-semibold">IE5 motor</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Warranty</dt>
                  <dd className="font-semibold">5 years</dd>
                </div>
              </dl>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                  alt="AquaFlow Pro industrial water pump"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-28 w-28 rounded-full bg-brand-200/50 blur-2xl lg:block" />
              <div className="pointer-events-none absolute -right-6 -top-6 hidden h-28 w-28 rounded-full bg-brand-300/40 blur-2xl lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section aria-label="Trusted by" className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
            Trusted by water utilities and OEMs worldwide
          </p>
          <div className="mt-6 grid grid-cols-2 items-center gap-8 opacity-70 sm:grid-cols-3 lg:grid-cols-6">
            {['HydraCorp','BlueWorks','AquaX','FlowTech','DeepWell','TideLabs'].map((name) => (
              <div key={name} className="text-center text-sm font-medium text-slate-400">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built to move more with less</h2>
          <p className="mt-4 text-slate-600">Advanced hydraulics, smart monitoring, and rugged materials for mission-critical performance.</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'IE5 premium efficiency',
              description: 'Permanent magnet motor cuts power usage by up to 30% vs IE3.',
            },
            {
              title: 'Smart control + IoT',
              description: 'Real-time vibration, temperature, and flow data with alerts.',
            },
            {
              title: 'Corrosion-resistant build',
              description: 'Duplex stainless steel, epoxy-coated for seawater and chemical duty.',
            },
            {
              title: 'Quiet operation',
              description: 'Optimized volute design reduces noise and cavitation.',
            },
            {
              title: 'Tool-free maintenance',
              description: 'Quick-release casing and cartridge seals minimize downtime.',
            },
            {
              title: 'Global certifications',
              description: 'CE, UL, NSF/ANSI 61, and ISO 9001 manufacturing.',
            },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical specifications</h2>
              <p className="mt-4 text-slate-600">Sized for municipal water, HVAC, and process applications.</p>
              <ul className="mt-6 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                {[
                  ['Flow rate', 'up to 480 m?/h'],
                  ['Head', 'up to 95 m'],
                  ['Motor', 'IE5 PM, VFD-ready'],
                  ['Casing', 'Duplex SS / epoxy'],
                  ['Seal', 'Cartridge mechanical'],
                  ['Ingress', 'IP66 / NEMA 4X'],
                  ['Noise', '< 62 dB(A) @ 1m'],
                  ['Comms', 'Modbus, 4?20 mA, MQTT'],
                ].map(([k,v]) => (
                  <li key={k} className="flex items-start justify-between rounded-lg border border-slate-200 bg-white p-4">
                    <span className="text-slate-500">{k}</span>
                    <span className="font-medium">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                  alt="AquaFlow Pro cutaway"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 lg:grid-cols-3">
          <blockquote className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700">?Energy use dropped by 28% in the first month. Monitoring caught a bearing issue before it became a failure.?</p>
            <footer className="mt-4 text-sm text-slate-500">Operations Manager, HydraCorp</footer>
          </blockquote>
          <blockquote className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700">?Install was quick. The tool-free seal change is a game changer for our maintenance team.?</p>
            <footer className="mt-4 text-sm text-slate-500">Maintenance Lead, AquaX</footer>
          </blockquote>
          <blockquote className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700">?Quiet, efficient, reliable. We standardized on AquaFlow for new builds.?</p>
            <footer className="mt-4 text-sm text-slate-500">Engineering Director, FlowTech</footer>
          </blockquote>
        </div>
      </section>

      {/* CTA + Contact */}
      <section id="contact" className="border-t border-slate-100 bg-gradient-to-b from-white to-brand-50/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get a tailored quote</h2>
              <p className="mt-4 text-slate-600">Tell us about your duty point and fluid?our engineers will size a pump and send pricing within 1 business day.</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li>? Sizing assistance from pump engineers</li>
                <li>? 5-year warranty and service network</li>
                <li>? Ship in 7?10 business days</li>
              </ul>
            </div>
            <form action="https://formsubmit.co/your@email" method="POST" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input name="name" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" name="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">Application / Notes</label>
                  <textarea name="message" rows={4} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" placeholder="Flow (m?/h), head (m), fluid, temperature..." />
                </div>
              </div>
              <button className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-brand-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
                Request quote
              </button>
              <p className="mt-3 text-center text-xs text-slate-500">We?ll reply within 1 business day.</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-500">
          ? {new Date().getFullYear()} AquaFlow Pro. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
