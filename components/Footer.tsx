import Link from 'next/link'
import useDarkMode from '../hooks/useDarkMode'
import { ThemeToggler } from './ThemeToggler'
import IconHeart from '~icons/emojione/beating-heart.jsx'

const Footer = () => {
  const { toggleDark, isDark } = useDarkMode()

  return (
    <footer className='flex flex-col items-center justify-center'>
      <p className='flex'>
        Made by
        <Link
          href='https://github.com/guygubaby'
          target='_blank'
          className='mx-1 text-purple-500 hover:underline'
        >
          @bryce
        </Link>
        with
        <IconHeart className='ml-1 mt-[2px]' />
      </p>

      <ThemeToggler isDark={isDark} toggleDark={toggleDark} />
    </footer>
  )
}

export default Footer
