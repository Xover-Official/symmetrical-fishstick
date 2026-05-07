'use client'

import { motion } from 'framer-motion'

export default function MotionControls({
  reduceMotion,
  disable3D,
  cursorEnabled,
  onReduceMotionChange,
  onDisable3DChange,
  onCursorEnabledChange,
}: {
  reduceMotion: boolean
  disable3D: boolean
  cursorEnabled: boolean
  onReduceMotionChange: (v: boolean) => void
  onDisable3DChange: (v: boolean) => void
  onCursorEnabledChange: (v: boolean) => void
}) {
  const Toggle = ({
    label,
    value,
    onChange,
    hint,
  }: {
    label: string
    value: boolean
    hint?: string
    onChange: (v: boolean) => void
  }) => {
    return (
      <button
        type="button"
        onClick={() => onChange(!value)}
        className="w-full text-left px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
        aria-pressed={value}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm text-white font-medium leading-tight">{label}</div>
            {hint ? <div className="text-xs text-white/40 mt-0.5">{hint}</div> : null}
          </div>
          <motion.div
            initial={false}
            animate={{
              backgroundColor: value ? '#FF6B35' : 'rgba(255,255,255,0.12)',
            }}
            className="w-10 h-6 rounded-full p-1 border border-white/10 flex items-center justify-start"
          >
            <motion.div
              animate={{
                x: value ? 16 : 0,
              }}
              transition={{ type: 'spring', stiffness: 420, damping: 30 }}
              className="w-4 h-4 rounded-full bg-white"
            />
          </motion.div>
        </div>
      </button>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="absolute top-full right-0 mt-3 w-[320px]"
    >
      <div className="glass-card p-4">
        <div className="text-xs font-display text-white/50 uppercase tracking-[0.3em]">
          Display Options
        </div>
        <div className="mt-3 grid gap-2">
          <Toggle
            label="Reduce Motion"
            hint="Pauses 3D & animations"
            value={reduceMotion}
            onChange={onReduceMotionChange}
          />
          <Toggle
            label="Disable 3D"
            hint="Lower GPU usage"
            value={disable3D}
            onChange={onDisable3DChange}
          />
          <Toggle
            label="Enable Ferrari Cursor"
            hint="Opt-in cursor"
            value={cursorEnabled}
            onChange={onCursorEnabledChange}
          />
        </div>
      </div>
    </motion.div>
  )
}

