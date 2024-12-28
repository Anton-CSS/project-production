import { FC, use } from 'react'
import { classNames } from 'share/lib'
import cls from './themswitcher.module.scss'
import { Theme, ThemeContext } from 'app/providers/theme/ui/ThemeContext'
import ThemeIcon from 'share/assets/icons/ThemeIcon.svg'
import { Button } from 'share/ui'
import { ThemeButton } from 'share/ui/Button/Button'

type ThemSwitcherProps = {
  className?: string
}

export const ThemeSwitcher:FC<ThemSwitcherProps> = ({ className }) => {
  const { setChangeTheme, theme } = use(ThemeContext)
  return (
    <Button
      className={classNames(cls.themeSwitch, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={() => setChangeTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}
    > <ThemeIcon fill={theme === Theme.LIGHT ? '#fff': '#000'}/> </Button>
  )
}