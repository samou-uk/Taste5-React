import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import TimeOfDayBadge from '@/components/TimeOfDayBadge'
import { useTimeOfDay } from '@/hooks/useTimeOfDay'

function Contact() {
  const timeOfDay = useTimeOfDay()

  const timeGreetings = {
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    night: 'Good Evening',
  }

  return (
    <div className="min-h-screen">
      {/* Hero matching Our Story style */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/assets/hero3.jpg"
          alt="Taste5 Coffee and Bakery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />
        <TimeOfDayBadge />
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-4">
            <span className="text-sm font-medium text-white/80 uppercase tracking-wider block">
              {timeGreetings[timeOfDay]}
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white drop-shadow-2xl">Visit Us</h1>
            <p className="text-lg sm:text-xl text-white/85 uppercase tracking-wider">
              Five Senses. One Taste.
            </p>
          </div>
        </div>
        <div id="logo-sentinel" className="absolute bottom-0 left-0 w-px h-px" />
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_minmax(0,1fr)] gap-12 items-start">
            {/* Left column: primary action – contact form */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Get in Touch</h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Whether you&apos;re planning a celebration, exploring partnerships, or just curious about Taste5, 
                we&apos;d love to hear from you. Share a few details and we&apos;ll be in touch soon.
              </p>
              <p className="text-sm text-muted-foreground">
                Prefer email? Reach us directly at{' '}
                <a href="mailto:hello@taste5.co.uk" className="text-primary hover:underline font-medium">
                  hello@taste5.co.uk
                </a>
                .
              </p>
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl w-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-full">
                    <div className="relative w-full" style={{ height: '500px' }}>
                      <iframe
                        src="https://tally.so/embed/PdpoVx?alignLeft=1&hideTitle=1&transparentBackground=1"
                        loading="lazy"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        title="Contact Us - Taste5"
                        className="w-full h-full rounded-xl border border-muted shadow-sm"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right column: visit info + map */}
            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Visit Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We&apos;re opening soon in the heart of Reading. Here&apos;s where you&apos;ll find us:
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    132 Friar Street<br />
                    Reading, Berkshire<br />
                    RG1 1EP
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Opening Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Opening Soon</strong><br />
                    We&apos;re putting the finishing touches on our space.<br />
                    Check back for our full opening hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl w-full">
                <CardContent className="p-0 overflow-hidden">
                  <div className="aspect-[4/3] w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.089641956566!2d-0.9760890876089697!3d51.45651057168414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48769b171098f705%3A0x8a4c57b52b1d84f8!2s132%20Friar%20St%2C%20Reading%20RG1%201EP%2C%20UK!5e0!3m2!1sen!2sca!4v1765825926996!5m2!1sen!2sca"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Taste5 Location - 132 Friar Street"
                      className="w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
