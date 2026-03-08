import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Privacy Policy - PeekProof',
  description: 'Privacy Policy for PeekProof - Learn how we protect your data',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-brand-darker">
      {/* Header */}
      <header className="border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <Image
              src="/logo.png"
              alt="PeekProof"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-semibold text-white">PeekProof</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-white/50 mb-12">Last Updated: March 2026</p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-brand-purple-light mb-4">Your Privacy Matters</h2>
            <p className="text-white/70 leading-relaxed">
              PeekProof is designed with privacy as a core principle. Your photos and face data stay on your device. 
              We only collect what&apos;s necessary for account features.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-purple-light mb-4">What We Collect</h2>
            <div className="text-white/70 leading-relaxed space-y-3">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Email address</strong> — for account authentication (via Supabase)</li>
                <li><strong>Login timestamps</strong> — to help you see when your account was accessed</li>
                <li><strong>Anonymous usage analytics</strong> — app launches and feature usage (via TelemetryDeck, no personal data)</li>
              </ul>
              <p className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                We do <strong>NOT</strong> collect or access your photos, face data, or passcode. These never leave your device.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-purple-light mb-4">Camera Access</h2>
            <p className="text-white/70 leading-relaxed">
              PeekProof requires camera access to capture photos when your device is unlocked. 
              These photos are stored locally on your device and are never transmitted anywhere. 
              You have full control to delete them at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-purple-light mb-4">Face Recognition</h2>
            <p className="text-white/70 leading-relaxed">
              Face recognition is performed entirely on-device using Apple&apos;s Vision framework. 
              Your face data is stored locally in encrypted form and is never sent to any external service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-purple-light mb-4">Notifications</h2>
            <p className="text-white/70 leading-relaxed">
              We use local notifications to alert you when a potential snooper is detected. 
              These notifications are processed entirely on your device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-purple-light mb-4">Data Storage</h2>
            <div className="text-white/70 leading-relaxed space-y-3">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Photos & face data</strong> — stored locally on your device only</li>
                <li><strong>Account data</strong> — stored securely on Supabase (encrypted)</li>
                <li><strong>Analytics</strong> — processed by TelemetryDeck (privacy-first, no personal identifiers)</li>
              </ul>
              <p className="mt-4">
                When you delete the app, local data is removed. To delete your account data from our servers, 
                use &quot;Delete All Data&quot; in Settings.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-purple-light mb-4">Third Parties</h2>
            <div className="text-white/70 leading-relaxed space-y-3">
              <p>We use trusted services for specific features:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Supabase</strong> — account authentication & login history</li>
                <li><strong>TelemetryDeck</strong> — anonymous, privacy-focused analytics</li>
                <li><strong>Apple</strong> — Sign In with Apple authentication</li>
              </ul>
              <p className="mt-4">
                These services have their own privacy policies. We never sell or share your personal data for advertising.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-purple-light mb-4">Contact</h2>
            <p className="text-white/70 leading-relaxed">
              If you have questions about this privacy policy, please contact us at{' '}
              <a href="mailto:privacy@peekproof.app" className="text-brand-purple-light hover:underline">
                privacy@peekproof.app
              </a>
            </p>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <Link href="/" className="text-brand-purple-light hover:underline">
            ← Back to Home
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between text-sm text-white/50">
            <span>© 2026 PeekProof</span>
            <div className="flex items-center gap-6">
              <Link href="mailto:contact@peekproof.app" className="hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
