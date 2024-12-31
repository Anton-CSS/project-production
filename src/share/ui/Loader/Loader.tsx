import { FC } from 'react'
import cls from './loader.module.scss'
import { classNames } from 'share/lib'

type LoaderProps = {
  className?: string
}

export const Loader:FC<LoaderProps> = ({ className}) => {
  return (
    <div className={classNames(cls.loader, {}, [className])}></div>
  )
}