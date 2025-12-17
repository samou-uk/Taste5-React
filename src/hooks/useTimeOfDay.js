import { useState, useEffect } from 'react'

export function useTimeOfDay() {
  const [timeOfDay, setTimeOfDay] = useState('day')

  useEffect(() => {
    const updateTimeOfDay = () => {
      const hour = new Date().getHours()
      
      if (hour >= 6 && hour < 12) {
        setTimeOfDay('morning')
      } else if (hour >= 12 && hour < 17) {
        setTimeOfDay('afternoon')
      } else if (hour >= 17 && hour < 21) {
        setTimeOfDay('evening')
      } else {
        setTimeOfDay('night')
      }
    }

    updateTimeOfDay()
    const interval = setInterval(updateTimeOfDay, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  return timeOfDay
}

