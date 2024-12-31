import { FC } from 'react'
import cls from './pageloader.module.scss'
import { classNames } from 'share/lib'
import { Loader } from 'share/ui'
type PageLoaderProps = {
  className?: string
}

export const PageLoader:FC<PageLoaderProps> = ({className}) => {
  return (
    <div className={classNames(cls.pageLoader, {}, [className])}>
      <Loader />
    </div>
  )
}