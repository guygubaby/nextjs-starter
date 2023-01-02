export enum ColorSchemaEnum {
  'dark' = 'dark',
  'light' = 'light',
  'auto' = 'auto',
}

const getInitialValue = (key: string): ColorSchemaEnum => {
  const setting = localStorage.getItem(key) || ColorSchemaEnum.auto
  if (setting)
    return setting as ColorSchemaEnum

  const prefersDark
    = window.matchMedia
    && window.matchMedia('(prefers-color-scheme: dark)').matches
  if (prefersDark && setting !== ColorSchemaEnum.light)
    return ColorSchemaEnum.dark

  return ColorSchemaEnum.auto
}

export const useColorSchema = () => {
  const KEY = 'color-schema'
  const [colorSchema, setColorSchema] = useState<ColorSchemaEnum>(ColorSchemaEnum.auto)

  useEffect(() => {
    setColorSchema(getInitialValue(KEY))
  }, [])

  useEffect(() => {
    if (colorSchema !== ColorSchemaEnum.auto)
      localStorage.setItem(KEY, colorSchema)
  }, [colorSchema])

  return [colorSchema, setColorSchema] as const
}
