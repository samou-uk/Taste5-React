import { Link, useLocation } from 'react-router-dom'
import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { Home, Info, UtensilsCrossed, Mail, MapPin } from 'lucide-react'

function Navigation() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isActive = (path) => location.pathname === path

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Info },
    { path: '/menu', label: 'Menu', icon: UtensilsCrossed },
    { path: '/contact', label: 'Contact', icon: Mail },
  ]

  const mobileNavItems = [
    { id: 'home', path: '/', label: 'Home', icon: Home },
    { id: 'menu', path: '/menu', label: 'Menu', icon: UtensilsCrossed },
    { id: 'visit', path: '/contact', label: 'Visit', icon: MapPin },
  ]

  const [mobileTooltip, setMobileTooltip] = useState(null)
  const hasShownMobileTooltipRef = useRef({})

  const handleMobileTap = (id) => {
    if (hasShownMobileTooltipRef.current[id]) return
    hasShownMobileTooltipRef.current[id] = true
    setMobileTooltip(id)
    setTimeout(() => setMobileTooltip(null), 1000)
  }

  return (
    <>
      {/* Logo - Top Left Corner (always pinned) */}
      <div
        className="absolute left-6 md:left-10 z-50 pointer-events-auto"
        style={{
          top: 'calc(env(safe-area-inset-top, 0px) + 10px)',
        }}
      >
        <Link 
          to="/" 
          className="flex flex-col items-start gap-1 group"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-black/20 blur-md -z-10" />
            <img 
              src="/assets/taste5.png" 
              alt="Taste5" 
              className={cn(
                'h-10 w-auto transition-all duration-300 group-hover:opacity-80 group-hover:scale-105',
                'brightness-0 invert'
              )} 
            />
          </div>
          <span className="text-xs font-light tracking-wider uppercase text-white/90">
            Five Senses. One Taste.
          </span>
        </Link>
      </div>

      {/* Floating Dock - Desktop (top center, translucent on all pages) */}
      <nav className="hidden min-[890px]:flex absolute top-6 left-1/2 -translate-x-1/2 z-40">
        <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full backdrop-blur-2xl border border-white/25 bg-white/15 shadow-2xl">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={cn(
                'group relative flex flex-col items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full transition-all duration-300',
                isActive(path)
                  ? 'bg-white/90 text-primary scale-110 shadow-lg'
                  : 'hover:bg-white/15 hover:scale-110 active:scale-95 text-white/85'
              )}
              title={label}
            >
              <Icon 
                className={cn(
                  'w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300',
                  isActive(path) ? 'text-primary' : 'text-current'
                )}
              />
              {/* Active indicator dot */}
              {isActive(path) && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
              {/* Tooltip - Desktop only (drops down on hover) */}
              <span className="hidden sm:block absolute top-12 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-foreground text-background">
                {label}
                <span
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent"
                  style={{ borderBottomColor: 'hsl(var(--foreground))' }}
                />
              </span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile wordless pill navbar - top right (absolute, scrolls with page) */}
      <nav 
        className="min-[890px]:hidden z-50" 
        style={{ 
          position: 'absolute',
          top: '24px',
          right: '16px',
          zIndex: 50
        }}
      >
        <div className="flex items-center gap-1.5 px-2.5 py-2 rounded-full backdrop-blur-2xl border border-white/25 bg-white/15 shadow-2xl">
          {mobileNavItems.map(({ id, path, label, icon: Icon }) => (
            <Link
              key={id}
              to={path}
              onClick={() => handleMobileTap(id)}
              className={cn(
                'group relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300',
                isActive(path)
                  ? 'bg-white/90 text-primary scale-110 shadow-lg'
                  : 'text-white/85 active:bg-white/15 active:scale-110'
              )}
              aria-label={label}
            >
              <Icon className="w-4 h-4" />
              {mobileTooltip === id && (
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-medium tracking-wide text-white/90 bg-black/70 px-2 py-0.5 rounded-full whitespace-nowrap">
                  {label}
                </span>
              )}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Navigation
