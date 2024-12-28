import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import cls from './button.module.scss'
import { classNames } from 'share/lib'

export const enum ThemeButton {
  CLEAR = 'clear',

}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
  children:ReactNode
  theme?: ThemeButton;
}

export const Button:FC<ButtonProps> = ({className, children, theme, ...otherProps}) => {
  return (
    <button className={classNames(cls.button, {[cls[theme]]: true }, [className])} {...otherProps}>
      { children }
    </button>
  )
}