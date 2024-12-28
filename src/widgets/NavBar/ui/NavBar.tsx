import { classNames } from 'share/lib'
import { FC } from 'react'
import cls from './navbar.module.scss'
import { AppLink } from 'share/ui'
import { AppLinkTheme } from 'share/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavBarProps{
  className?: string;

}

export const NavBar:FC<NavBarProps> = ({ className}) => {
  const {t} = useTranslation()
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink className={classNames(cls.mainLink)} to='/about' theme={AppLinkTheme.SECONDARY}>{t('О сайте')}</AppLink>
        <AppLink to='/counter' theme={AppLinkTheme.SECONDARY}>Counter</AppLink>
      </div>
    </div>
  );
};
