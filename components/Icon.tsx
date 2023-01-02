import type { HTMLAttributes } from 'react'
import { useEffect, useState } from 'react'

const Icon = (props: HTMLAttributes<HTMLSpanElement>) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (<span {...props}></span>) : null
}

export default Icon
