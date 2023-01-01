import type { HTMLAttributes } from 'react'
import { useEffect, useState } from 'react'

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  className: string
}

const Icon = ({ className, ...extra }: IconProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (<span className={className} {...extra}></span>) : null
}

export default Icon
