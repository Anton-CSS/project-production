import { FC, ReactNode } from 'react'
import { classNames } from 'share/lib'
import cls from './applink.module.scss'
import { Link, LinkProps } from 'react-router'

export const enum AppLinkTheme{
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

type AppLinkProps =LinkProps & {
  className?: string
  children: ReactNode
  theme?: AppLinkTheme
}

export const AppLink:FC<AppLinkProps> = ({className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps }) => {
  return (
    <Link to={to}
          className={classNames(cls.applink, {}, [className, cls[theme]])}
          {...otherProps}
    >
      {children}
    </Link>
  )
}