import { useEffect, useState } from 'react'

export const useLocalStorage = <T = any>(key: string, initialValue: T) => {
  const getInitailValue = () => {
    const item = localStorage.getItem(key)
    if (!item)
      return initialValue
    try {
      return JSON.parse(item)
    }
    catch (error) {
      return item ?? initialValue
    }
  }

  const [storedValue, setStoredValue] = useState(initialValue)

  useEffect(() => {
    setStoredValue(getInitailValue())
  }, [])

  const setValue = (value: T) => {
    setStoredValue(value)
    localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setValue] as const
}
