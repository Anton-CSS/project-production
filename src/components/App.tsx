import { NavLink, Outlet } from 'react-router'
import { use } from 'react'
import { Theme, ThemeContext } from '../theme/ThemeContext'
import { classNames } from '../helpers/classNames/classNames'



const App = () => {
  const {theme, setTheme} = use(ThemeContext);
  return (
    <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/counter'>Counter</NavLink>
      <button onClick={() => setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}>change Theme</button>
       <Outlet/>
    </div>
  );
};

export default App;