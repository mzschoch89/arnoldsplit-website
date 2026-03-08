import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Terms & Conditions - ArnoldSplit',
  description: 'Terms and Conditions for ArnoldSplit',
}

export default function Terms() {
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
        <h1 className="text-4xl font-bold text-white mb-2">Terms & Conditions</h1>
        <p className="text-white/50 mb-12">Last Updated: March 2026</p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-brand-green-light mb-4">1. Acceptance of Terms</h2>
            <p className="text-white/70 leading-relaxed">
              By downloading, installing, or using ArnoldSplit (&quot;the App&quot;), you agree to be bound by these 
              Terms and Conditions. If you do not agree to these terms, do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-green-light mb-4">2. Description of Service</h2>
            <p className="text-white/70 leading-relaxed">
              ArnoldSplit is a mobile application designed to help users track their workout progress, 
              specifically optimized for the Arnold Split training routine. The App provides exercise 
              logging, rest timers, progress tracking, and workout history features.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-green-light mb-4">3. Health Disclaimer</h2>
            <div className="text-white/70 leading-relaxed space-y-3">
              <p className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <strong>Important:</strong> ArnoldSplit is not a substitute for professional medical advice, 
                diagnosis, or treatment. Always consult with a qualified healthcare provider before starting 
                any exercise program.
              </p>
              <p>By using the App, you acknowledge that:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>You are physically capable of performing the exercises you choose to track</li>
                <li>You assume all risks associated with physical exercise</li>
                <li>You will stop exercising immediately if you feel pain, dizziness, or discomfort</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-green-light mb-4">4. User Responsibilities</h2>
            <div className="text-white/70 leading-relaxed space-y-3">
              <p>By using ArnoldSplit, you agree to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Use the App only for lawful purposes</li>
                <li>Not misuse or attempt to manipulate the App&apos;s functionality</li>
                <li>Be responsible for maintaining the accuracy of the data you enter</li>
                <li>Maintain the confidentiality of your account credentials</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-green-light mb-4">5. Account Terms</h2>
            <div className="text-white/70 leading-relaxed space-y-3">
              <p>If you create an account:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for all activity under your account</li>
                <li>You must notify us immediately of any unauthorized access</li>
                <li>We may suspend or terminate accounts that violate these terms</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-green-light mb-4">6. Privacy and Data</h2>
            <p className="text-white/70 leading-relaxed">
              Your use of the App is also governed by our <Link href="/privacy" className="text-brand-green-light hover:underline">Privacy Policy</Link>. 
              By using the App, you consent to the collection and use of information as described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-green-light mb-4">7. Intellectual Property</h2>
            <p className="text-white/70 leading-relaxed">
              The App, including its design, features, and content, is owned by ArnoldSplit and is protected 
              by copyright, trademark, and other intellectual property laws. You may not copy, modify, 
              distribute, or create derivative works based on the App without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-green-light mb-4">8. Disclaimer of Warranties</h2>
            <div className="text-white/70 leading-relaxed space-y-3">
              <p>
                THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, 
                EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties that the App will be uninterrupted, error-free, or secure</li>
                <li>Warranties regarding the accuracy of workout recommendations or calculations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-green-light mb-4">9. Limitation of Liability</h2>
            <p className="text-white/70 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, ARNOLDSPLIT SHALL NOT BE LIABLE FOR ANY INDIRECT, 
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO 
              LOSS OF DATA, PERSONAL INJURY, OR ANY OTHER DAMAGES ARISING OUT OF YOUR USE OF THE APP.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-green-light mb-4">10. Changes to Terms</h2>
            <p className="text-white/70 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of any material 
              changes by posting the updated Terms in the App or on our website. Your continued use of the 
              App after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-green-light mb-4">11. Governing Law</h2>
            <p className="text-white/70 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of 
              Arizona, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-green-light mb-4">12. Contact Information</h2>
            <p className="text-white/70 leading-relaxed">
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:contact@arnoldsplit.app" className="text-brand-green-light hover:underline">
                contact@arnoldsplit.app
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
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
