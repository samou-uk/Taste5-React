import { useLocation } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import TimeOfDayBadge from '@/components/TimeOfDayBadge'

function Legal() {
  const location = useLocation()
  const isPrivacy = location.pathname === '/privacy'
  const isTerms = location.pathname === '/terms'
  
  const getTitle = () => {
    if (isPrivacy) return 'Privacy Policy'
    if (isTerms) return 'Terms & Conditions'
    return 'Legal Information'
  }

  return (
    <div className="min-h-screen">
      {/* Mini hero matching other internal pages */}
      <section className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
        <img 
          src="/assets/hero.jpeg" 
          alt="Taste5 Bakery" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />
        <TimeOfDayBadge />
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-2xl">
            {getTitle()}
          </h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            {isPrivacy && (
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <div>
                      <p className="mb-4">
                        <strong className="text-foreground">Last Updated:</strong> {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                      <p>
                        Taste5 Ltd ("we", "our", or "us") is committed to protecting your privacy. 
                        This Privacy Policy explains how we collect, use, and safeguard your personal information 
                        when you visit our website or contact us.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Information We Collect</h3>
                      <p>
                        We collect information that you provide directly to us, such as when you contact us 
                        via email or through our contact form. This may include your name, email address, 
                        and any other information you choose to provide.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">How We Use Your Information</h3>
                      <p>
                        We use the information we collect to respond to your inquiries, provide you with 
                        information about our services, and communicate with you about our business. 
                        We do not sell, trade, or rent your personal information to third parties.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Data Security</h3>
                      <p>
                        We take reasonable measures to protect your personal information from unauthorized 
                        access, use, or disclosure. However, no method of transmission over the internet 
                        or electronic storage is 100% secure.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Cookies</h3>
                      <p>
                        We do not use cookies on this website. Your browsing experience is not tracked 
                        through cookies or similar technologies.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Your Rights</h3>
                      <p>
                        You have the right to access, update, or delete your personal information at any time. 
                        If you wish to exercise these rights, please contact us at hello@taste5.co.uk.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Changes to This Policy</h3>
                      <p>
                        We may update this Privacy Policy from time to time. We will notify you of any 
                        changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Contact Us</h3>
                      <p>
                        If you have any questions about this Privacy Policy, please contact us at:
                      </p>
                      <p className="mt-2">
                        <strong className="text-foreground">Taste5 Ltd</strong><br />
                        132 Friar Street<br />
                        Reading, Berkshire, RG1 1EP<br />
                        Email: hello@taste5.co.uk
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {isTerms && (
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <div>
                      <p className="mb-4">
                        <strong className="text-foreground">Last Updated:</strong> {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                      <p>
                        Please read these Terms and Conditions carefully before using our website. 
                        By accessing and using this website, you accept and agree to be bound by 
                        the terms and provisions of this agreement.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Acceptance of Terms</h3>
                      <p>
                        By accessing this website, you agree to be bound by these Terms and Conditions 
                        and all applicable laws and regulations. If you do not agree with any of these terms, 
                        you are prohibited from using or accessing this site.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Use License</h3>
                      <p>
                        Permission is granted to temporarily access the materials on Taste5 Ltd's website 
                        for personal, non-commercial transitory viewing only. This is the grant of a license, 
                        not a transfer of title, and under this license you may not:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                        <li>Modify or copy the materials</li>
                        <li>Use the materials for any commercial purpose or for any public display</li>
                        <li>Attempt to reverse engineer any software contained on the website</li>
                        <li>Remove any copyright or other proprietary notations from the materials</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Intellectual Property</h3>
                      <p>
                        All content, including text, graphics, logos, images, and software, is the property 
                        of Taste5 Ltd and is protected by copyright, trademark, and other intellectual property laws. 
                        You may not reproduce, distribute, or create derivative works from any content on this 
                        website without our express written permission.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Disclaimer</h3>
                      <p>
                        The materials on Taste5 Ltd's website are provided on an 'as is' basis. 
                        Taste5 Ltd makes no warranties, expressed or implied, and hereby disclaims and 
                        negates all other warranties including, without limitation, implied warranties 
                        or conditions of merchantability, fitness for a particular purpose, or 
                        non-infringement of intellectual property or other violation of rights.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Limitations</h3>
                      <p>
                        In no event shall Taste5 Ltd or its suppliers be liable for any damages 
                        (including, without limitation, damages for loss of data or profit, or due to 
                        business interruption) arising out of the use or inability to use the materials 
                        on Taste5 Ltd's website, even if Taste5 Ltd or a Taste5 Ltd authorized 
                        representative has been notified orally or in writing of the possibility of such damage.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Indemnification</h3>
                      <p>
                        You agree to indemnify, defend, and hold harmless Taste5 Ltd, its officers, 
                        directors, employees, agents, and affiliates from and against any and all claims, 
                        damages, obligations, losses, liabilities, costs, or debt, and expenses (including 
                        but not limited to attorney's fees) arising from:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                        <li>Your use of and access to the website</li>
                        <li>Your violation of any term of these Terms and Conditions</li>
                        <li>Your violation of any third party right, including without limitation any 
                        copyright, property, or privacy right</li>
                        <li>Any claim that your use of the website caused damage to a third party</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Accuracy of Materials</h3>
                      <p>
                        The materials appearing on Taste5 Ltd's website could include technical, 
                        typographical, or photographic errors. Taste5 Ltd does not warrant that any 
                        of the materials on its website are accurate, complete, or current. 
                        Taste5 Ltd may make changes to the materials contained on its website at 
                        any time without notice.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Links</h3>
                      <p>
                        Taste5 Ltd has not reviewed all of the sites linked to its website and is 
                        not responsible for the contents of any such linked site. The inclusion of 
                        any link does not imply endorsement by Taste5 Ltd of the site. 
                        Use of any such linked website is at the user's own risk.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Modifications</h3>
                      <p>
                        Taste5 Ltd may revise these Terms and Conditions at any time without notice. 
                        By using this website you are agreeing to be bound by the then current version 
                        of these Terms and Conditions.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Governing Law</h3>
                      <p>
                        These Terms and Conditions shall be governed by and construed in accordance 
                        with the laws of England and Wales, without regard to its conflict of law provisions.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Contact Information</h3>
                      <p>
                        If you have any questions about these Terms and Conditions, please contact us at:
                      </p>
                      <p className="mt-2">
                        <strong className="text-foreground">Taste5 Ltd</strong><br />
                        132 Friar Street<br />
                        Reading, Berkshire, RG1 1EP<br />
                        Email: hello@taste5.co.uk
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Legal

