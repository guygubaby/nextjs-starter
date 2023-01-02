import { useEffect, useMemo } from 'react'
import { ColorSchemaEnum, useColorSchema } from './useColorSchema'

export const useDark = () => {
  const [colorSchema, setColorSchema] = useColorSchema()

  const isDark = useMemo(() => colorSchema === ColorSchemaEnum.dark, [colorSchema])

  const setIsDark = (value: boolean) => {
    setColorSchema(value ? ColorSchemaEnum.dark : ColorSchemaEnum.light)
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return {
    isDark,
    setIsDark,
  }
}
