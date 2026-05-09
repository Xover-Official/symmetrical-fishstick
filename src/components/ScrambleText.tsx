'use client'

import React, { useState, useCallback } from 'react'
import gsap from 'gsap'

interface ScrambleTextProps {
  text: string
  className?: string
  as?: React.ElementType
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+'

export default function ScrambleText({ text, className = '', as: Component = 'span' }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text)

  const scramble = useCallback(() => {
    const obj = { value: 0 }
    gsap.to(obj, {
      value: text.length,
      duration: 1,
      ease: 'none',
      onUpdate: () => {
        const iteration = Math.floor(obj.value)
        const scrambled = text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index]
            }
            if (char === ' ') return ' '
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join('')
        setDisplayText(scrambled)
      },
      onComplete: () => {
        setDisplayText(text)
      }
    })
  }, [text])

  return (
    <Component 
      className={className}
      onMouseEnter={scramble}
    >
      {displayText}
    </Component>
  )
}
