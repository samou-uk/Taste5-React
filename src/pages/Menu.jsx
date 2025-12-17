import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import TimeOfDayBadge from '@/components/TimeOfDayBadge'
import { useTimeOfDay } from '@/hooks/useTimeOfDay'

function Menu() {
  const timeOfDay = useTimeOfDay()

  const timeGreetings = {
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    night: 'Good Evening',
  }

  return (
    <div className="min-h-screen">
      {/* Full-screen hero while menu is in progress */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="/assets/coffee.jpg"
          alt="Taste5 Bakery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />
        <TimeOfDayBadge />
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-4">
            <span className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white/15 border border-white/30 text-xs font-medium tracking-wider text-white/90 uppercase">
              Coming Soon
            </span>
            <span className="text-sm font-medium text-white/80 uppercase tracking-wider block">
              {timeGreetings[timeOfDay]}
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white drop-shadow-2xl">Our Menu</h1>
            <p className="text-lg sm:text-xl text-white/85 uppercase tracking-wider">
              Five Senses. One Taste.
            </p>
            <p className="text-base sm:text-lg text-white/85 max-w-xl mx-auto leading-relaxed">
              We&apos;re carefully curating a menu that balances comfort, craft, and quiet luxury. 
              Check back soon for the full line-up of breads, pastries, and pantry favourites.
            </p>
          </div>
        </div>
        <div id="logo-sentinel" className="absolute bottom-0 left-0 w-px h-px" />
      </section>
    </div>
  )
}

export default Menu
