import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Privacy Policy - ArnoldSplit',
  description: 'Privacy Policy for ArnoldSplit - Learn how we protect your data',
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
              alt="ArnoldSplit"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-semibold text-white">ArnoldSplit</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-white/50 mb-12">Last Updated: March 2026</p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-brand-green-light mb-4">Your Privacy Matters</h2>
            <p className="text-white/70 leading-relaxed">
              ArnoldSplit is designed with privacy as a core principle. Your workout data stays on your device. 
              We only collect what&apos;s necessary for account features and app improvement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-green-light mb-4">What We Collect</h2>
            <div className="text-white/70 leading-relaxed space-y-3">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Email address</strong> — for account authentication (via Supabase)</li>
                <li><strong>Login timestamps</strong> — to help you see when your account was accessed</li>
                <li><strong>Anonymous usage analytics</strong> — app launches and feature usage (via TelemetryDeck, no personal data)</li>
                <li><strong>Attribution data</strong> — how you discovered the app (via AppsFlyer, for marketing optimization)</li>
              </ul>
              <p className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                We do <strong>NOT</strong> collect or access your workout data, exercise history, or personal records. These never leave your device unless you explicitly enable cloud sync.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-green-light mb-4">Account &amp; Authentication</h2>
            <p className="text-white/70 leading-relaxed">
              If you create an account, we use Supabase for secure authentication. We store your email address 
              and login history to help you manage your account and see when it was last accessed. 
              Your account data is stored securely and encrypted at rest.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-green-light mb-4">Data Storage</h2>
            <div className="text-white/70 leading-relaxed space-y-3">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Workout data</strong> — stored locally on your device only</li>
                <li><strong>Exercise history</strong> — stored locally on your device only</li>
                <li><strong>Personal records</strong> — stored locally on your device only</li>
                <li><strong>Account data</strong> — stored securely on Supabase (encrypted)</li>
                <li><strong>Analytics</strong> — processed by TelemetryDeck (privacy-first, no personal identifiers)</li>
                <li><strong>Attribution</strong> — processed by AppsFlyer (marketing analytics)</li>
              </ul>
              <p className="mt-4">
                When you delete the app, local data is removed. To delete your account data from our servers, 
                use &quot;Delete Account&quot; in Settings or contact us.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-green-light mb-4">HealthKit Integration</h2>
            <p className="text-white/70 leading-relaxed">
              ArnoldSplit may request access to Apple HealthKit to sync your workout data. 
              This data is only read or written with your explicit permission and is handled 
              according to Apple&apos;s HealthKit guidelines. We never transmit HealthKit data to external servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-green-light mb-4">Third Parties</h2>
            <div className="text-white/70 leading-relaxed space-y-3">
              <p>We use trusted services for specific features:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Supabase</strong> — account authentication &amp; login history</li>
                <li><strong>TelemetryDeck</strong> — anonymous, privacy-focused analytics</li>
                <li><strong>AppsFlyer</strong> — marketing attribution and campaign analytics</li>
                <li><strong>Apple</strong> — Sign In with Apple authentication, HealthKit integration</li>
              </ul>
              <p className="mt-4">
                These services have their own privacy policies. We never sell or share your personal data for advertising purposes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-green-light mb-4">Your Rights</h2>
            <div className="text-white/70 leading-relaxed space-y-3">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access your personal data</li>
                <li>Request deletion of your account and associated data</li>
                <li>Opt out of analytics (via app settings)</li>
                <li>Export your workout data</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-green-light mb-4">Contact</h2>
            <p className="text-white/70 leading-relaxed">
              If you have questions about this privacy policy, please contact us at{' '}
              <a href="mailto:privacy@arnoldsplit.app" className="text-brand-green-light hover:underline">
                privacy@arnoldsplit.app
              </a>
            </p>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <Link href="/" className="text-brand-green-light hover:underline">
            ← Back to Home
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between text-sm text-white/50">
            <span>© 2026 ArnoldSplit</span>
            <div className="flex items-center gap-6">
              <Link href="mailto:contact@arnoldsplit.app" className="hover:text-white transition-colors">
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
