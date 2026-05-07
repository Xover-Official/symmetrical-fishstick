'use client'

import { useEffect, useMemo, useState } from 'react'

const KEYS = {
  reduceMotion: 'gill_reduce_motion',
  disable3D: 'gill_disable_3d',
  cursorEnabled: 'gill_cursor_enabled',
} as const

type MotionSettings = {
  reduceMotion: boolean
  disable3D: boolean
  cursorEnabled: boolean
  setReduceMotion: (v: boolean) => void
  setDisable3D: (v: boolean) => void
  setCursorEnabled: (v: boolean) => void
}

function readBoolean(key: string, fallback: boolean) {
  if (typeof window === 'undefined') return fallback
  try {
    const raw = window.localStorage.getItem(key)
    if (raw === null) return fallback
    return raw === 'true'
  } catch {
    return fallback
  }
}

export function useMotionSettings(): MotionSettings {
  const prefersReduced = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
  }, [])

  const [reduceMotion, setReduceMotionState] = useState<boolean>(prefersReduced)
  const [disable3D, setDisable3DState] = useState<boolean>(false)
  const [cursorEnabled, setCursorEnabledState] = useState<boolean>(false)

  useEffect(() => {
    setReduceMotionState(readBoolean(KEYS.reduceMotion, prefersReduced))
    setDisable3DState(readBoolean(KEYS.disable3D, false))
    setCursorEnabledState(readBoolean(KEYS.cursorEnabled, false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setReduceMotion = (v: boolean) => {
    setReduceMotionState(v)
    try {
      window.localStorage.setItem(KEYS.reduceMotion, String(v))
    } catch {
      // ignore
    }
  }

  const setDisable3D = (v: boolean) => {
    setDisable3DState(v)
    try {
      window.localStorage.setItem(KEYS.disable3D, String(v))
    } catch {
      // ignore
    }
  }

  const setCursorEnabled = (v: boolean) => {
    setCursorEnabledState(v)
    try {
      window.localStorage.setItem(KEYS.cursorEnabled, String(v))
    } catch {
      // ignore
    }
  }

  return {
    reduceMotion,
    disable3D,
    cursorEnabled,
    setReduceMotion,
    setDisable3D,
    setCursorEnabled,
  }
}

