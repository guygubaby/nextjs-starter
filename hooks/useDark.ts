import { useEffect, useLayoutEffect, useState } from 'react'

export const useDark = () => {
  const Key = 'color-schema'
  const [isDark, setIsDark] = useState(false)

  useLayoutEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const setting = localStorage.getItem(Key) || 'auto'
    if (setting === 'dark' || (prefersDark && setting !== 'light')) {
      document.documentElement.classList.toggle('dark', true)
      setIsDark(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(Key, isDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return {
    isDark,
    setIsDark,
  }
}
