import Link from 'next/link'
import useDarkMode from '../hooks/useDarkMode'
import IconHeart from '~icons/emojione/beating-heart.jsx'
import IconSun from '~icons/carbon/sun.jsx'
import IconMoon from '~icons/carbon/moon.jsx'

const Footer = () => {
  const { toggleDark, isDark } = useDarkMode()

  return (
    <footer className="flex flex-col items-center justify-center">
      <p className="flex">
        Made by
        <Link
          href="https://github.com/guygubaby"
          target="_blank"
          className="mx-1 text-purple-500 hover:underline"
        >
          @bryce
        </Link>
        with
        <IconHeart className="ml-1 mt-[2px]" />
      </p>

      <p className="flex mt-2">
        {isDark ? (
          <IconSun className="icon-btn" onClick={() => toggleDark()}></IconSun>
        ) : (
          <IconMoon
            className="icon-btn"
            onClick={() => toggleDark()}
          ></IconMoon>
        )}
      </p>
    </footer>
  )
}

export default Footer
