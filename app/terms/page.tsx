import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Terms & Conditions - PeekProof',
  description: 'Terms and Conditions for PeekProof',
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
        <h1 className="text-4xl font-bold text-white mb-2">Terms & Conditions</h1>
        <p className="text-white/50 mb-12">Last Updated: March 2026</p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-brand-purple-light mb-4">1. Acceptance of Terms</h2>
            <p className="text-white/70 leading-relaxed">
              By downloading, installing, or using PeekProof (&quot;the App&quot;), you agree to be bound by these 
              Terms and Conditions. If you do not agree to these terms, do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-purple-light mb-4">2. Description of Service</h2>
            <p className="text-white/70 leading-relaxed">
              PeekProof is a mobile application that captures photos when unauthorized users attempt to 
              access your device. The App uses face recognition technology to distinguish between the 
              device owner and other individuals.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-purple-light mb-4">3. User Responsibilities</h2>
            <div className="text-white/70 leading-relaxed space-y-3">
              <p>By using PeekProof, you agree to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Use the App only for lawful purposes and in accordance with applicable laws</li>
                <li>Not use the App to capture images of individuals without their knowledge in jurisdictions where such action is illegal</li>
                <li>Comply with all applicable privacy laws regarding the capture and storage of photographs</li>
                <li>Be solely responsible for the photos captured by the App on your device</li>
                <li>Maintain the confidentiality of your account credentials</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-purple-light mb-4">4. Privacy and Data</h2>
            <p className="text-white/70 leading-relaxed">
              Your use of the App is also governed by our <Link href="/privacy" className="text-brand-purple-light hover:underline">Privacy Policy</Link>. 
              By using the App, you consent to the collection and use of information as described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-purple-light mb-4">5. Intellectual Property</h2>
            <p className="text-white/70 leading-relaxed">
              The App, including its design, features, and content, is owned by PeekProof and is protected 
              by copyright, trademark, and other intellectual property laws. You may not copy, modify, 
              distribute, or create derivative works based on the App without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-purple-light mb-4">6. Disclaimer of Warranties</h2>
            <div className="text-white/70 leading-relaxed space-y-3">
              <p>
                THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, 
                EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties that the App will be uninterrupted, error-free, or secure</li>
                <li>Warranties regarding the accuracy of face recognition features</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-purple-light mb-4">7. Limitation of Liability</h2>
            <p className="text-white/70 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, PEEKPROOF SHALL NOT BE LIABLE FOR ANY INDIRECT, 
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO 
              LOSS OF DATA, LOSS OF PRIVACY, OR ANY OTHER DAMAGES ARISING OUT OF YOUR USE OF THE APP.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-purple-light mb-4">8. Indemnification</h2>
            <p className="text-white/70 leading-relaxed">
              You agree to indemnify and hold harmless PeekProof, its officers, directors, employees, 
              and agents from any claims, damages, losses, or expenses arising from your use of the App 
              or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-purple-light mb-4">9. Changes to Terms</h2>
            <p className="text-white/70 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of any material 
              changes by posting the updated Terms in the App or on our website. Your continued use of the 
              App after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-purple-light mb-4">10. Termination</h2>
            <p className="text-white/70 leading-relaxed">
              We may terminate or suspend your access to the App at any time, without prior notice, 
              for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-purple-light mb-4">11. Governing Law</h2>
            <p className="text-white/70 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of 
              Arizona, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-purple-light mb-4">12. Contact Information</h2>
            <p className="text-white/70 leading-relaxed">
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:contact@peekproof.app" className="text-brand-purple-light hover:underline">
                contact@peekproof.app
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
