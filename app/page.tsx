import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-darker">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-darker via-brand-dark to-brand-darker" />
        
        {/* Green glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-lg">
              <Image
                src="/hero-phones.png"
                alt="ArnoldSplit App Screenshots"
                width={600}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Logo + Name */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-brand-dark border border-green-500/20">
                <Image
                  src="/logo.png"
                  alt="ArnoldSplit Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-semibold text-white/90">ArnoldSplit</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">train like</span>
              <br />
              <span className="text-brand-green-light">Arnold</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed">
              The ultimate workout tracker built for the Arnold Split. 
              Track your chest & back supersets, monitor progressive overload, and crush your PRs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* App Store Badge */}
              <Link 
                href="https://apps.apple.com/app/arnoldsplit"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-brand-dark/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for <span className="text-brand-green-light">Serious Lifters</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Stop fumbling with generic fitness apps. ArnoldSplit is designed specifically for the chest & back superset routine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-brand-darker/50 border border-white/5 rounded-2xl p-8 hover:border-green-500/20 transition-colors">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-green-light" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18"/>
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Progressive Overload</h3>
              <p className="text-white/60">
                Track every set, rep, and pound. See your strength gains over time with detailed charts and PR tracking.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-brand-darker/50 border border-white/5 rounded-2xl p-8 hover:border-green-500/20 transition-colors">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-green-light" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Rest Timers</h3>
              <p className="text-white/60">
                Built-in rest timers keep you on track between sets. Never lose focus or rest too long again.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-brand-darker/50 border border-white/5 rounded-2xl p-8 hover:border-green-500/20 transition-colors">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-green-light" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6.5 6.5h11v11h-11z"/>
                  <path d="M8.5 2v4M15.5 2v4M8.5 18v4M15.5 18v4M2 8.5h4M2 15.5h4M18 8.5h4M18 15.5h4"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Arnold Split Focused</h3>
              <p className="text-white/60">
                Designed for chest & back superset training. Warmup tracking, plate calculator, and exercise library included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple. <span className="text-brand-green-light">Effective.</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Log your workouts in seconds, not minutes. We handle the tracking so you can focus on lifting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-green-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-green-light font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Start Workout</h3>
              <p className="text-white/50 text-sm">Tap to begin your chest & back session</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-green-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-green-light font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Log Sets</h3>
              <p className="text-white/50 text-sm">Quick entry for weight and reps</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-green-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-green-light font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Rest Timer</h3>
              <p className="text-white/50 text-sm">Automatic timer between sets</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-green-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-green-light font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Track Progress</h3>
              <p className="text-white/50 text-sm">See your gains over time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Train Like Arnold?
          </h2>
          <p className="text-white/60 mb-10 text-lg">
            Download ArnoldSplit and start crushing your chest & back workouts today.
          </p>
          <Link 
            href="https://apps.apple.com/app/arnoldsplit"
            className="hover:opacity-80 transition-opacity inline-block"
          >
            <Image
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              width={180}
              height={60}
              className="h-14 w-auto mx-auto"
            />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="ArnoldSplit"
                width={24}
                height={24}
                className="rounded"
              />
              <span className="text-white/60 text-sm">© 2026 ArnoldSplit</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="mailto:contact@arnoldsplit.app" className="text-white/60 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
