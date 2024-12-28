import { FC } from 'react'
import { classNames } from 'share/lib'
import { useTranslation } from 'react-i18next'
import { Button } from 'share/ui'
import { ThemeButton } from 'share/ui/Button/Button'

type LangSwitcherProps = {
  className?: string
}

export const LangSwitcher:FC<LangSwitcherProps> = ({className}) => {
  const {t, i18n } = useTranslation()
  const toggle = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
      <Button
        className={classNames( '', {}, [className])}
        theme={ThemeButton.CLEAR} onClick={() => toggle()}
      >
        {t('Язык')}
      </Button>
  )
}