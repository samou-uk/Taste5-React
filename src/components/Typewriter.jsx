import { useState, useEffect } from 'react'

function Typewriter({ text, speed = 100, className = '' }) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="inline-block w-[2px] h-[0.85em] bg-white ml-2 animate-pulse align-middle" style={{ verticalAlign: 'middle' }}></span>
      )}
    </span>
  )
}

export default Typewriter

