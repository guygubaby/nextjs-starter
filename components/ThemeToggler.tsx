import type { Fn } from '@bryce-loskie/utils'
import { useEffect, useState } from 'react'
import IconSun from '~icons/carbon/sun.jsx'
import IconMoon from '~icons/carbon/moon.jsx'

export const ThemeToggler = ({
  isDark,
  toggleDark,
}: {
  isDark: boolean
  toggleDark: Fn
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [setIsMounted])

  return isMounted
    ? (
    <p className='flex mt-2'>
      {isDark
        ? (
        <IconSun className='icon-btn' onClick={() => toggleDark()} />
          )
        : (
        <IconMoon className='icon-btn' onClick={() => toggleDark()} />
          )}
    </p>
      )
    : null
}
