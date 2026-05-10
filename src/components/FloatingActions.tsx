'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function FloatingActions() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const quickResponses = [
    "Hi, I need a screen replacement for iPhone 15 Pro.",
    "What are your charges for battery replacement?",
    "I have water damage, can you help?",
    "Do you have iPhone 14 in stock?",
    "How long does board-level repair take?",
  ]

  const handleQuickResponse = (message: string) => {
    setChatMessages(prev => [...prev, message])
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      setChatMessages(prev => [...prev, "Thank you for your message! Our team will respond shortly. For immediate assistance, please WhatsApp us at +92 323 1459121."])
    }, 1500)
  }

  const handleSend = () => {
    if (!inputValue.trim()) return
    setChatMessages(prev => [...prev, inputValue])
    setInputValue('')
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      setChatMessages(prev => [...prev, "Thank you for your message! Our team will respond shortly. For immediate assistance, please WhatsApp us at +92 323 1459121."])
    }, 1500)
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/923231459121?text=Hi, I need assistance with my device.', '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-fib-6 right-fib-6 z-[100] flex flex-col items-end gap-fib-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="mb-fib-3 bg-space-black/95 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden shadow-2xl w-[320px] sm:w-[380px]"
              style={{ maxHeight: '70vh' }}
            >
              {/* Chat Header */}
              <div className="bg-specialist-orange px-fib-4 py-fib-3 flex items-center justify-between">
                <div className="flex items-center gap-fib-3">
                  <div className="w-2 h-2 bg-live-green rounded-full animate-pulse" />
                  <span className="font-mono text-[10px] text-space-black uppercase tracking-wider">Live Support</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-space-black/70 hover:text-space-black transition-colors p-fib-1"
                  aria-label="Close chat"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Chat Messages */}
              <div 
                className="p-fib-4 space-y-fib-3 overflow-y-auto"
                style={{ maxHeight: '280px' }}
                role="log"
                aria-live="polite"
                aria-label="Chat messages"
              >
                <div className="bg-white/[0.05] rounded-lg p-fib-3 border border-white/5">
                  <p className="font-mono text-[10px] text-specialist-orange mb-fib-1">SYSTEM</p>
                  <p className="text-xs text-titanium/80 leading-relaxed">
                    Welcome to Gill Mobile Technical Lab. How may we assist you today?
                  </p>
                </div>

                {chatMessages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-lg p-fib-3 ${idx % 2 === 0 ? 'bg-specialist-orange/10 border border-specialist-orange/20' : 'bg-white/[0.05] border border-white/5'}`}
                  >
                    <p className="text-xs text-titanium/80 leading-relaxed">{msg}</p>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white/[0.05] rounded-lg p-fib-3 border border-white/5"
                  >
                    <div className="flex items-center gap-fib-2">
                      <span className="font-mono text-[10px] text-live-green">TYPING</span>
                      <div className="flex gap-fib-1">
                        <span className="w-1.5 h-1.5 bg-titanium/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 bg-titanium/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 bg-titanium/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Quick Responses */}
              <div className="px-fib-4 pb-fib-2 flex flex-wrap gap-fib-2">
                {quickResponses.slice(0, 3).map((msg, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickResponse(msg)}
                    className="text-[9px] font-mono text-titanium/60 border border-white/10 px-fib-2 py-fib-1 rounded hover:border-specialist-orange/50 hover:text-titanium transition-all duration-300"
                  >
                    {msg.length > 30 ? msg.substring(0, 30) + '...' : msg}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="p-fib-3 border-t border-white/5 flex gap-fib-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/[0.03] border border-white/10 px-fib-3 py-fib-2 text-xs font-mono text-titanium placeholder:text-titanium/30 focus:border-specialist-orange/50 focus:outline-none transition-colors"
                  aria-label="Chat input"
                />
                <button
                  onClick={handleSend}
                  className="px-fib-3 py-fib-2 bg-specialist-orange text-space-black hover:bg-titanium transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Send message"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex items-center gap-fib-3">
          {/* WhatsApp Button */}
          <motion.button
            onClick={openWhatsApp}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 bg-live-green rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Contact us on WhatsApp"
          >
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </motion.button>

          {/* Chat Toggle Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 bg-specialist-orange rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label={isOpen ? 'Close chat' : 'Open chat'}
            aria-expanded={isOpen}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-7 h-7 text-space-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </motion.div>
            
            {/* Notification Badge */}
            {!isOpen && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-live-green rounded-full flex items-center justify-center">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </span>
            )}
          </motion.button>
        </div>
      </div>

      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-[99] md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  )
}