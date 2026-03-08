import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-darker">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-darker via-brand-dark to-brand-darker" />
        
        {/* Purple glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-lg">
              <Image
                src="/hero-phones.png"
                alt="PeekProof App Screenshots"
                width={600}
                height={700}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Logo + Name */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-brand-dark border border-purple-500/20">
                <Image
                  src="/logo.png"
                  alt="PeekProof Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-semibold text-white/90">PeekProof</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">catch anyone</span>
              <br />
              <span className="text-brand-purple-light">peeking at your phone</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed">
              PeekProof silently captures photos of anyone who tries to unlock your phone. 
              Face recognition means you only see the snoopers — never yourself.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* App Store Badge */}
              <Link 
                href="#"
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
              Privacy Protection, <span className="text-brand-purple-light">Simplified</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Everything happens on your device. Your photos and face data never leave your phone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-brand-darker/50 border border-white/5 rounded-2xl p-8 hover:border-purple-500/20 transition-colors">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-purple-light" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Silent Capture</h3>
              <p className="text-white/60">
                Automatically takes photos when someone tries to unlock your phone — no sounds, no notifications.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-brand-darker/50 border border-white/5 rounded-2xl p-8 hover:border-purple-500/20 transition-colors">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-purple-light" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Face Recognition</h3>
              <p className="text-white/60">
                Knows your face and auto-deletes your photos. You only see captures of snoopers.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-brand-darker/50 border border-white/5 rounded-2xl p-8 hover:border-purple-500/20 transition-colors">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-purple-light" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">100% Private</h3>
              <p className="text-white/60">
                All data stays on your device. Photos and face data are never uploaded anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Protect Your Privacy?
          </h2>
          <p className="text-white/60 mb-10 text-lg">
            Download PeekProof and know who&apos;s been snooping.
          </p>
          <Link 
            href="#"
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
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="PeekProof"
                width={24}
                height={24}
                className="rounded"
              />
              <span className="text-white/60 text-sm">© 2026 PeekProof</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="mailto:contact@peekproof.app" className="text-white/60 hover:text-white transition-colors">
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
