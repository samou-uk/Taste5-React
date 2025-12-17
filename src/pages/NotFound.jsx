import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import TimeOfDayBadge from '@/components/TimeOfDayBadge'

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero-style 404 header */}
      <section className="relative h-[60vh] min-h-[380px] w-full overflow-hidden">
        <img
          src="/assets/hero.jpeg"
          alt="Taste5 Bakery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/60" />
        <TimeOfDayBadge />
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-5 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl">
              This page isn&apos;t on the menu.
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed max-w-xl mx-auto">
              The link you followed doesn&apos;t exist, or may have moved. Let&apos;s bring you back to a calm,
              familiar corner of Taste5.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/95 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 px-7 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold backdrop-blur-sm"
              >
                <Link to="/">Return Home</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-2 border-white/40 hover:bg-white/20 hover:border-white/60 backdrop-blur-md transition-all duration-300 hover:scale-105 px-7 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold"
              >
                <Link to="/menu">Explore Menu Preview</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Soft landing card */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Card className="bg-white/90 backdrop-blur-sm border border-border/60 shadow-lg">
            <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-5">
              <p className="text-xs font-medium tracking-[0.24em] uppercase text-muted-foreground">
                Five Senses. One Taste.
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
                Let&apos;s find you something better.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                From our story at 132 Friar Street to the first bakes coming out of the oven, the rest of the
                site is designed to feel calm, clear, and easy to navigate.
              </p>
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <Link
                  to="/"
                  className="group rounded-lg border border-border/60 px-4 py-3 flex flex-col items-start hover:border-primary/40 hover:bg-primary/5 transition-colors"
                >
                  <span className="font-medium text-foreground group-hover:text-primary">
                    Home
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Start again from the hero.
                  </span>
                </Link>
                <Link
                  to="/about"
                  className="group rounded-lg border border-border/60 px-4 py-3 flex flex-col items-start hover:border-primary/40 hover:bg-primary/5 transition-colors"
                >
                  <span className="font-medium text-foreground group-hover:text-primary">
                    Our Story
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Learn how Taste5 is being built.
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="group rounded-lg border border-border/60 px-4 py-3 flex flex-col items-start hover:border-primary/40 hover:bg-primary/5 transition-colors"
                >
                  <span className="font-medium text-foreground group-hover:text-primary">
                    Visit Us
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Find 132 Friar Street, Reading.
                  </span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default NotFound

