import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { EyeIcon, EarIcon, NoseIcon, HandIcon, TongueIcon } from '@/components/FiveSensesVisualization'
import TimeOfDayBadge from '@/components/TimeOfDayBadge'
import { useTimeOfDay } from '@/hooks/useTimeOfDay'

function About() {
  const timeOfDay = useTimeOfDay()
  
  const timeGreetings = {
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    night: 'Good Evening',
  }

  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden about-hero">
        <img
          src="/assets/bread.jpg"
          alt="Taste5 Bakery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />
        <TimeOfDayBadge />
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-4">
            <span className="text-sm font-medium text-white/80 uppercase tracking-wider block">
              {timeGreetings[timeOfDay]}
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white drop-shadow-2xl">Our Story</h1>
            <p className="text-lg sm:text-xl text-white/85 uppercase tracking-wider">
              Five Senses. One Taste.
            </p>
          </div>
        </div>
        <div id="logo-sentinel" className="absolute bottom-0 left-0 w-px h-px" />
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our story intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              A quiet kind of bakery, built around the senses.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Opening soon at 132 Friar Street in Reading, Taste5 is being shaped as much by light, sound, and rhythm as by recipes. 
              This page is a first sketch of the sensory ideas and small details that will define the space.
            </p>
          </div>
      
          {/* Five senses strip */}
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
                Five Senses. One Taste.
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { label: 'Sight', copy: 'Warm light, quiet details, and a view that feels calm—not crowded.', Icon: EyeIcon },
                { label: 'Sound', copy: 'Soft background sound, gentle service, and space for conversation.', Icon: EarIcon },
                { label: 'Smell', copy: 'Fresh bread, toasted spices, and coffee drifting through the room.', Icon: NoseIcon },
                { label: 'Touch', copy: 'Smooth ceramics, crisp paper, and bakes with real texture.', Icon: HandIcon },
                { label: 'Taste', copy: 'Comforting, layered flavours that feel familiar but elevated.', Icon: TongueIcon },
              ].map((sense, idx) => (
                <Card
                  key={sense.label}
                  className="bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <CardHeader className="pb-2 flex flex-col items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-secondary/20">
                      {sense.Icon && <sense.Icon className="w-6 h-6" color="rgb(80, 48, 28)" />}
                    </div>
                    <CardTitle className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-foreground/90 text-center">
                      {sense.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {sense.copy}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Values & philosophy simplified */}
          <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">What we stand for</h3>
              <ul className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <li>
                  <span className="font-semibold text-foreground">Ingredient integrity.</span>{' '}
                  We start with great butter, flour, and produce—sourcing locally where we can and never cutting corners.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Made for daily life.</span>{' '}
                  Bakes and pantry items that fit real routines—from weekday mornings to slow Sunday walks through town.
                </li>
                <li>
                  <span className="font-semibold text-foreground">A sense of place.</span>{' '}
                  We want Taste5 to feel like part of Reading: familiar, welcoming, and worth crossing the street for.
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">Our philosophy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The most memorable experiences are multisensory. From the first glimpse of the counter to the feel of the
                box in your hands, we design every touchpoint to be as intentional as the final bite.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If something doesn&apos;t elevate one of your five senses, it doesn&apos;t make it to the shelf.
                It&apos;s a simple filter, but it keeps us honest—and keeps the experience focused on you.
              </p>
            </div>
          </div>

          {/* (Mission and opening soon content intentionally removed to keep the page focused and minimal) */}
        </div>
      </section>
    </div>
  )
}

export default About
