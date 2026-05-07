'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Jamshed Jutt',
    location: 'Ichhra, Lahore',
    quote: 'Bhai mera iPhone 14 Pro Max ka screen toot gaya tha. Gill Mobile ne 45 minute mein aisi changing ki ke phone bilkul naya lag raha hai. Screen guard bhi free lagaya. Allah khush rakhe! ❤️',
    rating: 5,
  },
  {
    name: 'Ahmed Raza',
    location: 'Johar Town, Lahore',
    quote: 'Maine apna purana iPhone 13 bechna tha. Har dukan 70-80 hazar bata rahi thi. Gill Mobile ne 95 hazar ka rate diya. FULL CASH diya. Ye log sach mein best hain.',
    rating: 5,
  },
  {
    name: 'Fatima Siddiqui',
    location: 'Model Town, Lahore',
    quote: 'Mera iPhone pani mein gir gaya tha, maine socha ab kuch nahi ho sakta. Gill Mobile ne 2 din mein sahi kar diya, sara data bhi safe tha. Magicians hain ye log! 🪄',
    rating: 5,
  },
  {
    name: 'Usman Ghani',
    location: 'DHA Phase 5, Lahore',
    quote: 'Face ID kaam nahi kar raha tha, Apple Store walay poora phone change karne ko keh rahay thay. Gill Mobile ne chip-level repair kiya, sirf 3000 rupay mein. Skills hi alag hain inki.',
    rating: 5,
  },
  {
    name: 'Ayesha Malik',
    location: 'Gulberg, Lahore',
    quote: 'Battery khatam ho gayi thi, 2 ghantay se zyada nahi chalti thi. Inhon ne genuine battery lagayi, ab phone 2 din chal raha hai. Mashallah bht achay log hain. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Saad Bhatti',
    location: 'Shadman, Lahore',
    quote: 'Abrar Market mein sab se best shop hai ye. Rates bhi kam hain aur kaam bhi aisa jaise brand new phone ho. Mera iPhone 15 Pro Max ka tempered lagwaya, 500 rupay mein original! 🔥',
    rating: 5,
  },
  {
    name: 'Nadia Hussain',
    location: 'Cantt, Lahore',
    quote: 'Mujhe apne iPhone ki security tension thi. Gill Mobile ne itni care se repair ki, phone reset bhi nahi karna para. Ladies ke liye best jagah hai, comfortable environment hai.',
    rating: 5,
  },
  {
    name: 'Bilal Chaudhry',
    location: 'Faisal Town, Lahore',
    quote: '3 saal se inhi se phone repair karwa raha hoon. Kabhi complaint nahi aayi. 90 din ki warranty dete hain sach mein. Is se pehle doosri dukan se karwaya tha, aglay haftay kharab ho gaya tha.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  }

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-specialist-orange/80 uppercase font-display">
            Love Letters from Lahore
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4">
            WHAT OUR<br />
            <span className="gradient-text">CUSTOMERS SAY</span>
          </h2>
          <p className="text-white/40 mt-4">Trusted by iPhone users across Lahore ❤️</p>
        </motion.div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="glass-card p-10 md:p-14"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <span key={i} className="text-specialist-orange text-2xl">★</span>
                ))}
              </div>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6 font-light">
                "{testimonials[current].quote}"
              </p>
              <div>
                <p className="text-specialist-orange font-display font-bold text-lg">
                  {testimonials[current].name}
                </p>
                <p className="text-white/30 text-sm mt-1">
                  📍 {testimonials[current].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-specialist-orange w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}