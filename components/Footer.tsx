import Link from 'next/link'
import { useDark } from '../hooks/useDark'
import Icon from './Icon'

const Footer = () => {
  const { isDark, setIsDark } = useDark()

  return (
    <footer className="flex flex-col items-center justify-center">
      <p className='flex'>
        Made by
        <Link href="https://github.com/guygubaby" target="_blank" className='mx-1 text-purple-500 hover:underline'>
          @bryce
        </Link>
        with
        <Icon className="i-emojione-beating-heart ml-1 mt-2px"></Icon>
      </p>

      <p className='flex mt-2'>
        { isDark
          ? <Icon className='icon-btn i-carbon-sun' onClick={() => setIsDark(false)}></Icon>
          : <Icon className='icon-btn i-carbon-moon' onClick={() => setIsDark(true)}></Icon>
        }
      </p>
    </footer>
  )
}

export default Footer
