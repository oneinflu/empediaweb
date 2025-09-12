import React, { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

const slides = [
  {
    title: 'Mentorship',
    subtitle: 'Personal guidance from experts',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Internships',
    subtitle: 'Gain Practical Experience',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Courses',
    subtitle: 'Learn industry-ready skills',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }
  ,
  {
    title: 'Jobs',
    subtitle: 'Find your dream career',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }
]

export default function CardSlider({ items = slides, autoPlay = true, autoPlayMs = 3500 }) {
  const [index, setIndex] = useState(0)

  const prev = useCallback(() => setIndex(i => (i - 1 + items.length) % items.length), [items.length])
  const next = useCallback(() => setIndex(i => (i + 1) % items.length), [items.length])

  // autoplay
  useEffect(() => {
    if (!autoPlay) return
    const t = setInterval(() => setIndex(i => (i + 1) % items.length), autoPlayMs)
    return () => clearInterval(t)
  }, [autoPlay, autoPlayMs, items.length])

  // keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  return (
    <div className="w-full max-w-4xl mx-auto relative py-8">
      {/* cards container */}
      <div className="relative h-[420px] sm:h-[480px] flex items-center justify-center">
        <div className="relative w-full max-w-md mx-auto h-full flex items-center justify-center">
          {items.map((it, i) => {
            // Calculate position relative to active slide
            const position = (i - index + items.length) % items.length
            // Normalize to -1, 0, 1 for left, center, right
            const normalized = position === items.length - 1 ? -1 : position
            
            // Determine if card is active, left, or right
            const isActive = normalized === 0
            const isLeft = normalized === -1
            const isRight = normalized === 1
            
            // Skip rendering cards that are not in the visible range
            if (Math.abs(normalized) > 1) return null
            
            // Calculate z-index - active card should be on top
            const zIndex = isActive ? 30 : 10
            
            // Calculate horizontal position
            const xPos = isActive ? 0 : isLeft ? -30 : 30
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isActive ? 1 : 0.7,
                  scale: isActive ? 1 : 0.85,
                  x: `${xPos}%`,
                  zIndex: zIndex
                }}
                transition={{ type: 'spring', stiffness: 160, damping: 18 }}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full rounded-2xl overflow-hidden shadow-lg 
                  ${isActive ? 'border-2 border-blue-400' : 'border border-white/10'}`}
                style={{ 
                  filter: isActive ? 'none' : 'brightness(0.7) blur(1px)'
                }}
              >
                {/* Background image */}
                <div className="relative h-[380px] sm:h-[440px] w-full">
                  <img src={it.image} alt={it.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                
                  {/* Content */}
                  <div className="absolute left-6 bottom-6 text-white">
                    <h3 className={`text-xl sm:text-2xl font-semibold ${isActive ? 'text-white' : 'text-white/80'}`}>{it.title}</h3>
                    <p className={`text-sm sm:text-base mt-1 ${isActive ? 'opacity-90' : 'opacity-70'}`}>{it.subtitle}</p>
                  </div>

                  {/* CTA button on active card */}
                  {isActive && (
                    <button 
                      onClick={() => alert('CTA clicked')} 
                      className="absolute right-4 bottom-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow hover:bg-white transition-all duration-300"
                    >
                      <FiChevronRight className="text-black" />
                    </button>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* controls */}
      <div className="absolute inset-x-0 top-1/2 flex justify-between px-2 pointer-events-none">
        <button onClick={prev} aria-label="previous" className="pointer-events-auto bg-white/90 p-2 rounded-full shadow -translate-y-1/2 ml-2 hover:bg-white transition-all duration-300">
          <FiChevronLeft className="text-black" />
        </button>
        <button onClick={next} aria-label="next" className="pointer-events-auto bg-white/90 p-2 rounded-full shadow -translate-y-1/2 mr-2 hover:bg-white transition-all duration-300">
          <FiChevronRight className="text-black" />
        </button>
      </div>

      {/* indicators */}
      <div className="mt-6 flex items-center justify-center space-x-3">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-white w-6' : 'bg-white/30'}`}>
          </button>
        ))}
      </div>
    </div>
  )
}