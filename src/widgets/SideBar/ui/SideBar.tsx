import { FC, useState } from 'react'
import { classNames } from 'share/lib'
import cls from './sidebar.module.scss'
import { LangSwitcher, ThemeSwitcher } from 'share/ui'
type SideBarProps = {
  className?: string
}

export const SideBar:FC<SideBarProps> = ({className}) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }
  return (
    <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className] )}>
      <button onClick={onToggle}>toggle</button>
      <div className={classNames(cls.switchers)}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang}/>
      </div>
    </div>
  )
}