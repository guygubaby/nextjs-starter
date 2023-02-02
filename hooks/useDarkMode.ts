import { useEffect } from 'react'
import { useDarkMode } from 'usehooks-ts'

export default function useDark() {
  const { isDarkMode: isDark, toggle: toggleDark } = useDarkMode()

  useEffect(() => {
    if (isDark)
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')
  }, [isDark])

  return {
    isDark,
    toggleDark,
  }
}
