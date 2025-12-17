import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import FiveSensesVisualization from '@/components/FiveSensesVisualization'
import { useTimeOfDay } from '@/hooks/useTimeOfDay'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const BreadIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M40 2.046875C37.234375 2.046875 34.324219 3.21875 32.183594 4.335938C31.144531 4.171875 29.167969 4.042969 27.050781 4.527344C25.902344 4.789063 24.75 5.238281 23.832031 6.054688C22.917969 6.871094 22.292969 8.105469 22.292969 9.609375L22.292969 10.578125C22.140625 10.566406 21.929688 10.484375 21.785156 10.484375C20.269531 10.484375 18.117188 10.582031 16.21875 11.578125C14.320313 12.570313 12.78125 14.617188 12.78125 17.871094L12.78125 18.53125C12.460938 18.535156 12.121094 18.488281 11.816406 18.5625C10.460938 18.894531 8.800781 19.441406 7.453125 20.71875C6.109375 22 5.164063 24.007813 5.164063 26.890625L5.164063 27.90625C5.132813 27.941406 5.105469 27.929688 5.078125 27.972656C3.957031 29.761719 2.046875 34.300781 2.046875 39.027344C2.046875 42.042969 2.71875 44.269531 3.9375 45.769531C5.15625 47.273438 6.914063 47.953125 8.707031 47.953125C12.367188 47.953125 16.066406 46.179688 19.996094 43.316406C23.921875 40.453125 28.105469 36.464844 32.714844 31.828125C41.734375 22.761719 47.953125 15.359375 47.953125 8C47.953125 5.78125 46.734375 4.148438 45.167969 3.25C43.597656 2.347656 41.707031 2.046875 40 2.046875 Z M 40 3.953125C41.46875 3.953125 43.078125 4.253906 44.21875 4.90625C45.355469 5.554688 46.046875 6.421875 46.046875 8C46.046875 14.242188 40.316406 21.484375 31.359375 30.484375C26.773438 35.097656 22.636719 39.027344 18.871094 41.773438C15.105469 44.519531 11.738281 46.046875 8.707031 46.046875C7.367188 46.046875 6.269531 45.613281 5.421875 44.566406C4.570313 43.523438 3.953125 41.757813 3.953125 39.027344C3.953125 35.074219 5.625 30.992188 6.515625 29.417969C6.75 29.445313 7.027344 29.488281 7.414063 29.5625C8.355469 29.738281 9.636719 30.015625 10.96875 30.25C12.304688 30.484375 13.6875 30.683594 14.90625 30.703125C16.125 30.722656 17.269531 30.6875 18.058594 29.773438C18.460938 29.304688 18.449219 28.515625 18.207031 28.0625C17.964844 27.609375 17.613281 27.300781 17.195313 26.996094C16.359375 26.386719 15.199219 25.855469 13.867188 25.453125C11.84375 24.84375 9.414063 24.515625 7.351563 25.191406C7.617188 23.828125 8.074219 22.765625 8.769531 22.105469C9.738281 21.183594 11.046875 20.714844 12.269531 20.417969C12.691406 20.316406 13.808594 20.429688 15.117188 20.777344C16.425781 21.121094 17.960938 21.636719 19.480469 22.109375C20.996094 22.578125 22.496094 23.003906 23.835938 23.152344C24.503906 23.226563 25.140625 23.238281 25.746094 23.105469C26.347656 22.972656 26.949219 22.671875 27.355469 22.140625C27.773438 21.597656 27.804688 20.8125 27.574219 20.242188C27.34375 19.671875 26.949219 19.21875 26.457031 18.78125C25.480469 17.914063 24.082031 17.136719 22.503906 16.542969C20.929688 15.949219 19.179688 15.554688 17.507813 15.5625C16.6875 15.570313 15.878906 15.683594 15.125 15.933594C15.527344 14.679688 16.15625 13.765625 17.105469 13.265625C18.5 12.535156 20.371094 12.390625 21.785156 12.390625C22.292969 12.390625 23.417969 12.628906 24.679688 12.972656C25.941406 13.320313 27.378906 13.765625 28.75 14.132813C30.117188 14.5 31.394531 14.800781 32.484375 14.828125C33.027344 14.839844 33.539063 14.804688 34.046875 14.535156C34.554688 14.265625 34.957031 13.609375 34.957031 13C34.957031 11.875 34.285156 10.941406 33.421875 10.261719C32.554688 9.578125 31.453125 9.078125 30.246094 8.722656C28.351563 8.164063 26.289063 8.113281 24.421875 8.46875C24.574219 8.082031 24.796875 7.753906 25.105469 7.476563C25.671875 6.972656 26.527344 6.605469 27.476563 6.386719C29.375 5.949219 31.671875 6.136719 32.171875 6.234375L32.5 6.296875L32.800781 6.140625C34.789063 5.082031 37.714844 3.953125 40 3.953125 Z" />
  </svg>
)

const CoffeeToGoIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.427734 3C14.062745 3 12.859456 3.9323872 12.521484 5.2558594L12.074219 7L12 7C11.133553 7 10.343298 7.2932543 9.7636719 7.7890625C9.1840453 8.2848707 8.8153921 8.9380401 8.5664062 9.625C8.0684347 10.99892 8 12.57785 8 14 A 1.0001 1.0001 0 0 0 9 15L10.119141 15L13.970703 45.017578 A 1.0001 1.0001 0 0 0 13.974609 45.042969C14.160517 46.237774 15.204427 47 16.367188 47L33.630859 47C34.794193 47 35.83786 46.235688 36.023438 45.042969 A 1.0001 1.0001 0 0 0 36.027344 45.017578L39.880859 15L41 15 A 1.0001 1.0001 0 0 0 42 14C42 12.57785 41.931565 10.99892 41.433594 9.625C41.184608 8.9380401 40.815955 8.2848707 40.236328 7.7890625C39.656702 7.2932543 38.866447 7 38 7L37.90625 7L37.474609 5.2734375 A 1.0001 1.0001 0 0 0 37.474609 5.2714844C37.141393 3.9416023 35.934385 3 34.5625 3L15.427734 3 z M 15.427734 5L34.5625 5C35.026615 5 35.42042 5.3076915 35.533203 5.7578125L35.84375 7L14.138672 7L14.458984 5.7519531C14.573013 5.3054253 14.966724 5 15.427734 5 z M 12.912109 8.9960938 A 1.0001 1.0001 0 0 0 13 9L37 9 A 1.0001 1.0001 0 0 0 37.064453 8.9980469 A 1.0001 1.0001 0 0 0 37.125 9L38 9C38.459053 9 38.706095 9.1106518 38.9375 9.3085938C39.168905 9.5065356 39.385047 9.8386001 39.554688 10.306641C39.802098 10.989256 39.830025 12.022136 39.878906 13L11.166016 13 A 1.0001 1.0001 0 0 0 10.955078 12.986328 A 1.0001 1.0001 0 0 0 10.835938 13L10.121094 13C10.169974 12.022136 10.197905 10.989256 10.445312 10.306641C10.614953 9.8386001 10.831095 9.5065355 11.0625 9.3085938C11.293905 9.1106518 11.540947 9 12 9L12.849609 9 A 1.0001 1.0001 0 0 0 12.912109 8.9960938 z M 12.136719 15L37.863281 15L36.708984 24L31.984375 24C30.659565 21.085293 28.095496 19.012008 24.992188 19.003906C24.945978 19.002306 24.902818 19.004791 24.857422 19.007812C21.786193 19.059813 19.278095 21.123031 17.988281 24L13.291016 24L12.136719 15 z M 24.945312 20.998047C24.966323 20.999147 24.947809 21 24.974609 21C27.392834 21 29.474358 22.682557 30.451172 25.34375 A 1.0001 1.0001 0 0 0 31.388672 26L31.490234 26L36.451172 26L35.810547 31L31.527344 31L31.388672 31 A 1.0001 1.0001 0 0 0 30.447266 31.660156C30.227471 32.270178 29.97672 32.828834 29.671875 33.296875C28.538498 35.034193 26.884731 35.976012 25.087891 35.998047L25.021484 35.998047C23.246013 35.998047 21.592289 35.09639 20.431641 33.398438 A 1.0001 1.0001 0 0 0 20.431641 33.396484C20.091871 32.900328 19.8123 32.306572 19.574219 31.65625 A 1.0001 1.0001 0 0 0 18.634766 31L18.521484 31L14.189453 31L13.548828 26L18.484375 26L18.589844 26 A 1.0001 1.0001 0 0 0 19.529297 25.339844C20.477663 22.708373 22.511851 21.026828 24.917969 21 A 1.0001 1.0001 0 0 0 24.945312 20.998047 z M 24.939453 23C23.705063 23.01347 22.665152 23.777929 22.001953 24.794922C21.338753 25.811913 20.978618 27.119966 20.994141 28.542969C21.009661 29.965972 21.398756 31.267249 22.083984 32.269531C22.769211 33.271814 23.826157 34.013466 25.060547 34C26.294937 33.98654 27.334848 33.22207 27.998047 32.205078C28.661247 31.188086 29.021382 29.880035 29.005859 28.457031C28.990339 27.034028 28.601244 25.732752 27.916016 24.730469C27.230789 23.728186 26.173843 22.986534 24.939453 23 z M 24.960938 25C25.386064 24.9954 25.843602 25.244939 26.263672 25.859375C26.683742 26.473812 26.994273 27.416385 27.005859 28.478516C27.017449 29.540646 26.728831 30.489827 26.322266 31.113281C25.915699 31.736734 25.464189 31.995363 25.039062 32C24.613936 32.0046 24.156399 31.755062 23.736328 31.140625C23.316259 30.526189 23.005727 29.583615 22.994141 28.521484C22.982551 27.459353 23.271169 26.510173 23.677734 25.886719C24.084301 25.263265 24.535811 25.004637 24.960938 25 z M 14.445312 33L18.021484 33C18.24578 33.51991 18.454188 34.047503 18.78125 34.525391C20.264602 36.695438 22.552956 37.998047 25.021484 37.998047L25.091797 37.998047 A 1.0001 1.0001 0 0 0 25.101562 37.998047C27.60154 37.971307 29.89481 36.614655 31.345703 34.390625 A 1.0001 1.0001 0 0 0 31.347656 34.390625C31.635588 33.948746 31.81459 33.471059 32.013672 33L35.554688 33L34.048828 44.736328C34.042405 44.777609 33.827526 45 33.630859 45L16.367188 45C16.173946 45 15.95727 44.775524 15.951172 44.736328L14.445312 33 z" />
  </svg>
)

const SunIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3V4M12 20V21M4 12H3M6.314 6.314L5.5 5.5M17.686 6.314L18.5 5.5M6.314 17.69L5.5 18.5M17.686 17.69L18.5 18.5M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MoonIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 155 146"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M121.957 103.163C125.881 102.928 129.837 102.923 133.72 102.388C136.915 101.948 140.025 100.889 143.171 100.09C144.691 99.7039 146.182 99.1546 147.722 98.9084C149.978 98.5468 152.001 99.1598 153.325 101.147C154.572 103.018 154.264 104.954 153.333 106.905C148.513 117.012 140.849 124.655 131.986 131.141C121.135 139.082 108.699 143.113 95.4809 144.727C83.273 146.22 71.0442 146.272 58.9531 143.581C41.4413 139.684 26.3475 131.645 15.1444 117.275C4.13504 103.155 -0.0989723 87.0189 1.45589 69.2977C2.82654 52.995 8.52934 37.3547 17.9739 23.9961C23.4215 16.2146 29.9055 9.38657 38.073 4.33996C41.1493 2.43658 44.3527 0.861628 48.0742 0.664725C51.9288 0.463885 53.2713 2.38262 51.5635 5.85005C49.1278 10.7962 47.0392 15.8499 46.0186 21.3061C44.6114 28.8264 45.0945 36.2542 46.782 43.6767C50.4181 59.6657 57.3876 73.8803 68.9806 85.6373C78.1431 95.0885 90.3707 100.969 103.474 102.226C109.604 102.883 115.778 103.131 121.932 103.566C121.939 103.437 121.948 103.299 121.957 103.163Z"
      fill="currentColor"
    />
  </svg>
)

const BeanIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.427734 3C14.062745 3 12.859456 3.9323872 12.521484 5.2558594L12.074219 7L12 7C11.133553 7 10.343298 7.2932543 9.7636719 7.7890625C9.1840453 8.2848707 8.8153921 8.9380401 8.5664062 9.625C8.0684347 10.99892 8 12.57785 8 14 A 1.0001 1.0001 0 0 0 9 15L10.119141 15L13.970703 45.017578 A 1.0001 1.0001 0 0 0 13.974609 45.042969C14.160517 46.237774 15.204427 47 16.367188 47L33.630859 47C34.794193 47 35.83786 46.235688 36.023438 45.042969 A 1.0001 1.0001 0 0 0 36.027344 45.017578L39.880859 15L41 15 A 1.0001 1.0001 0 0 0 42 14C42 12.57785 41.931565 10.99892 41.433594 9.625C41.184608 8.9380401 40.815955 8.2848707 40.236328 7.7890625C39.656702 7.2932543 38.866447 7 38 7L37.90625 7L37.474609 5.2734375 A 1.0001 1.0001 0 0 0 37.474609 5.2714844C37.141393 3.9416023 35.934385 3 34.5625 3L15.427734 3 z M 15.427734 5L34.5625 5C35.026615 5 35.42042 5.3076915 35.533203 5.7578125L35.84375 7L14.138672 7L14.458984 5.7519531C14.573013 5.3054253 14.966724 5 15.427734 5 z M 12.912109 8.9960938 A 1.0001 1.0001 0 0 0 13 9L37 9 A 1.0001 1.0001 0 0 0 37.064453 8.9980469 A 1.0001 1.0001 0 0 0 37.125 9L38 9C38.459053 9 38.706095 9.1106518 38.9375 9.3085938C39.168905 9.5065356 39.385047 9.8386001 39.554688 10.306641C39.802098 10.989256 39.830025 12.022136 39.878906 13L11.166016 13 A 1.0001 1.0001 0 0 0 10.955078 12.986328 A 1.0001 1.0001 0 0 0 10.835938 13L10.121094 13C10.169974 12.022136 10.197905 10.989256 10.445312 10.306641C10.614953 9.8386001 10.831095 9.5065355 11.0625 9.3085938C11.293905 9.1106518 11.540947 9 12 9L12.849609 9 A 1.0001 1.0001 0 0 0 12.912109 8.9960938 z M 12.136719 15L37.863281 15L36.708984 24L31.984375 24C30.659565 21.085293 28.095496 19.012008 24.992188 19.003906C24.945978 19.002306 24.902818 19.004791 24.857422 19.007812C21.786193 19.059813 19.278095 21.123031 17.988281 24L13.291016 24L12.136719 15 z M 24.945312 20.998047C24.966323 20.999147 24.947809 21 24.974609 21C27.392834 21 29.474358 22.682557 30.451172 25.34375 A 1.0001 1.0001 0 0 0 31.388672 26L31.490234 26L36.451172 26L35.810547 31L31.527344 31L31.388672 31 A 1.0001 1.0001 0 0 0 30.447266 31.660156C30.227471 32.270178 29.97672 32.828834 29.671875 33.296875C28.538498 35.034193 26.884731 35.976012 25.087891 35.998047L25.021484 35.998047C23.246013 35.998047 21.592289 35.09639 20.431641 33.398438 A 1.0001 1.0001 0 0 0 20.431641 33.396484C20.091871 32.900328 19.8123 32.306572 19.574219 31.65625 A 1.0001 1.0001 0 0 0 18.634766 31L18.521484 31L14.189453 31L13.548828 26L18.484375 26L18.589844 26 A 1.0001 1.0001 0 0 0 19.529297 25.339844C20.477663 22.708373 22.511851 21.026828 24.917969 21 A 1.0001 1.0001 0 0 0 24.945312 20.998047 z M 24.939453 23C23.705063 23.01347 22.665152 23.777929 22.001953 24.794922C21.338753 25.811913 20.978618 27.119966 20.994141 28.542969C21.009661 29.965972 21.398756 31.267249 22.083984 32.269531C22.769211 33.271814 23.826157 34.013466 25.060547 34C26.294937 33.98654 27.334848 33.22207 27.998047 32.205078C28.661247 31.188086 29.021382 29.880035 29.005859 28.457031C28.990339 27.034028 28.601244 25.732752 27.916016 24.730469C27.230789 23.728186 26.173843 22.986534 24.939453 23 z M 24.960938 25C25.386064 24.9954 25.843602 25.244939 26.263672 25.859375C26.683742 26.473812 26.994273 27.416385 27.005859 28.478516C27.017449 29.540646 26.728831 30.489827 26.322266 31.113281C25.915699 31.736734 25.464189 31.995363 25.039062 32C24.613936 32.0046 24.156399 31.755062 23.736328 31.140625C23.316259 30.526189 23.005727 29.583615 22.994141 28.521484C22.982551 27.459353 23.271169 26.510173 23.677734 25.886719C24.084301 25.263265 24.535811 25.004637 24.960938 25 z M 14.445312 33L18.021484 33C18.24578 33.51991 18.454188 34.047503 18.78125 34.525391C20.264602 36.695438 22.552956 37.998047 25.021484 37.998047L25.091797 37.998047 A 1.0001 1.0001 0 0 0 25.101562 37.998047C27.60154 37.971307 29.89481 36.614655 31.345703 34.390625 A 1.0001 1.0001 0 0 0 31.347656 34.390625C31.635588 33.948746 31.81459 33.471059 32.013672 33L35.554688 33L34.048828 44.736328C34.042405 44.777609 33.827526 45 33.630859 45L16.367188 45C16.173946 45 15.95727 44.775524 15.951172 44.736328L14.445312 33 z"
      fill="currentColor"
    />
  </svg>
)

function Home() {
  const timeOfDay = useTimeOfDay()
  const scrollProgress = useScrollProgress()
  const [heroScrollProgress, setHeroScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section')
      if (!heroSection) return
      
      const rect = heroSection.getBoundingClientRect()
      const heroHeight = window.innerHeight
      const scrollY = window.scrollY
      
      // Calculate progress within hero section (0 to 1)
      const progress = Math.max(0, Math.min(1, scrollY / heroHeight))
      setHeroScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Time-based color adjustments
  const timeStyles = {
    morning: {
      overlay: 'from-black/15 via-black/10 to-black/20',
      textOpacity: 1,
    },
    afternoon: {
      overlay: 'from-black/20 via-black/15 to-black/25',
      textOpacity: 1,
    },
    evening: {
      overlay: 'from-black/30 via-black/25 to-black/35',
      textOpacity: 0.95,
    },
    night: {
      overlay: 'from-black/40 via-black/35 to-black/45',
      textOpacity: 0.9,
    },
  }

  const currentStyle = timeStyles[timeOfDay] || timeStyles.afternoon

  // Scroll-based animations
  const textOpacity = Math.max(0, 1 - heroScrollProgress * 2)
  const textTranslateY = heroScrollProgress * 50
  const imageBlur = Math.min(10, heroScrollProgress * 20)
  const ctaOpacity = Math.max(0, 1 - heroScrollProgress * 3)
  const ctaTranslateY = heroScrollProgress * 30

  const timePrompts = {
    morning: {
      Icon: SunIcon,
      label: 'Morning',
      drink: 'espresso',
    },
    afternoon: {
      Icon: BeanIcon,
      label: 'Afternoon',
      drink: 'cappuccino',
    },
    evening: {
      Icon: MoonIcon,
      label: 'Evening',
      drink: 'matcha latte',
    },
    night: {
      Icon: MoonIcon,
      label: 'Night',
      drink: 'decaf or herbal tea',
    },
  }

  const currentPrompt = timePrompts[timeOfDay] || timePrompts.afternoon

  return (
    <div className="min-h-screen">
      <section className="hero-section relative h-screen w-full overflow-hidden">
        <img 
          src="/assets/hero.jpeg" 
          alt="Taste5 Bakery" 
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
          style={{
            filter: `blur(${imageBlur}px)`,
            transform: `scale(${1 + heroScrollProgress * 0.1})`,
          }}
        />
        <div id="logo-sentinel" className="absolute bottom-0 left-0 w-px h-px" />
        <div className={`absolute inset-0 bg-gradient-to-b ${currentStyle.overlay} transition-all duration-500`} />

        {/* Time-of-day drink suggestion - Desktop only (>= 890px) */}
        <div className="hidden min-[890px]:block absolute top-4 right-3 sm:top-6 sm:right-6 z-20">
          <div className="inline-flex max-w-[260px] items-center gap-3 rounded-2xl bg-white/10 border border-white/25 px-3 py-2 sm:px-4 sm:py-2.5 backdrop-blur-md shadow-lg">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/15 text-white">
              {currentPrompt.Icon && <currentPrompt.Icon className="w-5 h-5" />}
            </div>
            <div className="text-left space-y-0.5">
              <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] text-white/80">
                {currentPrompt.label} at Taste5
              </p>
              <p className="text-[11px] sm:text-xs text-white/90 leading-snug">
                Time for a&nbsp;{currentPrompt.drink}.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 h-full px-4 sm:px-6 lg:px-8">
          <div className="h-full flex flex-col justify-end pb-10 sm:pb-12 lg:pb-16">
            <div
              className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-8"
              style={{
                opacity: textOpacity,
                transform: `translateY(${textTranslateY}px)`,
                transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
              }}
            >
              {/* Slogan + subcopy - bottom left */}
              <div className="max-w-xl text-left space-y-3 sm:space-y-4">
                <div className="space-y-3">
                  <span className="inline-flex px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs sm:text-sm font-normal text-white/95 uppercase tracking-wider">
                    Asian Bakery and Store
                  </span>
                  <h1 className="text-5xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.5rem] font-normal text-white tracking-tight drop-shadow-2xl leading-tight">
                    Five Senses. One Taste.
                  </h1>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-white/95 max-w-md leading-snug font-light">
                  Asian bakery culture, reimagined at 132 Friar Street.
                </p>
              </div>

              {/* CTAs - bottom right */}
              <div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end items-stretch sm:items-end sm:ml-auto"
                style={{
                  opacity: ctaOpacity,
                  transform: `translateY(${ctaTranslateY}px)`,
                  transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
                }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/95 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 px-7 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold backdrop-blur-sm"
                >
                  <Link to="/menu">Explore Menu</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-2 border-white/40 hover:bg-white/20 hover:border-white/60 backdrop-blur-md transition-all duration-300 hover:scale-105 px-7 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold"
                >
                  <Link to="/contact">Opening Soon</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our story snapshot */}
      <section className="py-20 bg-background border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6 mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="text-base font-medium text-muted-foreground uppercase tracking-wider mb-1 block">
              About Taste5
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Our story begins with all five senses.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Taste5 was born from a simple obsession: to create a bakery and store where everything you see, hear, smell,
              touch, and taste feels deliberately crafted. Nestled at 132 Friar Street in Reading, we&apos;re building a space
              that feels as considered as the things you take home.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Instead of chasing trends, we focus on calm, contemporary rituals—morning coffees, afternoon pastries, 
              and small moments that slow the day down. Every detail, from the crumb of a loaf to the sound of the room,
              is designed to feel quietly special.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[{
              title: 'Daily Bread',
              description: 'Loaves and bakes that anchor the space—simple, generous, and made to be part of everyday life.',
              Icon: BreadIcon,
            }, {
              title: 'Coffee & Rituals',
              description: 'A calm counter moment—coffee, tea, and small things to savour on your way through the day.',
              Icon: CoffeeToGoIcon,
            }].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.1 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md flex items-center gap-4 p-5">
                  <div className="flex-shrink-0">
                    <item.Icon className="w-12 h-12 text-foreground/80" />
                  </div>
                  <div className="text-left space-y-1">
                    <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FiveSensesVisualization />
    </div>
  )
}

export default Home
