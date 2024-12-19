import { createContext, FC, ReactNode, useMemo, useState } from 'react'

export const enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
export const THEME_CONTEXT = 'theme'

interface ThemeContextProps {
  theme: Theme,
  setTheme: (theme: Theme) => void
}

type Props = {
  children: ReactNode
}
export const ThemeContext = createContext<ThemeContextProps>(null)

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(localStorage.getItem(THEME_CONTEXT) as Theme ?? Theme.LIGHT)
  const initTheme = useMemo(() => ({
    theme,
    setTheme: (newTheme: Theme) => {
      setTheme(newTheme)
      localStorage.setItem(THEME_CONTEXT, newTheme)
    }
  }), [theme])

  
  return (
    <ThemeContext value={initTheme}>
      {children}
    </ThemeContext>
  )
}