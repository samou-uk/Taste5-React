import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// SVG Icon Components
export const EyeIcon = ({ className, color }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill={color || "#1C274C"}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 3.25C7.48587 3.25 4.44529 5.9542 2.68057 8.24686L2.64874 8.2882C2.24964 8.80653 1.88206 9.28392 1.63269 9.8484C1.36564 10.4529 1.25 11.1117 1.25 12C1.25 12.8883 1.36564 13.5471 1.63269 14.1516C1.88206 14.7161 2.24964 15.1935 2.64875 15.7118L2.68057 15.7531C4.44529 18.0458 7.48587 20.75 12 20.75C16.5141 20.75 19.5547 18.0458 21.3194 15.7531L21.3512 15.7118C21.7504 15.1935 22.1179 14.7161 22.3673 14.1516C22.6344 13.5471 22.75 12.8883 22.75 12C22.75 11.1117 22.6344 10.4529 22.3673 9.8484C22.1179 9.28391 21.7504 8.80652 21.3512 8.28818L21.3194 8.24686C19.5547 5.9542 16.5141 3.25 12 3.25ZM3.86922 9.1618C5.49864 7.04492 8.15036 4.75 12 4.75C15.8496 4.75 18.5014 7.04492 20.1308 9.1618C20.5694 9.73159 20.8263 10.0721 20.9952 10.4545C21.1532 10.812 21.25 11.2489 21.25 12C21.25 12.7511 21.1532 13.188 20.9952 13.5455C20.8263 13.9279 20.5694 14.2684 20.1308 14.8382C18.5014 16.9551 15.8496 19.25 12 19.25C8.15036 19.25 5.49864 16.9551 3.86922 14.8382C3.43064 14.2684 3.17374 13.9279 3.00476 13.5455C2.84684 13.188 2.75 12.7511 2.75 12C2.75 11.2489 2.84684 10.812 3.00476 10.4545C3.17374 10.0721 3.43063 9.73159 3.86922 9.1618Z" fill={color || "#1C274C"}/>
  </svg>
)

export const EarIcon = ({ className, color }) => (
  <svg className={className} viewBox="0 0 32 32" fill={color || "#000000"} xmlns="http://www.w3.org/2000/svg">
    <path d="M16.97 0.75c-5.108 0-10.28 3.864-10.28 11.25 0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0c0-6.012 4.033-8.75 7.78-8.75s7.78 2.738 7.78 8.75c0.005 0.124 0.008 0.27 0.008 0.416 0 0.717-0.067 1.418-0.194 2.098l0.011-0.070c-0.241 1.112-0.633 2.096-1.162 2.991l0.025-0.046c-0.286 0.493-0.583 0.917-0.911 1.315l0.013-0.016c-0.188 0.227-0.393 0.432-0.598 0.635-0.378 0.359-0.72 0.747-1.026 1.163l-0.017 0.024c-0.429 0.631-0.849 1.359-1.216 2.118l-0.046 0.105c-0.266 0.49-0.52 1.069-0.726 1.67l-0.024 0.082c-0.098 0.328-0.168 0.711-0.196 1.105l-0.001 0.018c-0.013 0.22-0.046 0.426-0.097 0.624l0.005-0.022c-0.083 0.282-0.177 0.522-0.288 0.752l0.013-0.029c-0.221 0.427-0.505 0.79-0.845 1.092l-0.004 0.003c-0.733 0.622-1.657 1.040-2.672 1.156l-0.023 0.002c-0.235 0.033-0.506 0.052-0.781 0.052-0.818 0-1.597-0.167-2.304-0.469l0.038 0.015c-0.893-0.371-1.607-1.022-2.049-1.842l-0.011-0.022c-0.266-0.544-0.422-1.183-0.422-1.859 0-0.021 0-0.043 0-0.064l-0 0.003c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0c-0 0.018-0 0.038-0 0.059 0 1.085 0.254 2.111 0.706 3.021l-0.018-0.040c0.72 1.368 1.868 2.429 3.262 3.023l0.043 0.016c0.947 0.415 2.051 0.656 3.211 0.656 0.011 0 0.022-0 0.034-0h-0.002c0.392-0 0.778-0.026 1.156-0.075l-0.045 0.005c1.561-0.182 2.947-0.821 4.049-1.779l-0.009 0.008c0.574-0.512 1.049-1.12 1.402-1.801l0.016-0.035c0.155-0.309 0.301-0.675 0.417-1.055l0.013-0.050c0.096-0.323 0.165-0.699 0.192-1.087l0.001-0.017c0.013-0.226 0.048-0.437 0.101-0.64l-0.005 0.023c0.187-0.542 0.39-0.999 0.625-1.436l-0.025 0.051c0.354-0.743 0.713-1.369 1.113-1.965l-0.035 0.055c0.235-0.314 0.484-0.591 0.754-0.844l0.003-0.003c0.262-0.26 0.521-0.523 0.762-0.814 1.214-1.476 2.104-3.266 2.534-5.228l0.015-0.083c0.151-0.76 0.238-1.634 0.238-2.528 0-0.154-0.003-0.307-0.008-0.459l0.001 0.022c0-7.386-5.172-11.25-10.28-11.25zM16.656 16.35c-2.227 0.358-3.907 2.266-3.907 4.566 0 0.030 0 0.059 0.001 0.089l-0-0.004c0 0.727-0.294 1.195-0.75 1.195s-0.75-0.469-0.75-1.195c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0c-0.010 0.098-0.016 0.212-0.016 0.327 0 1.825 1.45 3.31 3.261 3.368l0.005 0c1.816-0.058 3.266-1.543 3.266-3.368 0-0.115-0.006-0.229-0.017-0.341l0.001 0.014c-0-0.011-0-0.024-0-0.037 0-1.086 0.796-1.985 1.837-2.147l0.012-0.002c0.384-0.025 0.739-0.129 1.057-0.294l-0.015 0.007c0.308-0.182 0.565-0.416 0.768-0.692l0.005-0.007c0.773-0.948 1.241-2.171 1.241-3.503 0-1.208-0.385-2.327-1.040-3.239l0.011 0.017c-0.998-1.28-2.54-2.096-4.273-2.096-0.065 0-0.13 0.001-0.194 0.003l0.009-0c-0.413 0.024-0.801 0.093-1.17 0.203l0.037-0.009c0.659-1.288 1.976-2.154 3.496-2.154 1.083 0 2.063 0.44 2.771 1.15l0 0c0.827 0.934 1.331 2.17 1.331 3.524 0 0.097-0.003 0.194-0.008 0.29l0.001-0.013c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0c0.019-0.193 0.030-0.417 0.030-0.644 0-3.71-2.955-6.73-6.64-6.834l-0.010-0c-3.694 0.105-6.649 3.124-6.649 6.834 0 0.227 0.011 0.451 0.033 0.672l-0.002-0.028c0 0 0 0.001 0 0.001 0 0.69 0.559 1.249 1.249 1.249 0.511 0 0.95-0.306 1.143-0.746l0.003-0.008c0.017-0.017 0.039-0.023 0.055-0.041 0.509-0.584 1.254-0.951 2.084-0.951 0.899 0 1.698 0.43 2.202 1.096l0.005 0.007c0.334 0.495 0.534 1.106 0.534 1.763 0 0.731-0.247 1.405-0.662 1.942l0.005-0.007z"/>
  </svg>
)

export const NoseIcon = ({ className, color }) => (
  <svg className={className} viewBox="0 0 64 64" fill={color || "#000000"} xmlns="http://www.w3.org/2000/svg">
    <path d="M46.721 36.295c-.27-1.481-.569-3.018-.862-4.518c-.758-3.883-1.541-7.898-1.541-9.76C44.317 8.173 40.518 2 31.998 2C23.479 2 19.68 8.173 19.68 22.018c0 1.864-.784 5.883-1.543 9.77c-.291 1.496-.59 3.03-.859 4.508C11.529 36.775 7 41.557 7 47.367c0 5.403 5.273 9.986 9.056 10.894c.407.098.879.146 1.445.146c1.072 0 2.505-.185 3.628-.411C24.146 60.588 27.959 62 31.998 62c4.041 0 7.854-1.413 10.87-4.005c1.124.226 2.558.411 3.631.411c.567 0 1.039-.048 1.445-.146C51.726 57.354 57 52.771 57 47.367c0-5.81-4.531-10.594-10.279-11.072m.702 19.721a4.177 4.177 0 0 1-.924.083c-1.261 0-3.015-.3-3.857-.52c.861-.457 1.938-.931 3.095-1.176c6.127-1.306 3.467-4.175-.632-2.868c-3.218 1.026-4.245 4.929-4.305 5.163a14.394 14.394 0 0 1-8.802 2.994a14.391 14.391 0 0 1-8.797-2.99c-.049-.193-1.07-4.135-4.307-5.167c-4.098-1.307-6.758 1.563-.631 2.868c1.155.245 2.232.72 3.094 1.176c-.84.219-2.597.52-3.856.52c-.36 0-.681-.025-.923-.083c-2.73-.655-7.306-4.341-7.306-8.648c0-4.861 4.01-8.804 8.956-8.804c.322 0 .64.018.952.051c.976-5.87 2.771-13.418 2.771-16.597c0-14.921 4.497-17.71 10.046-17.71c5.554 0 10.047 2.789 10.047 17.71c0 3.178 1.796 10.727 2.772 16.598c.313-.034.632-.052.954-.052c4.946 0 8.956 3.942 8.956 8.804c.002 4.307-4.574 7.993-7.303 8.648"/>
  </svg>
)

export const HandIcon = ({ className, color }) => (
  <svg className={className} viewBox="0 0 24 24" fill={color || "#000000"} xmlns="http://www.w3.org/2000/svg">
    <path d="M5.909,21.542A4.97,4.97,0,0,0,9.438,23h6.068a4.97,4.97,0,0,0,3.529-1.458c2.863-2.851,2.5-6.188,2.915-7.913a4.934,4.934,0,0,0-2.507-5.023h0c-1.672-.939-3.219-.489-6.41-.606V4.111a3.087,3.087,0,0,0-2.509-3.07A3.005,3.005,0,0,0,7.018,4V14.182a3.087,3.087,0,0,0-3.756-.223,3,3,0,0,0-.38,4.567ZM4.428,15.584a1.1,1.1,0,0,1,1.37.191l1.514,1.509a1,1,0,0,0,1.706-.709V4a1,1,0,0,1,.353-.76,1.012,1.012,0,0,1,.832-.226,1.09,1.09,0,0,1,.83,1.1V9a1,1,0,0,0,1,1c4.576.092,5.4-.227,6.431.35a2.948,2.948,0,0,1,1.507,3c-.411,1.8-.06,4.5-2.347,6.78A2.983,2.983,0,0,1,15.506,21H9.438a2.983,2.983,0,0,1-2.118-.875L4.294,17.109A1,1,0,0,1,4.428,15.584Z"/>
  </svg>
)

export const TongueIcon = ({ className, color }) => (
  <svg className={className} viewBox="0 0 64 64" fill={color || "#000000"} xmlns="http://www.w3.org/2000/svg">
    <path d="M62 9s-14.282 3.232-30 3.232C16.283 12.232 2 9 2 9c0 4.567 2.309 8.851 6.176 12.311c-.174 1.856-.175 4.355-.175 7.7C8.001 46.313 18.746 55 32 55c13.256 0 24.001-8.687 24.001-25.99c0-3.346 0-5.846-.173-7.702C59.693 17.849 62 13.566 62 9M32 52.546c-10.433 0-21.58-6.183-21.58-23.536c0-4.693 0-8.084.549-9.505c.158-.412.309-.8 2.742-.8c1.26 0 2.857.108 4.879.246c2.988.203 7.004.472 12.078.514L32 46.683l1.332-27.218c5.076-.042 9.095-.311 12.083-.514c2.022-.137 3.62-.246 4.88-.246c2.433 0 2.581.387 2.74.798c.546 1.417.546 4.631.546 9.507c0 17.353-11.147 23.536-21.581 23.536"/>
  </svg>
)

const senses = [
  {
    id: 'sight',
    label: 'Sight',
    description: 'Visual beauty enhances anticipation and enjoyment.',
    detailedDescription: 'The golden glow of freshly baked pastries, the delicate layers of mooncakes, and the artful presentation that makes every creation a feast for the eyes before it touches your lips.',
    Icon: EyeIcon,
    position: { x: 25, y: 25 },
    color: 'rgb(139, 69, 19)',
    lightColor: 'rgba(139, 69, 19, 0.2)',
    accentColor: 'rgba(139, 69, 19, 0.15)',
  },
  {
    id: 'sound',
    label: 'Sound',
    description: 'The crisp crackle and soft whisper of perfect textures.',
    detailedDescription: 'The satisfying crunch of a perfectly baked crust, the gentle rustle of flaky pastry layers, and the subtle sounds that signal freshness and quality.',
    Icon: EarIcon,
    position: { x: 75, y: 25 },
    color: 'rgb(139, 69, 19)',
    lightColor: 'rgba(139, 69, 19, 0.2)',
    accentColor: 'rgba(139, 69, 19, 0.15)',
  },
  {
    id: 'smell',
    label: 'Smell',
    description: 'Aromas that awaken memories and deepen flavor perception.',
    detailedDescription: 'Warm, inviting scents that fill the air and transport you—vanilla, butter, toasted sesame, and the unmistakable fragrance of bread fresh from the oven.',
    Icon: NoseIcon,
    position: { x: 75, y: 75 },
    color: 'rgb(139, 69, 19)',
    lightColor: 'rgba(139, 69, 19, 0.2)',
    accentColor: 'rgba(139, 69, 19, 0.15)',
  },
  {
    id: 'touch',
    label: 'Touch',
    description: 'Texture creates the foundation for every bite.',
    detailedDescription: 'The delicate crumb of a perfect sponge, the satisfying resistance of a well-made bun, and textures that tell a story of craftsmanship in every touch.',
    Icon: HandIcon,
    position: { x: 25, y: 75 },
    color: 'rgb(139, 69, 19)',
    lightColor: 'rgba(139, 69, 19, 0.2)',
    accentColor: 'rgba(139, 69, 19, 0.15)',
  },
  {
    id: 'taste',
    label: 'Taste',
    description: 'The culmination where all senses unite in perfect harmony.',
    detailedDescription: 'Where all senses converge—flavors that dance across your palate, creating moments of pure delight that linger long after the last bite.',
    Icon: TongueIcon,
    position: { x: 50, y: 50 },
    color: 'rgb(180, 83, 9)',
    lightColor: 'rgba(180, 83, 9, 0.3)',
    accentColor: 'rgba(180, 83, 9, 0.2)',
    isCentral: true,
  },
]

function FiveSensesVisualization() {
  const [hoveredSense, setHoveredSense] = useState(null)
  const [selectedSense, setSelectedSense] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const sectionRef = useRef(null)
  const hasTriggeredRef = useRef(false)

  const taste = senses.find(s => s.isCentral)
  
  if (!taste) return null

  // Scroll-triggered animation: nodes converge into Taste (triggers every time section enters view)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimating) {
            // Reset the trigger flag when leaving the viewport
            if (!hasTriggeredRef.current) {
              hasTriggeredRef.current = true
              setIsAnimating(true)
              // After convergence, return nodes to original positions
              setTimeout(() => {
                setIsAnimating(false)
                // Reset trigger after a delay so it can trigger again
                setTimeout(() => {
                  hasTriggeredRef.current = false
                }, 500)
              }, 1500) // Convergence duration (1.5s)
            }
          } else if (!entry.isIntersecting) {
            // Reset when leaving viewport so animation can trigger again
            hasTriggeredRef.current = false
            setIsAnimating(false) // Ensure animation stops when leaving viewport
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of section is visible
        rootMargin: '0px',
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isAnimating])

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden border-t border-border/40"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,69,19,0.02),transparent)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.08 }}
          className="text-center mb-8"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
            }}
            className="text-base font-medium text-muted-foreground uppercase tracking-wider mb-4 block"
          >
            Our Philosophy
          </motion.span>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4"
          >
            Five Senses. One Taste.
          </motion.h2>
          <motion.div
            variants={{
              hidden: { opacity: 0, scaleX: 0.4 },
              visible: { opacity: 1, scaleX: 1, transition: { duration: 0.4, ease: 'easeOut' } },
            }}
            className="w-20 h-px bg-primary mx-auto mb-4 origin-center"
          ></motion.div>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
            }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Each sense plays a vital role in creating the perfect moment. 
            Click on any sense to discover how it contributes to the ultimate experience.
          </motion.p>
        </motion.div>

        {/* Desktop Layout with Side Panel */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-center max-w-6xl mx-auto">
          {/* SVG Visualization - Left Side */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative aspect-square max-w-xl mx-auto"
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Animated background circles */}
                {hoveredSense && hoveredSense !== 'taste' && (
                  <motion.circle
                    cx={taste.position.x}
                    cy={taste.position.y}
                    r="15"
                    fill={taste.accentColor}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                )}

                {/* Connection lines with animated drawing */}
                <AnimatePresence>
                  {senses
                    .filter(sense => !sense.isCentral)
                    .map((sense, idx) => {
                      const isActive = hoveredSense === sense.id || (hoveredSense === 'taste' && selectedSense === sense.id)
                      const isHighlighted = hoveredSense === sense.id
                      
                      // Calculate line endpoints - always use original positions for lines
                      const lineStart = { x: sense.position.x, y: sense.position.y }
                      const lineEnd = { x: taste.position.x, y: taste.position.y }
                      const controlY = (lineStart.y + lineEnd.y) / 2 - 5
                      const curvedPath = `M ${lineStart.x},${lineStart.y} Q ${(lineStart.x + lineEnd.x) / 2},${controlY} ${lineEnd.x},${lineEnd.y}`
                      
                      return (
                        <motion.g key={`line-group-${sense.id}`}>
                          {/* Glow effect on active line */}
                          {isHighlighted && !isAnimating && (
                            <motion.path
                              d={curvedPath}
                              stroke={sense.color}
                              strokeWidth="0.8"
                              fill="none"
                              opacity={0.2}
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.6, ease: 'easeOut' }}
                            />
                          )}
                          
                          {/* Main connection line - curved for organic feel */}
                          <motion.path
                            d={curvedPath}
                            stroke={sense.color}
                            strokeWidth={isActive && !isAnimating ? '0.45' : '0.25'}
                            fill="none"
                            opacity={isAnimating ? 0.1 : (isActive ? 0.5 : 0.25)}
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ 
                              pathLength: isAnimating ? 0 : (isActive ? 1 : 0.5),
                              opacity: isAnimating ? 0.1 : (isActive ? 0.5 : 0.25),
                            }}
                            transition={{ 
                              duration: isAnimating ? 1.5 : 0.6, 
                              ease: isAnimating ? [0.4, 0, 0.2, 1] : [0.25, 0.46, 0.45, 0.94],
                              delay: isAnimating ? idx * 0.15 : idx * 0.1
                            }}
                          />
                          
                          {/* Animated particles/dots along the curved line when active */}
                          {isHighlighted && !isAnimating && (
                            <circle
                              r="0.6"
                              fill={sense.color}
                              opacity={0.8}
                            >
                              <animateMotion
                                dur="2.5s"
                                repeatCount="indefinite"
                                path={`${curvedPath} Q ${(lineStart.x + lineEnd.x) / 2},${controlY} ${lineStart.x},${lineStart.y}`}
                              />
                            </circle>
                          )}
                        </motion.g>
                      )
                    })}
                </AnimatePresence>

                {/* Sense nodes */}
                {senses.map((sense, idx) => {
                  const isHovered = hoveredSense === sense.id
                  const isTasteHovered = hoveredSense === 'taste' && !sense.isCentral
                  const isActive = isHovered || (sense.isCentral && hoveredSense && hoveredSense !== 'taste')
                  
                  // Calculate animation position: non-central nodes converge to Taste during scroll animation
                  const getAnimatedPosition = () => {
                    if (sense.isCentral) {
                      return { x: sense.position.x, y: sense.position.y }
                    }
                    if (isAnimating) {
                      // Animate toward Taste
                      return { 
                        x: taste.position.x, 
                        y: taste.position.y 
                      }
                    }
                    return { x: sense.position.x, y: sense.position.y }
                  }

                  const animatedPos = getAnimatedPosition()
                  
                  return (
                    <g key={sense.id}>
                      {/* Outer glow ring */}
                      {isHovered && !isAnimating && (
                        <motion.circle
                          cx={animatedPos.x}
                          cy={animatedPos.y}
                          r={sense.isCentral ? '6' : '5'}
                          fill="none"
                          stroke={sense.color}
                          strokeWidth="0.3"
                          opacity={0.4}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.4 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      
                      {/* Pulsing glow for Taste when other senses are hovered */}
                      {sense.isCentral && hoveredSense && hoveredSense !== 'taste' && !isAnimating && (
                        <motion.circle
                          cx={sense.position.x}
                          cy={sense.position.y}
                          r="6"
                          fill={sense.lightColor}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ 
                            scale: [0.8, 1.2, 0.8],
                            opacity: [0.3, 0.5, 0.3]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                        />
                      )}
                      
                      {/* Node circle with smooth animations - larger, more welcoming */}
                      <motion.circle
                        cx={animatedPos?.x ?? sense.position.x}
                        cy={animatedPos?.y ?? sense.position.y}
                        r={sense.isCentral ? '5' : '3.5'}
                        fill={sense.color}
                        stroke={sense.isCentral ? sense.lightColor : 'none'}
                        strokeWidth={sense.isCentral ? '0.5' : '0'}
                        onMouseEnter={() => {
                          if (!isAnimating && !selectedSense) {
                            setHoveredSense(sense.id)
                          }
                        }}
                        onMouseLeave={() => {
                          if (!isAnimating && !selectedSense) {
                            setHoveredSense(null)
                          }
                        }}
                        onClick={() => {
                          if (!isAnimating) {
                            if (selectedSense === sense.id) {
                              // Clicking the same node deselects it
                              setSelectedSense(null)
                              setHoveredSense(null)
                            } else {
                              // Clicking a different node selects it
                              setSelectedSense(sense.id)
                              setHoveredSense(sense.id)
                            }
                          }
                        }}
                        initial={{ 
                          cx: sense.position.x, 
                          cy: sense.position.y,
                          scale: 0, 
                          opacity: 0 
                        }}
                        animate={{
                          cx: animatedPos?.x ?? sense.position.x,
                          cy: animatedPos?.y ?? sense.position.y,
                          scale: isActive && !isAnimating ? (sense.isCentral ? 1.2 : 1.15) : (isAnimating && !sense.isCentral ? 0.3 : 1),
                          opacity: isAnimating && !sense.isCentral ? 0.3 : (isActive ? 1 : 0.9),
                          filter: isHovered && !isAnimating ? 'drop-shadow(0 0 10px rgba(139, 69, 19, 0.5)) brightness(1.1)' : 'brightness(1)',
                        }}
                        transition={{ 
                          duration: isAnimating ? 1.5 : 0.4,
                          ease: isAnimating ? [0.4, 0, 0.2, 1] : [0.25, 0.46, 0.45, 0.94],
                          delay: isAnimating ? idx * 0.15 : idx * 0.1
                        }}
                        style={{ cursor: isAnimating ? 'default' : 'pointer' }}
                        whileHover={!isAnimating ? { 
                          scale: sense.isCentral ? 1.3 : 1.25,
                          filter: 'drop-shadow(0 0 14px rgba(139, 69, 19, 0.6)) brightness(1.15)'
                        } : {}}
                        whileTap={!isAnimating ? { scale: 0.92 } : {}}
                      />
                      
                      {/* Label with smooth transitions - warmer, more inviting */}
                      <motion.g
                        initial={{ x: 0, y: 0, opacity: 0.8 }}
                        animate={{
                          x: (animatedPos?.x ?? sense.position.x) - sense.position.x,
                          y: (animatedPos?.y ?? sense.position.y) - sense.position.y,
                          opacity: isAnimating && !sense.isCentral ? 0 : (isActive ? 1 : 0.8),
                        }}
                        transition={{ 
                          duration: isAnimating ? 1.5 : 0.4,
                          delay: isAnimating ? idx * 0.15 : idx * 0.1 + 0.2
                        }}
                      >
                        <text
                          x={sense.position.x}
                          y={sense.position.y + (sense.isCentral ? 9 : 7)}
                          textAnchor="middle"
                          fontSize={sense.isCentral ? '4' : '3.5'}
                          fill={sense.color}
                          fontWeight={sense.isCentral ? '600' : '500'}
                          className="select-none pointer-events-none"
                          fontFamily="inherit"
                        >
                          {sense.label}
                        </text>
                      </motion.g>
                    </g>
                  )
                })}
              </svg>
            </motion.div>
          </div>

          {/* Explanatory Panel - Right Side */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              {selectedSense ? (
                <motion.div
                  key={selectedSense}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="sticky top-32"
                >
                  <div className="bg-white/85 backdrop-blur-sm border border-primary/8 rounded-2xl p-8 shadow-lg relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: senses.find(s => s.id === selectedSense)?.lightColor,
                          border: `2px solid ${senses.find(s => s.id === selectedSense)?.color}`,
                        }}
                      >
                        {(() => {
                          const sense = senses.find(s => s.id === selectedSense)
                          const IconComponent = sense?.Icon
                          return IconComponent ? (
                            <IconComponent className="w-8 h-8" color={sense.color} />
                          ) : null
                        })()}
                      </div>
                      <div>
                        <h3 
                          className="text-2xl font-bold"
                          style={{ color: senses.find(s => s.id === selectedSense)?.color }}
                        >
                          {senses.find(s => s.id === selectedSense)?.label}
                        </h3>
                        <p className="text-sm text-muted-foreground uppercase tracking-wider">
                          {selectedSense === 'taste' ? 'Central Sense' : 'Contributing Sense'}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      {senses.find(s => s.id === selectedSense)?.description}
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {senses.find(s => s.id === selectedSense)?.detailedDescription}
                    </p>
                    {selectedSense !== 'taste' && (
                      <div className="mt-6 pt-6 border-t border-primary/10">
                        <p className="text-sm text-muted-foreground italic">
                          All senses connect to create the ultimate taste experience.
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="sticky top-32"
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-primary/8 rounded-2xl p-8 shadow-md">
                    <div className="text-center space-y-4">
                      <div 
                        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                        style={{
                          backgroundColor: taste.lightColor,
                          border: `3px solid ${taste.color}`,
                        }}
                      >
                        <taste.Icon className="w-10 h-10" color={taste.color} />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        Explore the Five Senses
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Click on any sense in the visualization to discover how each one 
                        contributes to creating the perfect moment. Taste sits at the center, 
                        where all senses converge in harmony.
                      </p>
                      <div className="pt-4">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {senses.filter(s => !s.isCentral).map((sense) => (
                            <span
                              key={sense.id}
                              className="px-3 py-1 rounded-full text-xs font-medium"
                              style={{
                                backgroundColor: sense.lightColor,
                                color: sense.color,
                              }}
                            >
                              {sense.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Tablet/Mobile Layout */}
        <div className="lg:hidden space-y-8 max-w-2xl mx-auto">
          {senses.map((sense, idx) => (
            <motion.div
              key={sense.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-start gap-6 p-6 bg-white/90 backdrop-blur-sm rounded-2xl border transition-all duration-300 cursor-pointer ${
                  selectedSense === sense.id 
                    ? 'border-primary shadow-xl' 
                    : 'border-primary/10 hover:border-primary/30'
                }`}
                onClick={() => {
                  if (selectedSense === sense.id) {
                    setSelectedSense(null)
                  } else {
                    setSelectedSense(sense.id)
                  }
                }}
              >
                <div className="flex-shrink-0">
                  <motion.div
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      selectedSense === sense.id ? 'scale-110' : ''
                    }`}
                    style={{
                      backgroundColor: sense.lightColor,
                      border: `2px solid ${sense.color}`,
                    }}
                    animate={{
                      scale: selectedSense === sense.id ? 1.1 : 1,
                    }}
                  >
                    <sense.Icon className="w-8 h-8" color={sense.color} />
                  </motion.div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3
                      className="text-xl font-bold"
                      style={{ color: sense.isCentral ? sense.color : undefined }}
                    >
                      {sense.label}
                    </h3>
                    {sense.isCentral && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        Central
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    {sense.description}
                  </p>
                  <AnimatePresence>
                    {selectedSense === sense.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-muted-foreground leading-relaxed pt-2 border-t border-primary/10"
                      >
                        {sense.detailedDescription}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FiveSensesVisualization

