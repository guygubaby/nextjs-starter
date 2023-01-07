import Link from 'next/link'
import { useDark } from '../hooks/useDark'
import IconHeart from '~icons/emojione/beating-heart'
import IconSun from '~icons/carbon/sun'
import IconMoon from '~icons/carbon/moon'

const Footer = () => {
  const { isDark, setIsDark } = useDark()

  return (
    <footer className='flex flex-col items-center justify-center'>
      <p className='flex'>
        Made by
        <Link href='https://github.com/guygubaby' target='_blank' className='mx-1 text-purple-500 hover:underline'>
          @bryce
        </Link>
        with
        <IconHeart className='ml-1 mt-[2px]' />
      </p>

      <p className='flex mt-2'>
        { isDark
          ? <IconSun className='icon-btn' onClick={() => setIsDark(false)}></IconSun>
          : <IconMoon className='icon-btn' onClick={() => setIsDark(true)}></IconMoon>
        }
      </p>
    </footer>
  )
}

export default Footer
